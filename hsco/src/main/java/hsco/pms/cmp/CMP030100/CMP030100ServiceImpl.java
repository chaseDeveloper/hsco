package hsco.pms.cmp.CMP030100;

import java.math.*;
//import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP030100ServiceImpl.java
 * @Description  	: 보상액사정
 * @author       	: 지효정
 * @since        	: 2015. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 7.					지효정				최초생성
 * </pre>  
 */
@Service("CMP030100Service")
public class CMP030100ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP030100ServiceImpl.class);
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("thingWtnncList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
        if(inMap != null){
        	String sParam = (String)inMap.get("THING_CL");
    		inMap.put("ARR_THING_CL", sParam.split(","));
        }
		records = (List<Map>)baseDao.list("CMP030100DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP030100DAO.thingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsbyPrpraprList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP030100DAO.bsnsbyPrpraprList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings("rawtypes")
	
	public void apasmtU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("CMP030100DAO.thingWtnncU", map);
			baseDao.update("CMP030100DAO.tbcmpApasmtU", map);
		}
		
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("CMP030100DAO.thingOwnerU", map);
		}
	}
	
	@SuppressWarnings("rawtypes")
	
	public void thingOwnerU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("CMP030100DAO.thingOwnerU", map);
		}
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void calcRwmny(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		BigDecimal untpc    = new BigDecimal("0");
		BigDecimal untpc1   = new BigDecimal("0");
		BigDecimal untpc2   = new BigDecimal("0");
		BigDecimal untpc3   = new BigDecimal("0");
		BigDecimal untpcTot = new BigDecimal("0");

		BigDecimal evlAmount    = new BigDecimal("0");
		BigDecimal evlAmount2    = new BigDecimal("0");
		BigDecimal divide    = new BigDecimal("10");
		BigDecimal prpraprCnt   = new BigDecimal("0");
		BigDecimal arIncrpr     = new BigDecimal("0");
		String     rewardStle   = "";
				
		String thingSn = "";
		
		List <Map> records;
		List <Map> notFSRecords;
		
		Map inMap = new HashMap<String, Object>();
		
		System.out.println("=======================보상금계산시작=======================");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);
			
			thingSn      = String.valueOf(map.get("THING_SN"));
			arIncrpr      = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("AR_INCRPR")),"1"));
			untpc         = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("UNTPC")),"0"));
			evlAmount   = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("RWMNY")),"0"));
			rewardStle  = StringUtil.nvl(String.valueOf(map.get("REWARD_STLE")));
			
			System.out.println("화면결정단가:" + untpc.toPlainString());
			System.out.println("화면결정금액:" + evlAmount.toPlainString());
			
			inMap.put("BSNS_AREA_CODE", StringUtil.nvl(String.valueOf(map.get("BSNS_AREA_CODE"))));
			inMap.put("CODE"          , StringUtil.nvl(String.valueOf(map.get("THING_CL"))));
			inMap.put("UNTPC_CL_NM"   , StringUtil.nvl(String.valueOf(map.get("STRCT_STNDRD"))));
			
			
			//if(untpc.compareTo(BigDecimal.ZERO) == 0) {
				
				notFSRecords = (List<Map>)baseDao.list("CMP030100DAO.notFSList", inMap);
				
				//비감평
				if(notFSRecords.size() > 0) {
					Map notFS = notFSRecords.get(0);
					untpc = new BigDecimal(StringUtil.parseNull(String.valueOf(notFS.get("UNTPC")),"0"));
					System.out.println("비감평단가 :" + untpc.toPlainString());
				}
				//감평 
				else {
					//단가계산 [[
					untpc1 = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("UNTPC1")),"0"));
					untpc2 = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("UNTPC2")),"0"));
					untpc3 = new BigDecimal(StringUtil.parseNull(String.valueOf(map.get("UNTPC3")),"0"));

					prpraprCnt = new BigDecimal(String.valueOf(map.get("SERVC_ENTRPS_CNT")));
					
					//결정단가 = (평가단가1 + 평가단가2 + 평가단가3) /3   소수점 3자리 표시
					untpcTot = untpc1.add(untpc2).add(untpc3);
					untpc = untpcTot.divide(prpraprCnt, 3, BigDecimal.ROUND_DOWN);
					
					System.out.println("감평단가 :" + untpc.toPlainString());
				}
			//}
			
			
			
			//결정단가가 0원일경우 결정금액도 0원으로 계산
			if(BigDecimal.ZERO.compareTo(untpc) == 0) {
				evlAmount = BigDecimal.ZERO;
				System.out.println("결정단가 0원:" + evlAmount.toPlainString());
			}
			else {
				/*
				 * rewardStle 
				 * 식(G), 일괄(B) :단가 = 금액. 단, 소숫점 절사
				 * 식(G), 일괄(B) 외 : 단가 * 편입면적 / 수량 
				 */			    
				if("G".equals(rewardStle) || "B".equals(rewardStle)) {
					//evlAmount = untpc.setScale(0, BigDecimal.ROUND_DOWN);					
					evlAmount = untpc.setScale(0, BigDecimal.ROUND_DOWN).divide(divide).setScale(0, BigDecimal.ROUND_FLOOR).multiply(divide);
					System.out.println("결정금액 계산(식, 일괄) :" + evlAmount.toPlainString());
				}
				else {
					//evlAmount = untpc.multiply(arIncrpr).setScale(0, BigDecimal.ROUND_DOWN);
					evlAmount = untpc.multiply(arIncrpr).setScale(0, BigDecimal.ROUND_DOWN).divide(divide).setScale(0, BigDecimal.ROUND_FLOOR).multiply(divide);
					System.out.println("결정금액 계산(일반) :" + evlAmount.toPlainString());
				}
			}	
		
			System.out.println("계산 결정단가:" + untpc.toPlainString());
			System.out.println("계산 결정금액:" + evlAmount.toPlainString());

			//보상금계산 [[
			BigDecimal rwmny = evlAmount;	//물건 보상금

			/***********************************************************************
			 *소유자별 보상금액 : 지분 또는 면적 둘 중 하나는 반드시 등록되어 있어야 함. 
			 *원단위 절사(10원단위로 표시).
			 *지분이 존재하는 경우 : 보상금액 = 물건의 결정금액 * 지분
			 *면적이 존재하는 경우 : 보상금액 = 물건의 결정금액 * 소유자면적 / 물건의 편입면적
			 *지분과 면적이 동시에 존재하는 경우 지분을 우선하여 계산하는게 컨셉이지만...
			 *차세대 시스템에서는 두개다 입력해야 하므로 더 정확한 계산을 위해 면적으로 계산한다.
			 ***********************************************************************/
			BigDecimal ownerRwnmyTotal = new BigDecimal("0"); // 소유자별 보상금 총액
			BigDecimal ownerRwnmy      = new BigDecimal("0"); // 소유자별 보상금
			BigDecimal rmndr           = new BigDecimal("0"); // 원단위 절삭 금액의 합 
			BigDecimal arSum           = new BigDecimal("0"); // 소유자 면적 의 합
			BigDecimal posesnQota      = new BigDecimal("0"); // 소유자 지분			
			
			records = (List<Map>)baseDao.list("CMP030100DAO.thingOwnerList", map);
			
			System.out.println("레코드 건수 :" + records.size());
			
			for (int j = records.size()-1; j >= 0; j--) {
				Map map2 = records.get(j);
				
				if(String.valueOf(map2.get("THING_SN")).equals(thingSn)) {
					System.out.println("");
					arSum = arSum.add(new BigDecimal(StringUtil.parseNull(String.valueOf(map2.get("AR")),"0")));
					
					//소유자보상금 = 결정단가 * 면적
					//ownerRwnmy = untpc.multiply(new BigDecimal(StringUtil.parseNull(String.valueOf(map2.get("AR")),"1")));
					//ownerRwnmy = rwmny.multiply(new BigDecimal(StringUtil.parseNull(String.valueOf(map2.get("CAL_QOTA")),"1")));
					ownerRwnmy =rwmny.multiply(new BigDecimal(StringUtil.parseNull(String.valueOf(map2.get("CAL_QOTA")),"1"))).setScale(0, BigDecimal.ROUND_DOWN).divide(divide).setScale(0, BigDecimal.ROUND_FLOOR).multiply(divide);
					
					String[] tmp = ownerRwnmy.toString().split("[.]");
					
					if(tmp.length == 2) {
						ownerRwnmy = new BigDecimal(tmp[0]);
						rmndr = rmndr.add(new BigDecimal("0."+tmp[1]));
					}
					
					System.out.println("누적끝전 : " + rmndr);
					
					ownerRwnmyTotal = ownerRwnmyTotal.add(ownerRwnmy);
					
					//System.out.println("소유자별 지분 :" + posesnQota);
					
					System.out.println("소유자별 지분율 :" + map2.get("CAL_QOTA"));
					
					
					if(j == 0) {
						System.out.println("물건 면적" + arIncrpr);
						System.out.println("소유자총 면적" + arSum);
						
						if(arIncrpr.equals(arSum)) {
							ownerRwnmy = rwmny.subtract(ownerRwnmyTotal).add(ownerRwnmy);	
							System.out.println("마지막 소유자 1");
						}
						else {
							System.out.println("마지막 끝전 : " + rmndr);
							System.out.println("합산전 소유자금액 : " + ownerRwnmy);
							ownerRwnmy = ownerRwnmy.add(rmndr);
							System.out.println("합산한 소유자금액 : " + ownerRwnmy);
							
							String[] tmp2 = ownerRwnmy.toString().split("[.]");
							
							if(tmp.length == 2) {
								ownerRwnmy = new BigDecimal(tmp2[0]);
							}
							
							System.out.println("소숫점 제외한 소유자금액 : " + ownerRwnmy);
							System.out.println("마지막 소유자 2");
						}
					}

					System.out.println("소유자별 보상 금액 :" + ownerRwnmy);
					
					map2.put("RWMNY",ownerRwnmy);
					baseDao.update("CMP030100DAO.thingOwnerU", map2);
				}
			}
			
			System.out.println("소유자 보상금액 총 합계 :" + ownerRwnmyTotal);

			
			//기본조서에 딸린 소유자 목록 조회
			//소유자별 보상금액 변경 쿼리
			//기본조서 결정단가, 결정금액, 차액 변경 쿼리
			
			map.put("UNTPC", untpc);
			map.put("RWMNY", evlAmount);
			
			baseDao.update("CMP030100DAO.thingWtnncU", map); 
			baseDao.update("CMP030100DAO.tbcmpApasmtU", map);
		}
		System.out.println("=======================보상금계산종료=======================");		
	}
}
