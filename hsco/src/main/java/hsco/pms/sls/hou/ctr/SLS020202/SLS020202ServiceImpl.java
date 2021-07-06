package hsco.pms.sls.hou.ctr.SLS020202;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020202ServiceImpl.java
 * @Description  	: 주택계약자 명의 변경 ServiceImpl
 * @author       	: 정윤원
 * @since        	: 2015. 9.2.
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
 *  
 * </pre>
 */
@Service("SLS020202Service")
public class SLS020202ServiceImpl extends BaseService implements SLS020202Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    /** 파일 업로드 서비스 **/ 
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
		
    
	/**
	 * 주택대출 대출구분 코드 콤보 리스트.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cmbLonSeCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020202DAO.cmbLonSeCodeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020202DAO.cmbLonSeCodeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

		
	/**
	 * 주택계약자변경 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrChangeList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020202DAO.selectHcntrctrChangeList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
		
	/**
	 * 주택계약자변경 신규
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrChangeInsert(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020202DAO.selectHcntrctrChangeInsert", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택계약자 명의변경  신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int saveHcntrctrChangeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		// 추가: 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());
    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    	}
		
		// 추가: 파일 첨부
		
		
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		
		/* 추가:Fail List */
		List<Map> failList = new ArrayList<Map>();
		/* 추가:Fail List */
		
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			//String lonRegist = (String) map.get("LON_REGIST");  
			
			
			/* 추가:첨부파일 정보 추출 */
			if(upResult != null){
				int upFileCnt = Integer.parseInt((String.valueOf(upResult.get("UP_FILE_CNT"))));
				
				// 업로드 첨부파일의 수가 1건일 경우 파일 순차번호 포함
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				System.out.println("resFileSn = " + resFileSn);
				
				String resFileOrdr = String.valueOf(upResult.get("FILE_ORDR"));
				System.out.println("resFileOrdr = " + resFileOrdr);
				//if(upFileCnt == 1){
				
				map.put("CHANGE_ATCHMNFL_COURS", resFileSn + "|" + resFileOrdr); //첨부파일 정보 세팅 (파일순번|파일명)
//				}else{
//					targetMap.put("ATCH_FLPTH", resFileSn);
//				}
				
//				System.out.println(targetMap.toString());
			}
			//System.out.println("rowType = " + rowType);
			/* 추가:첨부파일 정보 추출 */
			
			
			
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//명의변경 신규고객 저장
				/*if (map.get("NM2") != null && map.get("IHIDNUM2") != null) {					
					Integer cstmrNo = selectCtmrNo();
					map.put("HOUSE_CSTMR_NO", cstmrNo);										
					baseDao.insert("SLS020202DAO.insertChouseCstmrInfo", map);						
				}*/
				
				//명의변경저장
				baseDao.insert("SLS020202DAO.insertHcntrctrChange", map);
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.insert("SLS020202DAO.updateChouseCstmrInfo", map);	
				iRow += baseDao.update("SLS020202DAO.updateHcntrctrChange", map);
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS020202DAO.deleteHcntrctrChange", map);
				break;
		    }
			
		}

		return iRow;
	}
	
	
	
	/**
	 * 주택 코드 명의변경 신청서
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectNmchangeReqstdoc(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020202DAO.selectNmchangeReqstdoc", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020202DAO.selectNmchangeReqstdoc", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	
}
