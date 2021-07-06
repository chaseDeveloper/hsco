package hsco.mis.ass.ASS000000;

import hsco.cmm.download.DownloadFileServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.io.File;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ASS000000ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2016. 03. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 03. 02.	               양성모		        최초생성
 * </pre>  
 */
@Service("ass000000Service")
public class ASS000000ServiceImpl extends BaseService {
	
	  protected Logger log = LoggerFactory.getLogger(this.getClass());
	    
	  @Resource(name="DownloadFileService")
	  DownloadFileServiceImpl DownloadFileService;
						
		/**
		 * 첨부파일 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			
	        Map inMap = null;
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	        }
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
	        
	        if(outDsMap.size()>0){
	            
	            Map<String, Object> schInfoMap = new HashMap<String, Object>();

                schInfoMap.put("FILE_SN", new BigDecimal(outDsMap.get(0).get("FILE_SN").toString()));
                schInfoMap.put("FILE_ORDR", outDsMap.get(0).get("FILE_ORDR"));
                
                Map<String, Object> fileItem = (Map<String, Object>)DownloadFileService.selectDownloadInfo(schInfoMap);
                if(fileItem == null){
                    throw new NexaServiceException("err.파일.다운로드.실패");
                }
                
                String savePath = (String)fileItem.get("FILE_STRE_COURS");      // 저장경로
                String saveFilename = (String)fileItem.get("STRE_FILE_NM");     // 저장파일명
                String fileExtsn = (String)fileItem.get("FILE_EXTSN");          // 파일확장자

                String repoFilePath = savePath + File.separator + saveFilename + "." + fileExtsn;
                
                File downFile = new File(repoFilePath);
                
                if(downFile.exists()){
	                outDataset.put("output1", outDsMap);
	            }else{
	                throw new NexaServiceException("err.파일.다운로드.실패", "파일없음");
	            }
	        }

		}		
	
}
