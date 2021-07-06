package hsco.mis.aud.AUD040102_P05;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD040102_P05ServiceImpl.java
 * @Description    :청렴교육조회를 관리하는 서비스 구현체 클래스 
 * @author          : 이수지
 * @since           : 2016. 05. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 15.  이수지             최초생성
 * </pre>  
 */

@Service("AUD040102_P05Service")
public class AUD040102_P05ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 입력받은 값에 (직위, 직책 등)정보 추가
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = inDsMap.get(0);
        List <Map> records =  (List<Map>)baseDao.list("AUD040102_P05DAO.selectEmpInfo", inMap);
        
        for(int i=1; i<inDsMap.size(); i++){
            if (inDsMap != null){
                inMap = inDsMap.get(i);
                if (inMap != null) {
                        records.addAll((List<Map>)baseDao.list("AUD040102_P05DAO.selectEmpInfo", inMap));
                }
            }
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
}
