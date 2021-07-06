package hsco.hpm.ctm.HPM070202;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HPM070202Controller.java
 * &#64;Description  	: 대관신청관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 08. 07.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 07.					정 민			최초생성
 * </pre>
 */

@Service("HPM070202Service")
public class HPM070202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM070202ServiceImpl.class);

	/**
	 * 환불 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentReqstManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070202DAO.selectRentReqstManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 거래처생성
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void insertBcncZ1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
        DataSetMap outDsMap = new DataSetMap();

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			if(!map.containsKey("BCNC_CODE")){
			    String bcnc = (String)baseDao.select("HPM070202DAO.selectBcncCode");
			    map.put("BCNC_CODE", bcnc);
			    baseDao.insert("HPM070202DAO.insertBcncZ1", map);
                baseDao.insert("HPM070202DAO.updateBcncZ1", map);
			}
			outDsMap.add(map);
		}

        outDataset.put("output1", outDsMap);
	}

	/**
	 * 환불 목록 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveReqstManageList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap list = (DataSetMap) inDataset.get("input1"); 
        int listSize = (list == null) ? 0 : list.size();        
        for (int x = 0; x < listSize; x++) {                
            Map map = list.get(x);          
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :    
                    baseDao.insert("HPM070202DAO.reqstManageC", map);  
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("HPM070202DAO.reqstManageD", map);
                    break;  
                default:
                    break;
            }               
        }       
	}
	

	/**
	 * 계좌정합성여부 판단 프로시저호출
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void procedureAcnutStblt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);

        baseDao.update("HPM070202DAO.callProcedure", inMap);
    }
}