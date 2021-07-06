package hsco.pms.cmp.CMP040200;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP040200ServiceImpl.java
 * @Description  	: 보상금 청구
 * @author       	: 지효정
 * @since        	: 2015. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 7.					지효정				최초생성
 * </pre>  
 */
@Repository("CMP040200Service")
public class CMP040200ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP040200ServiceImpl.class);
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("dscssOwnerList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.thingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rwmnyPymntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.rwmnyPymntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingPartcpntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.thingPartcpntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rgistTrnsferList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.rgistTrnsferList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void tbcmpBillerChangeMemoCU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//메모 CUD
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040200DAO.tbcmpBillerChangeMemoCU", map);
		}
	} 
	
	@SuppressWarnings({ "rawtypes" })
	
	public void thingPartcpntU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//메모 CUD
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040200DAO.thingPartcpntU", map);
		}
	} 
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void billerChangeR(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.billerChangeR", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void rwmnyPymntCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//보상금 지급 CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040200DAO.rwmnyPymntC", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("CMP040200DAO.tbcmpThingRwmnyD", map);
				baseDao.delete("CMP040200DAO.rwmnyPymntD", map);
			}else{
				baseDao.update("CMP040200DAO.rwmnyPymntU", map);
			}
		}
		
		//물건별보상 수정
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040200DAO.tbcmpThingRwmnyC", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("CMP040200DAO.tbcmpThingRwmnyD", map);
			}
		}

		//청구인변경 CUD
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.insert("CMP040200DAO.tbcmpBillerChangeCU", map);
		}
		
		//관계인 수정
		list = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040200DAO.thingPartcpntU", map);
		}

		//소유자 청구순번, 청구구분 업데이트
		list = (DataSetMap) inDataset.get("input5");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_UPDATED){
				baseDao.update("CMP040200DAO.thingOwnerU", map);
			}
		}
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnUbiDataset(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.thingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP040200DAO.thingWtnncList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP040200DAO.rwmnyPymntList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP040200DAO.sanctnerNmDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output4", outDsMap);
	}
		
	@SuppressWarnings({ "rawtypes" })
	
	public void sanctnUpdate(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040200DAO.sanctnUpdate", map);
		}
	} 
	
	
	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */

	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		   if(log.isInfoEnabled()) log.info("미구현 메소드입니다!"); // code inspection에 따른 구현 내용 전체 주석처리함.
//         Map sanctnInfo = null; 
//         DataSetMap dsSetMap = inDataset.get("input1");  
//         List<Map> list = dsSetMap.getRowMaps();
//         //String currSanctionSttus = "";   // 미사용 변수 주석처리(code inspection)
//         int lsize = (list == null) ? 0 : list.size();
//         if(lsize > 0){
//           	  sanctnInfo = (Map)list.get(0);
//         }
//         // 전체적으로 
//         if(sanctnInfo != null){  // 미사용 변수 주석처리(code inspection)
//        	 if(sanctnInfo.get("LAST_SANCTN_STTUS") != null){
//        		 currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
//        	 }
//         }     	
//         	Map recordMap = null; // 미사용 변수 주석처리(code inspection)        	
//         	StringTokenizer token = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
//         	
//   		if(token.hasMoreTokens()){
//   			recordMap = new HashMap<String, String>();
//   			recordMap.put("ACCNUT_YEAR", token.nextToken());
//   			recordMap.put("ENDW_INCME_DECSN_NO", token.nextToken());
//   		}
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void rwmnyPymntU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//보상금 지급 CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040200DAO.rwmnyPymntU", map);
		}
	} 
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sanctnerNmDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void prtinDs(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if(10 > Integer.parseInt(StringUtil.parseNull(String.valueOf(inMap.get("CNT")),"0"))) {
			records = (List<Map>)baseDao.list("CMP040200DAO.prtinDs", inMap);
		}
		else {
			records = (List<Map>)baseDao.list("CMP040200DAO.prtinDs2", inMap);
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rwmnyPymntPrintList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
        	String sParam = (String)inMap.get("OWNER_NO__RQEST_SN");
        	if(null !=  sParam) inMap.put("ARR_OWNER_NO__RQEST_SN", sParam.split(","));
        }

		records = (List<Map>)baseDao.list("CMP040200DAO.rwmnyPymntPrintList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

		records = (List<Map>)baseDao.list("CmpCommonDAO.bsnsAreaList", inMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingThingList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040200DAO.thingThingList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
