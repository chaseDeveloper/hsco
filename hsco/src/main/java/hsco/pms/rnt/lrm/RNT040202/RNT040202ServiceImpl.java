package hsco.pms.rnt.lrm.RNT040202;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT040202ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 13.				       이광원		    	최초생성
 * </pre>  
 */

@Service("RNT040202Service")
public class RNT040202ServiceImpl extends BaseService implements RNT040202Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040202DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 수선 교체일정관리 집계표
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void getList1( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
	
		// 가로 출력을 위한 날짜 목록 리스트 조회(그리드 헤더)
		List<Map> headDateList = (List<Map>) baseDao.list("RNT040202DAO.selectHeadDateList", inMap);
		List<Map> ladReceiveList = (List<Map>)baseDao.list("RNT040202DAO.getList1", inMap); // 로우 조회용
		List<Map> records = new ArrayList<Map>();
		
		if(headDateList == null){
			throw new NexaServiceException("조회조건이 맞지 않습니다.");  
		}else{
			for(int i = 0 ; i < ladReceiveList.size() ; i++){
				Map rowMap = ladReceiveList.get(i);
				
				for(int z = 0 ; z < headDateList.size() ; z++ ){
					Map colMap = headDateList.get(z);
					String colName = "PAYAMT_" + colMap.get("RQEST_YM"); // 컬럼 Alias
					inMap.put("RQEST_YM",  colMap.get("RQEST_YM"));	// cell 값 조회조건
					inMap.put("HOUSE_CODE",  rowMap.get("HOUSE_CODE"));	// cell 값 조회조건
					inMap.put("DONG",  rowMap.get("DONG"));	// cell 값 조회조건
					inMap.put("HO",  rowMap.get("HO"));	// cell 값 조회조건
					inMap.put("CNTRWK_KND_CODE",  rowMap.get("CNTRWK_KND_CODE"));	// cell 값 조회조건
					
					 Map rsltColMap = (Map)baseDao.select("RNT040202DAO.getList2", inMap); // cell 값 조회 
					 // cell 값 설정
					 if(rsltColMap == null){
						 rowMap.put(colName , ""); 
					 }else{
						 rowMap.put(colName , rsltColMap.get("VAL"));
					}
				}		
				records.add(rowMap); // 행추가
			}	
		}
		
		// 그리드 헤더
		DataSetMap outHeadDateDsMap = new DataSetMap();	
		outHeadDateDsMap.setRowMaps(headDateList);
		
		// 결과 값
		DataSetMap outLadReceiveDsMap = new DataSetMap();		
		outLadReceiveDsMap.setRowMaps(records);
		
		outDataset.put("output1", outHeadDateDsMap); // 그리드 헤드용
		outDataset.put("output2", outLadReceiveDsMap); // 결과 값
	}	

}