package hsco.mis.acc.ACC020202;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020202ServiceImpl.java
 * @Description  	: 지출결의등록(지출계획) 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("acc020202Service")
public class ACC020202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC020202ServiceImpl.class);
	
	
	/**
	 * 지출계획 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void wikCptalPlanList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC020202DAO.wikCptalPlanList", inMap));
        
        outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 결의서 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked"})
	public void expDsnD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap dsList = (DataSetMap) inDataset.get("input2");
		for (Map<String, Object> map : dsList.getRowMaps()) {
			
			// 결의서 삭제 (결의서로 등록된 데이터 자동 삭제)
			baseDao.delete("ACC020203DAO.expDsnD", map);
			
			// 지출결의서인 경우
	         if("03".equals((String)map.get("ANACT_KND"))) {
	            switch((String)map.get("TRG_FORM_ID")) {
	               case "CTR030600":   // 대가지급의 결의번호 삭제
	                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", map);
	                  break;   
	            }
	         }
	         // 공사와집행결의서인 경우
	         if("06".equals((String)map.get("ANACT_KND"))) {
	            switch((String)map.get("TRG_FORM_ID")) {
	               case "CTR030600":   // 대가지급의 결의번호 삭제
	                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", map);
	                  break;   
	            }
	         }
	         // 구입과지출결의서인 경우 물품수급계획의 결의번호 삭제
	         if("02".equals((String)map.get("ANACT_KND"))) {
	            baseDao.update("ASS010600DAO.deleteDecsnNo", map);
	            
	            switch((String)map.get("TRG_FORM_ID")) {
	               case "CTR030600":   // 대가지급의 결의번호 삭제
	                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", map);
	                  break;   
	            }
	         }
			
			// 여비지출결의서인 경우 출장비정산의 결의번호 갱신
			if("01".equals((String)map.get("ANACT_KND"))) {
				switch((String)map.get("TRG_FORM_ID")) {
					case "HRM070206":
						baseDao.update("HRM070206DAO.updateBsrpDecsnNoToNull", map);
						break;
					case "HRM080306":
						baseDao.update("HRM080306DAO.updateEdcDecsnNoToNull", map);
						break;
				}
			}
        }
	}
	
}