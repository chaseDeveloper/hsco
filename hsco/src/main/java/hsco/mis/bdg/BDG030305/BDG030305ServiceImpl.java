package hsco.mis.bdg.BDG030305;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG030305ServiceImpl.java
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

@Service("BDG030305Service")
public class BDG030305ServiceImpl extends BaseService implements BDG030305Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /************************************
     * BDG030305
     *************************************/

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030305DAO.selectDemandBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    public void execFrmtnToExecutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG030305DAO.updateExecutBudgetZero", inMap);   // 현재 검색조건에 부합하는 실행예산 금액 0으로 변경
        baseDao.insert("BDG030305DAO.insertFrmtnToExecut", inMap);      // 편성금액으로 덮어쓰기
        baseDao.update("BDG030305DAO.updateExecutConfirmAt1", inMap);   // 예산확정여부 수정
        //baseDao.delete("BDG030305DAO.deleteExcutBudgetZero", inMap);    // 예산액이 모두 0인것 삭제_결산 때 조회가 안되서 해당 부분 주석처리
        baseDao.insert("BDG030305DAO.insertBackUpTable", inMap);        // 백업테이블에 데이터 입력
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandBudgetDtls(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030305DAO.selectDemandBudgetDtls", inMap));
        outDataset.put("output1", outDsMap);
    }

}
