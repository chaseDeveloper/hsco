package hsco.mis.sup.SUP010204;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

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
 * @Class Name   	: SUP010204Service.java
 * @Description  	: 지방공기업비교 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */
@Service("SUP010204Service")
public class SUP010204ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 지방공기업 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrwkList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010204DAO.cntrwkList"));
        outDataset.put("output1", outDsMap);
        
	}
	
	/**
	 * 지방공기업비교 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrwkCmprList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        
        // 지방공기업코드
        List<Map> list = (List<Map>) baseDao.list("SUP010204DAO.cntrwkList", inMap);
        inMap.put("list", list);
        
        // 지방공기업비교
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010204DAO.cntrwkCmprList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 지방공기업비교 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int mngmtEvlCntrwkCmprU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
    	DataSetMap input1 = inDataset.get("input1");	// 경영평가결과
		
		// 지방공기업비교 저장
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					
					Iterator iter = map.entrySet().iterator();
					while(iter.hasNext()) {
						Map.Entry entry = (Entry) iter.next();
						
						if(((String)entry.getKey()).startsWith("CODE")) {
							// 지표별 점수 저장
							Map inMap = new HashMap();
							inMap.put("CNTRWK_CODE", ((String)entry.getKey()).substring(4, 6));
							inMap.put("CMPR_SCORE", entry.getValue());
							inMap.put("MAP", map);
							int cnt = baseDao.update("SUP010204DAO.mngmtEvlCntrwkCmprU", inMap);
							if(cnt == 0) {
								baseDao.insert("SUP010204DAO.mngmtEvlCntrwkCmprC", inMap);
								cnt++;
							}
							iRow += cnt;
						} else if("SAB".indexOf((String)entry.getKey()) > -1) {
							// 합계 저장
							Map inMap = new HashMap();
							inMap.put("CNTRWK_CODE", (String)entry.getKey());
							inMap.put("CMPR_SCORE", entry.getValue());
							inMap.put("MAP", map);
							int cnt = baseDao.update("SUP010204DAO.mngmtEvlCntrwkCmprU", inMap);
							if(cnt == 0) {
								baseDao.insert("SUP010204DAO.mngmtEvlCntrwkCmprC", inMap);
								cnt++;
							}
							iRow += cnt;
						}
					}
					
					break;
				default:
					break;
			}
		}
		
		return iRow;
    }
}