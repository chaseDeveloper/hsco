package hsco.mis.sup.SUP040200;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.HashMap;
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


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SUP040200ServiceImpl.java
 * @Description  	: 이사회임원명부 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 10. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 14.				   양성모				최초생성
 * </pre>  
 */

@Service("sup040200Service")
public class SUP040200ServiceImpl extends BaseService implements SUP040200Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 이사회목록를 조회한다.(팝업)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectBodMasterPopUp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP040200DAO.selectBodMasterPopUp", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}    
	
	/**
	 * 이사회 임원 명단 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBodNmstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP040200DAO.selectBodNmstList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
    }

    /**
	 * 이사회목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectBodMaster( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;

		records1 = (List<Map>)baseDao.list("SUP040200DAO.selectBodMaster", inMap);
		records2 = (List<Map>)baseDao.list("SUP040200DAO.selectBodAtdrn", inMap);
		records3 = (List<Map>)baseDao.list("SUP040200DAO.selectBodBiCn", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}

	/**
	 * 이사회목록을 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int saveBodMaster( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String parentKey = null;
		
		
		// 이사회마스터 테이블 CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
                parentKey = (String) baseDao.select("SUP040200DAO.selectBodManageNo", map); // 이사회관리번호 조회
                map.put("BOD_MANAGE_NO", parentKey);
				baseDao.insert("SUP040200DAO.saveBodMasterC", map);			
				break;
			case DataSet.ROW_TYPE_UPDATED :
				parentKey = (String) map.get("BOD_MANAGE_NO");
				iRow += baseDao.update("SUP040200DAO.saveBodMasterU", map);				
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("SUP040200DAO.saveBodMasterD01", map);
				baseDao.delete("SUP040200DAO.saveBodMasterD02", map);
				iRow += baseDao.delete("SUP040200DAO.saveBodMasterD03", map);
				break;
			}
		}	

		// 이사회참석자 테이블 CUD
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			if (map.get("BOD_MANAGE_NO") == null) {
				map.put("BOD_MANAGE_NO", parentKey);
			}
			
			if (map.get("CHK").equals("1")) {						// 참석여부가 참석인 경우,
				
				parentKey = (String) map.get("BOD_MANAGE_NO");
				baseDao.insert("SUP040200DAO.saveBodAtdrnC", map);
			} else if(map.get("CHK").equals("0")){					// 참석여부가 불참인 경우,
				parentKey = (String) map.get("BOD_MANAGE_NO");
				baseDao.delete("SUP040200DAO.saveBodAtdrnD", map);	
			}
		}
			
		// 이사회의안내용 테이블 CUD
		list = (DataSetMap) inDataset.get("input3");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if (map.get("BOD_MANAGE_NO") == null) {
						map.put("BOD_MANAGE_NO", parentKey);
					}
					parentKey = (String) map.get("BOD_MANAGE_NO");
					baseDao.insert("SUP040200DAO.saveBodBiCnC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					parentKey = (String) map.get("BOD_MANAGE_NO");
					iRow += baseDao.update("SUP040200DAO.saveBodBiCnU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					parentKey = null;
					iRow += baseDao.delete("SUP040200DAO.saveBodBiCnD", map);
					break;
			}	
		}
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("BOD_MANAGE_NO", parentKey);
		
		DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
		return iRow;
	
	}
	
	/**
	 * 첨부파일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
    
	/**
	 * 첨부파일 일련번호 생성 및 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveNewFileSn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);

        // date get
        SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
        long curentTime = System.currentTimeMillis();

        // FileSn calculate
        String todayStr = sDateFormat.format(curentTime);
        BigDecimal seqFileSn = (BigDecimal) baseDao.select("selectFileSn");
        String strFileSn = todayStr + "" + seqFileSn;

        // input FileSn
        BigDecimal fileSn = new BigDecimal(strFileSn);
        map.put("FILE_SN", fileSn);

        // insert into File Master
        baseDao.insert("insertAtchmnFileMast", map);

        // update to Contract Master
        baseDao.update("SUP040200DAO.updateNewFileSn", map);

        // return Result Data (with FileSn)
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }    
    
    /**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("SUP040200DAO.selectSanctnNO", map);			
		map.put("SANCTN_NO", sanctnNO);
		
		// 물품수급계획 전자결재번호 업데이트
		baseDao.update("SUP040200DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
	}
	
}
