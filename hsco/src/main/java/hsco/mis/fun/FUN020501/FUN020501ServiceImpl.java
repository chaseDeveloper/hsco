package hsco.mis.fun.FUN020501;

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
 * @Class Name   	: FUN020501ServiceImpl.java
 * @Description  	: 채권등록발행내역을 조회하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2016. 02. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 03.				   양성모				최초생성
 * </pre>  
 */

@Service("fun020501Service")
public class FUN020501ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 채권등록발행내역 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectM( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020501DAO.selectCditList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

    /**
	 * 인수내역 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectS( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;
		List <Map> records4;

		records1 = (List<Map>)baseDao.list("FUN020501DAO.selectBndeRegistList", inMap);			// 일괄등록	인수내역
		records2 = (List<Map>)baseDao.list("FUN020501DAO.selectScrcmpnWrhousngList", inMap);	// 증권회사입고신청 인수내역
		records3 = (List<Map>)baseDao.list("FUN020501DAO.selectIndvdlzRegistList", inMap);		// 개별등록 인수내역
		records4 = (List<Map>)baseDao.list("FUN020501DAO.selectObjtInfo", inMap);				// 실물채권 인수내역
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
	}

	
	/**
	 * 채권등록발행내역 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String parentKey = null;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		// 마스터 테이블
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020501DAO.saveCditC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020501DAO.saveCditU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN020501DAO.saveCditD01", map);             	// 일괄등록 테이블 삭제
					baseDao.delete("FUN020501DAO.saveCditD02", map);      			// 증권회사입고 테이블 삭제
					baseDao.delete("FUN020501DAO.saveCditD03", map);      			// 개별등록 테이블 삭제
					iRow += baseDao.delete("FUN020501DAO.saveCditD", map);			// 마스터 테이블 삭제
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");	// 일괄등록 테이블
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020501DAO.saveBndeRegistC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020501DAO.saveBndeRegistU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020501DAO.saveBndeRegistD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input3");	// 증권회사입고 테이블
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020501DAO.saveScrcmpnWrhousngC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020501DAO.saveScrcmpnWrhousngU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020501DAO.saveScrcmpnWrhousngD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input4");	// 개별등록 테이블
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020501DAO.saveIndvdlzRegistC", map);				
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020501DAO.saveIndvdlzRegistU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020501DAO.saveIndvdlzRegistD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input5");	// 실물채 테이블
		
		listSize = (list == null) ? 0 : list.size();
		
    	int seq = 0;
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				if("1".equals(map.get("CHK")) == true) {
					// 전환구분 : 1(일괄등록), 2(증권회사입고신청), 3(개별등록)
					if("1".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditBndeRegistSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveBndeRegistC", map);
						}
					} else if("2".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditScrcmpnWrhousngSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveScrcmpnWrhousngC", map);
						}
					} else if("3".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditIndvdlzRegistSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveIndvdlzRegistC", map);
						}
					}
				}
				
				baseDao.insert("FUN020102DAO.ObjtInfoC", map);				
				break;
			case DataSet.ROW_TYPE_UPDATED :
				if("1".equals(map.get("CHK")) == true) {
					// 전환구분 : 1(일괄등록), 2(증권회사입고신청), 3(개별등록)
					if("1".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditBndeRegistSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveBndeRegistC", map);
						}
					} else if("2".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditScrcmpnWrhousngSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveScrcmpnWrhousngC", map);
						}
					} else if("3".equals(map.get("REGIST_CNVRS_SE"))) {
						if("0".equals(map.get("SEQ")) == true) {
							seq = (Integer)baseDao.select("FUN020102DAO.cditIndvdlzRegistSeq", map);
							map.put("SEQ", seq);
							baseDao.insert("FUN020102DAO.saveIndvdlzRegistC", map);
						}
					}
				}
				else {
					if("0".equals(map.get("SEQ")) != true) {
						if("1".equals(map.get("REGIST_CNVRS_SE"))) {
							baseDao.delete("FUN020501DAO.saveBndeRegistD2", map);		
						} else if("2".equals(map.get("REGIST_CNVRS_SE"))) {
							baseDao.delete("FUN020501DAO.saveScrcmpnWrhousngD2", map);							
						} else if("3".equals(map.get("REGIST_CNVRS_SE"))) {
							baseDao.delete("FUN020501DAO.saveIndvdlzRegistD2", map);		
						}
					}
					map.put("SEQ", "0");
					map.put("REGIST_CNVRS_DE", "");
					map.put("REGIST_CNVRS_SE", "");
				}
				baseDao.insert("FUN020102DAO.ObjtInfoU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				if("0".equals(map.get("SEQ")) != true) {
					if("1".equals(map.get("REGIST_CNVRS_SE"))) {
						baseDao.delete("FUN020501DAO.saveBndeRegistD2", map);		
					} else if("2".equals(map.get("REGIST_CNVRS_SE"))) {
						baseDao.delete("FUN020501DAO.saveScrcmpnWrhousngD2", map);							
					} else if("3".equals(map.get("REGIST_CNVRS_SE"))) {
						baseDao.delete("FUN020501DAO.saveIndvdlzRegistD2", map);		
					}						
				}
				baseDao.insert("FUN020102DAO.ObjtInfoD", map);
				break;
		}	
		}

		return iRow;
	
	}	
	
}

