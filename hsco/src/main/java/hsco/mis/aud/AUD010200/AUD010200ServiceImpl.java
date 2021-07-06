package hsco.mis.aud.AUD010200;

import hsco.cmm.exception.NexaServiceException;
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

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010200ServiceImpl.java
 * @Description     : 일상감사 요청 목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 02.
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
 *  2015. 11. 02.      김병진              최초생성
 * </pre>
 */
@Service("AUD010200Service")
public class AUD010200ServiceImpl extends BaseService implements AUD010200Service {

	protected Logger					log	= LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl	propertiesService;

	/**
	 * 일상감사요청 목록을 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectReqstEdayAuditList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010200DAO.selectReqstEdayAuditList", inMap));
		outDataset.put("output01", outDsMap);
	}

	/**
	 * 일상감사 요청 목록을 등록/수정/삭제 한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int reqstEdayAuditListCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input02");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("AUD010200DAO.reqstEdayAuditListD", map);
					break;
			}
			
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					String auditNo = "";
					auditNo = (String) baseDao.select("AUD010200DAO.selectGetAuditNo", map);
					map.put("EDAY_AUDIT_NO", auditNo);
					baseDao.insert("AUD010200DAO.reqstEdayAuditListC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("AUD010200DAO.reqstEdayAuditListU", map);
					break;
			}
		}
		return iRow;
	}
	
	/**
	 * 문자전송
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void sendMessage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		String empnos = (String) baseDao.select("AUD010200DAO.selectEmpnos", inMap);
		inMap.put("RECV_IDS", empnos);
		
		baseDao.insert("UcMessengerDAO.sendMessage", inMap);
	}

}