package hsco.mis.hrm.HRM070119;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070119ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 12. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>R
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 09.   김형태		    최초생성
 * </pre>  
 */

@Service("HRM070119Service")
public class HRM070119ServiceImpl extends BaseService implements HRM070119Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 근태기매핑정보 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDclzMappingManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070119DAO.selectDclzMappingManageList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    
    /** 근태기매핑정보 생성 및 수정 */
    @SuppressWarnings({ "rawtypes"})
	public int dclzMappingManageCU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("HRM070119DAO.dclzMappingManageD", map);
                    break;
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM070119DAO.dclzMappingManageC", map);
                    break;
				case DataSet.ROW_TYPE_UPDATED :
				    int cnt = (int) baseDao.select("HRM070119DAO.selectCntMapTb", map);
				    if(cnt>0){
                        baseDao.update("HRM070119DAO.dclzMappingManageU", map);
				    }else{
				        baseDao.insert("HRM070119DAO.dclzMappingManageC", map);
				    }
					break;
			}
		}		
		return iRow;		
	}
    
    
    /** 최근정보갱신 */
	@SuppressWarnings("unchecked")
	public void updateDclzData(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 기존 근태기DB정보 삭제
		baseDao.delete("HRM070119DAO.dclzDBInfoD", null);
		
		// 실제 근태기DB정보 조회
		List<Map<String, Object>> dclzDBInfoList = (List<Map<String, Object>>) bioStarDao.list("biostarDAO.selectDclzDBInfoList", null);
		if(dclzDBInfoList != null) {
			 System.out.println("[HRMJOB0001 조회 태스크 결과]" + dclzDBInfoList.size() + "건의 데이터를 조회하였습니다.");
		}
		
		// 근태기DB정보 테이블 입력
		baseDao.insert("HRM070119DAO.dclzDBInfoC", dclzDBInfoList);
	}
}