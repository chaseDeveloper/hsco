package hsco.mis.sup.SUP020101;

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


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SUP020101ServiceImpl.java
 * @Description  	: 채점표기준 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 10. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 19.				   양성모				최초생성
 * </pre>  
 */

@Service("sup020101Service")
public class SUP020101ServiceImpl extends BaseService implements SUP020101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 채점표항목기준 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectIemStdr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP020101DAO.selectIemStdrList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    /**
	 * 채점표항목등급 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectIemGrad( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP020101DAO.selectIemGradList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	

	/**
	 * 채점표기준정보 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int savePropseIem( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP020101DAO.savePropseIemGradC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SUP020101DAO.savePropseIemGradU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SUP020101DAO.savePropseIemGradD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP020101DAO.savePropseIemStdrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SUP020101DAO.savePropseIemStdrU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SUP020101DAO.savePropseIemStdrD00", map); // 제안항목등급 자식데이터 삭제
					baseDao.delete("SUP020101DAO.savePropseIemStdrD01", map); // 제안심사결과 자식데이터 삭제
					iRow += baseDao.delete("SUP020101DAO.savePropseIemStdrD02", map); // 부모데이터 삭제
					break;
			}	
		}			

		return iRow;
	
	}
	
	/**
	 * 데이터 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
    public void propseIemStdrCOPY(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
    	
		baseDao.delete("SUP020101DAO.propseIemStdrCOPYD2", map);	// 채점표 상세 삭제
		baseDao.delete("SUP020101DAO.propseIemStdrCOPYD1", map);	// 채점표 마스터 삭제
		baseDao.insert("SUP020101DAO.propseIemStdrCOPYC1", map);	// 채점표 마스터 등록
		baseDao.insert("SUP020101DAO.propseIemStdrCOPYC2", map);	// 채점표 상세 등록
    }	
	
}
