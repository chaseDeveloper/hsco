package hsco.pms.rnt.pra.RNT01070100;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.ObjectUtil;

@Service("RNT01070100Service")
public class RNT01070100ServiceImpl extends BaseService{
	/**
	 * 지원금 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void gtnSportList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01070100DAO.gtnSportList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void sprntRentSupportI(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		int fileCnt = (Integer)baseDao.select("RNT01070100DAO.rntchrgCnt", map);
		if(fileCnt != 0){

			Object date = map.get("TODAY");
			map.put("RENT_BGNDE", date);
		}

		baseDao.list("RNT01070100DAO.SPRNT_RENT_SUPPORT_I", map);
	}
	
    // 신규 , 수정 , 삭제	
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				break;
			case DataSet.ROW_TYPE_UPDATED :
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT01070100DAO.listD", map);
				break;
				
			}		
		}			
	}	
}
