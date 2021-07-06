package hsco.mis.acc.ACC050103;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050103ServiceImpl.java
 * @Description  	: 결산조정분개관리 관리하는 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC050103Service")
public class ACC050103ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC050103ServiceImpl.class);
    
    
    /**
	 * 전표리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void chitList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("chitList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC050103DAO.chitList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 전표 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void chit( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC050103DAO.chit", inMap);		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
		List <Map> records2 = (List<Map>)baseDao.list("ACC050103DAO.chitDetailList", inMap);		
		DataSetMap output2 = new DataSetMap();
		output2.setRowMaps(records2);
		outDataset.put("output2", output2);
		
	}
    
    
    /**
     * 전표 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	
	public int saveChit( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 전표마스터
		DataSetMap input2 = inDataset.get("input2");	// 전표상세
		DataSetMap input3 = inDataset.get("input3");	// 전표목록
		
		if(input1.size() > 0) {
			// 전표마스터 저장(등록,수정)
			Map mastrMap = input1.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					String chitNo = (String) baseDao.select("ACC050103DAO.chitNo", mastrMap);
					mastrMap.put("CHIT_NO", chitNo);
					baseDao.insert("ACC050103DAO.chitMastrC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("ACC050103DAO.chitMastrU", mastrMap);
					break;
				default:
					break;
			}
			
			// 전표상세 저장
			for(Map map : input2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						map.put("CHIT_NO", (String)mastrMap.get("CHIT_NO"));
						baseDao.insert("ACC050103DAO.chitDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("ACC050103DAO.chitDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("ACC050103DAO.chitDetailD", map);
						break;
					default:
						break;
				}
			}
			
			// 전표마스터 저장(삭제)
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("ACC050103DAO.chitMastrD", mastrMap);
					break;
				default:
					break;
			}
			
		}
		
		// 전표확인 및 승인 처리
		for(Map map : input3.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC050103DAO.chitConfmAtU", map);
					break;
				default:
					break;
			}
		}
		
		return iRow;
    }
    
    /**
     * 수입전표 생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
	
	public void incmeSlipC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap!= null){
		    //전표 선택해서 삭제시 선택한 전표의 삭제 쿼리호출문 추가해야함
    		if("10".equals(inMap.get("CHIT_KND"))){
                baseDao.update("ACC050103DAO.spaccHouseIncmeSlipAI", inMap);    // 주택
    		}else if("20".equals(inMap.get("CHIT_KND"))){
                baseDao.update("ACC050103DAO.spaccLadIncmeSlipAI", inMap);      // 토지
    		}else if("30".equals(inMap.get("CHIT_KND"))){
    		    baseDao.update("ACC050103DAO.spaccPrmanentRntSlipAI", inMap);   // 영구임대
                //baseDao.update("ACC050103DAO.spaccPuchasRntSlipAI", inMap);     // 매입임대
    		}else if("40".equals(inMap.get("CHIT_KND"))){
                //레포츠센터 수입은 예산관리>예산결산>레포츠센타수입관리에서 처리
            }else if("50".equals(inMap.get("CHIT_KND"))){
                //baseDao.update("ACC050103DAO.spaccEtcIncmeSlipAI", inMap);      // 기타
            }else{  //전체
                //baseDao.update("ACC050103DAO.spaccIncmeSlipD"       , inMap);   // 수입전표 삭제
                baseDao.update("ACC050103DAO.spaccHouseIncmeSlipAI" , inMap);   // 주택
                baseDao.update("ACC050103DAO.spaccLadIncmeSlipAI"   , inMap);   // 토지
                baseDao.update("ACC050103DAO.spaccPrmanentRntSlipAI", inMap);   // 영구임대
                //baseDao.update("ACC050103DAO.spaccPuchasRntSlipAI"  , inMap);   // 매입임대
                //baseDao.update("ACC050103DAO.spaccEtcIncmeSlipAI"   , inMap);   // 기타
            }
		}
    }
    
    /**
	 * 수입결의서 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void incmeDecsnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC050103DAO.incmeDecsnList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 전표세부내역 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void chitDtlList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("chitDtlList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC050103DAO.chitDtlList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
}
