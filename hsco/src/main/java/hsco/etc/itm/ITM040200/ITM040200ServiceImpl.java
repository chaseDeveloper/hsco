package hsco.etc.itm.ITM040200;

import java.util.ArrayList;
import java.util.HashMap;
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
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM040200ServiceImpl.java
 * @Description  	: 월정기점검 내역을 관리하는 컨트롤러 클래스
 * @author       	: 이호준
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
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */

@Service("ITM040200Service")
public class ITM040200ServiceImpl extends BaseService implements ITM040200Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;  
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
    /** 월정기점검관릐(월점검관리) 목록을  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200List", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
      //System.out.println("####업체구분#### inmap"+inMap);
      
    }
    
    /** 월정기점검관릐(월점검관리) 신규,수정,삭제 한다  */
    @SuppressWarnings({ "rawtypes" })
    
    public int ITM040200CUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("ITM040200DAO.ITM040200C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("ITM040200DAO.ITM040200U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("ITM040200DAO.ITM040200D", map);
                    break;
            
            }   
            
        }
        
        return iRow;
        
    }

    /** 월정기점검관릐(운영현황표) 목록을  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200Tab2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        List <Map> records2;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200Tab2List", inMap);     
        records2 = (List<Map>)baseDao.list("ITM040200DAO.ITM040200Tab2Month", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);

        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);     
        
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
        
        //System.out.println("####운영현황표#### inmap"+inMap);
    }
    /** 월정기점검관리 운영현황표 보고서  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200Report( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        List <Map> records2;
        List <Map> records3;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200Report", inMap);        
        records2 = (List<Map>)baseDao.list("ITM040200DAO.ITM040200ReportRM", inMap);
        records3 = (List<Map>)baseDao.list("ITM040200DAO.ITM040200ReportMonth", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2); 
        
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps(records3); 
        
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
        outDataset.put("output3", outDsMap3);
        
    }
    /** 월정기점검관릐(운영현황표) 월별 세부내역을  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200Tab22List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200Tab22List", inMap);        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /** 월정기점검관릐(운영현황표) 특이사항내역을  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200Tab23List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200Tab23List", inMap);        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /** 자료생성 */
    @SuppressWarnings({ "rawtypes" })
    public void ITM040200COPY(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    
        // 전달값 확인
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        baseDao.insert("ITM040200DAO.ITM040200COPY", inMap);
        
        List<Map> resultList = new ArrayList<Map>();    
        resultList.add(inMap);      
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(resultList);
        outDataset.put("output1", outDsMap);
    }
    
    /** 업체명 목록  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200List_P( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200List_P", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
        //System.out.println("###########업체구분#### map"+inMap);
        
    }
    
    /** 장비구분 목록  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200ITCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        
        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200ITCodeList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);        
        
        //System.out.println("#####장비구분######### map"+inMap);
    }    
    /** 장비구분 상세 목록  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200ITCodeDetail( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        
        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200ITCodeDetail", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);        
    }
    /** 장비목록  조회 */
    @SuppressWarnings("rawtypes")
    public void ITM040200MODELCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        
        records = (List<Map>)baseDao.list("ITM040200DAO.ITM040200MODELCodeList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);        
    }
    
    /**
     * 첨부파일 정보 수정(저장)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;
		if(fileInfo != null){
		log.info("serivceimple 호출~ = ");	
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();		
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(upResult != null){
				// 업로드 첨부파일의 수가 1건일 경우 파일 순차번호 포함
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				String resFileOrdr = String.valueOf(upResult.get("FILE_ORDR"));
				//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
				map.put("FILE_SN", resFileSn);
				map.put("FILE_ORDR", resFileOrdr);
				
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("ITM040200DAO.listU", map);
				log.info("INSERT완료 = " + map.toString());
		}
	}
	
	/**
     * 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	/* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void ITM040200DFILE(DataSetMap tranInfo, Map<String, Object> inVar,
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
			baseDao.delete("ITM040200DAO.ITM040200DFILE", inMap);
		}				
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    
    /** HW비고란 등록 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int hwRmU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
   		
   		int listSize = (list == null) ? 0 : list.size();
   		
   		for (int x = 0; x < listSize; x++) {
   				
   			Map map = list.get(x);
   			
   			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
   			
   			switch(rowType) {
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("ITM040200DAO.hwRmU", map);
   					break;
   			    default:
   			    	break;
   			}	
   			
   		}
   		
   		return iRow;
   		
   	}
    
    /** SW비고란 등록 */
   	@SuppressWarnings({ "rawtypes" })
   	public int swRmU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
   		
   		int listSize = (list == null) ? 0 : list.size();
   		
   		for (int x = 0; x < listSize; x++) {
   				
   			Map map = list.get(x);
   			
   			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
   			
   			switch(rowType) {
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("ITM040200DAO.swRmU", map);
   					break;
   			    default:
   			    	break;
   			}	
   			
   		}
   		
   		return iRow;
   		
   	}
}