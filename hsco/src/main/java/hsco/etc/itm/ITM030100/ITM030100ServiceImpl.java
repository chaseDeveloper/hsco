package hsco.etc.itm.ITM030100;

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
 * @Class Name   	: ITM030100ServiceImpl.java
 * @Description  	: Service Request를 관리하는 컨트롤러 클래스
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

@Service("ITM030100Service")
public class ITM030100ServiceImpl extends BaseService implements ITM030100Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM030100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
    /** ObjId 리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100ListObjId( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM030100ListObjId Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100ListObjId", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	} 
    
    
    /** 업무구분리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100ListJob( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100ListJob", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    

    /** 부서리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100ListDept( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100ListDept", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 사번리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100ListEmp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100ListEmp", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /** Service Request 접수내역을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** Service Request 처리내역상세 리스트를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM030100DetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100DetailList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM030100DAO.ITM030100DetailList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	
    /** Service Request 접수내역을 신규,수정,삭제*/
	@SuppressWarnings({ "rawtypes" })
	
	public int ITM030100CUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ITM030100DAO.ITM030100C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					System.out.println("################# map"+map);
					iRow += baseDao.update("ITM030100DAO.ITM030100U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM030100DAO.ITM030100D", map);
					break;
			    default:
			    	break;
			}	
			
		}
		
		return iRow;
		
	}
	
	
	/** Service Request 처리내역상세를 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ITM030100DetailCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ITM030100DAO.ITM030100DetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM030100DAO.ITM030100DetailU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM030100DAO.ITM030100DetailD", map);
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
	/**
     * 서비스 접수 첨부파일 정보 수정(저장)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD_1( DataSetMap tranInfo, Map<String, Object> inVar,
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
				//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
				map.put("SVC_RCEPT_FLTPH", resFileSn);
				
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("ITM030100DAO.atchU_1", map);
				log.info("INSERT완료 = " + map.toString());
		}
	}
	
	/**
     * 서비스 접수 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	/* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDel_1(DataSetMap tranInfo, Map<String, Object> inVar,
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
			baseDao.update("ITM030100DAO.atchDel_1", inMap);
		}				
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    
    /**
     * 서비스 처리 내역 첨부파일 정보 수정(저장)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD_2( DataSetMap tranInfo, Map<String, Object> inVar,
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
				//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
				map.put("FILE_SN", resFileSn);
				
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("ITM030100DAO.atchU_2", map);
				log.info("INSERT완료 = " + map.toString());
		}
	}
	
	
	/**
     * 서비스 처리 내역 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	/* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDel_2(DataSetMap tranInfo, Map<String, Object> inVar,
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
			baseDao.update("ITM030100DAO.atchDel_2", inMap);
		}				
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }

}
