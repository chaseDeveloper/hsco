package hsco.mis.aud.AUD010301;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010301ServiceImpl.java
 * @Description     : 계약심사요청목록을 접수하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 04.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 04.      김병진              최초생성
 * </pre>
 */
@Service("AUD010301Service")
public class AUD010301ServiceImpl extends BaseService implements AUD010301Service {

	protected Logger		log	= LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	FileUploadServiceImpl	FileUploadService;

	/**
	 * 계약심사요청목록을 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRequstCtrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010301DAO.selectRequstCtrList", inMap));
		outDataset.put("output01", outDsMap);

	}

	/**
	 * 첨부파일 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);
	}

	/**
	 * 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input02");
		int listSize = (list == null) ? 0 : list.size();
		
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input01");
		Map inMap1 = null;

		if (inDsMap1 != null) {
			inMap1 = inDsMap1.get(0);
		}

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("AUD010301DAO.cntrctJdgmnC", map);
				
				String empnos = (String) baseDao.select("AUD010301DAO.selectEmpnos", inMap1);
				inMap1.put("RECV_IDS", empnos);
				baseDao.insert("UcMessengerDAO.sendMessage", inMap1);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("AUD010301DAO.cntrctJdgmnU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				// 첨부파일 삭제
				if (!StringUtil.isNull((String) map.get("ATCH_FILE"))) {
					FileUploadService.deleteFileAll((String) map.get("ATCH_FILE"));
				}
				// 첨부파일 삭제
				if (!StringUtil.isNull((String) map.get("RESULT_FILE"))) {
					FileUploadService.deleteFileAll((String) map.get("RESULT_FILE"));
				}
				baseDao.delete("AUD010301DAO.cntrctJdgmnD", map);
				break;
			}
		}
	}
	
	/**
	 * 계약심사조회(팝업)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctJdgmnList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010301DAO.selectCntrctJdgmnList", inMap));
		outDataset.put("output1", outDsMap);

	}

}
