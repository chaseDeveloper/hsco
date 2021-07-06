package hsco.mis.ctr.CTR010103;

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
 * @Class Name   	: CTR010103ServiceImpl.java
 * @Description  	: 발주계획관리
 * @author       	: 정 민
 * @since        	: 2017. 07. 07.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 07.					정 민				최초생성
 * </pre>
 */
@Service("CTR010103Service")
public class CTR010103ServiceImpl extends BaseService implements CTR010103Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /** 자료내역(기업자료 참고사항) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaReferMatterList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaReferMatterList", inMap));
		outDataset.put("output1", outDsMap);
    }

    /** 기업자료관리(탭1 : 중소기업자료관리) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaSmlmdmEntrprsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaSmlmdmEntrprsList", inMap));
		outDataset.put("output1", outDsMap);
    }


	/** 기업자료관리(탭2 : 인증신제품기업관리) 목록 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaCrtfcNwPrductList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaCrtfcNwPrductList", inMap));
		outDataset.put("output1", outDsMap);
    }


	/** 기업자료관리(탭3 : 중증장애인기업관리) 목록 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaSrsillDspsnList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaSrsillDspsnList", inMap));
		outDataset.put("output1", outDsMap);
    }


	/** 기업자료관리(탭4 : 녹색제품기업관리) 목록 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectGreenPrductTrgetThngList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectGreenPrductTrgetThngList", inMap));
		outDataset.put("output1", outDsMap);
    }

	/** 기업자료관리(탭5 : 인증사회적기업관리) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaSoctyEntrprsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaSoctyEntrprsList", inMap));
		outDataset.put("output1", outDsMap);
    }
    
	/** 기업자료관리(탭6 : 사회적협동조합기업관리) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaSoctyCperMxtrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaSoctyCperMxtrList", inMap));
		outDataset.put("output1", outDsMap);
    }
    
	/** 기업자료관리(탭7 : 장애인표준사업장관리) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaDspsnStdBplcList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010103DAO.selectDtaDspsnStdBplcList", inMap));
		outDataset.put("output1", outDsMap);
    }

    

    /** 기업자료관리(탭1 : 중소기업자료관리) 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveDtaSmlmdmEntrprsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
            	
    	DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
    	DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 중소기업자료관리 정보
        
        int iRow = 1;
        
        for (int x = 0; x < list.size(); x++) {
    		Map map = list.get(x);
    		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	baseDao.delete("CTR010103DAO.dtaSmlmdmEntrprsAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			    	//baseDao.update("CTR010103DAO.bcncMastr1U", map);
			        break;
		    }
		}
        

    	if(list2.size() > 0) {
	        // 중소기업자료 모두 삭제
    		baseDao.delete("CTR010103DAO.dtaSmlmdmEntrprsAllD", list2.get(0));
	    	
	    	// 중소기업자료관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaSmlmdmEntrprsC", map);
				    break;
			    }
				
			}
	    	
    		// 거래처마스터 수정
	    	//baseDao.update("CTR010103DAO.bcncMastr1U",  list2.get(0));
    	}
		
		return iRow;
    }


	/** 기업자료관리(탭2 : 인증신제품기업관리) 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveDtaCrtfcNwPrductList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        		    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 인증신제품기업관리 정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	// [삭제처리 시점] 인증신제품기업관리 여부 '0' 으로 갱신
			    	// 삭제일자보다 뒤에 등록한 자료중 존재하지 않는 사업자번호만 대상으로 거래처테이블 업데이트 처리진행
			    	baseDao.update("CTR010103DAO.bcncMastr2U_STEP01", map);
			    	
			    	// [삭제처리 시점] 인증신제품기업관리 여부 '1' 으로 갱신
			    	baseDao.update("CTR010103DAO.bcncMastr2U_STEP02", map); // (과거데이터엔 존재하나, 현재데이터엔 없을 때)
			    	
			    	baseDao.delete("CTR010103DAO.dtaCrtfcNwPrductAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			    	//baseDao.update("CTR010103DAO.bcncMastr2U", map);
			        break;
		    }
		}
		
		
		if(list2.size() > 0) {
		    // 인증신제품기업관리 모두 삭제
		    baseDao.delete("CTR010103DAO.dtaCrtfcNwPrductAllD", list2.get(0));
			
			// 인증신제품기업관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaCrtfcNwPrductC", map);
				    break;
			    }
				
			}
			
    		// [업로드 후] 거래처마스터 업데이트
			baseDao.update("CTR010103DAO.bcncMastr2U_STEP03", list2.get(0)); // 인증신제품기업관리 여부 '1'으로 갱신
			baseDao.update("CTR010103DAO.bcncMastr2U_STEP04", list2.get(0)); // 인증신제품기업관리 여부 '0'으로 갱신(과거데이터엔 존재하나, 현재데이터엔 없을 때)
		}
		
		return iRow;
    }


	/** 기업자료관리(탭3 : 중증장애인기업관리) 목록 저장*/
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveDtaSrsillDspsnList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 중증장애인기업관리 정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	// [삭제처리 시점] 중증장애인기업관리 여부 '0' 으로 갱신
			    	// 삭제일자보다 뒤에 등록한 자료중 존재하지 않는 사업자번호만 대상으로 거래처테이블 업데이트 처리진행
			    	baseDao.update("CTR010103DAO.bcncMastr3U_STEP01", map);
			    	
			    	// [삭제처리 시점] 중증장애인기업관리 여부 '1' 으로 갱신
			    	baseDao.update("CTR010103DAO.bcncMastr3U_STEP02", map); // (과거데이터엔 존재하나, 현재데이터엔 없을 때)
			    	
			    	baseDao.delete("CTR010103DAO.dtaSrsillDspsnAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
					//baseDao.update("CTR010103DAO.bcncMastr3U", map);
			        break;
		    }
		}
		
		
		if(list2.size() > 0) {
		    // 중증장애인기업관리 모두 삭제
		    baseDao.delete("CTR010103DAO.dtaSrsillDspsnAllD", list2.get(0));
			
			// 중증장애인기업관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaSrsillDspsnC", map);
				    break;
			    }
				
			}
			
    		// [업로드 후] 거래처마스터 업데이트
			baseDao.update("CTR010103DAO.bcncMastr3U_STEP03", list2.get(0)); // 중증장애인기업관리 여부 '1'으로 갱신
			baseDao.update("CTR010103DAO.bcncMastr3U_STEP04", list2.get(0)); // 중증장애인기업관리 여부 '0'으로 갱신(과거데이터엔 존재하나, 현재데이터엔 없을 때)

		}
		
		return iRow;		
    }


	/** 기업자료관리(탭4 : 녹색제품기업관리) 목록 저장*/
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveGreenPrductTrgetThngList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 중증장애인기업관리 정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:

			    	baseDao.delete("CTR010103DAO.greenPrductTrgetThngAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			        break;
		    }
		}
		
		
		if(list2.size() > 0) {
		    // 녹색제품기업관리 모두 삭제
		    baseDao.delete("CTR010103DAO.greenPrductTrgetThngAllD", list2.get(0));
			
			// 중증장애인기업관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.greenPrductTrgetThngC", map);
				    break;
			    }
				
			}
		}
		
		return iRow;
    }

	/** 기업자료관리(탭5 : 인증사회적기업관리) 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveDtaSoctyEntrprsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 인증사회적기업관리 정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	// [삭제처리 시점] 인증사회적기업관리 여부 '0' 으로 갱신
			    	// 삭제일자보다 뒤에 등록한 자료중 존재하지 않는 사업자번호만 대상으로 거래처테이블 업데이트 처리진행
			    	baseDao.update("CTR010103DAO.bcncMastr5U_STEP01", map);
			    	
			    	// [삭제처리 시점] 인증사회적기업관리 여부 '1' 으로 갱신
			    	baseDao.update("CTR010103DAO.bcncMastr5U_STEP02", map); // (과거데이터엔 존재하나, 현재데이터엔 없을 때)
			    	
			    	baseDao.delete("CTR010103DAO.dtaSoctyEntrprsAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			    	//baseDao.update("CTR010103DAO.bcncMastr5U", map);
			        break;
		    }
		}
		
		
		if(list2.size() > 0) {
		    // 인증사회적기업관리 모두 삭제
		    baseDao.delete("CTR010103DAO.dtaSoctyEntrprsAllD", list2.get(0));
		
			// 인증사회적기업관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaSoctyEntrprsC", map);
				    break;
			    }
				
			}
			
    		// [업로드 후] 거래처마스터 업데이트
			baseDao.update("CTR010103DAO.bcncMastr5U_STEP03", list2.get(0)); // 인증사회적기업관리 여부 '1'으로 갱신
			baseDao.update("CTR010103DAO.bcncMastr5U_STEP04", list2.get(0)); // 인증사회적기업관리 여부 '0'으로 갱신(과거데이터엔 존재하나, 현재데이터엔 없을 때)

		}
		
		return iRow;
    }
    
	/** 기업자료관리(탭6 : 사회적협동조합기업관리) 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public int saveDtaSoctyCperMxtrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 인증사회적기업관리 정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	// [삭제처리 시점] 사회적협동조합기업관리 여부 '0' 으로 갱신
			    	// 삭제일자보다 뒤에 등록한 자료중 존재하지 않는 사업자번호만 대상으로 거래처테이블 업데이트 처리진행
			    	baseDao.update("CTR010103DAO.bcncMastr6U_STEP01", map);
			    	
			    	// [삭제처리 시점] 사회적협동조합기업관리 여부 '1' 으로 갱신
			    	baseDao.update("CTR010103DAO.bcncMastr6U_STEP02", map); // (과거데이터엔 존재하나, 현재데이터엔 없을 때)
			    	
			    	baseDao.delete("CTR010103DAO.dtaSoctyCperMxtrAllD", map);
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			    	//baseDao.update("CTR010103DAO.bcncMastr6U", map);
			        break;
		    }
		}
		
		
		if(list2.size() > 0) {
		    // 사회적협동조합기업관리 모두 삭제
		    baseDao.delete("CTR010103DAO.dtaSoctyCperMxtrAllD", list2.get(0));
			
			// 사회적협동조합기업관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaSoctyCperMxtrC", map);
				    break;
			    }
				
			}
			
    		// [업로드 후] 거래처마스터 업데이트
			baseDao.update("CTR010103DAO.bcncMastr6U_STEP03", list2.get(0)); // 사회적협동조합기업관리 여부 '1'으로 갱신
			baseDao.update("CTR010103DAO.bcncMastr6U_STEP04", list2.get(0)); // 사회적협동조합기업관리 여부 '0'으로 갱신(과거데이터엔 존재하나, 현재데이터엔 없을 때)

		}
		
		return iRow;
    }
    
	/** 기업자료관리(탭7 : 장애인표준사업장관리) 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void saveDtaDspsnStdBplcList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 장애인표준사업장관리 정보
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaReferMatterC", map);
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR010103DAO.dtaReferMatterU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	
			    	// [삭제처리 시점] 장애인표준사업장 여부 '0' 으로 갱신
			    	// 삭제일자보다 뒤에 등록한 자료중 존재하지 않는 사업자번호만 대상으로 거래처테이블 업데이트 처리진행
			    	baseDao.update("CTR010103DAO.bcncMastr7U_STEP01", map);
			    	
			    	// [삭제처리 시점] 장애인표준사업장 여부 '1' 으로 갱신
			    	baseDao.update("CTR010103DAO.bcncMastr7U_STEP02", map); // (과거데이터엔 존재하나, 현재데이터엔 없을 때)
			    	
			    	// 기준일자에 해당하는 장애인표준사업장 데이터삭제 처리
			    	baseDao.delete("CTR010103DAO.dtaDspsnStdBplcAllD", map);
			    	
			    	// 기준일자관리 테이블 데이터 삭제
			    	baseDao.delete("CTR010103DAO.dtaReferMatterD", map);
			    	

			        break;
		    }
		}
		
		if(list2.size() > 0) {
			
		    // 장애인표준사업장관리 모두 삭제
		    baseDao.delete("CTR010103DAO.dtaDspsnStdBplcAllD", list2.get(0));
			
			// 장애인표준사업장관리 생성
			for (int x = 0; x < list2.size(); x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR010103DAO.dtaDspsnStdBplcC", map);
				    break;
			    }
				
			}
			
    		// [업로드 후] 거래처마스터 업데이트
			baseDao.update("CTR010103DAO.bcncMastr7U_STEP03", list2.get(0)); // 장애인표준사업장 여부 '1'으로 갱신
			baseDao.update("CTR010103DAO.bcncMastr7U_STEP04", list2.get(0)); // 장애인표준사업장 여부 '0'으로 갱신(과거데이터엔 존재하나, 현재데이터엔 없을 때)
		}
    }
 
}