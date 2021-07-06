package hsco.pms.frm.FRM02010800;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FRM02010200ServiceImpl.java
 * @Description  	: 유효이자율관리
 * @author       	: 김지훈
 * @since        	: 2016. 01. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 20.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02010800Service")
public class FRM02010800ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 유효이자율 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmValidintrt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02010800DAO.selectFrmValidintrt", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 유효이자율 변경 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmIntrtChang( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02010800DAO.selectFrmIntrtChang", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	

		
	/**
	 * 유효이자율 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveFrmValidintrt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");   // 거래 유형코드
		
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("FRM02010800DAO.insertFrmValidintrt", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("FRM02010800DAO.updateFrmValidintrt", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				
				baseDao.delete("FRM02010800DAO.deleteFrmIntrtChang", map);	
				baseDao.delete("FRM02010800DAO.deleteFrmValidintrt", map);
				
			}
		}
	
	}
	
	/**
	 * 유효이자율 번경저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveFrmIntrtChang(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1"); 
		
		

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("FRM02010800DAO.insertFrmIntrtChang", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("FRM02010800DAO.updateFrmIntrtChang", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("FRM02010800DAO.deleteFrmIntrtChang", map);
				
			}
		}
	}
	
	

/**
 * 유효이자율 및 변경 저장
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void saveFrmValidintrtAndChng(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	DataSetMap list = (DataSetMap) inDataset.get("input1");   // 유효이자율
	DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 유효이자율변경내역
	
	String prt_sn = "0";  // 부모순번
	
	for (int x = 0; x < list.size(); x++) {
		Map map = list.get(x);
		
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
		
		if ( rowType == DataSet.ROW_TYPE_INSERTED ){
			
			List <Map> records = (List<Map>) baseDao.list("FRM02010800DAO.selectIntrtSn", map);
			
			String sn = records.get(0).get("SN").toString();
			String chk = map.get("CHK").toString(); 
			
			map.put("INTRT_SN", sn);
			
			if(chk.equals("Y")) prt_sn = sn;
			
			baseDao.insert("FRM02010800DAO.insertFrmValidintrt", map);
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02010800DAO.updateFrmValidintrt", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			
			baseDao.delete("FRM02010800DAO.deleteFrmIntrtChang", map);	
			baseDao.delete("FRM02010800DAO.deleteFrmValidintrt", map);
			
		}
	}
	
	for (int x = 0; x < list2.size(); x++) {
		Map map = list2.get(x);
		
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
		
		if ( rowType == DataSet.ROW_TYPE_INSERTED ){
			
			
			if( map.get("INTRT_SN") == null) map.put("INTRT_SN", prt_sn);
			
			baseDao.insert("FRM02010800DAO.insertFrmIntrtChang", map);
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02010800DAO.updateFrmIntrtChang", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			baseDao.delete("FRM02010800DAO.deleteFrmIntrtChang", map);
			
		}
	 }
	
	

  }

}




