package hsco.pms.sls.hou.rci.SLS040203;

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
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040203ServiceImpl.java
 * @Description  	: 자동이체수납결과 관리를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.14		이상준			Rework
 * </pre>
 */
@Service("SLS040203Service")
public class SLS040203ServiceImpl extends BaseService implements SLS040203Service {

protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
    
    
    /**
     * 월별 자동이체 수납결과 등록여부체크(카운트)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"}) 
	public void selectAtcngRcivCnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040203DAO.selectAtcngRcivCnt", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("output1", outDsMap);
	}
    
    
	/**
     * 월별 자동이체 수납결과 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectAtcngRcivList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040203DAO.selectAtcngRcivList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("atcngRcivList", outDsMap);
	}
    
	/**
     * 월별 자동이체 내역 조회 합계
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({"rawtypes"})
	public void selectAtcngRcivSumInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map resMap = null;
		
		resMap = (Map)baseDao.select("SLS040203DAO.selectAtcngRcivSumInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(resMap);
		
		outDataset.put("atcngRcivSumInfo", outDsMap);
	}
	
	
	/**
     * 월별 자동이체 결과 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
		
	@SuppressWarnings({ "rawtypes" })	
	public int saveAtcngRcivList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		/*기존 등록자료 삭제 처리 */
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		Map map2 = list2.get(0);
		String  pMonth = (String) map2.get("DEFRAY_YM");
		
		iRow += baseDao.delete("SLS040203DAO.deleteAtcngRcivList", pMonth); //삭제
		/*기존 등록자료 삭제 처리 */
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
	    
		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
	
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			//String delMonth = (String) map.get("DEFRAY_YM"); //출금년월(해당출금년월 데이터 삭제)
			
			//log.debug("delMonth##########################################################################[RUN]delMonth : "+ delMonth+"##############");
			
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			
			
			log.debug("############로우타입 수정 :"+ rowType +"  #####");
			
			baseDao.insert("SLS040203DAO.insertAtcngRcivList"       , map);       //입력
			
			/*
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				log.debug("인스터 :"+rowType+"  #####");
				
				iRow += baseDao.delete("SLS040203DAO.deleteAtcngRcivList", map); //삭제
				baseDao.insert("SLS040203DAO.insertAtcngRcivList"       , map);       //입력
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				log.debug("수정 :"+rowType+"  #####");
				iRow += baseDao.delete("SLS040203DAO.deleteAtcngRcivList", map); //삭제
				baseDao.insert("SLS040203DAO.insertAtcngRcivList"       , map);       //입력
				
				
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				log.debug("삭제 : "+rowType+"  #####");
				//iRow += baseDao.delete("SLS040203DAO.deleteAtcngRcivList", map); //삭제
				break;
		    }
			*/
			
		}

		return iRow;
	}
	
	
	
	
}
