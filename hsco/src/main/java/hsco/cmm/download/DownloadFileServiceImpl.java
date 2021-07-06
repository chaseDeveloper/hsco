package hsco.cmm.download;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;


/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FileUploadService.java
 * @Description  	: File Upload
 * @author       	: 정윤원
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 11.					정윤원			최초생성
 * </pre>
 */
@Service("DownloadFileService")
public class DownloadFileServiceImpl extends BaseService implements DownloadFileService {
	private static final Logger LOGGER = LoggerFactory.getLogger(DownloadFileServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 다운로드 파일의 정보 목록을 조회한다.
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes"})
	public List<Map> selectDownloadInfoList(NexacroMapDTO xpDto) throws NexaServiceException {
    	if(LOGGER.isInfoEnabled()){
    		LOGGER.info("selectDownloadInfoList started!");
    	}
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		List <Map> records = new ArrayList<Map>();
		
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map inMap = list.get(x);
			if (inMap != null) {
				Map map = (Map)baseDao.select("selectDownloadFile", inMap);
				records.add(map);
			}
		}
		return records;
		
	}
    
    /**
	 * 다운로드 파일의 정보를 조회한다.
	 * @param Map 
	 * @return Map
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes", "unchecked"})
	public Map<String, Object> selectDownloadInfo(Map<String, Object> fileInfo) throws NexaServiceException {
		
    	Map downFileInfo = null;
    	if(fileInfo != null)
    	{
    		downFileInfo = (Map)baseDao.select("selectDownloadFile", fileInfo);
    	}
    	
		return downFileInfo;
	}
    
	/**
	 * 다운로드 파일의 정보 목록을 조회한다.
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes"})
	public Map selectDownloadInfo(String filename) throws NexaServiceException {

		Map<String, String> inMap = new HashMap<String, String>(); 
		inMap.put("STRE_FILE_NM", filename);
		Map map = (Map)baseDao.select("selectDownloadFileInfo", inMap);

		return map;
	}
    
    
    /**
	 * 내부결재 완료다운로드 파일의 정보 목록을 조회한다.(attach.ini 파일 작성용)
	 * @param (List <Map>) 
	 * @return String
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes", "unchecked"})
	public String selectCompletedSanctnFileCn(NexacroMapDTO xpDto) throws NexaServiceException {
        StringBuffer sb = new StringBuffer();
        sb.append("[Attach]\n");
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		Map inMap;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
    	List<Map> records;
    	if(list == null){
			throw new NexaServiceException("info.정보.없음", "내부결재 완료정보");
		} else {
			inMap = (Map)list.get(0);
			
			records = (List<Map>)baseDao.list("selectCompletedSanctnFileList", inMap);
			int lsize = records.size();
			sb.append("Attach.cnt=" + lsize + "\n");
			for(int i=0; i< lsize;i++){
				Map map = (Map)records.get(i);
				sb.append("Attach." + i + "=C:\\HandySoft\\HANDYGroupware8\\bin\\" + (String)map.get("ORGINL_FILE_NM"));
			}
		}		
		return sb.toString();
	}
    
    /**
	 * 내부결재 완료 다운로드 파일  목록을 조회한다.
	 * @param (Map list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes", "unchecked"})
	public List<Map> selectCompletedSanctnFileList(NexacroMapDTO xpDto) throws NexaServiceException {
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		Map inMap;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		List<Map> records;
		if(list == null){
			throw new NexaServiceException("info.정보.없음", "내부결재 완료정보");
		} else {
			inMap = (Map)list.get(0);
			records = (List<Map>)baseDao.list("selectCompletedSanctnFileList", inMap);
		}
			
		return records;
	}
    
    
    
    /**
	 * 다운로드 파일의 정보 목록을 조회한다.
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes", "unchecked"})
	public List<Map> selectDownloadList(Map<String, Object> map) throws RuntimeException, Exception {
		
    	List<Map> record;
    	record = (List<Map>)baseDao.list("selectDownloadList", map);

		return record;
	}
}
    