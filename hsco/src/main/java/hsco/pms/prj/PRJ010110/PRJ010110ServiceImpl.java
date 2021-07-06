package hsco.pms.prj.PRJ010110;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010110ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2017. 11. 17.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 17.                  김형태              최초생성
 * </pre>
 */

@Service("PRJ010110Service")
public class PRJ010110ServiceImpl extends BaseService {

	protected Logger	log	= LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

	// 조회(공정현황, 통계)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectProcsSttus(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 공정현황
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010110DAO.selectProcsSttus", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 조회(통계, 차트)를 위해 파라미터 세팅
		int size = outDsMap1.size();
		
		if(size > 0) {
			String[] WEEK_LIST;
			WEEK_LIST = new String[size];
			for(int i = 0; i < size; i++) {
				Map wMap = outDsMap1.get(i);
				String week = wMap.get("PPLS_ARSL_Y_W").toString();
				WEEK_LIST[i] = week;
			}
			inMap.put("WEEK_LIST", WEEK_LIST);
			
			String maxChgTo = (String) outDsMap1.get(0).get("MAX_CHG_TO_S");
			if(!"".equals(maxChgTo) && maxChgTo != null) {
				inMap.put("MAX_CHG_TO", maxChgTo);
				
				// 통계정보
				DataSetMap outDsMap2 = new DataSetMap();
				outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010110DAO.selectStatsInfo", inMap));
				outDataset.put("output2", outDsMap2);
				
				// 차트정보
				DataSetMap outDsMap3 = new DataSetMap();
				outDsMap3.setRowMaps((List<Map>) baseDao.list("PRJ010110DAO.selectChartInfo", inMap));
				outDataset.put("output3", outDsMap3);
			}
		}
		
	}

	// 저장
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			baseDao.update("PRJ010110DAO.updateProcsSttus", map);
		}
	}

}
