package hsco.mis.bdg.BDG030301;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG030301ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 11.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 11.					정윤원				최초생성
 * </pre>
 */
@Service("BDG030301Service")
public class BDG030301ServiceImpl extends BaseService implements BDG030301Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectAcntCode", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectInpYn", inMap));
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectDemandBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandComputBsis(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectDemandComputBsis", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFrmtnBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectFrmtnBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFrmtnComputBsis(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectFrmtnComputBsis", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            //System.out.println("::::::::::: Map  :: " + map);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG030301DAO.insertFrmtnBudget", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030301DAO.updateFrmtnBudget", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG030301DAO.deleteFrmtnComputBsis", map);  // 자식 데이터를 먼저 지움
                baseDao.delete("BDG030301DAO.deleteFrmtnBudget", map);
                break;
            }
        }

        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG030301DAO.insertFrmtnComputBsis", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030301DAO.updateFrmtnComputBsis", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG030301DAO.deleteFrmtnComputBsis", map);
                break;
            }
        }
        Map inMap = list1.get(0);
        baseDao.update("BDG030301DAO.updateExecutConfirmAt0", inMap);		// 예산확정여부 수정
    }

    @SuppressWarnings({ "rawtypes" })
    public void execDemandToFrmtnBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.delete("BDG030301DAO.deleteFrmtnComputBsisAll", inMap);            // 현재 검색조건에 부합하는 편성예산(산출기초) 모두 제거
        baseDao.delete("BDG030301DAO.deleteFrmtnBudgetAll", inMap);             // 현재 검색조건에 부합하는 편성예산 모두 제거

        baseDao.insert("BDG030301DAO.insertDemandToFrmtn", inMap);              // 현재 검색조건에 부합하는 요구예산 반영
        baseDao.insert("BDG030301DAO.insertDemandToFrmtnComputBsis", inMap);    // 현재 검색조건에 부합하는 요구예산(산출기초) 반영
    }

    @SuppressWarnings({ "rawtypes" })
    public void execFrmtnToExecutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG030301DAO.updateExecutBudgetZero", inMap);   // 현재 검색조건에 부합하는 실행예산 금액 0으로 변경
        baseDao.insert("BDG030301DAO.insertFrmtnToExecut", inMap);      // 편성금액으로 덮어쓰기
        baseDao.update("BDG030301DAO.updateExecutConfirmAt1", inMap);		// 예산확정여부 수정
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBsnsPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectBsnsPrint", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAllBsnsPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectAllBsnsPrint", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntClassPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectAcntClassPrint", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030301DAO.selectAcntPrint", inMap));
        outDataset.put("output1", outDsMap);
    }
    
  //사업지구 목록(팝업)
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void businessDistrictList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("BDG030301DAO.businessDistrictList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
}
