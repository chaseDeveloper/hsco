package hsco.pms.sls.lad.rci.SLS100300;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
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
import hsco.cmm.util.DateUtil;

@Service("SLS100300Service")
public class SLS100300ServiceImpl extends BaseService implements SLS100300Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    
    //수입조정일계표
  	@SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectLadIncmeMdatDailyList( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {

  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;

  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		//===================================================================
  		Map<String, Object> paramMap = new HashMap<String, Object>();

		//두날짜사이 일수 구하기
        String decsnDefr = inMap.get("DECSN_DE_FR").toString();
        String decsnDeTo = inMap.get("DECSN_DE_TO").toString();
        //쿼리용 결의일자
        String decsnDe = decsnDefr;
        //일수 구하기
        int daysBetween = DateUtil.daysBetween(decsnDefr, decsnDeTo) + 1;
        
        List <Map> records = null;
        //일별 모두합친 데이타셋
        List <Map> addRecords = new ArrayList<Map>();

//System.out.println("====daysBetween======================================================================>" + daysBetween);        
        
		for(int i=0; i < daysBetween ; i++){
			//System.out.println("====decsnDe=[ "+ i +" ]=================================================================>" + decsnDe);
			
			if(i == 0){
				paramMap.put("DECSN_DE", decsnDefr);
			}
			else{
				paramMap.put("DECSN_DE", decsnDe);				
			}
			
			//1. 데이타 생성 : 수입조정일계표 데이타생성 프로시저 호출
			// 데이타구분		
			paramMap.put("IN_DTA_SE", "1");
	    	// 결의일자
			//Object inDecsnDe = inMap.get("DECSN_DE_FR");
			paramMap.put("IN_DECSN_DE", decsnDe);
			
			baseDao.update("SLS100300DAO.SPSLS_LAD_TEMP_LAD_DECSN_ID", paramMap);
			
			if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
			}
						
			//2.조회								
			if(daysBetween==1){
				inMap.put("IN_DECSN_DE", decsnDe);
			}else{			   
				inMap.put("IN_DECSN_DE", decsnDefr+ '~' + decsnDeTo);
			}
			System.out.println("===IN_DECSN_DE==========================================================>" + decsnDe);
	  		records = (List<Map>)baseDao.list("SLS100300DAO.selectLadIncmeMdatDailyList", inMap);
	  		addRecords.addAll(records);
	  		//다음날 구하기
			decsnDe =  DateUtil.addDays(decsnDe,1);
			//System.out.println("===nextDecsnDe=[ "+ i +" ]=================================================================>" + decsnDe); 
			
        }
		//==========================================================
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(addRecords);
		outDataset.put("output1", outDsMap);

  	}
  	
  	
  	//월별징수현황 : 목별
  	@SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectLadMonthlyLevList1( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {

  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;

  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		Map<String, Object> paramMap = new HashMap<String, Object>();
  		DataSetMap outDsMap = new DataSetMap();

        String decsnDefr = inMap.get("DECSN_DE_FR").toString();
        String decsnDe = decsnDefr;
        paramMap.put("DECSN_DE", decsnDe);
        
     	//1. 데이타 생성 : 수입조정일계표 데이타생성 프로시저 호출
		// 데이타구분		
		paramMap.put("IN_DTA_SE", "2");
    	// 결의일자
		//Object inDecsnDe = inMap.get("DECSN_DE_FR");
		paramMap.put("IN_DECSN_DE", decsnDe);
		
		baseDao.update("SLS100300DAO.SPSLS_LAD_TEMP_LAD_DECSN_ID1", paramMap);
		
		if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		//2.조회
		List <Map> records = null;
		inMap.put("IN_DECSN_DE", decsnDe);
  		records = (List<Map>)baseDao.list("SLS100300DAO.selectLadMonthlyLevList1", inMap);
  		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

  	}
  	
  	//월별징수현황 : 지구별
  	@SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectLadMonthlyLevList2( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {

  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;

  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		Map<String, Object> paramMap = new HashMap<String, Object>();
  		DataSetMap outDsMap = new DataSetMap();

        String decsnDefr = inMap.get("DECSN_DE_FR").toString();
        String decsnDe = decsnDefr;
        paramMap.put("DECSN_DE", decsnDe);
        
     	//1. 데이타 생성 : 수입조정일계표 데이타생성 프로시저 호출
		// 데이타구분		
		paramMap.put("IN_DTA_SE", "2");
    	// 결의일자
		//Object inDecsnDe = inMap.get("DECSN_DE_FR");
		paramMap.put("IN_DECSN_DE", decsnDe);
		
		baseDao.update("SLS100300DAO.SPSLS_LAD_TEMP_LAD_DECSN_ID1", paramMap);
		
		if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		//2.조회
		List <Map> records = null;
		inMap.put("IN_DECSN_DE", decsnDe);
		inMap.put("DECSN_DE", decsnDe);
  		records = (List<Map>)baseDao.list("SLS100300DAO.selectLadMonthlyLevList2", inMap);
  		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

  	}  	
  	
    //자금수입기록부
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCptalIncmeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		String  strDecsnDeFr = (String) inDsMap.get(0).get("DECSN_DE_FR");
		String  strDecsnDeTo = (String) inDsMap.get(0).get("DECSN_DE_TO");
		String  strDecsnDe = strDecsnDeFr;
		
		List <Map> records = null;
		List <Map> addRecords = new ArrayList<Map>();
		int intDecsnDe = Integer.parseInt(strDecsnDe);
		int intDecsnDeTo = Integer.parseInt(strDecsnDeTo);	
		
		while (intDecsnDe <= intDecsnDeTo){
			inMap.put("DECSN_DE",strDecsnDe);
			
			records = (List<Map>)baseDao.list("SLS100300DAO.selectCptalIncmeList", inMap);
			addRecords.addAll(records);
			
			try{
				intDecsnDe = Integer.parseInt(DateUtil.addDays(strDecsnDe, 1));
				strDecsnDe = DateUtil.addDays(strDecsnDe, 1).toString();				
				//System.err.print("intDecsnDe add:" + intDecsnDe + "\n");
				
			}catch(Exception ex){
				throw new NexaServiceException(ex);
			}			
			
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(addRecords);
	
		outDataset.put("output1", outDsMap);
	}
	
	//수입예산정리부
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIncmeBdgArngList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100300DAO.selectIncmeBdgArngList", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
	}
	
	
	//지구별 수입예산정리부 : 보조장부
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectAreaIncmeBdgArngList1 ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100300DAO.selectAreaIncmeBdgArngList1", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
  	
  	//지구별 수입예산정리부 : 집계표
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectAreaIncmeBdgArngList2 ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100300DAO.selectAreaIncmeBdgArngList2", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
	
	//지구별 수입예산정리부 보조장부 (X)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIncmeBdgArngListA( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		String  strDecsnDeFr = (String) inDsMap.get(0).get("DECSN_DE_FR");
		String  strDecsnDeTo = (String) inDsMap.get(0).get("DECSN_DE_TO");
		String  strDecsnDe = strDecsnDeFr;
		
		List <Map> records = null;
		List <Map> addRecords = new ArrayList<Map>();
		int intDecsnDe = Integer.parseInt(strDecsnDe);
		int intDecsnDeTo = Integer.parseInt(strDecsnDeTo);	
		
		while (intDecsnDe <= intDecsnDeTo){
			inMap.put("DECSN_DE_FR",strDecsnDe);
			inMap.put("DECSN_DE_TO",strDecsnDe);
			
			records = (List<Map>)baseDao.list("SLS100300DAO.selectIncmeBdgArngListA", inMap);
			addRecords.addAll(records);
			
			try{
				intDecsnDe = Integer.parseInt(DateUtil.addDays(strDecsnDe, 1));
				strDecsnDe = DateUtil.addDays(strDecsnDe, 1).toString();				
				//System.err.print("intDecsnDe add:" + intDecsnDe + "\n");
				
			}catch(Exception ex){
				throw new NexaServiceException(ex);
			}			
			
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(addRecords);
		outDataset.put("output1", outDsMap);
	}	
	
}
