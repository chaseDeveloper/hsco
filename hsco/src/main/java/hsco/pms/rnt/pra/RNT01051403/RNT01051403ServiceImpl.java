package hsco.pms.rnt.pra.RNT01051403;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.pms.com.COM000000.COM000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01051403ServiceImpl.java
 * @Description  	: 계좌이체결과 조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 18.					김지훈			최초생성
 * </pre>  
 */
@Service("RNT01051403Service")
public class RNT01051403ServiceImpl extends BaseService{
	
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "COM000000Service")
    protected COM000000ServiceImpl COM000000Service;    
    
        
	/**
	 * 자동이체 출금결과조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngRqestRciv( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01051403DAO.selectAtcngRqestRciv", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자동이체 출금결과 건수 금액조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngRqestRcivSum( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01051403DAO.selectAtcngRqestRcivSum", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
	}
	
	
	/**
	 * 자동이체 출금결과 기정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngRqestRcivChk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01051403DAO.selectAtcngRqestRcivChk", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
     * 월별 자동이체 출금결과 업로드
     * - 파일을 읽어 내용을 데이터화 하고 저장 처리후 결과를 반환한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws Exception
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void uploadAtcngReqstRcivFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
    	
    	NexacroMapDTO xpDto = getXpDto();
 
   	
    	// 업로드 파일 데이터 화
    	Map<String, Object> readDataMap = COM000000Service.getDataFromFile(xpDto);
    	
		boolean resultAt = Boolean.valueOf((String)readDataMap.get("RESULT_AT"));	// 처리 성공여부
    	
		if(resultAt){
			
			// 전달 기본값 추출
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			if(inDsMap == null){
				throw new NexaServiceException("err.입력데이터셋.없음");
			}
			
			Map inMap = inDsMap.get(0);
			String inReqstYm = (String)inMap.get("DEFRAY_YM");	// 신청월
			String inAtcngJobSe = (String)inMap.get("ATCNG_JOB_SE");	// 업무구분
			
			Map userMap = (Map)inMap.get("USER");
			String inUserId = (String)userMap.get("S_USER_ID");	// 사용자 ID
			
			// 기존 해당 년월 데이터 삭제
			baseDao.delete("RNT01051403DAO.deleteAtcngRcivInfo", inMap);
			
			// 데이터부 데이터 저장 처리
			List<Map> resultBodyList = null;	// 저장 레코드
			//int newCnt = 0;		// 신규건수
			//int canCnt = 0;		// 해지건수
			//int etcCnt = 0;		// 기타건수
			
			List<Map> bodyList = (List<Map>)readDataMap.get("DATA_BODY");	// 데이터 목록
			
			Map<String, Object> headerItem = (Map<String, Object>)readDataMap.get("DATA_HEADER");
			
			String tranReqDe = (String) headerItem.get("TRANSFR_REQEST_DE");
			String defrayDe = (String) headerItem.get("DEFRAY_DE");
			
			int bodyListSize = bodyList == null ? 0 : bodyList.size();
			for(int i = 0; i < bodyListSize; i++){
				
				Map<String, Object> bodyItem = (Map<String, Object>)bodyList.get(i);
	
				// 추가 저장값 설정
				bodyItem.put("DEFRAY_YM", inReqstYm);		// 신청월 
				bodyItem.put("ATCNG_JOB_SE", inAtcngJobSe);
				bodyItem.put("TRANSFR_REQEST_DE", tranReqDe);
				bodyItem.put("DEFRAY_DE", defrayDe);
				
				// 월별 자동이체 신청/해지정보 건별 등록
				baseDao.insert("RNT01051403DAO.insertAtcngReqstRcivInfo", bodyItem);
				
				if(resultBodyList == null){
					resultBodyList = new ArrayList<Map>();
				}
				
				resultBodyList.add(bodyItem);
				
			}
			
			// header
			Map<String, Object> headerMap = (Map<String, Object>)readDataMap.get("DATA_HEADER");	// Header내용
			DataSetMap headDsMap = new DataSetMap();
			headDsMap.add(headerMap);
			
			// body
			DataSetMap bodyDsMap = new DataSetMap();
			bodyDsMap.setRowMaps(resultBodyList);
			
			// footer
			Map<String, Object> footerMap = (Map<String, Object>)readDataMap.get("DATA_FOOTER");	// Footer 내뇽

			// 파일의 TOTAL_CNT 부분은 총 레코드 수를 나타내므로 실제 Body 행 수로 변경한다.
			// ※ TOTAL_CNT 필드명은 화면에서 지정한 필드명임.
			int resultBodySize = resultBodyList == null ? 0 : resultBodyList.size();
			//footerMap.put("TOTAL_CNT", resultBodySize);	// 총 건수
			//footerMap.put("NEW_CNT", newCnt);			// 신규 건수
			//footerMap.put("CAN_CNT", canCnt);			// 해지 건수
			//footerMap.put("ETC_CNT", etcCnt);			// 기타 건수
			
			DataSetMap footDsMap = new DataSetMap();
			footDsMap.add(footerMap);
			
			outDataset.put("headInfo", headDsMap);
			outDataset.put("bodyList", bodyDsMap);
			outDataset.put("footInfo", footDsMap);
			
		}else{
			
			String resultMsg = (String)readDataMap.get("RESULT_MSG");
			// {0} 아닙니다. {1} 확인하세요
			throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
			
		}
    }
    
    /**
     * 자동이체정보 결과 등록 .
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void saveAtcngRcivList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
	 
	    
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		
        System.out.println("===========================================================");
        System.out.println("=================" + inMap +     "==================");
        System.out.println("===========================================================");
        
        List <Map> records = (List<Map>)baseDao.list("RNT01051403DAO.selectCheck", inMap);	// 소인처리체크
        
        int chk = Integer.parseInt(records.get(0).get("CNT").toString());
        
        if(chk > 0) throw new NexaServiceException("info.처리불가","이미 소인처리된 자료입니다.");
        
        baseDao.update("RNT01051403DAO.updateAtcngRcivDemand", inMap);
        baseDao.update("RNT01051403DAO.updateAtcngRcivResult", inMap);
       	

	}	
	
}
