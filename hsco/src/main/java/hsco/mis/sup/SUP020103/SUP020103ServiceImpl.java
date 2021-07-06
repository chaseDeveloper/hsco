package hsco.mis.sup.SUP020103;

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
 * @Class Name   	: SUP020103ServiceImpl.java
 * @Description  	: 제안심사위원 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 10. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 20.				   양성모				최초생성
 * </pre>  
 */

@Service("sup020103Service")
public class SUP020103ServiceImpl extends BaseService implements SUP020103Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 사원목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectHrMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP020103DAO.selectHrMastrList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    /**
	 * 심사위원 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectJudgeMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);	
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP020103DAO.selectJudgeMastrList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	

	/**
	 * 심사위원목록 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int saveJudgeMastr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		System.out.println("CASE 00");
		int listSize = (list == null) ? 0 : list.size();
		System.out.println("CASE A");
		for (int x = 0; x < listSize; x++) {
			System.out.println("CASE B");
			Map map = list.get(x);
			System.out.println("CASE C");
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			System.out.println("CASE D");
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SUP020103DAO.savePropseJdgmnResultD", map);		// 삭제 심사위원 관련 심사결과 삭제 
					baseDao.delete("SUP020103DAO.savePropseJdgmnMfcmmD", map);		// 삭제 심사위원 관련 제안심사위원 목록 삭제
					iRow += baseDao.delete("SUP020103DAO.saveJudgeMastrD", map);	// 심사위원 삭제
					break;
			}	
		}			
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP020103DAO.saveJudgeMastrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}		

		return iRow;
	
	}
	
    /**
	 * 심사위원 목록 및 제안자의 제안부서 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectJudgeMastrList01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);	
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("SUP020103DAO.selectJudgeMastrList", inMap);	// 심사위원 목록 조회
		records2 = (List<Map>)baseDao.list("SUP020103DAO.selectPropseDeptList", inMap);	// 제안자 부서 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}		
	
}
