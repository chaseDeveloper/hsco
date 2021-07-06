package hsco.mis.acc.ACC020201;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020201ServiceImpl.java
 * @Description  	: 원인행위를 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("acc020201Service")
public class ACC020201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC020201ServiceImpl.class);


	/**
	 * 품의 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cnsulList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap input = inDataset.get("input1");
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC020201DAO.cnsulList",input.get(0));
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}
	
	/**
	 * 품의 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cnsul(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap input = inDataset.get("input1");
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC020201DAO.cnsul",input.get(0));
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}
	
	
	/**
	 * 품의 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void cnsulCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		long budgetBalc		= 0;	// 부기잔액(원인행위+결의서 기준)
		long cyfdBudgetBalc = 0;	// 이월예산 부기잔액
		long oriBudgetBalc	= 0;	// 본예산 부기잔액
		//long asignBalc		= 0;	// 배정잔액(원인행위+결의서 기준)
		long cnsulAmt		= 0;	// 품의금액
		
		DataSetMap input1 = inDataset.get("input1");
		
		for(Map map : input1.getRowMaps()) {
			
			// 예산잔액 정보
			Map budgetBalcMap = (Map) baseDao.select("ACC020201DAO.budgetBalcR", map);
			if(budgetBalcMap != null) {
				budgetBalc 		= Long.parseLong(String.valueOf(budgetBalcMap.get("EXECUT_BUDGET_JAN_AM")));
				cyfdBudgetBalc	= Long.parseLong(String.valueOf(budgetBalcMap.get("CYFDE_XECUT_BUDGET_JAN_AM")));
				oriBudgetBalc	= Long.parseLong(String.valueOf(budgetBalcMap.get("ORI_EXECUT_BUDGET_JAN_AM")));
				//asignBalc	= Long.parseLong(String.valueOf(budgetBalcMap.get("ASIGN_JAN_AMOUNT")));
			}
			
			// 결의금액
			if(map.get("CNSUL_AMOUNT") != null && !"".equals(map.get("CNSUL_AMOUNT"))) {				
				cnsulAmt = Long.parseLong(String.valueOf(map.get("CNSUL_AMOUNT")));				
			}
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			int year = Integer.parseInt((String)map.get("BUDGET_YEAR"));
			String cyfdSe = (String)map.get("CYFD_SE");
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					
					// 예산 체크
					if(year < 2020) {
						if(budgetBalc < cnsulAmt) {
							throw new NexaServiceException("fail.정보등록.실패", "부기잔액을 초과하였습니다.");
						}
					} else {
						if("0".equals(cyfdSe)) {
							if(oriBudgetBalc < cnsulAmt) {
								throw new NexaServiceException("fail.정보등록.실패", "예산잔액을 초과하였습니다.");
							}
						} else {
							if(cyfdBudgetBalc < cnsulAmt) {
								throw new NexaServiceException("fail.정보등록.실패", "이월예산잔액을 초과하였습니다.");
							}
						}
					}

					
					baseDao.insert("ACC020201DAO.cnsulC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					
					// 변경 전 품의금액
					Map cnsulAmtMap = (Map) baseDao.select("ACC020201DAO.cnsulAmtR", map);
					if(cnsulAmtMap != null) {
						long   bfCnsulAmt 		= Long.parseLong(String.valueOf(cnsulAmtMap.get("CNSUL_AMOUNT")));
						String bfCyfdSe 		= String.valueOf(cnsulAmtMap.get("CYFD_SE"));
						String bfBudgetAcntCode = String.valueOf(cnsulAmtMap.get("BUDGET_ACNT_CODE"));
						String bfBukipCode 		= String.valueOf(cnsulAmtMap.get("BUKIP_CODE"));

						String budgetAcntCode	= (String)map.get("BUDGET_ACNT_CODE");
						String bukipCode		= (String)map.get("BUKIP_CODE");
						
						// 예산이 변경된 경우 예산 체크
						if(!budgetAcntCode.equals(bfBudgetAcntCode) || !bukipCode.equals(bfBukipCode)) {
							// 예산 체크
							if(year < 2020) {
								if(budgetBalc < cnsulAmt) {
									throw new NexaServiceException("fail.정보등록.실패", "부기잔액을 초과하였습니다.");
								}
							} else {
								if("0".equals(cyfdSe)) {
									if(oriBudgetBalc < cnsulAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "예산잔액을 초과하였습니다.");
									}
								} else {
									if(cyfdBudgetBalc < cnsulAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "이월예산잔액을 초과하였습니다.");
									}
								}
							}
						}
						
						// 변경후 품의금액이 이전 품의금액보다 큰 경우 예산 체크
						if(bfCnsulAmt < cnsulAmt || !cyfdSe.equals(bfCyfdSe) || budgetAcntCode.equals(bfBudgetAcntCode) || bukipCode.equals(bfBukipCode)) {
							// 예산 체크
							if(year < 2020) {
								if(budgetBalc + bfCnsulAmt < cnsulAmt) {
									throw new NexaServiceException("fail.정보등록.실패", "부기잔액을 초과하였습니다.");
								}
							} else {
								if("0".equals(cyfdSe)) {
									if(cyfdSe.equals(bfCyfdSe)) {
										oriBudgetBalc += bfCnsulAmt;
									}
									if(oriBudgetBalc < cnsulAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "예산잔액을 초과하였습니다.");
									}
								} else {
									if(cyfdSe.equals(bfCyfdSe)) {
										cyfdBudgetBalc += bfCnsulAmt;
									}
									if(cyfdBudgetBalc < cnsulAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "이월예산잔액을 초과하였습니다.");
									}
								}
							}
						}
					}
					baseDao.update("ACC020201DAO.cnsulU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC020201DAO.cnsulD", map);
					break;
				default:
					break;
			}
		}
	}
	
	
    /**
     * 강제 결재
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void enfrcSanc(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap input1 = inDataset.get("input1");
        if(input1.size()>0){
            Map map = input1.get(0);
            baseDao.update("ACC020201DAO.enfrcSancU", map);
            
        }
    }
    

    /**
     * 첨부파일
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtchFile( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1 = (List<Map>)baseDao.list("ACC020201DAO.selectAtchFile", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output1", outDsMap1);
        
    }
}
