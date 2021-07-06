package hsco.mis.hrm.HRM070116;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

@Service("HRM070116Service")
public class HRM070116ServiceImpl extends BaseService {

	/**
	 * 시간외근무 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOvtmwrk(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070116DAO.selectOvtmwrk", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 시간외근무 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public int saveOvtmwrk(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			int tlcomputAt = 0; //재택근무 신청 여부
			SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyymmdd");
			SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-mm-dd");
			java.util.Date tempDate = null;
			try {
			    // 현재 yyyymmdd로된 날짜 형식으로 java.util.Date객체를 만든다.
			    tempDate = beforeFormat.parse((String) map.get("OVTMWRK_DE"));
			} catch (ParseException e) {
			    e.printStackTrace();
			}
			// java.util.Date를 yyyy-mm-dd 형식으로 변경하여 String로 반환한다.
			String ovtmwrkDe = afterFormat.format(tempDate);

			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					tlcomputAt = (int)baseDao.select("HRM070116DAO.chkTlcomputAt", map);
					if(tlcomputAt == 0) {
						baseDao.insert("HRM070116DAO.insertOvtmwrk", map);
					}else{
						String errMsg = "해당 근무일자에 신청된 재택근무 이력이 존재합니다.\n["+ ovtmwrkDe + "]";
						throw new NexaServiceException("info.처리불가", errMsg);
					}
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070116DAO.updateOvtmwrk", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070116DAO.deleteOvtmwrk", map);
					break;
			}
		}
		return iRow;
	}
    /**
     * 유연근무 및 휴무일 조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Transactional
    public void selectWorkTm(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        List<Map> records = (List<Map>) baseDao.list("HRM070116DAO.selectWorkTm", inMap);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output1", outDsMap);
    }

}