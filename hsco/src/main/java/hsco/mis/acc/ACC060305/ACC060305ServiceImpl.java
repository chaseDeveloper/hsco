package hsco.mis.acc.ACC060305;

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
 * @Class Name   	: ACC060305ServiceImpl.java
 * @Description  	: 구분회계 재무상태표 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2016. 5. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 5. 24.					이수지				최초생성
 * </pre>  
 */
@Service("ACC060305Service")
public class ACC060305ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060305ServiceImpl.class);
    
    
    /**
	 * 구분회계 재무상태표
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void select( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("ACC060305DAO.selectSe", inMap); 
        if(inMap != null)
            inMap.put("seList", records1);
		
		records2 = (List<Map>)baseDao.list("ACC060305DAO.select", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);

		
		/* $ 제거 2016.08.12 쿼리오류 발생
		List <Map> records2;
        
		List<Map> headList = (List<Map>) baseDao.list("ACC060305DAO.selectSe", inMap);
		
		String SE_ACCNUT_ACNT_CODE_ALL = "";
		
		for(int z = 0 ; z < headList.size() ; z++ ){
			
			Map colMap = headList.get(z);
			
			String SE_ACCNUT_ACNT_CODE = colMap.get("SE_ACCNUT_ACNT_CODE").toString();

			if( z == 0){
				SE_ACCNUT_ACNT_CODE_ALL += SE_ACCNUT_ACNT_CODE ;
			}
			else{
				SE_ACCNUT_ACNT_CODE_ALL += "," + SE_ACCNUT_ACNT_CODE ;
			}
		}
		
System.out.println( "==SE_ACCNUT_ACNT_CODE_ALL===================================================> " + SE_ACCNUT_ACNT_CODE_ALL);
		
		String[] SE_ACCNUT_ACNT_CODE_LIST = SE_ACCNUT_ACNT_CODE_ALL.split(",");
		inMap.put("SE_ACCNUT_ACNT_CODE_LIST", SE_ACCNUT_ACNT_CODE_LIST);
		
		records2 = (List<Map>)baseDao.list("ACC060305DAO.select", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		*/
	}
    
    /**
     * 구분회계 재무상태표
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void seAcnt( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        if(log.isInfoEnabled()) log.info("select Started!");
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1;

        records1 = (List<Map>)baseDao.list("ACC060305DAO.seAcnt", inMap); 
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records1);
        
        outDataset.put("output1", outDsMap);
        
    }
}
