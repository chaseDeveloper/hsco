package hsco.pms.cmp.CMP010100;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP010100ServiceImpl.java
 * @Description  	: 보상사업지구 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 11.					변승우				최초생성
 * </pre>  
 */

@Service("CMP010100Service")
public class CMP010100ServiceImpl extends BaseService {
    
	protected Logger log = LoggerFactory.getLogger(CMP010100ServiceImpl.class);
	
	//사업지구 목록
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rewardBsnsDstrcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		if(log.isInfoEnabled()) log.info("rewardBsnsDstrcList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010100DAO.rewardBsnsDstrcList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
	   
	//사업지구 CUD
	@SuppressWarnings("rawtypes")
	
	public void rewardBsnsDstrcCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010100DAO.rewardBsnsDstrcC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010100DAO.rewardBsnsDstrcU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP010100DAO.rewardBsnsDstrcD", map);
			}
		}
	}
	
   //소재지 목록
   @SuppressWarnings({ "unchecked", "rawtypes" })
	public void locplcInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010100DAO.locplcInfoList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

   	//소재지 CUD
	@SuppressWarnings("rawtypes")
	
	public void locplcInfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010100DAO.locplcInfoC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010100DAO.locplcInfoU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP010100DAO.locplcInfoD", map);
			}
		}
	}
	
	//감정평가사 목록
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void bsnsbyPrpraprList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010100DAO.bsnsbyPrpraprList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//감정평가서 CUD
	@SuppressWarnings("rawtypes")
	
	public void bsnsbyPrpraprCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010100DAO.bsnsbyPrpraprC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010100DAO.bsnsbyPrpraprU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP010100DAO.bsnsbyPrpraprD", map);
			}
		}
	}
		 		
	//감정평가사 목록(팝업)
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void bsnsbyPrpraprpPopList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("CMP010100DAO.bsnsbyPrpraprpPopList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
    
  //사업지구 CUD
  	@SuppressWarnings("rawtypes")
  	
  	public void rewardBsnsDstrcAllCUD(DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {

  		//사업지구
  		DataSetMap list = (DataSetMap) inDataset.get("input1");
  		for (int x = 0; x < list.size(); x++) {
  			Map map = list.get(x);
  			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
  			
  			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
  				baseDao.insert("CMP010100DAO.rewardBsnsDstrcC", map);
  			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
  				baseDao.update("CMP010100DAO.rewardBsnsDstrcU", map);
  			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
  				int useCnt = (Integer)baseDao.select("CmpCommonDAO.rewardBsnsDstrcUseCount", map);
  				if(useCnt > 0){
  					throw new NexaServiceException("fail.삭제.불가", "하위 자료가 존재하는 항목은 ");
  				}
  				baseDao.delete("CMP010100DAO.rewardBsnsDstrcD", map);
  			}
  		}
  		
  		//소재지
  		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010100DAO.locplcInfoC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010100DAO.locplcInfoU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP010100DAO.locplcInfoD", map);
			}
		}
		
		//감정평가법인
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010100DAO.bsnsbyPrpraprC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010100DAO.bsnsbyPrpraprU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				int useCnt = (Integer)baseDao.select("CmpCommonDAO.bsnsbyPrpraprUseCount", map);
  				if(useCnt > 0){
  					throw new NexaServiceException("fail.삭제.불가", "감정평가 결과가 있습니다. ");
  				}
				baseDao.delete("CMP010100DAO.bsnsbyPrpraprD", map);
			}
		}
  	}
  	
	//사업지구 목록(팝업)
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void businessDistrictList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("CMP010100DAO.businessDistrictList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}

    //사업지구 코드 채번
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void businessDistrictCode(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("CMP010100DAO.businessDistrictCode", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
}
