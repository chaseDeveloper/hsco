package hsco.pms.rnt.pra.RNT01070500;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("RNT01070500Service")
public class RNT01070500ServiceImpl extends BaseService{
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentSportDelintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map targetMap = inDsMap.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		
    	Object fileGb = targetMap.get("GB");		
		
    	if("1".equals(fileGb)){
    		List <Map> records = (List<Map>)baseDao.list("RNT01070500DAO.rentSportDelintList1", inMap);
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(records);
    		outDataset.put("output1", outDsMap);    		
    	}
    	if("2".equals(fileGb)){
    		List <Map> records = (List<Map>)baseDao.list("RNT01070500DAO.rentSportDelintList", inMap);
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(records);
    		outDataset.put("output1", outDsMap);    		
    	}
    	
	}



	//일괄납부요청
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void spVaBillUid( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");

		ArrayList<ArrayList> mstList = makeList(inDsMap);

		if(mstList != null && mstList.size() > 0){
			int listSize = mstList.size();
			for(int i = 0; i < listSize; i++){
				ArrayList<Map> detlList = mstList.get(i);
				int listMapSize = detlList.size();
				Map inMap = null;

				if(listMapSize == 0)
					continue;

				inMap = detlList.get(0);
				inMap.put("IN_FLAG", "DELETE");
				baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", inMap);			// VA_BILL_DETAIL, VA_BILL 일괄삭제

				for(int j = 0; j < listMapSize; j++){
					inMap = detlList.get(j);
					inMap.put("IN_FLAG", "DETAIL");
					baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", inMap);		// 상세정보를 VA_BILL_DETAIL 저장
				}

				inMap.put("IN_FLAG", "MASTER");
				baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", inMap);			// 총합을 VA_BILL에 저장
			}
		}
	}


	//일괄납부요청을 위한 계약번호가 같은 목록끼리 List로 그룹화..
	@SuppressWarnings({ "rawtypes" })
	private ArrayList<ArrayList> makeList(DataSetMap inDsMap){
		int size = inDsMap.size();
		Map inMap = null;
		String prevCntrctrNo = "";
		String curCntrctrNo = "";
		ArrayList<ArrayList> mstList = new ArrayList<ArrayList>(); 
		ArrayList<Map> detlList = null;

		if (inDsMap != null){
			for(int i = 0; i < size; i++){
				inMap = inDsMap.get(i);

				curCntrctrNo = (String)inMap.get("CNTRCTR_NO");
				if(curCntrctrNo.equals(prevCntrctrNo) == false){
					detlList = new ArrayList<Map>();
					mstList.add(detlList);
				}
				detlList.add(inMap);
				prevCntrctrNo = curCntrctrNo;
			}
		}
		return mstList;
	}
}
