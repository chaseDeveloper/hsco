package hsco.pms.com.PMS000007;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

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
 * @Class Name   	: PMS000007ServiceImpl.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 8.17.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.		 홍길동			최초생성
 * </pre>
 */
@Service("PMS000007Service")
public class PMS000007ServiceImpl extends BaseService implements PMS000007Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    @Resource(name = "COM000000Service")
    protected COM000000ServiceImpl COM000000Service;       
    
	/**
	 * 현금영수증 결과 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseCashRcipt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = null;
		
		if(inMap.get("JOB_SE").equals("RN1")){
			records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptRN1", inMap);
		} else if(inMap.get("JOB_SE").equals("RN2")){
			records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptRN2", inMap);
		} else if(inMap.get("JOB_SE").equals("HOU")){
			records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptHOU", inMap);
		}

		

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	/**
     * 현금영수증 결과 파일 읽기
     * - 파일을 읽어 내용을 데이터화 하고 저장 처리후 결과를 반환한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws Exception
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void uploadCashRqestList(DataSetMap tranInfo, Map<String, Object> inVar, 
    		    Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
    		    Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	NexacroMapDTO xpDto = getXpDto();
    	
    	// 업로드 파일 데이터 화
    	Map<String, Object> readDataMap = COM000000Service.getCashDataFromFile(xpDto);
    	
    	
		boolean resultAt = Boolean.valueOf((String)readDataMap.get("RESULT_AT"));	// 처리 성공여부
		
		if(resultAt){
			
			// 전달 기본값 추출
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			if(inDsMap == null){
				throw new NexaServiceException("err.입력데이터셋.없음");
			} else {
				inMap = inDsMap.get(0);
			}
		
			
			String inJobSe = (String) inMap.get("JOB_SE");
			String inCreatDe = (String) inMap.get("CREAT_DE");
		
			
			// 기존 해당 년월 데이터 삭제
			//baseDao.delete("PMS000007DAO.deleteHouseCashRcipt", inMap);
			
			List<Map> resultBodyList = null;	// 저장 레코드		
			
			
		
			List<Map> bodyList = (List<Map>)readDataMap.get("DATA_BODY");	// 데이터 목록
			System.out.println("::::::::::::bodyList.get(0) 11:: " + bodyList.get(0) );
			if(bodyList.get(0).get("DATA_YN").equals("Y")){
				
				resultBodyList = new ArrayList<Map>();
				Map<String, Object> bodyItem = (Map<String, Object>)bodyList.get(0);
				bodyItem.put("ERROR_CODE", ""); 
				System.out.println("::::::::::::bodyList.get(0) 22:: " + bodyList.get(0) );
				resultBodyList.add(bodyItem);
			} else {
				
				if(bodyList != null){
				
					String creatDe = "20" +(String)bodyList.get(0).get("CREAT_DE");
					String subCreatDe = creatDe.substring(0,4) + "-" + creatDe.substring(4,6) +"-" + creatDe.substring(6,8);
					if(! creatDe.equals(inCreatDe)){
						String resultMsg = "해당 생성일[ "+subCreatDe+" ]이";
						// {0} 아닙니다. {1} 확인하세요
						throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
					}
				}
				int bodyListSize = bodyList == null ? 0 : bodyList.size();
			
				for(int i = 0; i < bodyListSize; i++){
					
					Map<String, Object> bodyItem = (Map<String, Object>)bodyList.get(i);
					bodyItem.put("JOB_SE", inJobSe);
					
					List <Map> records = null;
					
					if(inJobSe.equals("RN1")){
						records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptEaRN1", bodyItem);
					} else if(inJobSe.equals("RN2")){
						records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptEaRN2", bodyItem);
					} else if(inJobSe.equals("HOU")){
						records = (List<Map>)baseDao.list("PMS000007DAO.selectHouseCashRciptEaHOU", bodyItem);
					}
					
					if(records == null){
						String resultMsg = "해당 파일의 정보가 정확한 자료가";
						// {0} 아닙니다. {1} 확인하세요
						throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
					}
					
					String houseCede = (String)records.get(0).get("HOUSE_CODE");
					String houseNm = (String)records.get(0).get("HOUSE_NM");
					String dong = (String)records.get(0).get("DONG");
					String ho = (String)records.get(0).get("HO");
					String nm = (String)records.get(0).get("NM");
					String ihidNum = (String)records.get(0).get("IHIDNUM");
					
					bodyItem.put("HOUSE_CODE", houseCede);
					bodyItem.put("HOUSE_NM", houseNm);
					bodyItem.put("DONG", dong);
					bodyItem.put("HO", ho);
					bodyItem.put("NM", nm);
					bodyItem.put("IHIDNUM", ihidNum);
					
					//baseDao.insert("PMS000007DAO.insertHouseCashRcipt", bodyItem);
					if(resultBodyList == null){
						resultBodyList = new ArrayList<Map>();
					}
					
					resultBodyList.add(bodyItem);								
				}
			}
		
			// body
			DataSetMap bodyDsMap = new DataSetMap();
			bodyDsMap.setRowMaps(resultBodyList);
			
			outDataset.put("bodyList", bodyDsMap);
		
		}else{
			
			String resultMsg = (String)readDataMap.get("RESULT_MSG");
			// {0} 아닙니다. {1} 확인하세요
			throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
			
		}
    }	
	
    
    /**
     * 현금영수증 결과자료 입력 프로시저 호출
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void sprnt_tbpms_cash_result_i(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)	
			inMap = inDsMap.get(0);
		
		baseDao.update("PMS000007DAO.updateCashRciptResult", inMap);
		
		
		log.debug("프로시저 호출 ----------------------------------------------------!");	
		
		System.out.println(":::::::::: for inDsMap:: size :: " +inDsMap.size());
		
		for( int i=0; i<inDsMap.size(); i++){
			if (inDsMap != null)	
				inMap = inDsMap.get(i);
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("PMS000007DAO.SPRNT_TBPMS_CASH_RESULT_I", inMap);
		}
				
	}	
	 /**
     * 현금영수증 결과자료 정상건 수정
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void updateHouseCashRcipt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)	
			inMap = inDsMap.get(0);
		
		System.out.println("::::::::::::: update start :::::::::::");
		System.out.println("::::::::::::: inMap.CREAT_DE :: " + inMap.get("CREAT_DE"));
		System.out.println("::::::::::::: inMap.JOB-SE :: " + inMap.get("JOB_SE"));
		
		baseDao.update("PMS000007DAO.updateCashRciptResult", inMap);
				
	}
}
