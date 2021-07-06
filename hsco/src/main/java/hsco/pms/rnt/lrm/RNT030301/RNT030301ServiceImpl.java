package hsco.pms.rnt.lrm.RNT030301;

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
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030103ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.				       이광원		    	최초생성
 * </pre>  
 */

@Service("RNT030301Service")
public class RNT030301ServiceImpl extends BaseService implements RNT030301Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
    
	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;

		records1 = (List<Map>)baseDao.list("RNT030301DAO.getList", inMap);		
				
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);

		
		outDataset.put("output1", outDsMap1);
		
	}
	/* 임대인 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR1", inMap );
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR1", inVar );
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}
	
	/* 공유자 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR2", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}
	
	/* 보증보험 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR3", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR3", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output4", outDsMap);
		
	}
	
	/* 화재보험 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR4(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR4", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR4", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output5", outDsMap);
		
	}

	/* 법무사 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR5(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input6");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR5", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR5", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output6", outDsMap);
		
	}
	
	/* 법무사 조회 팝업용 */
	@SuppressWarnings("rawtypes")
	public void getListT5(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input6");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT5", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT5", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output6", outDsMap);
		
	}	
	
	/* 부동산 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR6(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR6", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR6", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output7", outDsMap);
		
	}
	
	/* 부동산 조회 팝업용*/
	@SuppressWarnings("rawtypes")
	public void getListT6(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT6", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT6", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output7", outDsMap);
		
	}	
	
	/* 세대원 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR7(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input8");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR7", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR7", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output8", outDsMap);
		
	}
	
	/* 지원내역 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR8(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input9");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR8", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListR8", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output9", outDsMap);
		
	}

	/* 신청자선택 팝업 조회 */
	@SuppressWarnings("rawtypes")
	public void getListT02(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT02", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT02", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	/* 신청자선택 팝업 권리분석 조회 */
	@SuppressWarnings("rawtypes")
	public void getListT03(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT03", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.getListT03", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
		
	}
	
	/* 신청자선택 팝업 권리분석 조회 */
	@SuppressWarnings("rawtypes")
	public void ATCH(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.ATCH", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.ATCH", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
	}	
	
	
	/* 출력물 조회 */
	@SuppressWarnings("rawtypes")
	public void PRT(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.PRT", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.PRT", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
	}		

	/* 계약자번호 생성 */
	@SuppressWarnings("rawtypes")
	public void CNTRCTRNO(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.CNTRCTRNO", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.CNTRCTRNO", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
	}		
	
	/* 전세임대료요율 */
	@SuppressWarnings("rawtypes")
	public void INTRT(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.INTRT", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.INTRT", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
	}				
	
	/* 전세면제 조회 */
	@SuppressWarnings("rawtypes")
	public void EXEMPTION(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.exemptionList", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.exemptionList", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
	
	/* 보증/화재 보험 조회 */
	@SuppressWarnings("rawtypes")
	public void insrncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.insrncList", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.insrncList", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/* 명의변경건수 조회 */
	@SuppressWarnings("rawtypes")
	public void changeCNT(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030301DAO.changeCNT", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030301DAO.changeCNT", inVar);
		}	
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
	
	
	/** 보증/화재보험 신규,수정,삭제 */
	@SuppressWarnings("rawtypes")
	
	public void insrncCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.insrncU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				break;		
			}		
		}
	}	
	
	
	/** 신규,수정,삭제 */
	@SuppressWarnings({ "unchecked" })
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listC", map);
				
				
				for(int y = 1 ; y <= 2 ; y++){
					
					// 신규 가상계좌 등록
					Map<String, Object> paramMap = new HashMap<String, Object>();
					
			    	// 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비 , JR:전세임대)
			    	paramMap.put("IN_CRT_DIV", "JR");
					
			    	// 계약자번호
					Object cust_cd = map.get("CNTRCTR_NO").toString();
					paramMap.put("IN_CUST_ID", cust_cd);
					
					// 주택(토지)코드
					Object house_code = new String();
					paramMap.put("IN_HOUSE_CODE", house_code);
					
					// 은행코드
					paramMap.put("IN_BANK_CD", "031");
					
					if(y == 1){
						
						// 대표계좌여부('1' - 임대료 전용계좌 )
						Object acct_div = "1";
						paramMap.put("IN_ACCT_DIV", acct_div);
						
						// 보증금전용계좌 등록 여부('1' - 보증금 전용계좌 )
						Object bj_yn = "0";
						paramMap.put("IN_BJ_YN", bj_yn);						
					}
					
					if(y == 2){
						// 보증금전용계좌 등록 여부('1' - 보증금 전용계좌 )
						Object bj_yn = "1";
						paramMap.put("IN_BJ_YN", bj_yn);
					}
					
			    	// 최초등록자
					Object first_entry = ObjectUtil.getSessionObj("S_USER_ID");
					paramMap.put("IN_FIRST_ENTRY", first_entry);
					
					baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMap);				
				}
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listD", map);
				break;				
			}
		}
		
		list = (DataSetMap) inDataset.get("input2");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR1", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR1", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR1", map);
				break;		
			}	
		}
		
		list = (DataSetMap) inDataset.get("input3");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR2", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR2", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR2", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input4");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR3", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR3", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR3", map);
				break;		
			}	
		}
		
		list = (DataSetMap) inDataset.get("input5");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR4", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR4", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR4", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input6");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR5", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR5", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR5", map);
				break;		
			}	
		}
		
		list = (DataSetMap) inDataset.get("input7");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR6", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR6", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR6", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input8");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				if(map.get("LFSTS_CSTMR_NO") == null ){
					baseDao.insert("RNT030301DAO.listCR7", map);
				}
				if(map.get("LFSTS_CSTMR_NO") != null ){
					baseDao.insert("RNT030301DAO.listCR77", map);
				}				
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR7", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR7", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input9");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("RNT030201DAO.listCR6", map);			
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030201DAO.listUR6", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030201DAO.listDR6", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input10");		
		for (int x = 0; x < list.size(); x++) {
			Map<String, Object> map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("RNT030301DAO.exemptionI", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.exemptionU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.exemptionD", map);
				break;
				
			}				
		}		
	}
	
	/** 첨부파일 신규 */
		
    @SuppressWarnings({"unchecked","rawtypes"})
    public void atchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){			
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    		
    	}
    	
		List<Map> failList = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT030301DAO.atchCUD", targetMap);
			}

		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}

		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failList", failMap);
	}
	
	/** 첨부파일 신규2 */
		
    @SuppressWarnings({"unchecked","rawtypes"})
    public void atchCUD2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
    	
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    	}
    	
		List<Map> failList = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT030301DAO.atchCUD2", targetMap);
			}
		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}

		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failList", failMap);
	}		

    /* 전세임대 계약서 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	

			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			if (list != null){
				Map<String, Object> inMap = list.get(0);
				
				for (int x = 0; x < list.size(); x++) {
						
					Map<String, Object> map = list.get(x);
					
					String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
						
						// 컬럼 수정 후 - 파일일련번호, 파일순차번호
						boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
						if(hasAtchFile){
							NexacroMapDTO xpDto = getXpDto();
							Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
														
							log.info("첨부파일 삭제 결과 = " + delResult.toString());
						}
					}
				
				// 상세 목록카은트
				// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
				int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
				if(fileCnt == 0)
				{
					// 계약관리 FILE_SN NULL로 업데이트
					baseDao.delete("RNT030301DAO.atchDelete", inMap);
				}				
	
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }	
	
    /* 전세면제 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	

			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			if (list != null){
				Map<String, Object> inMap = list.get(0);
				
				for (int x = 0; x < list.size(); x++) {
						
					Map<String, Object> map = list.get(x);
					
					String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
						
						// 컬럼 수정 후 - 파일일련번호, 파일순차번호
						boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
						if(hasAtchFile){
							NexacroMapDTO xpDto = getXpDto();
							Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
														
							log.info("첨부파일 삭제 결과 = " + delResult.toString());
						}
					}		
	
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }	
    
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void approveU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("RNT030301DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}    
	
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void sancKnd(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		records = (List<Map>)baseDao.list("RNT030301DAO.sancKnd", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자동이체계좌 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void vacct(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		records = (List<Map>)baseDao.list("RNT030301DAO.vacct", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 자동이체계좌 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void expndtr(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		records = (List<Map>)baseDao.list("RNT030301DAO.expndtr", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
	
}