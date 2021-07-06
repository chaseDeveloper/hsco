package hsco.mis.hrm.HRM080307;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080307Service.java
 * @Description     : 주요교육실적 서비스 클래스
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

@Service("HRM080307Service")
public class HRM080307ServiceImpl extends BaseService implements HRM080307Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 교육 대상자 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080307DAO.selectEvlTrgter", inMap));
		outDataset.put("output1", outDsMap);
	}
	 
	/**
	 * 교육 이수시간, 이수실적 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
			Map inMap = null;
			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

			if (inDsMap != null) {
				inMap = inDsMap.get(0);
			}
			
			// 2016년 ~ 검색기준년도의 데이터를 모두 표출
			Integer srcYr = Integer.parseInt(((String)inMap.get("YEAR")).substring(0, 4));
			
			List<Map> yrList = new ArrayList<>();
			
			HashMap<String, String> map = new HashMap<>();
			
			for(int i = 2016; i <= srcYr; i++ ){
				map = new HashMap<>();
				
				map.put("YEAR", Integer.toString(i));
				
				yrList.add(map);
			}
			
			inMap.put("yearList", yrList);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080307DAO.selectIndvdlzAcmslt", inMap));
			outDataset.put("output1", outDsMap);
	}
	 
	/**
	 * 교육실적 조회(팝업)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcList_P01( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
			Map inMap = null;
			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

			if (inDsMap != null) {
				inMap = inDsMap.get(0);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080307DAO.selectEdcList_P01", inMap));
			outDataset.put("output1", outDsMap);
	}

}
