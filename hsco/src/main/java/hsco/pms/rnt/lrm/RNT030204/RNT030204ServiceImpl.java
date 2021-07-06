package hsco.pms.rnt.lrm.RNT030204;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030101ServiceImpl.java
 * @Description  	: 부동산/법무사 등록을 관리하는 서비스 구현체 클래스
 * @author       	: 이광원
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6.  9.       이광원	    	최초생성
 *  2013  3. 28        이광원               내부결제 추가             
 * </pre>  
 */

@Service("RNT030204Service")
public class RNT030204ServiceImpl extends BaseService implements RNT030204Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 

    /* 신청자  조회 */
	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030204DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	/* 계약자  조회 */
	@SuppressWarnings("rawtypes")
	public void getList1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList1", inVar);
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}
	/* 신청자 권리분석 조회 */
	@SuppressWarnings("rawtypes")
	public void getList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList2", inVar);
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}
    /* 계약자 권리분석 조회 */
	@SuppressWarnings("rawtypes")
	public void getList3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList3", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030204DAO.getList3", inVar);
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		      
		outDataset.put("output4", outDsMap);
	}
	
	/* 결제ID 저장 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rightAnalsU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//결제번호 수정
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT030204DAO.listU", map);
		}
	} 	
	
	/* 결제자 목록 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sanctnerNmDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030204DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	/* 출력물  */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnUbiDataset(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = null;
		//권리분석 상세
		if("001".equals(inMap.get("APPLCNT_CNTRCTR_SE"))){
			records = (List<Map>)baseDao.list("RNT030204DAO.getList2", inMap);
		}	
		if("002".equals(inMap.get("APPLCNT_CNTRCTR_SE"))){
			records = (List<Map>)baseDao.list("RNT030204DAO.getList3", inMap);
		}	
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		
		//결제자 이름 목록
		records = (List<Map>)baseDao.list("RNT030204DAO.sanctnerNmDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
	}	
	
	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
         Map sanctnInfo = null; 
         DataSetMap dsSetMap = inDataset.get("input1");  
         List<Map> list = dsSetMap.getRowMaps();
         
         int lsize = (list == null) ? 0 : list.size();
         if(lsize > 0){
           	  sanctnInfo = (Map)list.get(0);
         }

          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
         	
         	Map recordMap = null; 
         	
         	StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
         	
   		if(st.hasMoreTokens()){
   			recordMap = new HashMap<String, String>();
   			recordMap.put("ACCNUT_YEAR", st.nextToken());
   			recordMap.put("ENDW_INCME_DECSN_NO", st.nextToken());
   		}
	}	
	
    /* 권리분석 CUD */
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030204DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030204DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030204DAO.listD", map);
				break;
				
			}		
		}
	}
	
	
	// 사진첨부 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){			
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    		
    	}
    	
		List<Map> failList = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT030204DAO.atchCUD", targetMap);
			}

		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}

		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failList", failMap);		
}

    /* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		if (list != null){
			Map<String, Object> inMap = list.get(0);
			
			for (int x = 0; x < list.size(); x++) {
					
				Map<String, Object> map = list.get(x);
				
				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
					
					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
													
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
				}
			
			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
			if(fileCnt == 0)
			{
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("RNT030204DAO.atchDelete", inMap);
			}				

			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
    	}
    
	/** 일괄등록 */
	@SuppressWarnings("rawtypes")
	
	public void listC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
				baseDao.insert("RNT030204DAO.SP_RN_RENT_RIGHT_ANALS_I", map);
				if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
				}
				if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
				}				
						
			}
		
		}    

}