package hsco.mis.aud.AUD020101_P02;

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
 * @Class Name      : AUD020101_P02ServiceImpl.java
 * @Description     : 인카드 모니터링 설정 정보를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 30.      김병진              최초생성
 * </pre>  
 */

@Service("AUD020101_P02Service")
public class AUD020101_P02ServiceImpl extends BaseService implements AUD020101_P02Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /*법인카드 모니터링 설정정보 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEstbsList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("AUD020101_P02DAO.selectestbsList", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("AUD020101_P02DAO.selectareaNoList", inMap));
        outDsMap3.setRowMaps((List<Map>) baseDao.list("AUD020101_P02DAO.selectindutyCodeList", inMap));
        
        outDataset.put("output06", outDsMap1);
        outDataset.put("output07", outDsMap2);
        outDataset.put("output08", outDsMap3);
        
    }
    
    /*법인카드모니터링설정정보 등록/수정/삭제 */
   @SuppressWarnings({ "rawtypes", "unused" })
   
   public int estbsListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       String sqlId = null;
       String forceFlag = null;
       
       int iRow = 0;
       
       for(int i=0; i<inDataset.size(); i++ ){
           DataSetMap list = (DataSetMap) inDataset.get("input0"+(i+6));
       
           for (int x = 0; x < list.size(); x++) {
               Map map = list.get(x);
              if(i == 0){
              /*모니터링 설정 사용 여부 테이블 저장/수정*/    
               baseDao.insert("AUD020101_P02DAO.estbsListU", map);
              }else if(i ==1 ){
              /*지역정보 테이블 수정*/ 
               baseDao.update("AUD020101_P02DAO.areaNoListU", map);
              }else if(i == 2){
              /*제한업종정보 테이블 수정*/
               baseDao.delete("AUD020101_P02DAO.indutyCodeListU", map);
               
              }
           }
       }
       return iRow;
   }
}