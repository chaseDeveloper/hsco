package hsco.pms.sls.lad.stt.SLS110105;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

@Service("SLS110105Service")
public class SLS110105ServiceImpl extends BaseService implements SLS110105Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
	/**
	 * 토지정산내역
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
    /* Sql Injecttion 이슈 2016.04.29 주석처리
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadReceiveList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		// [STEP 1] 가로 출력을 위한 날짜 목록 리스트 조회(그리드 헤더)
		List<Map> headDateList = (List<Map>) baseDao.list("SLS110105DAO.selectHeadDateList", inMap);
		inMap.put("PAY_MONTH_LIST", headDateList);	// 조회 월 목록
		
		// [STEP 2] 용도구분 선택 목록 설정
		String inPrposSe = (String)inMap.get("PRPOS_SE");
		if(!StringUtil.isNull(inPrposSe))
		{	
			String[] inPrposSeArr = inPrposSe.split(",");
			inMap.put("PRPOS_SE_LIST", inPrposSeArr);
		}
		
		List<Map> ladReceiveList = (List<Map>)baseDao.list("SLS110105DAO.selectLadReceiveList", inMap);

		DataSetMap outHeadDateDsMap = new DataSetMap();		
		outHeadDateDsMap.setRowMaps(headDateList);
		
		DataSetMap outLadReceiveDsMap = new DataSetMap();		
		outLadReceiveDsMap.setRowMaps(ladReceiveList);
		
		outDataset.put("headDateList", outHeadDateDsMap);
		outDataset.put("ladReceiveList", outLadReceiveDsMap);
	}
	*/
	
	//Sql Injecttion 이슈 2016.04.29  수정
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadReceiveList( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {
		

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [STEP 1] 가로 출력을 위한 날짜 목록 리스트 조회(그리드 헤더)
		List<Map> headDateList = (List<Map>) baseDao.list("SLS110105DAO.selectHeadDateList", inMap);
		//inMap.put("PAY_MONTH_LIST", headDateList);	// 조회 월 목록 2016.04.29 주석처리
		
		// [STEP 2] 용도구분 선택 목록 설정
		String inPrposSe = (String)inMap.get("PRPOS_SE");
		if(!StringUtil.isNull(inPrposSe)){	
			String[] inPrposSeArr = inPrposSe.split(",");
			inMap.put("PRPOS_SE_LIST", inPrposSeArr);
			
		}
		
		// 로우 조회용
		List<Map> ladReceiveList = (List<Map>)baseDao.list("SLS110105DAO.selectLadReceiveList", inMap);
		
		//결과값
		List<Map> records = new ArrayList<Map>();
		
		if(headDateList == null){
			throw new NexaServiceException("조회조건이 맞지 않습니다.");  
		}
		else{
			
			for(int i = 0 ; i < ladReceiveList.size() ; i++){
				
				Map rowMap = ladReceiveList.get(i);
				
				for(int z = 0 ; z < headDateList.size() ; z++ ){
					Map colMap = headDateList.get(z);
					
					String colName = "PAYAMT_" + colMap.get("RQEST_YM"); // 컬럼 Alias
					
					inMap.put("RQEST_YM",  	colMap.get("RQEST_YM"));	// cell 값 조회조건 
					inMap.put("CNTRCTR_NO",  	rowMap.get("CNTRCTR_NO"));	// cell 값 조회조건
										
					System.out.println("colName =1=============================> " + colName);
					System.out.println("CNTRCTR_NO =1=============================> " + inMap.get("CNTRCTR_NO"));
					System.out.println("RCIV_SE =1=============================> " + inMap.get("RCIV_SE"));
					
					Map rsltColMap = (Map)baseDao.select("SLS110105DAO.selectLadReceiveList2", inMap); // cell 값 조회 
					// cell 값 설정
					if(rsltColMap == null){
						 rowMap.put(colName , ""); 
					}
					else{
						 rowMap.put(colName , rsltColMap.get("PAY_MONTH_PAYAMT"));
						 System.out.println("PAY_MONTH_PAYAMT =" + rsltColMap.get("PAY_MONTH_PAYAMT"));
					}
				}		
				records.add(rowMap); // 행추가
			}
			
		}
		
		//그리드 헤더
		DataSetMap outHeadDateDsMap = new DataSetMap();		
		outHeadDateDsMap.setRowMaps(headDateList);
		
		//결과값
		DataSetMap outLadReceiveDsMap = new DataSetMap();		
		//outLadReceiveDsMap.setRowMaps(ladReceiveList);//2016.04.29 주석처리
		outLadReceiveDsMap.setRowMaps(records);
		
		outDataset.put("headDateList", outHeadDateDsMap);//그리드 헤드
		outDataset.put("ladReceiveList", outLadReceiveDsMap);//결과값
	}
	
	/**
	 * @Deprecated
	 * 용도구분 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrposSeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS110105DAO.selectPrposSeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * @Deprecated
	 * 그리드 해더 날짜 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHeadDateList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("SLS110105DAO.selectHeadDateList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
}
