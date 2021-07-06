package hsco.mis.hrm.HRM030102R;

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
 * @Class Name   	: HRM030102RServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015.12.16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015.12.16.		김형태			최초생성
 * </pre>  
 */

@Service("HRM030102RService")
public class HRM030102RServiceImpl extends BaseService implements HRM030102RService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** 인사기록카드(갑) 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint01Dtls(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

 	   	if (inDsMap != null)
 	   		inMap = inDsMap.get(0);
			
			DataSetMap outDsMap1  = new DataSetMap();
			DataSetMap outDsMap2  = new DataSetMap();
			DataSetMap outDsMap3  = new DataSetMap();
			DataSetMap outDsMap4  = new DataSetMap();
			DataSetMap outDsMap5  = new DataSetMap();
			DataSetMap outDsMap6  = new DataSetMap();
			DataSetMap outDsMap7  = new DataSetMap();
			DataSetMap outDsMap8  = new DataSetMap();
			DataSetMap outDsMap9  = new DataSetMap();
			DataSetMap outDsMap10 = new DataSetMap();
			DataSetMap outDsMap11 = new DataSetMap();
			DataSetMap outDsMap12 = new DataSetMap();
			DataSetMap outDsMap13 = new DataSetMap();
			DataSetMap outDsMap14 = new DataSetMap();
			DataSetMap outDsMap15 = new DataSetMap();
			DataSetMap outDsMap16 = new DataSetMap();
			DataSetMap outDsMap17 = new DataSetMap();
			DataSetMap outDsMap18 = new DataSetMap();
			DataSetMap outDsMap19 = new DataSetMap();
			
			outDsMap1.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.selectPrint05Dtls"          , inMap));
			outDsMap2.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.tbhrmHrQualfList"           , inMap));
			outDsMap3.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.tbhrmHrCareerList"          , inMap));
			outDsMap4.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.tbhrmHrDscplDspsList"       , inMap));
			outDsMap5.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.tbhrmHrRwardCnferList"      , inMap));
			outDsMap6.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.selectDscplList"            , inMap));
			outDsMap7.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.selectFamily"               , inMap));
			outDsMap8.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.tbhrmHrAcdmcrList2"         , inMap));
			outDsMap9.setRowMaps((List<Map>)  baseDao.list("HRM030102RDAO.selectLayOffList"           , inMap));
			outDsMap10.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrEdcTraingComplList"  , inMap));
			outDsMap11.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrFrntnInspnSdytrnList", inMap));
			outDsMap12.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectCareerAll"            , inMap));
			outDsMap13.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectApdsmsList"           , inMap));
			outDsMap14.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectPerevaSmList"         , inMap));
			outDsMap15.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectCrevalList"           , inMap));
			outDsMap16.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectEdcTraingList"        , inMap));
			outDsMap17.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectEmpInfoDtls"          , inMap));
			outDsMap18.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrSoctyList"           , inMap));
			outDsMap19.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrFamilyList"          , inMap));
			
			outDataset.put("output1",  outDsMap1);
			outDataset.put("output2",  outDsMap2);
			outDataset.put("output3",  outDsMap3);
			outDataset.put("output4",  outDsMap4);
			outDataset.put("output5",  outDsMap5);
			outDataset.put("output6",  outDsMap6);
			outDataset.put("output7",  outDsMap7);
			outDataset.put("output8",  outDsMap8);
			outDataset.put("output9",  outDsMap9);
			outDataset.put("output10", outDsMap10);
			outDataset.put("output11", outDsMap11);
			outDataset.put("output12", outDsMap12);
			outDataset.put("output13", outDsMap13);
			outDataset.put("output14", outDsMap14);
			outDataset.put("output15", outDsMap15);
			outDataset.put("output16", outDsMap16);
			outDataset.put("output17", outDsMap17);
			outDataset.put("output18", outDsMap18);
			outDataset.put("output19", outDsMap19);
	}
	
	/** 인사기록카드(을) 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint02Dtls(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectPromtDe"       , inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrCareerList"   , inMap));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrDscplDspsList", inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}
	
	/** 직원이력카드(일반용) 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint03Dtls(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		DataSetMap outDsMap6 = new DataSetMap();
		DataSetMap outDsMap7 = new DataSetMap();
		
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectPrint05Dtls"    , inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrQualfList"     , inMap));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrCareerList"    , inMap));
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrDscplDspsList" , inMap));
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrRwardCnferList", inMap));
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectDscplList"      , inMap));
		outDsMap7.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectLayOffList"     , inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
		outDataset.put("output6", outDsMap6);
		outDataset.put("output7", outDsMap7);
	}
    
    /** 직원이력카드(임원용) 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint04Dtls(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		DataSetMap outDsMap6 = new DataSetMap();
		DataSetMap outDsMap7 = new DataSetMap();
		DataSetMap outDsMap8 = new DataSetMap();
		DataSetMap outDsMap9 = new DataSetMap();
		
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectPrint05Dtls"    , inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrQualfList"     , inMap));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrCareerList"    , inMap));
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrDscplDspsList" , inMap));
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrRwardCnferList", inMap));
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectDscplList"      , inMap));
		outDsMap7.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectFamily"         , inMap));
		outDsMap8.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.tbhrmHrAcdmcrList"    , inMap));
		outDsMap9.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectLayOffList"     , inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
		outDataset.put("output6", outDsMap6);
		outDataset.put("output7", outDsMap7);
		outDataset.put("output8", outDsMap8);
		outDataset.put("output9", outDsMap9);
	}
	
	/** 직원면담카드 정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint05Dtls(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030102RDAO.selectPrint05Dtls", inMap));
		
		outDataset.put("output1", outDsMap);
	}
}