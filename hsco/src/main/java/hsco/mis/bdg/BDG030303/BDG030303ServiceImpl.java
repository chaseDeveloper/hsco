package hsco.mis.bdg.BDG030303;

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
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG030303ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 20.
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
 *  2015. 07. 20.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG030303Service")
public class BDG030303ServiceImpl extends BaseService implements BDG030303Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /************************************
     * BDG030303
     *************************************/

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntExecut(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030303DAO.selectAcntExecut", inMap)); // 실행예산(계정) 조회
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectExpndtrUnitExecut(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030303DAO.selectExpndtrUnitExecut", inMap)); // 실행예산(지출단위) 조회
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
 //               baseDao.update("BDG030303DAO.insertExpndtrUnitCode",   map);    // 지출단위코드 추가
                baseDao.update("BDG030303DAO.insertDemandBudget",      map);    // 요구예산(지출단위) 추가
                baseDao.update("BDG030303DAO.insertFrmtnBudget",       map);    // 편성예산(지출단위) 추가
                baseDao.update("BDG030303DAO.insertExpndtrUnitExecut", map);    // 실행예산(지출단위) 추가
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030303DAO.updateExpndtrUnitExecut", map);    // 실행예산(지출단위) 수정
                baseDao.update("BDG030303DAO.updateFrmtnBudget",       map);    // 편성예산(지출단위) 수정
                baseDao.update("BDG030303DAO.updateDemandBudget",      map);    // 요구예산(지출단위) 수정
  //              baseDao.update("BDG030303DAO.updateExpndtrUnitCode",   map);    // 지출단위코드 수정
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.update("BDG030303DAO.deleteExpndtrUnitExecut", map);    // 실행예산(지출단위) 삭제
                baseDao.update("BDG030303DAO.deleteFrmtnBudget",       map);    // 편성예산(지출단위) 삭제
                baseDao.update("BDG030303DAO.deleteDemandBudget",      map);    // 요구예산(지출단위) 삭제
  //              baseDao.update("BDG030303DAO.deleteExpndtrUnitCode",   map);    // 지출단위코드 삭제
                break;
            }
        }
    }
}
