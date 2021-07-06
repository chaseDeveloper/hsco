package hsco.com.sym.mnm.SYM040100;

import java.util.ArrayList;
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
 * @Class Name   	: SYM040100ServiceImpl.java
 * @Description  	: 화면을 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 24.					정윤원				최초생성
 * </pre>  
 */
@Service("SYM040100Service")
public class SYM040100ServiceImpl extends BaseService implements SYM040100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM040100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	    
    /**
	 * 메뉴정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM040100List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("SYM040100List called!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List)baseDao.list("SYM040100DAO.SYM040100List", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 개인정보 sql 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPageIndvdlinfoMapping(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("SYM040100DAO.selectPageIndvdlinfoMapping", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 메뉴정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM040100CUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;		
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		//화면목록 DELETE
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
					case DataSet.ROW_TYPE_DELETED :
				        baseDao.delete("SYM040100DAO.deletePageGranMenu", map);  // 바로가기 메뉴 삭제
					//    baseDao.delete("SYM040100DAO.deletePageHpcmQna", map);  // 도움말Qna 삭제
						//baseDao.delete("SYM040100DAO.deletePageHpcmDtls", map);  // 도움말 상세 삭제
					//	baseDao.delete("SYM040100DAO.deletePageHpcm", map);  // 도움말 삭제
					//	baseDao.delete("SYM040100DAO.deletePageHpcmVer", map); // 도움말 버전 삭제
						
				//		baseDao.delete("SYM040100DAO.deleteUserScrinBt", map); // 사용자권한버튼 삭제
						baseDao.delete("SYM040100DAO.deleteGrpScrinBt", map);  //권한권한버튼 정보삭제
						baseDao.delete("SYM040100DAO.deleteScrinBt", map);     //화면버튼 정보삭제
						
					//	baseDao.delete("SYM040100DAO.deletePageChildUserMenu", map);     // 사용자메뉴 삭제 
						baseDao.delete("SYM040100DAO.deletePageChildGrpMenu", map);     //  그룹메뉴 삭제
						baseDao.update("SYM040100DAO.updatePageInfo", map);    //연결메뉴 화면정보삭제
						baseDao.delete("SYM040100DAO.deleteAllPageIndvdlinfoMapping", map);  //화면개인정보매핑 전체삭제
					//} else {
					//	Integer cnt = (Integer)baseDao.select("SYM040100DAO.countPageButtons", map);
					//	if(cnt == 0){
						iRow += baseDao.delete("SYM040100DAO.SYM040100D", map); //화면정보 삭제
					//	} else {
							// throws exception  @todo
					//	}
					break;
			}
		}
		
		//화면목록 INSERT, UPDATE
		for (int x = 0; x < list1.size(); x++) {
				
			Map map = list1.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SYM040100DAO.SYM040100C", map);
					baseDao.insert("SYM040100DAO.SYM040100NodeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					if(map.get("USE_AT").equals("0") && map.get("MENU_YN").equals("Y"))
					{
						baseDao.update("SYM040100DAO.updateMenuUseAt", map); //메뉴사용여부 미사용으로 업데이트
					}
					iRow += baseDao.update("SYM040100DAO.SYM040100U", map);
					break;
				default:
					break;
			}
			
		}
		
		//화면개인정보매핑 DELETE
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM040100DAO.deletePageIndvdlinfoMapping", map); //화면개인정보매핑 삭제
						break;
					default:
						break;
			}
		}
		
		//화면개인정보매핑 INSERT, UPDATE
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SYM040100DAO.insertPageIndvdlinfoMapping", map); //화면개인정보매핑 등록
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SYM040100DAO.updatePageIndvdlinfoMapping", map); //화면개인정보매핑 수정
						break;
					default:
						break;
			}
		}
		
		return iRow;
	}
		
	/**
	 * 특정 화면페이지의 버튼 전체를 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int deleteAllPageButtons(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list==null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);						
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();				
				
				switch(rowType) {
				
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM040100DAO.deleteALLButtons", map); 
						break;
					default :
						
				}
				
				
		} // end of for (int x = 0 ...
			
		return iRow;
			
	}
		
	/**
	 * 페이지에 등록된 버튼정보를 조회한다
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings("rawtypes")
	public void checkPageButtonInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = new ArrayList<Map>();
		Map rsltMap = (HashMap)baseDao.select("SYM040100DAO.checkPageButtons", inMap);
		records.add(rsltMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 화면과 관련하여 등록된 관계 정보현황을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings("rawtypes")
	public void searchPageChildSttus(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = new ArrayList<Map>();
		Map rsltMap = (HashMap)baseDao.select("SYM040100DAO.searchPageChildSttus", inMap);
		records.add(rsltMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}

}
