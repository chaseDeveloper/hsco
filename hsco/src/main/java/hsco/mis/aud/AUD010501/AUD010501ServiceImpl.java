package hsco.mis.aud.AUD010501;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010501ServiceImpl.java
 * @Description     : 감사공개목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 24.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.      김병진              최초생성
 * </pre>  
 */

@Service("AUD010501Service")
public class AUD010501ServiceImpl extends BaseService implements AUD010501Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 감사공개 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAuditKnwldgList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD010501DAO.selectAuditKnwldgList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD010501DAO.selectAuditKnwldgList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
       
    /**
     * 감사공개등록을 위한 감사 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAuditList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD010501DAO.selectAuditList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD010501DAO.selectAuditList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }
    

   /**
    * 감사공개목록 저장/수정/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int AuditKnwldgListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input03");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               
               baseDao.insert("AUD010501DAO.AuditKnwldgListC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               
               baseDao.update("AUD010501DAO.AuditKnwldgListU", map);
               
               //게시판 키가 있으면 홈페이지 게시판도 수정
               if(map.get("BOARD_IDX") != null ){
            	   String boardContent = map.get("KNWLDG_DLIV_CN").toString().replaceAll("\n", "<br />");	//개행문자 치환
            	   String boardTitle = map.get("KNWLDG_SJ").toString();
        		   String[] kindNm = map.get("BOARD_KIND_NM").toString().split(" ");
        		   
        		   map.put("BOARD_CONTENT", boardContent);
        		   map.put("BOARD_TITLE", kindNm[0]+" - "+boardTitle);
        		   
            	   baseDao.update("AUD010501DAO.saveHpgU", map);
               }
               
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
               
               baseDao.delete("AUD010501DAO.AuditKnwldgListD", map);
               
               //게시판 키가 있으면 홈페이지 게시판도 삭제
               if(map.get("BOARD_IDX") != null ){
            	   baseDao.delete("AUD010501DAO.saveHpgD", map);
               }
               
           }
       }
       return iRow;
   }

   /**
    * 홈페이지 등록/수정
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int saveHpgCU(DataSetMap tranInfo, Map<String, Object> inVar,
		   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		   Map<String, DataSetMap> outDataset) throws NexaServiceException {
	   
	   int iRow = 0;
	   
	   DataSetMap list = (DataSetMap) inDataset.get("input04");
	   
	   Map map = list.get(0);
	   
	   //홈페이지 연결키가 없으면 신규 등록
	   if(map.get("BOARD_IDX") == null){
		   Map boardIdx =  (Map)baseDao.select("AUD010501DAO.selectHpgIdx", map); //게시판 신규 BOARD_IDX 채번
		   String boardContent = map.get("KNWLDG_DLIV_CN").toString().replaceAll("\n", "<br />");	//개행문자 치환
		   String boardTitle = map.get("KNWLDG_SJ").toString();
		   String[] kindNm = map.get("BOARD_KIND_NM").toString().split(" ");
		   
		   map.put("BOARD_IDX", boardIdx.get("BOARD_IDX"));
		   map.put("BOARD_CONTENT", boardContent);
		   map.put("BOARD_TITLE", kindNm[0]+" - "+boardTitle);
		   
		   baseDao.insert("AUD010501DAO.saveHpgC", map);
		   
		   baseDao.update("AUD010501DAO.boardIdxU", map);	//감사지식 BOARD_IDX 갱신
	   }

	   return iRow;
   }

	/**
	 * 홈페이지 게시판 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHpgBoardList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("AUD010501DAO.selectHpgBoardList", inMap);
		} else {
			records = (List<Map>)baseDao.list("AUD010501DAO.selectHpgBoardList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
	}
}
