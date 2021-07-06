package hsco.pms.com.PMS000000;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
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
 * @Class Name   	: SLS020301ServiceImpl.java
 * @Description  	: 
 * @author       	: 김시영
 * @since        	: 2015. 6.11.
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
 *  2015. 8.26.					   정윤원				작성자 변경
 * </pre>
 */
@Service("PMS000000Service")
public class PMS000000ServiceImpl extends BaseService implements PMS000000Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
   
    
    /**
     * 담당자 설정 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;

		resList = (List<Map>)baseDao.list("PMS000000DAO.getList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("output1", outDsMap);
	}    

    /**
     * 담당자 설정 등록,수정,삭제 처리
     *  - 대상 리스트의 행 데이터 타입에 따라 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    
	@SuppressWarnings({ "unchecked","rawtypes" })	
	public void listCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("PMS000000DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("PMS000000DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("PMS000000DAO.listD", map);
				break;		
			}		
		}	
	}

    /**
     * 화성도시공사 사업자정보 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void cprInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	Map inMap = null;
    	
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000000DAO.cprInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 담당자목록 (영구/임대/전세)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void damdangjaList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000000DAO.damdangjaList", inMap);	// 담당자목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 담당자목록 (주택)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void damdangjaList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000000DAO.damdangjaList2", inMap);	// 담당자목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
