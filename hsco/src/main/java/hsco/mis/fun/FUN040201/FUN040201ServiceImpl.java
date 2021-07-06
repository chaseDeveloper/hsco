package hsco.mis.fun.FUN040201;

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
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FUN040201ServiceImpl.java
 * @Description  	: 자금배정 현황을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 09. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09. 08.				   양성모				최초생성
 * </pre>  
 */

@Service("fun040201Service")
public class FUN040201ServiceImpl extends BaseService implements FUN040201Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 사이버브랜치 거래내역 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCb2AcctHisList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040201DAO.selectCb2AcctHisList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    /**
	 * 사이버브랜치계좌 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBranchAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040201DAO.selectBranchAcnutList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
    /**
	 * 자금배정내역, 자금운용내역 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCptalAsignList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records3;

		records1 = (List<Map>)baseDao.list("FUN040201DAO.selectCptalAsignList", inMap);
		records3 = (List<Map>)baseDao.list("FUN040201DAO.selectCptalOpratnList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output3", outDsMap3);
	}
	
    /**
	 * 자금배정 디테일 조회(자금수지원별배정자금)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCptBalcAsnCptalList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("FUN040201DAO.selectCptBalcAsnCptalList", inMap);
		records2 = (List<Map>)baseDao.list("FUN040201DAO.selectCptalAsignAcmtlList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}


	/**
	 * 자금배정 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveCptalAsignListCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040201DAO.CptalAsignC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040201DAO.CptalAsignU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040201DAO.CptalAsignD00", map);
					iRow += baseDao.delete("FUN040201DAO.CptalAsignD01", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040201DAO.CptalAsignDetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040201DAO.CptalAsignDetailU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040201DAO.CptalAsignDetailD", map);
					break;
			}	
		}				
		
		list = (DataSetMap) inDataset.get("input3");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040201DAO.CptalOpratnC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040201DAO.CptalOpratnU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040201DAO.CptalOpratnD", map);
					break;
			}	
		}				

		return iRow;
	
	}
	
   /**전자결재 */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {   
	   
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		       
		Map map = list.get(0);
		       
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("FUN040201DAO.selectSanctnNO", map);			
		map.put("SANCTN_NO", sanctnNO);
		
		String se = StringUtil.nvl((String)map.get("SE"));

		if(map != null){
        	String sParam = (String)map.get("SN");
        	map.put("ARR_SN", sParam.split(","));
        }		
		
		if("1".equals(se)){				// 자금운용, 자금배정
			baseDao.update("FUN040201DAO.approveU", map);
			baseDao.update("FUN040201DAO.approveU2", map);
		} else if("2".equals(se)){		// 자금운용
			baseDao.update("FUN040201DAO.approveU", map);
		} else if("3".equals(se)){		// 자금배정
			baseDao.update("FUN040201DAO.approveU2", map);
		}
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }
}