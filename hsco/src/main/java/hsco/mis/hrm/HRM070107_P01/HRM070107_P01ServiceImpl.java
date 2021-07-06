package hsco.mis.hrm.HRM070107_P01;

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

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM070107_P01ServiceImpl.java
 * @Description     : 유연근무신청을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 20.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 20.      김병진              최초생성
 * </pre>  
 */
@Service("HRM070107_P01Service")
public class HRM070107_P01ServiceImpl extends BaseService implements HRM070107_P01Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 로그인사용자 정보 조회 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUserInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input02");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070107_P01DAO.selectUserInfo", inMap));
        outDataset.put("output02", outDsMap);
    }
    
    /**
     * 유연근무신청내역 상세를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFlxwkInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070107_P01DAO.selectFlxwkInfo", inMap));
        outDataset.put("output01", outDsMap);
    }
    
    /**
     * 유연근무 신청 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int flxwkInfoC(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        String Key = null;
        DataSetMap list1 = (DataSetMap) inDataset.get("input02");
        DataSetMap list2 = (DataSetMap) inDataset.get("input03");
        Map map = list1.get(0);
        
        int listSize1 = (list1 == null) ? 0 : list1.size();
        int listSize2 = (list2 == null) ? 0 : list2.size();
        for (int x = 0; x < listSize1; x++) {
         	if (map.get("SEQ") == null || "".equals( map.get("SEQ"))  ) {
                Key = (String) baseDao.select("HRM070107_P01DAO.selectStrSeqNo", map); //SEQ가 두 TABLE에 공통으로 쓰이므로, 해당 사원의 SEQ 최대값+1 조회 
                map.put("SEQ", Key);
            }
            Map map1 = list1.get(x);
            map1.put("SEQ", Key);
            baseDao.insert("HRM070107_P01DAO.flxwkInfoC", map1);
        }
        for (int x = 0; x < listSize2; x++) {
            Map map2 = list2.get(x);
            map2.put("SEQ", Key);            //TBHRM_FLXWK_CHOISE TABLE에 들어갈 DATASET의 모든 ROW의 SEQ에 구해온 SEQ 셋팅
            baseDao.insert("HRM070107_P01DAO.flxwkChoiseInfoC", map2);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        return iRow;
    }
    
    /**
     * 유연근무 신청 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int flxwkInfoU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        int iRow = 0;
        DataSetMap list1 = (DataSetMap) inDataset.get("input04");
        DataSetMap list2 = (DataSetMap) inDataset.get("input05");

        int listSize1 = (list1 == null) ? 0 : list1.size();
        for (int x = 0; x < listSize1; x++) {
            Map map = list1.get(x);
            baseDao.update("HRM070107_P01DAO.flxwkInfoU", map);
            String radioSe = map.get("RADIO_SE")+"";
            if("0".equals(radioSe)) {
//                baseDao.delete("HRM070107DAO.flxwkChoiseListDelete", map);	유연근무 통합으로 인한 선택제 사용안함_2017.04.20
            }
        }

        int listSize2 = (list2 == null) ? 0 : list2.size();
        for (int x = 0; x < listSize2; x++) {
            Map map = list2.get(x);
            baseDao.insert("HRM070107_P01DAO.flxwkChoiseInfoU", map);
        }

        return iRow;
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        Map map = list.get(0);
       	baseDao.update("HRM070107_P01DAO.approveU", map);

    
    }
}
