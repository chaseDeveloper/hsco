package hsco.etc.itm.ITM050400;

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
 * @Class Name   	: ITM050400ServiceImpl.java
 * @Description  	: 사용자지침서를 관리하는 컨트롤러 클래스
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

@Service("ITM050400Service")
public class ITM050400ServiceImpl extends BaseService implements ITM050400Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM050400ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
    /** 사용자지침서 목록  리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM050400List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM050400List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM050400DAO.ITM050400List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 사용자지침서 변경내역 목록을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM050400DetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM050400DAO.ITM050400DetailList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM050400DAO.ITM050400DetailList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	
    /** 사용자지침서 변경내역을 신규,수정 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int ITM050400DetailCU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");

    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());
    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    		
    	}
    	
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if(upResult != null){
				map.put("MANUAL_ATCH_FLTPH", upResult.get("FILE_SN"));
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ITM050400DAO.ITM050400DetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM050400DAO.ITM050400DetailU", map);
					break;
				/*case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM050400DAO.ITM050400DetailD", map);
					break;*/
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
	/** 사용자지침서 삭제*/
	@SuppressWarnings({ "rawtypes" })
	
	public void ITM050400DetailD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			String inFileSn = (String)inMap.get("MANUAL_ATCH_FLTPH");	// 파일일련번호
			
			boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
			if(hasAtchFile){
				NexacroMapDTO xpDto = getXpDto();
				Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
				
				log.info("첨부파일 삭제 결과 = " + delResult.toString());
			}
			
			// 삭제
			baseDao.delete("ITM050400DAO.ITM050400DetailD", inMap);
		
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}
	
	/**
     * 사용자지침서 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"rawtypes"})
    public void ITM050400DFILE(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			// 공통파일정보 삭제
			NexacroMapDTO xpDto = getXpDto();
			Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
			
			if(delResult == null){
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
			
//			System.out.println("삭제결과" + delResult.toString());
			
			// 업데이트 데이터 구성
			Map<String, Object> updateMap = new HashMap<String, Object>();
			updateMap.put("MANUAL_PROCESS_DT", inMap.get("MANUAL_PROCESS_DT"));		
			updateMap.put("MANUAL_PROCESS_DTLS", inMap.get("MANUAL_PROCESS_DTLS"));
			updateMap.put("MANUAL_VER", inMap.get("MANUAL_VER"));
			updateMap.put("JOB_SE", inMap.get("JOB_SE"));
			updateMap.put("SN", inMap.get("SN"));					
			updateMap.put("MANUAL_ATCH_FLTPH", null);				
			updateMap.put("MANUAL_ATCH_FILE", null);				
			
			baseDao.update("ITM050400DAO.ITM050400DetailU", updateMap);
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
}
