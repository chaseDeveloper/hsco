package hsco.com.sym.usm.SYM010100;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM010100ServiceImpl.java
 * @Description  	: 사용자정보를 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 24.					정윤원				최초생성
 * </pre>  
 */
@Service("SYM010100Service")
public class SYM010100ServiceImpl extends BaseService implements SYM010100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM010100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    
    /**
	 * 사용자정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("getListUser called"); 
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	 
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SYM010100DAO.getListUser", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    
 	
	/**
	 * 사용자정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 * @throws UnsupportedEncodingException 
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int execCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			// PWD 암호화
			String pwd = (String)map.get("PWD");
			if (!StringUtil.isNull(pwd)) {
				String encPwd = pwd;
				try {
					encPwd = Sha256Cipher.encrypt(pwd, null);
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
				map.put("PWD", encPwd);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
								
					baseDao.update("SYM010100DAO.insertUser", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
			
					iRow += baseDao.update("SYM010100DAO.updateUser", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SYM010100DAO.deleteUser", map);
					break;
			    default:
			    	break;
			}	
			
		}
		
		return iRow;
		
	}
	
    
    /**
     * 사용자 삭제 시 사용자 관련 자식 데이터 현황을 조회한다
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void checkChildData( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		// 배열리스트로 변환
		ArrayList<String> userList = new ArrayList<String>();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			userList.add((String)map.get("USER_ID"));
		}	
		Map<String, ArrayList<String>> inMap = new HashMap<String, ArrayList<String>>();
		// 유틸리티 사용한 방법
		// if(list != null)
		//    userList = ObjectUtil.cvtDataSetMapToArrayList(list, "USER_ID");
		
		inMap.put("userList", userList);  // 변환된 iterate용 key/value 설정
		
		List <Map> records = (List<Map>)baseDao.list("SYM010100DAO.checkChildDataWhenDelete", inMap);	
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

}
