package hsco.mis.bdg.BDG040101;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG040101ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 8. 18.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG040101Service")
public class BDG040101ServiceImpl extends BaseService implements BDG040101Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBudgetStacnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040101DAO.selectBudgetStacnt", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void saveExec(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        // 데이터 틀 생성
        baseDao.delete("BDG040101DAO.deleteBudgetStacnt", inMap); // 기존 취합자료 제거
        baseDao.insert("BDG040101DAO.insertBudgetStacnt", inMap); // 신규 취합자료 추가(1~4레벨 : 예산계정, 5~7레벨 : 지출단위, 8~9레벨 : 산출기초(생략))
        
        // 금액 계산
        baseDao.update("BDG040101DAO.updateStacntStep1", inMap);   // 1. 기본금액 입력
        baseDao.update("BDG040101DAO.updateStacntStep2", inMap);   // 2. 상위합산
        
        // TODO : 1. 기본금액 계산(완료)
        // TODO : 2. 상위합산(완료)
        // TODO : 3. 추가 예외사항 처리(계정코드를 고정값 처리하여 구현한 부분)
        // TODO : 4. 자본적수입 합산
    }


    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveExecAcmtl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        int mth = Integer.parseInt(inMap.get("MTH").toString());
        for(int fRow = 1; fRow <= mth; fRow++) {
            // 
            inMap.put("MTH", fRow);
            
            // 데이터 틀 생성
            baseDao.delete("BDG040101DAO.deleteBudgetStacnt", inMap); // 기존 취합자료 제거
            baseDao.insert("BDG040101DAO.insertBudgetStacnt", inMap); // 신규 취합자료 추가(1~4레벨 : 예산계정, 5~7레벨 : 지출단위, 8~9레벨 : 산출기초(생략))
            
            // 금액 계산
            baseDao.update("BDG040101DAO.updateStacntStep1", inMap);   // 1. 기본금액 입력
            baseDao.update("BDG040101DAO.updateStacntStep2", inMap);   // 2. 상위합산
        }
    }
    


    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectStacntOrg(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040101DAO.selectStacntOrg", inMap));
        outDataset.put("output1", outDsMap);
    }
}
