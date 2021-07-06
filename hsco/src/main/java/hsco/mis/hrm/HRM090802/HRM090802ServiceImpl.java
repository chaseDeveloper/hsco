package hsco.mis.hrm.HRM090802;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM090802ServiceImpl.java
 * @Description     : 복지포인트 계산
 * @author          : 이수지
 * @since           : 2017. 11. 28.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2017 NANUMICT, Ict. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 28.                    이수지             최초생성
 * </pre>  
 */

@Service("HRM090802Service")
public class HRM090802ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 복지포인트 추가점수를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectStdrAdit( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);

        List <Map> recordsAdit = null;

        if (inMap != null) {
            recordsAdit = (List<Map>)baseDao.list("HRM090802DAO.selectScoreAditSe", inMap);
        }
        DataSetMap outDsMapAdit = new DataSetMap();
        outDsMapAdit.setRowMaps(recordsAdit);
        
        outDataset.put("output1", outDsMapAdit);
   	}

    
    /**
     * 복지포인트 계산 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectScore( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);

        List <Map> records = null;
        List <Map> recordsAdit = null;

        if (inMap != null) {
            recordsAdit = (List<Map>)baseDao.list("HRM090802DAO.selectScoreAditSe", inMap);
            if(recordsAdit .size() > 0){
                inMap.put("aditList", recordsAdit);
            }
            records     = (List<Map>)baseDao.list("HRM090802DAO.selectScore", inMap);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
	
    /**
   	 * 복지포인트 계산 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes", "unchecked" })
   	
   	public void saveScore( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		

        DataSetMap input1 = (DataSetMap) inDataset.get("input1");
        int listSize = (input1 == null) ? 0 : input1.size();
        for (int x = 0; x < listSize; x++) {
            Map map = input1.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM090802DAO.scoreC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    baseDao.insert("HRM090802DAO.scoreU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.insert("HRM090802DAO.scoreD", map);
                    break;
            }

            DataSetMap input2 = (DataSetMap) inDataset.get("input2");
            int listSize2 = (input2 == null) ? 0 : input2.size();
            for (int list2Row = 1; list2Row < listSize2; list2Row++) {
                map.put("IEM_SN", Integer.toString(list2Row));
                map.put("ADIT_SCORE", map.get("ADIT_SCORE_"+list2Row).toString());
                map.put("STDR_APPLC_YEAR", input2.getMapValue(0, "STDR_APPLC_YEAR"));
                
                if(Integer.parseInt(map.get("ADIT_SCORE_"+list2Row).toString()) > 0){
                    baseDao.insert("HRM090802DAO.scoreAditC", map);
                }else{
                    baseDao.delete("HRM090802DAO.scoreAditD", map);
                }
            }
        }
        
   	}
   	

    /**
     * 사원상세정보 조회
     * 
     * @param (DataSetMap,
     *            inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmplFamilyInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;

        if (inDsMap != null)
            inMap = inDsMap.get(0);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090802DAO.selectHrFamilyList", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    /**
     * 복지포인트 추가점수를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void calc( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;

        if (inDsMap != null)
            inMap = inDsMap.get(0);
        baseDao.delete("HRM090802DAO.scoreAditD", inMap);
        baseDao.delete("HRM090802DAO.scoreD", inMap);
        baseDao.insert("HRM090802DAO.calc", inMap);
        
        switch(inMap.get("ADIT_STDR_CNT").toString()) {
        case "2" :
            baseDao.insert("HRM090802DAO.calcAdit2", inMap);
        case "1" :
            baseDao.insert("HRM090802DAO.calcAdit1", inMap);
            break;
        }
        
        //추가금액 더한금액을 다시 실 복지포인트에 추가해준다
        List <Map> recordsAdit = ((List<Map>) baseDao.list("HRM090802DAO.selectCalcAddAdit", inMap));
        for (int listRow = 0; listRow < recordsAdit.size(); listRow++) {
            baseDao.update("HRM090802DAO.calcAddAdit", recordsAdit.get(listRow));
        }
    }

}
