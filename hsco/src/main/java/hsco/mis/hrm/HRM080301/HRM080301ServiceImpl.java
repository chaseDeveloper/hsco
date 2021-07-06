package hsco.mis.hrm.HRM080301;

import java.util.ArrayList;
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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080301Service.java
 * @Description     : 교육이수현황 서비스 클래스
 * @author          : 양성모
 * @since           : 2017. 06. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017.06. 07.                    양성모              최초생성
 * </pre>  
 */

@Service("HRM080301Service")
public class HRM080301ServiceImpl extends BaseService implements HRM080301Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 교육실적총괄 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcComplList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcDutyList", inMap);   // 탭1  : 의무교육이수현황
		List<Map> records2  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcAppnList", inMap);   // 탭2  : 지정학습이수현황
		
		List<Map> codeList = (List<Map>) baseDao.list("HRM080301DAO.selectRemoteEdcCodeList", inMap);
		
		List<Map> records3 = new ArrayList<Map>();
		
		if(codeList.size() > 0){
			String bCodeYn = "N";
			
			// B로 시작하는 지정학습구분의 포함여부 체크 로직
			for(int i=0; i<codeList.size(); i++){
				if("B".equals(codeList.get(i).get("CODE_GRP"))){
					bCodeYn = "Y";
					break;
				}
			}
			
			inMap.put("B_CODE_YN", bCodeYn);
			inMap.put("codeList", codeList);
			
			records3  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcRemoteList", inMap); // 탭3  : 원격교육이수현황
		}
		inMap.remove("codeList");
		
		DataSetMap outDsMap1  = new DataSetMap();
		DataSetMap outDsMap2  = new DataSetMap();
		DataSetMap outDsMap3  = new DataSetMap();
		DataSetMap outDsMap4  = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(codeList);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
	}
	 
	/**
	 * 의무교육이수현황 총괄표 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcDutyPtList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcDutyPtList", inMap);
		
		DataSetMap outDsMap1  = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	 
	 /**
	 * 지정학습이수현황 총괄표 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcAppnPtList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcAppnPtList", inMap);
		
		DataSetMap outDsMap1  = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	 
	 /**
	 * 원격교육이수현황 총괄표 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcRemotePtList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> codeList = (List<Map>) baseDao.list("HRM080301DAO.selectRemoteEdcCodeList", inMap);
		
		List<Map> records1 = new ArrayList<Map>();
		
		if(codeList.size() > 0){
			String bCodeYn = "N";
			
			// B로 시작하는 지정학습구분의 포함여부 체크 로직
			for(int i=0; i<codeList.size(); i++){
				if("B".equals(codeList.get(i).get("CODE_GRP"))){
					bCodeYn = "Y";
					break;
				}
			}
			
			inMap.put("B_CODE_YN", bCodeYn);
			inMap.put("codeList", codeList);
			
			records1  = (List<Map>) baseDao.list("HRM080301DAO.selectEdcRemotePtList", inMap);
		}
		inMap.remove("codeList");
		
		DataSetMap outDsMap1  = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}

}
