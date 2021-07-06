package hsco.mis.aud.AUD010101;

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
 * @Class Name      : AUD010101ServiceImpl.java
 * @Description     : 감사계획목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 09.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 09.      김병진              최초생성
 * </pre>  
 */

@Service("AUD010101Service")
public class AUD010101ServiceImpl extends BaseService implements AUD010101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;    
	
	/*부서코드조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDeptCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010101DAO.selectDeptCodeList", inMap));
		outDataset.put("output5", outDsMap);
	}
		
	/*감사계획목록 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAuditPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010101DAO.selectAuditPlanList", inMap));
		outDataset.put("output01", outDsMap);
	}
	
	/*감사대상부서, 감사인 목록 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAuditR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("AUD010101DAO.selectAuditR", inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("AUD010101DAO.selectAudit2R", inMap));
		outDataset.put("output05", outDsMap1);
		outDataset.put("output06", outDsMap2);
	}
	
	/*승인*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateConfmAt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		baseDao.update("AUD010101DAO.updateConfmAt", inMap);
	}
	
	/*감사계획목록, 감사대상부서목록, 감사인목록 등록/수정/삭제 */
	@SuppressWarnings({ "rawtypes" })
	public int AuditPlanListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		//감사계획목록
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("AUD010101DAO.DiaryListD01", map);			//내외부감사진행_감사일지 삭제
				baseDao.delete("AUD010101DAO.DtaListD01", map);				//내외부감사진행_감사자료 삭제
				baseDao.delete("AUD010101DAO.CnfrmnListD01", map);			//내외부감사진행_감사확인서 삭제
				baseDao.delete("AUD010101DAO.AMDListD01", map);				//내외부감사진행_현지조치요구서 삭제
				
				baseDao.delete("AUD010101DAO.InExAudOprtnListD", map);		// 실시관리삭제
				baseDao.delete("AUD010101DAO.InExAudDmdListD01", map);		// 처분요구서_문책 삭제
				baseDao.delete("AUD010101DAO.InExAudDmdListD02", map);		// 처분요구서삭제
				baseDao.delete("AUD010101DAO.InExAudRltpsnListD", map);		// 관련자조서삭제
				baseDao.delete("AUD010101DAO.InExAudPrgnListD", map);		// 수범사례삭제
				
				baseDao.delete("AUD010101DAO.AuditTrgetDeptListD01", map);	//관련부서 삭제
				baseDao.delete("AUD010101DAO.AuditComposiListD01", map);	//감사인 삭제
				baseDao.delete("AUD010101DAO.AuditPlanListD", map);			//감사계획 삭제
				break;
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("AUD010101DAO.AuditPlanListC",map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("AUD010101DAO.AuditPlanListU", map);
					break;
			}
		}  
		
		//감사대상부서
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_DELETED :
				baseDao.insert("AUD010101DAO.AuditTrgetDeptListD",map);
				break;
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("AUD010101DAO.AuditTrgetDeptListC",map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("AUD010101DAO.AuditTrgetDeptListU",map);
					break;
			}
		}
		
		//감사인구성
		list = (DataSetMap) inDataset.get("input3");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_DELETED :
				baseDao.insert("AUD010101DAO.AuditComposiListD",map);
				break;
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("AUD010101DAO.AuditComposiListC",map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("AUD010101DAO.AuditComposiListU",map);
					break;
			}
		}
		return iRow;
	}

}
