package hsco.mis.ctr.CTR010101_P01;

import java.util.Map;

import hsco.cmm.ria.nexacro.map.DataSetMap;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SAL010101Service.java
 * @Description  	: 
 * @author       	: 이동석
 * @since        	: 2015. 6. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 8.					이동석				최초생성
 * </pre>  
 */

public interface CTR010101_P01Service {

	void selectBcnchist(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception;	
	
	void selectBcnchist1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception;	
	
	/** 업체변경 신규,수정,삭제 */
	int BcnchistCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception;

	

}

