package hsco.pms.prj.PRJ010109;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010109ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2017. 11. 16.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 16.                  김형태              최초생성
 * </pre>
 */

@Service("PRJ010109Service")
public class PRJ010109ServiceImpl extends BaseService {

	protected Logger	log	= LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

	// 조회(계약)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010109DAO.selectCntrct", inMap));
		outDataset.put("output1", outDsMap);
	}

	// 상세조회(예정공정표수정)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrearngeProcs(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010109DAO.selectPrearngeProcs", inMap));
		outDataset.put("output2", outDsMap2);
	}
	
	// 상세조회(주별공정률, 예정공정표)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWeekProcs(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 주별공정률
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010109DAO.selectWeekProcs", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 예정공정표
		int size = outDsMap1.size();
		String[] WEEK_LIST;
		WEEK_LIST = new String[size];
		for(int i = 0; i < size; i++) {
			Map wMap = outDsMap1.get(i);
			String week = wMap.get("WEEK").toString();
			WEEK_LIST[i] = week;
		}
		inMap.put("WEEK_LIST", WEEK_LIST);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010109DAO.selectPrearngeProcsTable", inMap));
		outDataset.put("output2", outDsMap2);
	}

	// 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 예정공정
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		String nextPlnSn = null;
		String chldrnPlnSn = null;
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				nextPlnSn = (String) baseDao.select("PRJ010109DAO.selectPlnSn", map);
				String newNChldrn = (String) map.get("NEW_N_CHLDRN");
				if("1".equals(newNChldrn)) {
					chldrnPlnSn = nextPlnSn;
				}
				map.put("PLN_SN", nextPlnSn);
				baseDao.insert("PRJ010109DAO.insertPlnPrcs", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010109DAO.updatePlnPrcs", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010109DAO.deletePlnPrcsDtlsAll", map);
				baseDao.delete("PRJ010109DAO.deletePlnPrcs", map);
				break;
			}
		}
		
		// 주별공정률
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			String plnSn = (String) map.get("PLN_SN");
			
			// 계획일련번호 값이 없고, 계획일련번호 값이 있을 경우 해당 값으로 교체
			if("".equals(plnSn) || plnSn == null) {
				if(nextPlnSn != null) {
					map.put("PLN_SN", chldrnPlnSn);
				}
			}
			baseDao.update("PRJ010109DAO.updatePlnPrcsDtls", map);
		}
	}

}
