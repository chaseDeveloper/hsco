package hsco.mis.sal.SAL010110;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 경영정보시스템
 * &#64;Class Name   	: SAL010110ServiceImpl.java
 * &#64;Description  	: 급여기준정보조회
 * &#64;author          : 정  민
 * &#64;since           : 2017. 4. 05
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 05.                    정  민                최초생성
 * </pre>
 */

@Service("SAL010110Service")
public class SAL010110ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 사원정보 목록조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmplInfoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectEmplInfoList", inMap));

		outDataset.put("output1", outDsMap);

	}


	/**
	 * 사원상세정보 수정
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
   	public void emplDetailInfoU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		

   		// 사원상세정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		Map map = null;
		
		if (input1 != null) {
			if(input1.size() > 0) {
				map = input1.get(0);
	
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType) {
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("SAL010110DAO.emplDetailInfoU", map);
						break;
				}
			
			}
		}
   		
   		// 탭1  : 기본사항
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		Map map2 = null;
		
		if (input2 != null) {
			if (input2.size() > 0) {
				map2 = input2.get(0);
	
				int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType2) {
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("SAL010110DAO.bassMatterU", map2);
						baseDao.update("SAL010110DAO.hrMastrSrclsCnwkYycntU", map2);	// 인사마스터 수정(호봉/근속년수정보)
						break;
				}
			}
		}
		
		// 탭3  : 가족사항
		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < input3.size(); x++) {
			Map map3 = input3.get(x);
			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType3) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SAL010110DAO.hrFamilyC", map3);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SAL010110DAO.hrFamilyU", map3);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("SAL010110DAO.hrFamilyD", map3);
					break;
			}
		}
		
		// 탭4  : 자격사항
		DataSetMap input4 = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < input4.size(); x++) {
			Map map4 = input4.get(x);
			int rowType4 = ((Integer) map4.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType4) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SAL010110DAO.hrQualfC", map4);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SAL010110DAO.hrQualfU", map4);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("SAL010110DAO.hrQualfD", map4);
					break;
			}
		}
}


	/**
	 * 사원상세정보 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmplDetailInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectEmplDetailInfo", inMap));
		outDataset.put("output1", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectBassMatterList", inMap));
		outDataset.put("output2", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectGnfdList", inMap));
		outDataset.put("output3", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectHrFamilyList", inMap));
		outDataset.put("output4", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectHrQualfList", inMap));
		outDataset.put("output5", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectSchxpnAsstnList", inMap));
		outDataset.put("output6", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL010110DAO.selectSlnrcList", inMap));
		outDataset.put("output7", outDsMap);

	}

	/**
	 * 지급공제상세코드 목록조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPymntDdcDetailCodeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(
				(List<Map>) baseDao.list("SAL010110DAO.selectPymntDdcDetailCodeList", inMap.get("RISK_WORK_CODE")));
		outDataset.put("output1", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(
				(List<Map>) baseDao.list("SAL010110DAO.selectPymntDdcDetailCodeList", inMap.get("DRV_ALLWNC_AT")));
		outDataset.put("output2", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(
				(List<Map>) baseDao.list("SAL010110DAO.selectPymntDdcDetailCodeList", inMap.get("SPCIFY_JOB_AT")));
		outDataset.put("output3", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(
				(List<Map>) baseDao.list("SAL010110DAO.selectPymntDdcDetailCodeList", inMap.get("SFMNG_CODE")));
		outDataset.put("output4", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(
				(List<Map>) baseDao.list("SAL010110DAO.selectPymntDdcDetailCodeList", inMap.get("ALPINE_CLUB_AT")));
		outDataset.put("output5", outDsMap);

	}
}
