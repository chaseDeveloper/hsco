package hsco.mis.bdg.BDG030101;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG030101ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 20.
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
 *  2015. 07. 20.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG030101Service")
public class BDG030101ServiceImpl extends BaseService implements BDG030101Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /************************************
     * BDG030101
     *************************************/

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInpYn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectInpYn", inMap));
        outDataset.put("output1", outDsMap1);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectCntDemandOpinion", inMap));
        outDataset.put("output2", outDsMap2);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPrvYearBdgAm(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    	if (inDsMap != null) {
    		inMap = inDsMap.get(0);
    	}
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectPrvYearBdgAm", inMap));
    	outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectDemandBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	DataSetMap list1 = (DataSetMap) inDataset.get("input1");
    	boolean isChgSortOder = false;
        
        // 출력순번 재조정 여부판단
        for (int x = 0; x < list1.size(); x++) {
        	Map map = list1.get(x);
        	String customType = (String) map.get("CUSTOM_TYPE"); 
        	if("1".equals(customType)) {
        		isChgSortOder = true;
        	}
        }
        
        // 출력순번 재조정
        if(isChgSortOder) {
        	for (int x = 0; x < list1.size(); x++) {
            	list1.get(x).put("DEMAND_NO", x+1);
            }
        	
        	for(int x = 0; x < list1.size(); x++) {
        		Map map = list1.get(x);
        		baseDao.update("BDG030101DAO.updateDemandNo2", map);
        	}
        }
        
        //this.executePartSmAmDcsn(list1); // 부분집계합 재설정
        
        // 1. 수정사항 및 재조정된 출력순번 저장
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG030101DAO.insertDemandBudget", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030101DAO.updateDemandBudget", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG030101DAO.deleteDemandBudget", map);
                break;
            }
        }
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void readjst(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	DataSetMap list1 = (DataSetMap) inDataset.get("input1");
    	
    	if (list1 != null) {
    		Map inMap1 = list1.get(0);
    		
    		// 연도별 전체 건에 맞춰 출력순번 재조정(뷰의 DEMAND_NO2로)
    		baseDao.update("BDG030101DAO.updateDemandNo", inMap1);
    		
    		// 연도별 전체 건에 맞춰 합계금액 재조정(요구, 확정)
    		baseDao.update("BDG030101DAO.updateAm", inMap1);
    	}
    }

    /**
	 * 부분집계합 설정
	 *
	 * @param map
	 * @param isConfrimBdgYn
	 * @param bdgAmt
	 */
    @SuppressWarnings("rawtypes")
	private void executePartSmAmDcsn(DataSetMap list) {
		long depth2Amt  = 0;	// 2뎁스금액
		long depth3Amt  = 0;	// 3뎁스금액
		long depth2FAmt = 0;	// 최초2뎁스금액
		long depth3FAmt = 0;	// 최초3뎁스금액
		
		for (int i = list.size() - 1; i >= 0; i--) {
			Map map = list.get(i);
			String prnLvl = (String) map.get("OUTPT_LEVEL"); //출력레벨
			String pamFmlt = (String) map.get("COMPUT_OFCL_BUKIP_ACCNUT");	// 산출공식
			System.out.println(pamFmlt);
			if(pamFmlt == null) {
				pamFmlt = "";
			}
			else if(!pamFmlt.isEmpty()) {
				pamFmlt = pamFmlt.trim();
			}
			
			String sDemandBudgetDcsnAm = (String) map.get("DEMAND_BUDGET_DCSN_AM");
			if(sDemandBudgetDcsnAm == null) {
				sDemandBudgetDcsnAm = "";
			}
			long demandBudgetDcsnAm = sDemandBudgetDcsnAm.length() == 0 ? 0 : Long.parseLong(sDemandBudgetDcsnAm); // 요구예산확정금액
			
			String sFrstDemandBudgetAm = (String) map.get("FRST_DEMAND_BUDGET_AM");
			if(sFrstDemandBudgetAm == null) {
				sFrstDemandBudgetAm = "";
			}
			long frstDemandBudgetAm = sFrstDemandBudgetAm.length() == 0 ? 0 : Long.parseLong(sFrstDemandBudgetAm); // 최초요구예산금액
			
			if (prnLvl.equals("1")) {
				if (pamFmlt.length() == 0) {
					this.setPrtBdgAmt(map,  depth2Amt);		// 부분집계합에 레벨별 하위금액을 설정한다
					this.setPrtBdgFAmt(map, depth2FAmt);	// 부분집계합에 레벨별 하위금액을 설정한다
				} else {
					this.setPrtBdgAmt(map,  demandBudgetDcsnAm);
					this.setPrtBdgFAmt(map, frstDemandBudgetAm);
				}
				depth2Amt  = 0;
				depth2FAmt = 0;
			} else if (prnLvl.equals("2")) {
				if (pamFmlt.length() == 0 && demandBudgetDcsnAm >= 0 && depth3Amt != 0) {
					this.setPrtBdgAmt(map, depth3Amt); // 부분집계합에 레벨별 하위금액을 설정한다
					depth2Amt += depth3Amt;
				} else {
					this.setPrtBdgAmt(map, demandBudgetDcsnAm);
					depth2Amt += demandBudgetDcsnAm;
				}
				depth3Amt = 0;
				if (pamFmlt.length() == 0 && frstDemandBudgetAm >= 0 && depth3FAmt != 0) {
					this.setPrtBdgFAmt(map, depth3FAmt); // 부분집계합에 레벨별 하위금액을 설정한다
					depth2FAmt += depth3FAmt;
				} else {
					this.setPrtBdgFAmt(map, frstDemandBudgetAm);
					depth2FAmt += frstDemandBudgetAm;
				}
				depth3FAmt = 0;
			} else if (prnLvl.equals("3")) {
				depth3Amt += demandBudgetDcsnAm;
				this.setPrtBdgAmt(map, demandBudgetDcsnAm);
				depth3FAmt += frstDemandBudgetAm;
				this.setPrtBdgFAmt(map, frstDemandBudgetAm);
			}
		}
	}

	/**
	 * 부분집계합 설정(확정)
	 *
	 * @param map
	 * @param isConfrimBdgYn
	 * @param bdgAmt
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void setPrtBdgAmt(Map map, long bdgAmt) {
		map.put("PART_SM_AM_DCSN", bdgAmt); // 예산확정금액 부분합계
	}
	
	/**
	 * 부분집계합 설정(요구)
	 *
	 * @param map
	 * @param isConfrimBdgYn
	 * @param bdgAmt
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void setPrtBdgFAmt(Map map, long bdgAmt) {
		map.put("PART_SM_AM_DEMAND", bdgAmt); // 요구예산금액 부분합계
	}

    @SuppressWarnings({ "rawtypes" })
    public void saveCopyPrvYear(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);

        baseDao.delete("BDG030101DAO.deleteDemandCopyPrvYear", map);
        baseDao.insert("BDG030101DAO.insertDemandCopyPrvYear", map);
    }


    /************************************
     * BDG030101_P01
     *************************************/

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void initCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectAcntCode", inMap));
        
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectExpndtrUnitCode", inMap));
        
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectExpndtrUnitPopup(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectExpndtrUnitPopup", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    /************************************
     * BDG030101_P02
     *************************************/

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDemandOpinion(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectDemandOpinion", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void saveDemandOpinion(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG030101DAO.insertDemandOpinion", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030101DAO.updateDemandOpinion", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG030101DAO.deleteDemandOpinion", map);
                break;
            }
        }
    }

}
