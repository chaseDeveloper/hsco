package hsco.mis.hrm.HRM090306;

import java.util.ArrayList;
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
 * @Class Name   	: HRM090306ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.16.   김형태		최초생성
 * </pre>  
 */

@Service("HRM090306Service")
public class HRM090306ServiceImpl extends BaseService implements HRM090306Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 온실가스 정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmGgssList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		/*
		//$ 제거 2016.08.16
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090306DAO.tbhrmGgssList", inMap));
		
		outDataset.put("output1", outDsMap);
		//====================================================================================
		*/
		
		//$ 제거 2016.08.16
		String IEM_SE = inMap.get("IEM_SE").toString(); //조회조건 : 구분
		
		
		if(!"003".equals(IEM_SE)){ //전력,도시가스
			
			// 가로 출력을 위한 입주사명,코드 목록 리스트 조회(그리드 헤더)
			List<Map> headList = (List<Map>) baseDao.list("HRM090306DAO.selectCmmCode", inMap);
			List<Map> tbhrmGgssList = (List<Map>)baseDao.list("HRM090306DAO.tbhrmGgssList2", inMap); // 로우 조회용
			List<Map> records = new ArrayList<Map>();
			
			if(headList == null){
				throw new NexaServiceException("조회조건이 맞지 않습니다.");  
			}
			else{
				
				for(int i = 0 ; i < tbhrmGgssList.size() ; i++){
					
					Map rowMap = tbhrmGgssList.get(i);
					
					for(int z = 0 ; z < headList.size() ; z++ ){
						
						Map colMap = headList.get(z);
						
						String colName1 = "MVNCMPNYS" + Integer.toString(z+1); // 컬럼 Alias
						
						inMap.put("IEM_SE",  			inMap.get("IEM_SE"));	// cell 값 조회조건
						
						inMap.put("STDR_YM",  			rowMap.get("STDR_YM"));	// cell 값 조회조건
						
						inMap.put("LESSEE_NO",  		colMap.get("CODE"));	// cell 값 조회조건
						
						Map rsltColMap = (Map)baseDao.select("HRM090306DAO.tbhrmGgssList3", inMap); // cell 값 조회 
						
						// cell 값 설정
						if(rsltColMap == null){
	
							rowMap.put(colName1 , "");		
						}
						else{
						
							rowMap.put(colName1 , rsltColMap.get("GGSS_USGQTY"));
						}
					}		
					records.add(rowMap); // 행추가
				}	
			}
			
			// 그리드 헤더
			DataSetMap outHeadDsMap = new DataSetMap();	
			outHeadDsMap.setRowMaps(headList);
			
			// 결과 값
			DataSetMap outBodyDsMap = new DataSetMap();		
			outBodyDsMap.setRowMaps(records);
					
			outDataset.put("output1", outHeadDsMap); // 그리드 헤드용
			outDataset.put("output2", outBodyDsMap); // 결과 값
		}
		else{ //차량연료
			
			List<Map> tbhrmGgssList = (List<Map>)baseDao.list("HRM090306DAO.tbhrmGgssList2", inMap); // 로우 조회용
			
			DataSetMap output2 = new DataSetMap();
			output2.setRowMaps(tbhrmGgssList);
			outDataset.put("output2", output2);
			
		}
		
		
		
		/* 
		//$ 제거 2016.08.12  쿼리오류 발생
		List<Map> headList = (List<Map>) baseDao.list("HRM090306DAO.selectCmmCode", inMap);
	
		//String mvnCmpnys = "0 AS MMNY";
		String mvnCmpnys = "000 AS MMNY";
		
		for(int z = 0 ; z < headList.size() ; z++ ){
			
			Map colMap = headList.get(z);
			
			String CODE = colMap.get("CODE").toString();
			
			mvnCmpnys += "," + CODE + " AS MVNCMPNYS" + (z+1);			
		}
		
System.out.println( "==mvnCmpnys===================================================> " + mvnCmpnys);
		
		String[] MVNCMPNYS_LIST = mvnCmpnys.split(",");
		inMap.put("MVNCMPNYS_LIST", MVNCMPNYS_LIST);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090306DAO.tbhrmGgssList", inMap));
		
		outDataset.put("output1", outDsMap);
		*/
	}
    
    /** 온실가스 자료생성(전력, 도시가스) */
    @SuppressWarnings({ "rawtypes" })
    
    public void createData(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        baseDao.delete("HRM090306DAO.deleteData", inMap);
        baseDao.update("HRM090306DAO.createData", inMap);
    }
    
    /** 차량연료 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void tbhrmVhcleSave(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                int existAt = Integer.parseInt((String)baseDao.select("HRM090306DAO.chkFuel", map));
                if(existAt == 0) {
                    baseDao.insert("HRM090306DAO.insertVhcleFuel", map);
                }
                else {
                    String errMsg = (String) map.get("STDR_Y");
                    errMsg += "년 " + (String) map.get("STDR_M") + "월 자료";
                    throw new NexaServiceException("info.항목.중복", errMsg);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090306DAO.updateVhcleFuel", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090306DAO.deleteVhcleFuel", map);
                break;
            }
        }
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmGgssSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090306DAO.insertMmny", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090306DAO.updateMmny", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090306DAO.deleteGgss", map);
                break;
            }
        }
    }
}