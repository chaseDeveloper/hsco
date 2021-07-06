package hsco.mis.acc.ACC010102;

import java.text.ParseException;
import java.util.HashMap;
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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC010102ServiceImpl.java
 * @Description  	: 마감일관리 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 15.	이상명		최초생성
 *  2016. 01. 18.	이수지		역분개실행(팝업)
 * </pre>  
 */
@Service("acc010102Service")
public class ACC010102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC010102ServiceImpl.class);
	
	/**
	 * 마감일관리 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void closDeManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("closDeManageList Started!");
		
		DataSetMap input = inDataset.get("input1");
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC010102DAO.closDeManageList", input.get(0));		
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}

	/**
	 * 마감일관리 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void closDeManageCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		Map<String, String> stanctMap = new HashMap<String, String>();		
		
		stanctMap.put("INVERSE_CHITDE","999999");
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("ACC010102DAO.closDeManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
						//결산해제처리시 기존역분개 삭제
					if("1".equals((String)map.get("CHIT_CLOS_AT"))&&"0".equals((String)map.get("STACNT_CLOS_AT"))&&"0".equals((String)map.get("SE_ACCNUT_CLOS_AT"))){
						//기존 역분개건을 삭제
						if(Integer.parseInt(stanctMap.get("INVERSE_CHITDE")) > (Integer.parseInt((String) map.get("CLOS_YM")))){
							stanctMap.remove("INVERSE_CHITDE");
							stanctMap.put("INVERSE_CHITDE", (String) map.get("CLOS_YM"));
							stanctMap.put("STACNT_SE", "C1");
							List<Map> stanctResultlist = (List<Map>)baseDao.list("ACC010102DAO.searchInverseNo", stanctMap);	// 기존역분개건 CHIT_NO찾기위해서 역분개건 검색
							int stanctlistSize = (stanctResultlist == null) ? 0 : stanctResultlist.size();
							for(int z = 0; z < stanctlistSize; z++){
								
								Map stanctResultMap = stanctResultlist.get(z);
								
								baseDao.delete("ACC010102DAO.stacntInverseDetailD", stanctResultMap);
								baseDao.delete("ACC010102DAO.stacntInverseD", stanctResultMap);
							}
						}
					} else if("1".equals((String)map.get("CHIT_CLOS_AT"))&&"1".equals((String)map.get("STACNT_CLOS_AT"))&&"0".equals((String)map.get("SE_ACCNUT_CLOS_AT"))){
						//기존 역분개건을 삭제
						if(Integer.parseInt(stanctMap.get("INVERSE_CHITDE")) > (Integer.parseInt((String) map.get("CLOS_YM")))){
							stanctMap.remove("INVERSE_CHITDE");
							stanctMap.put("INVERSE_CHITDE", (String) map.get("CLOS_YM"));
							stanctMap.put("STACNT_SE", "C2");
							List<Map> stanctResultlist = (List<Map>)baseDao.list("ACC010102DAO.searchInverseNo", stanctMap);	// 기존역분개건 CHIT_NO찾기위해서 역분개건 검색
							int stanctlistSize = (stanctResultlist == null) ? 0 : stanctResultlist.size();
							for(int z = 0; z < stanctlistSize; z++){
								
								Map stanctResultMap = stanctResultlist.get(z);
								
								baseDao.delete("ACC010102DAO.stacntInverseDetailD", stanctResultMap);
								baseDao.delete("ACC010102DAO.stacntInverseD", stanctResultMap);
							}
						}
					}
					baseDao.update("ACC010102DAO.closDeManageU", map);
					break;
				default:
					break;
			}
		}
	}
	
	/**
	 * 역분개 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectinverseJrnlzpr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap input = inDataset.get("input1");
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC010102DAO.selectinverseJrnlzpr", input.get(0));		
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}
	
	/**
	 * 역분개 실행
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 * @throws ParseException 
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void inverseJrnlzpr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		String rvsChitDe = (String) inDataset.get("input2").getMapValue(0, "RVS_JRNLZ_CHIT_DE");
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			map.put("RVS_JRNLZ_CHIT_DE", rvsChitDe);	//역분개 전표생성일자
			
			//기존 역분개건을 삭제
			String oldChitNo = (String) baseDao.select("ACC010102DAO.inverseJrnlzprR", map);	//기존역분개건 CHIT_NO찾기
			if(oldChitNo != null && !"".equals(oldChitNo)) {
				map.put("OLD_CHIT_NO", oldChitNo);
				baseDao.delete("ACC010102DAO.inverseJrnlzprDetailD", map);							//자식먼저 삭제
				baseDao.delete("ACC010102DAO.inverseJrnlzprD", map);
			}
			if("1".equals(map.get("RVS_JRNLZ_SE").toString())){
				//새로운 전표번호 채번
				String chitNo = (String) baseDao.select("ACC010102DAO.chitNo", map);
				map.put("NEW_CHIT_NO", chitNo);
				//새 역분개 입력				
				baseDao.insert("ACC010102DAO.inverseJrnlzpr", map);
				baseDao.insert("ACC010102DAO.inverseJrnlzprDetail", map);
			}
		}
	}

}