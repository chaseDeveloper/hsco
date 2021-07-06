package hsco.mis.fun.FUN020102;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
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
 * @Class Name   	: FUN020102ServiceImpl.java
 * @Description  	: 공사채등록 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 07. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 14.				   양성모				최초생성
 * </pre>  
 */

@Service("fun020102Service")
public class FUN020102ServiceImpl extends BaseService implements FUN020102Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 공사채 승인 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPbncdConfmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020102DAO.selectPbncdConfmList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
    /**
	 * 공사채등록 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPbncdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020102DAO.selectPbncdList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 공사채등록 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int PbncdCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String parentKey = null;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
                    parentKey = (String) baseDao.select("FUN020102DAO.selectStrPbncdNo", map); // 부모Key에 대하여 미리 get(list2와 동시에 insert 하는 경우)
                    map.put("PBNCD_NO", parentKey);
					baseDao.insert("FUN020102DAO.PbncdC", map);
					baseDao.insert("FUN020102DAO.PbncdInrstC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020102DAO.PbncdU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN020102DAO.PbncdInrstD", map);             // 공사채 금리 테이블 삭제
					baseDao.delete("FUN020102DAO.PbncdIntrRpayPlanD", map);      // 공사채 이자지급계획 테이블 삭제
					baseDao.delete("FUN020102DAO.PbncdIntrRpayDtlsD", map);      // 공사채 이자지급내역 테이블 삭제
					baseDao.delete("FUN020102DAO.PbncdPrncpalRpayPlanD", map);   // 공사채 원금상환계획 테이블 삭제
					baseDao.delete("FUN020102DAO.PbncdPrncpalRpayDtlsD", map);   // 공사채 원금상환내역 테이블 삭제
					iRow += baseDao.delete("FUN020102DAO.PbncdD", map);
					break;
			}	
		}

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
        baseDao.update("FUN020102DAO.updateNewFileSn", map);

        // return Result Data (with FileSn)
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }
    
    /**
	 * 채권 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectCditList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020102DAO.selectCditList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 실물채정보 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void ObjtInfoCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int seq = 0;
        int listSize = (list == null) ? 0 : list.size();
        
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if("1".equals(map.get("CHK")) == true) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditScrcmpnWrhousngSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveScrcmpnWrhousngC", map);
						}
						else {
							baseDao.update("FUN020501DAO.saveScrcmpnWrhousngU", map);
						}
					}
					
					baseDao.insert("FUN020102DAO.ObjtInfoC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					if("1".equals(map.get("CHK")) == true) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditScrcmpnWrhousngSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveScrcmpnWrhousngC", map);
						}
						else {
							baseDao.update("FUN020501DAO.saveScrcmpnWrhousngU", map);
						}
					}
					else {
						if("0".equals(map.get("SEQ")) != true) {
							baseDao.delete("FUN020501DAO.saveScrcmpnWrhousngD", map);							
							map.put("REGIST_CNVRS_DE", "");
						}
					}
					baseDao.insert("FUN020102DAO.ObjtInfoU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					if("0".equals(map.get("SEQ")) != true) {
						baseDao.delete("FUN020501DAO.saveScrcmpnWrhousngD", map);							
					}
					baseDao.insert("FUN020102DAO.ObjtInfoD", map);
					break;
			}	
		}
		
		
		if(listSize > 0) {
			List <Map> records;
			
			records = (List<Map>)baseDao.list("FUN020102DAO.selectObjtInfo", list.get(0));
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
    }	
    
    
    /**
	 * 실물채정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectObjtInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020102DAO.selectObjtInfo", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}