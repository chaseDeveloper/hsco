package hsco.pms.rnt.lrm.RNT030302;

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
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030302ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 1.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 1.				       이광원		    	최초생성
 * </pre>  
 */

@SuppressWarnings("unused")
@Service("RNT030302Service")
public class RNT030302ServiceImpl extends BaseService implements RNT030302Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030302DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	/* 해약 조회 */
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
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR1", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}

	/* 월임대료 조회 */
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
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR2", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}	
	
	/* 지원금반환내역 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR3", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR3", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}	
	
	/* 과오납내역 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR4(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR4", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030302DAO.getListR4", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}		
	
	
	/** 신규,수정,삭제 */
	@SuppressWarnings("rawtypes")
	
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030302DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030302DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030302DAO.listD", map);
				break;		
			}		
		}
	}	

	@SuppressWarnings("rawtypes")
	public void listCUD1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		log.debug("프로시저 호출 ----------------------------------------------------!");		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030302DAO.SP_RN_RENT_COST_IU", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

	}
	
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void approveU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("RNT030302DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}    
	

}