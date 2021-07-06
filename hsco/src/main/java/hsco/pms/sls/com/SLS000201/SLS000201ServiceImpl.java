package hsco.pms.sls.com.SLS000201;

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

@Service("SLS000201Service")
public class SLS000201ServiceImpl extends BaseService implements SLS000201Service {

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
	public void selectEtcIncmePayList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS000201DAO.selectEtcIncmePayList", inMap);

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
	public int saveEtcIncmePayList ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			
			switch(rowType) {
				
			
				case DataSet.ROW_TYPE_INSERTED :

					String payNo = selectEtcIncmePayNo(map);					
					map.put("PAY_NO", payNo);					
					//기타수입납부 등록
					baseDao.insert("SLS000201DAO.insertEtcIncmePay", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS000201DAO.updateEtcIncmePay", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS000201DAO.deleteEtcIncmePay", map);
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
		String seq = (String)baseDao.select("SLS020201DAO.selectCntrctrNo", map);		
		
		return seq;
	}
	
	/**
	 * 납부번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectEtcIncmePayNo(Map map) {
		String seq = (String)baseDao.select("SLS000201DAO.selectEtcIncmePayNo", map);		
		
		return seq;
	}
	
	/**
	 * 결의번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectEtcIncmeDecsnNo(Map map) {
		String seq = (String)baseDao.select("SLS000201DAO.selectEtcIncmeDecsnNo", map);		
		
		return seq;
	}
	
	
	
}
