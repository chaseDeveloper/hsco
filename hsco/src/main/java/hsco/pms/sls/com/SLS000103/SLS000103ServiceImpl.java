package hsco.pms.sls.com.SLS000103;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("SLS000103Service")
public class SLS000103ServiceImpl extends BaseService implements SLS000103Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

	
	
	/**
	 * 기타수입관리 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEtcIncmeList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS000103DAO.selectEtcIncmeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 기타수입관리 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveEtcIncmeList ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			//기타수입결의 생성 1:조정결의/2:수납결의
			String s_DECSN_SE1 = null;
			String s_DECSN_SE2 = null;
			if( map.get("DECSN_SE1") != null || !"".equals(map.get("DECSN_SE1").toString()) ){
				s_DECSN_SE1 = map.get("DECSN_SE1").toString();
			}
			if( map.get("DECSN_SE2") != null || !"".equals(map.get("DECSN_SE2").toString()) ){
				s_DECSN_SE2 = map.get("DECSN_SE2").toString();
			}
			
			switch(rowType) {
				
			
				case DataSet.ROW_TYPE_INSERTED :
					//1.주택고객생성 팝업에서
					
					//2. 계약번호 가져오기
					String cntrctrNo = selectCntrctrNo(map);					
					map.put("CNTRCTR_NO", cntrctrNo);					
					// 계약정보 저장
					baseDao.insert("SLS000103DAO.insertHcntrctrInfo", map);				
					
					
					//3. 결의번호 가져오기
					String incmeDecsnNo = null;										
					
					//4. 납부번호 가져오기
					String payNo = selectEtcIncmePayNo(map);					
					map.put("PAY_NO", payNo);					
					//기타수입납부 등록
					baseDao.insert("SLS000103DAO.insertEtcIncmePay", map);
					
					// 조정결의 : 1
					if("1".equals(s_DECSN_SE1)){
						
						map.put("DECSN_SE", "1");
						
						//3. 결의번호 가져오기
						if( map.get("LEV_DECSN_NO") == null || "".equals(map.get("LEV_DECSN_NO").toString()) ){
							incmeDecsnNo = selectIncmeDecsnNo(map);					
							map.put("INCME_DECSN_NO", incmeDecsnNo);
						}
						
						//baseDao.delete("SLS000103DAO.deleteEtcIncmeDecsn", map);
						baseDao.insert("SLS000103DAO.insertEtcIncmeDecsn", map);
						
						//기타수입관리 결의번호 수정
						map.put("LEV_DECSN_NO", incmeDecsnNo);
						baseDao.update("SLS000103DAO.updateDecsnNoEtcIncme1", map);
						
					}
					// 수납결의 : 2
					if("2".equals(s_DECSN_SE2)){
						
						map.put("DECSN_SE", "2");
						
						//3. 결의번호 가져오기
						if( map.get("RCIV_DECSN_NO") == null || "".equals(map.get("RCIV_DECSN_NO").toString()) ){
							incmeDecsnNo = selectIncmeDecsnNo(map);					
							map.put("INCME_DECSN_NO", incmeDecsnNo);
						}
						
						//baseDao.delete("SLS000103DAO.deleteEtcIncmeDecsn", map);
						baseDao.insert("SLS000103DAO.insertEtcIncmeDecsn", map);
						
						//기타수입관리 결의번호 수정
						map.put("RCIV_DECSN_NO", incmeDecsnNo);
						baseDao.update("SLS000103DAO.updateDecsnNoEtcIncme2", map);
					}
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS000103DAO.updateEtcIncmePay", map);
					
					//주택계약사업자 계약번호,고객번호 업데이트
					baseDao.update("SLS000103DAO.updateHcntrctrBsnm", map);
					
					//3. 결의번호 가져오기
					String incmeDecsnNo2 = null;
					if( map.get("LEV_DECSN_NO") == null || "".equals(map.get("LEV_DECSN_NO").toString()) ){
						
						// 조정결의 : 1
						if("1".equals(s_DECSN_SE1)){
							map.put("DECSN_SE", "1");
							
							//3. 결의번호 가져오기
							incmeDecsnNo2 = selectIncmeDecsnNo(map);					
							map.put("INCME_DECSN_NO", incmeDecsnNo2);
							
							baseDao.insert("SLS000103DAO.insertEtcIncmeDecsn", map);
							
							//기타수입관리 결의번호 수정
							map.put("LEV_DECSN_NO", incmeDecsnNo2);
							baseDao.update("SLS000103DAO.updateDecsnNoEtcIncme1", map);
						}
					}
					else{
						// 조정결의 : 1
						if("1".equals(s_DECSN_SE1)){
							map.put("DECSN_SE", "1");
							baseDao.insert("SLS000103DAO.updateEtcIncmeDecsn", map);
						}
					}
					
					
					if( map.get("RCIV_DECSN_NO") == null || "".equals(map.get("RCIV_DECSN_NO").toString()) ){
						// 수납결의 : 2
						if("2".equals(s_DECSN_SE2)){
							map.put("DECSN_SE", "2");
							
							//3. 결의번호 가져오기
							incmeDecsnNo2 = selectIncmeDecsnNo(map);					
							map.put("INCME_DECSN_NO", incmeDecsnNo2);
							
							baseDao.insert("SLS000103DAO.insertEtcIncmeDecsn", map);
							
							//기타수입관리 결의번호 수정
							map.put("RCIV_DECSN_NO", incmeDecsnNo2);
							baseDao.update("SLS000103DAO.updateDecsnNoEtcIncme2", map);
						}
					}
					else{						
						// 수납결의 : 2
						if("2".equals(s_DECSN_SE2)){
							map.put("DECSN_SE", "2");
							baseDao.insert("SLS000103DAO.updateEtcIncmeDecsn", map);
						}
					}
					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS000103DAO.deleteEtcIncme", map);
					
					baseDao.delete("SLS000103DAO.deleteEtcIncmeDecsn1", map);
					baseDao.delete("SLS000103DAO.deleteEtcIncmeDecsn2", map);
					
					
					break;
		    }
			
		}

		return iRow;
	}
	
	
	/**
	 * 계약번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectCntrctrNo(Map map) {
		String seq = (String)baseDao.select("SLS020101DAO.selectCntrctrNo", map);		
		
		return seq;
	}
	
	/**
	 * 납부번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectEtcIncmePayNo(Map map) {
		String seq = (String)baseDao.select("SLS000103DAO.selectEtcIncmePayNo", map);		
		
		return seq;
	}
	
	/**
	 * 결의번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectIncmeDecsnNo(Map map) {
		String seq = (String)baseDao.select("SLS000103DAO.selectEtcIncmeDecsnNo", map);		
		
		return seq;
	}
	
	
	//부서콤보
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDeptCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS000103DAO.selectDeptCodeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap);
	}
	
}
