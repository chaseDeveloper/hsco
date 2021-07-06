package hsco.pms.rnt.lrm.RNT030307;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030306ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 8.				       이광원		    	최초생성
 * </pre>  
 */


@Service("RNT030307Service")
public class RNT030307ServiceImpl extends BaseService implements RNT030307Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;        
    
    /* 계약자 조회 */
	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030307DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	/* 세대원 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030307DAO.getListR1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030307DAO.getListR1", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}
	
	/* 소유물건 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030307DAO.getListR2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030307DAO.getListR2", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}
	
	/** 신규,수정,삭제 */
	@SuppressWarnings("rawtypes")
	
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input3");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030307DAO.SP_RN_RENT_POSESN_CNTRCT_I", map);
				if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
				}
				if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
				}				
				break;

			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030307DAO.SP_RN_RENT_POSESN_U", map);
				if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
				}				
				break;				
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030307DAO.listD", map);
				break;
			}			
			
			
		}
		
	}
	
	
	//  저장
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
				baseDao.insert("RNT030307DAO.listU1", map);
				log.info("INSERT완료 = " + map.toString());
	}
}	
	
}