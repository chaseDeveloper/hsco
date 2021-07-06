package hsco.etc.itm.ITM020100;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
 * @Class Name   	: ITM020100ServiceImpl.java
 * @Description  	: HW대장을 관리하는 컨트롤러 클래스
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

@Service("ITM020100Service")
public class ITM020100ServiceImpl extends BaseService implements ITM020100Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM020100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
    /** 업체목록을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100ListCodeEntrPs( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM020100ListCodeEntrPs Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100ListCodeEntrPs", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 직원목록을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100ListCodeItEmp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100ListCodeItEmp", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 업무구분목록을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100ListCode( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100ListCode", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 장비구분목록을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100ListCodeDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100ListCodeDetail", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** HW대장현황을   조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 장비목록을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100DetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100DetailList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100DetailList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /** 장비목록을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020100HistList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100HistList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020100DAO.ITM020100HistList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    
	
    /** HW대장현황을 신규,수정 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int ITM020100CU( DataSetMap tranInfo, Map<String, Object> inVar,
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
				map.put("MODEL_IMAGE_FLTPH", upResult.get("FILE_SN"));
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ITM020100DAO.ITM020100C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM020100DAO.ITM020100U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM020100DAO.ITM020100D", map);
					break;
			    default:
			    	break;
			}	
			
		}
		
		return iRow;
		
	}
	
	/** 사용자지침서 삭제*/
	@SuppressWarnings({ "rawtypes" })
	
	public void ITM020100D( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			String inFileSn = (String)inMap.get("MODEL_IMAGE_FLTPH");	// 파일일련번호
			
			boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
			if(hasAtchFile){
				NexacroMapDTO xpDto = getXpDto();
				Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
				
				log.info("첨부파일 삭제 결과 = " + delResult.toString());
			}
			
			// 삭제
			baseDao.delete("ITM020100DAO.ITM020100D", inMap);
		
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
    public void ITM020100DFILE(DataSetMap tranInfo, Map<String, Object> inVar,
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
			updateMap.put("MODEL_NM", inMap.get("MODEL_NM"));
			updateMap.put("HW_SE", inMap.get("HW_SE")); 
			updateMap.put("EQPMN_SE", inMap.get("EQPMN_SE"));
			updateMap.put("HW_MAKR", inMap.get("HW_MAKR")); 
			updateMap.put("CPU", inMap.get("CPU"));
			updateMap.put("OPERSYSM", inMap.get("OPERSYSM"));
			updateMap.put("MORY", inMap.get("MORY"));  
			updateMap.put("HDDISK", inMap.get("HDDISK"));
			updateMap.put("MODEL_IMAGE", null);
			updateMap.put("MODEL_IMAGE_FLTPH", null);
			updateMap.put("HW_TY", inMap.get("HW_TY")); 
			updateMap.put("HW_ETC_TY", inMap.get("HW_ETC_TY"));
			updateMap.put("HW_OPER_SE", inMap.get("HW_OPER_SE"));
			updateMap.put("UPPER_HW_NM", inMap.get("UPPER_HW_NM"));
			updateMap.put("HW_DETAIL", inMap.get("HW_DETAIL"));
			updateMap.put("HW_VENDOR", inMap.get("HW_DETAIL"));
			updateMap.put("ETC_HW_VENDOR", inMap.get("ETC_HW_VENDOR"));
			updateMap.put("DOMSTC_AT", inMap.get("DOMSTC_AT"));
			updateMap.put("ASSETS_STTUS", inMap.get("ASSETS_STTUS")); 
			updateMap.put("CPU_REPR", inMap.get("CPU_REPR"));
			updateMap.put("ETC_OPERSYSM", inMap.get("ETC_OPERSYSM")); 
			updateMap.put("MORY_CPCTY", inMap.get("MORY_CPCTY"));
			updateMap.put("TOT_STRE_CPCTY", inMap.get("TOT_STRE_CPCTY"));
			updateMap.put("DPLX_AT", inMap.get("DPLX_AT")); 
			updateMap.put("HW_LIST_INCLS_AT", inMap.get("HW_LIST_INCLS_AT"));
			updateMap.put("HW_DETAIL_MATTER", inMap.get("HW_DETAIL_MATTER"));
			updateMap.put("USE_AT", inMap.get("USE_AT"));
			updateMap.put("MODEL_NO", inMap.get("MODEL_NO"));				
			
			baseDao.update("ITM020100DAO.ITM020100U", updateMap);
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
	
	
	/** 장비목록을 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ITM020100DetailCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ITM020100DAO.ITM020100DetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM020100DAO.ITM020100DetailU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM020100DAO.ITM020100DetailD", map);
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	

	/** 장비계약목록을 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ITM020100HistCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ITM020100DAO.ITM020100HistC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM020100DAO.ITM020100HistU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM020100DAO.ITM020100HistD", map);
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
}
