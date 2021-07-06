package hsco.mis.hrm.HRM060124;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060124ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 09. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.07.   김형태		최초생성
 * </pre>  
 */

@Service("HRM060124Service")
public class HRM060124ServiceImpl extends BaseService implements HRM060124Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 등급별인원비율, 근무성적평정 평정점 분포비율(탭1, 2) 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDistrbRateList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 등급별인원비율
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectGradAcctoNmprRateList", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 탭1(직급별분포비율) > 탭1 : 일반직3급이상
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectPoigs3ClsfAboveList", inMap));
		outDataset.put("output2", outDsMap2);

		// 탭1(직급별분포비율) > 탭2 : 일반직4급이하
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectPoigs4ClsfBelowList", inMap));
		outDataset.put("output3", outDsMap3);

		// 탭1(직급별분포비율) > 탭3 : 시설관리원 등
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectFcltyManageList", inMap));
		outDataset.put("output4", outDsMap4);

		// 탭2(부별분포비율)   > 탭1 : 일반직(일반계약직, 청원경찰 등 포함)
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectPoigsList", inMap));
		outDataset.put("output5", outDsMap5);
		
		// 탭2(부별분포비율)   > 탭2 : 시설관리원(전임강사, 임시직 등 포함)
		DataSetMap outDsMap6 = new DataSetMap();
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM060124DAO.selectFcltyManageList2", inMap));
		outDataset.put("output6", outDsMap6);

	}
    
    /** 등급별인원비율 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    public void saveGradAcctoNmprRateList(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM060124DAO.gradAcctoNmprRateC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM060124DAO.gradAcctoNmprRateU", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM060124DAO.gradAcctoNmprRateD", map);
                break;
            }
        }
    }
	
}