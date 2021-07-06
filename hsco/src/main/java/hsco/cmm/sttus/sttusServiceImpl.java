package hsco.cmm.sttus;

import java.util.ArrayList;
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
 * 
 *<pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : sttusService.java
 * @Description     : 기본현황(메인화면)
 * @author          : 양성모
 * @since           : 2017. 12. 24.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 24.                  양성모              최초생성
 * </pre>
 */ 

@Service("SttusService")
public class sttusServiceImpl extends BaseService implements sttusService {
    
    protected Logger log = LoggerFactory.getLogger(sttusServiceImpl.class);
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /** 
     * 현황을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSttusList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;
		List <Map> records4;
		List <Map> records5;
		List <Map> records6;
		List <Map> records7;
		List <Map> records8;
		List <Map> records9;
		List <Map> records10;
		//List <Map> records11;

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp1", inMap);		// 민원신호등
		records2 = (List<Map>)baseDao.list("SttusDAO.selectTemp2", inMap);		// 직원현황
		records3 = (List<Map>)baseDao.list("SttusDAO.selectTemp3", inMap);		// 지출현황
		records4 = (List<Map>)baseDao.list("SttusDAO.selectTemp4", inMap);		// 수입금현황
		//records5 = (List<Map>)baseDao.list("SttusDAO.selectTemp5", inMap);		// 계약현황
		records5 = new ArrayList();
		records6 = (List<Map>)baseDao.list("SttusDAO.selectTemp6", inMap);		// 근무현황
		records7 = (List<Map>)baseDao.list("SttusDAO.selectTemp7", inMap);		// 카드사용내역
		records8 = (List<Map>)baseDao.list("SttusDAO.selectTemp8", inMap);		// 경영지시사항
		records9 = (List<Map>)baseDao.list("SttusDAO.selectTemp9", inMap);		// 청렴퀴즈
		records10 = (List<Map>)baseDao.list("SttusDAO.selectTemp10", inMap);	// 공지
		
		//초기조회때 자동조회 주석처리(해당쿼리 소요시간 문제로 인함)
		//records11 = (List<Map>)baseDao.list("SttusDAO.selectTemp11", inMap);	// 팀별구매현황
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		DataSetMap outDsMap6 = new DataSetMap();
		DataSetMap outDsMap7 = new DataSetMap();
		DataSetMap outDsMap8 = new DataSetMap();
		DataSetMap outDsMap9 = new DataSetMap();
		DataSetMap outDsMap10 = new DataSetMap();
		//DataSetMap outDsMap11 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		outDsMap5.setRowMaps(records5);
		outDsMap6.setRowMaps(records6);
		outDsMap7.setRowMaps(records7);
		outDsMap8.setRowMaps(records8);
		outDsMap9.setRowMaps(records9);
		outDsMap10.setRowMaps(records10);
		//outDsMap11.setRowMaps(records11);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
		outDataset.put("output6", outDsMap6);
		outDataset.put("output7", outDsMap7);
		outDataset.put("output8", outDsMap8);
		outDataset.put("output9", outDsMap9);
		outDataset.put("output10", outDsMap10);
		//outDataset.put("output11", outDsMap11);
		
    }
    
    /** 
     * 팀별구매현황 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp11( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp11", inMap);	// 팀별구매현황
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 민원내역을 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp1DtlList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp1Dtl", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 부서원 명단을 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp2Popup01( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp2Popup01", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 부서원 근태현황을 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp2Popup02( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp2Popup02", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 계약세부내역을 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp5Popup01( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		

		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp5Popup01", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 카드별 세부내역 마스터를 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp7Popup01Master( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		
		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp7Popup01Master", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 카드별 세부내역 디테일을 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTemp7Popup01Detail( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		
		records1 = (List<Map>)baseDao.list("SttusDAO.selectTemp7Popup01Detail", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
    }
    
    /** 
     * 청렴퀴즈참여 데이터를 조회한다. (팝업)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTempPopup06( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040202DAO.select", inMap));
		outDataset.put("output1", outDsMap);
	
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040202DAO.selectAswper", inMap));
		outDataset.put("output2", outDsMap);
		
    }
}
