package hsco.mis.hrm.HRM070102;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070102ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 05. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05.16.	양성모			최초생성
 * </pre>  
 */

@Service("HRM070102Service")
public class HRM070102ServiceImpl extends BaseService implements HRM070102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

    /** 연차일수조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void tbhrmYryc( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1 = (List<Map>)baseDao.list("HRM070102DAO.selectYrycInfo", inMap);    //연차정보 조회
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        
        outDataset.put("output1", outDsMap1);
    }
    
    /** 근무상황부 목록조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmWrkcpList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070102DAO.tbhrmWrkcpList", inMap);   //근무상황부 리스트 조회
		List <Map> records2 = (List<Map>)baseDao.list("HRM070102DAO.selectFamily", inMap);	   //자녀조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		
	}
    
	/** 근무상황부 CUD */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int tbhrmWrkcpCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
	    String seq = null;
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input3");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			String asortCode = (String) map.get("ASORT_CODE");
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if (map.get("SEQ") == null || "".equals( map.get("SEQ")) ) {
						seq = (String) baseDao.select("HRM070102DAO.selectStrSeqNo", map);
						map.put("SEQ", seq);
					}
					
					// 자녀돌봄휴가
					if("316".equals(asortCode)) {
						List<Map> chkList = (List<Map>)baseDao.list("HRM070102DAO.chkChldrnNrtrVcatn", map);	// 자녀돌봄휴가확인
						
						if(chkList.size() > 0) {
							if("N".equals(chkList.get(0).get("ENABLE_AT"))) {
								StringBuffer sb = new StringBuffer();
								sb.append("자녀돌봄휴가를 더이상 신청할 수 없습니다.");
								sb.append("\n사용가능시간 : ").append(chkList.get(0).get("USE_POSBLTY_CNT"));
								sb.append("(자녀수 : ").append(chkList.get(0).get("CHILD_CNT"));
								sb.append(")\n결  재  시  간 : ").append(chkList.get(0).get("SANCTN_CNT"));
								sb.append("\n(상신 : ").append(chkList.get(0).get("SANCTN_CNT1"));
								sb.append(", 중간결재 : ").append(chkList.get(0).get("SANCTN_CNT4"));
								sb.append(", 결재완료 : ").append(chkList.get(0).get("SANCTN_CNT5")).append(")");
								throw new NexaServiceException("info.처리불가", sb.toString());
							}
						} else {
							StringBuffer sb = new StringBuffer();
							sb.append("대상자의 정보를 확인할 수 없습니다.\n관리자에게 문의하여 주십시오.");
							throw new NexaServiceException("info.처리불가", sb.toString());
						}
					}
					
					baseDao.insert("HRM070102DAO.tbhrmWrkcpC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HRM070102DAO.tbhrmWrkcpU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					// 관련 파일 삭제
					if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
					}
					
					iRow += baseDao.delete("HRM070102DAO.tbhrmWrkcpD", map);
					
					// 종별구분이 null 아니고, 대체휴가 혹은 보상휴가일 때
					if(!StringUtil.isNull(asortCode) && ("300".equals(asortCode) || "311".equals(asortCode) || "312".equals(asortCode) || "313".equals(asortCode) || "314".equals(asortCode))) {
						baseDao.delete("HRM070102DAO.deleteRewordManage", map);
					}
					break;
			}	
		}
		return iRow;
	
	}
	
	/** 근무상황부 취소 대상 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWrkcpCancelList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070102DAO.selectWrkcpCancelList", inMap);	//근무상황부 취소 대상 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
	}
	
	/**
	 * 첨부파일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
		
	@SuppressWarnings({ "rawtypes" })
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		baseDao.update("HRM070102DAO.approveU", map);
	}
	
	/**
	 * 결재취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void cancelAppr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		baseDao.update("HRM070102DAO.cancelAppr", map);
	}
	
	/**
	 * 휴무일 확인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void chkHolyDe(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070102DAO.chkHolyDe", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 자녀돌봄휴가 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChldrnNrtrVcatn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070102DAO.chkChldrnNrtrVcatn", inMap);    //연차정보 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	
}//end impl