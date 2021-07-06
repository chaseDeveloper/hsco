package hsco.pms.sls.lad.std.SLS070103;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

@Service("SLS070103Service")
public class SLS070103ServiceImpl extends BaseService implements SLS070103Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    //houseTyCodeList
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ladDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070103DAO.ladDetailList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
	
    /**
     * 선수금 정산 조회
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void PrepayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070103DAO.PrepayList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}	
	
    /**
     * 적용일자 조회
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ApplcDeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070103DAO.ApplcDeList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
    /**
     * 선납이율 조회
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void IntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070103DAO.IntrtList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	

    /**
     * 선수금 저장
     * @param inMap
     * @return String
     * @throws Exception
     */    
	
	@SuppressWarnings("rawtypes")
	public void saveSlaryList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		log.debug("선수금 저장 ----------------------------------------------------!");		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {		
			Map<String, Object> map = list.get(x);
			
			if ("1".equals(map.get("CHK")))
				baseDao.update("SLS070103DAO.updateLandList", map);
		}		
	}		
	
    /**
     * 정산관리 결과자료 입력 프로시저 호출
     * @param inMap
     * @return String
     * @throws Exception
     */    
	
	@SuppressWarnings("rawtypes")
	public void saveSlaryList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		log.debug("프로시저 호출 ----------------------------------------------------!");		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);				
/*			baseDao.update("SLS070103DAO.saveSlaryList1", map);*/
			baseDao.update("SLS070103DAO.saveSlaryList3", map);
			baseDao.update("SLS070103DAO.saveSlaryList2", map);
		}		
	}
	
    /**
     * 선수금 저장
     * @param inMap
     * @return String
     * @throws Exception
     */    
	
	@SuppressWarnings("rawtypes")
	public void updatePrepayList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		log.debug("선수금정산 저장 ----------------------------------------------------!");		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		String cntrctr_no = "";
		for (int x = 0; x < list.size(); x++) {		
			Map<String, Object> map = list.get(x);			
			baseDao.update("SLS070103DAO.updatePrepayList", map);
		}
		for (int x = 0; x < list.size(); x++) {
			Map<String, Object> map = list.get(x);
			String temp = (String)map.get("CNTRCTR_NO");			
			if (!temp.equals(cntrctr_no)) {
				String payNoHead = selectPayNumHead(map);  //납부번호 앞자리(1 자리 : OCR구분)
				map.put("PAY_NO_HEAD", payNoHead);					
				String payNoTail = selectPayNumTail(map);	//납부번호 뒷자리(4 자리)					

				map.put("PAY_NO", payNoHead.concat(payNoTail));
				map.put("S_USER_ID", String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
				baseDao.delete("SLS070103DAO.deletePrepaySum", map);
				baseDao.insert("SLS070103DAO.insertPrepaySum", map);
				cntrctr_no = temp;
			}			
		}
		
	}		

	/**
	 * 납부번호 앞자리(1자리) 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectPayNumHead(Map map) {
		String payNumHead = (String)baseDao.select("SLS080201DAO.selectPayNumHead", map);

		return payNumHead;
	}	
	/**
	 * 납부번호 뒷자리(4자리) 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectPayNumTail(Map map) {
		String payNumTail = (String)baseDao.select("SLS080201DAO.selectPayNumTail", map);

		return payNumTail;
	}	
}
