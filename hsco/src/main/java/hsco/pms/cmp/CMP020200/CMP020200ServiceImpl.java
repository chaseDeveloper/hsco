package hsco.pms.cmp.CMP020200;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP020200ServiceImpl.java
 * @Description  	: 조서일괄등록(업로드)
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
@Service("CMP020200Service")
public class CMP020200ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP020200ServiceImpl.class);
	
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

		records = (List<Map>)baseDao.list("CMP020200DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//기본조서 CUD
	@SuppressWarnings({"rawtypes"})
	
	public void thingWtnncCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		Map<String, Object> inMap = null;
		
		if (list != null) 
			inMap = list.get(0);
		
		String bsnsAreaCode = String.valueOf(inMap.get("BSNS_AREA_CODE"));
		
		list = (DataSetMap) inDataset.get("input2");
		
		boolean chkWtnnc = false;
		boolean chkOwner = false;
		
		StringBuffer sb  = new StringBuffer();
		StringBuffer sb2 = new StringBuffer();
		
		for (int x = 0; x < list.size(); x++) {
			
			Map map = mapToMap(list.get(x));
			
			map.put("BSNS_AREA_CODE", bsnsAreaCode);
			
			if(0 == x) {
				procTbcmpThing(map, "1");
				procTbcmpThing(map, "2");
				procTbcmpThing(map, "3");
			}
			else {
				
				Map mapB = mapToMap(list.get(x-1));
				
				sb  = chkWtnnc(mapB,"1");
				sb2 = chkWtnnc(map,"1");
				
				if(sb.toString().equals(sb2.toString()) == false) {
					procTbcmpThing(map, "1");
					chkWtnnc = true;
				}
				else {
					map.put("Column19",list.get(x-1).get("Column19"));
					map.put("THING_SN",list.get(x-1).get("THING_SN"));
				}

				sb  = chkWtnnc(mapB,"2");
				sb2 = chkWtnnc(map,"2");
				
				if(chkWtnnc || (sb.toString().equals(sb2.toString()) == false)) {
					procTbcmpThing(map, "2");
					chkOwner = true;
				}
				else {
					map.put("OWNER_SN",list.get(x-1).get("OWNER_SN"));
				}

				sb  = chkWtnnc(mapB,"3");
				sb2 = chkWtnnc(map,"3");
				
				if(chkOwner || (sb.toString().equals(sb2.toString()) == false)) {
					procTbcmpThing(map, "3");
				}
			}
			
			chkWtnnc = false;
			chkOwner = false;
			
			if(x%1000 == 0) {
				log.debug("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx : " + x);
			}
			
		}
	}
	
	@SuppressWarnings({ "rawtypes" })
	private StringBuffer chkWtnnc(Map map, String gbn){
		
		StringBuffer sb = new StringBuffer();

		sb.delete(0, sb.length());
		
		if("1".equals(gbn)) {
			sb.append(StringUtil.nvl(String.valueOf(map.get("REWARD_ODR"))));       // 보상차수
			sb.append(StringUtil.nvl(String.valueOf(map.get("LOCPLC_CODE"))));      // 소재지
			sb.append(StringUtil.nvl(String.valueOf(map.get("LNM_SE_NM"))));        // 종류
			sb.append(StringUtil.nvl(String.valueOf(map.get("LNM"))));              // 지번
			sb.append(StringUtil.nvl(String.valueOf(map.get("SLNO"))));             // 부번
			sb.append(StringUtil.nvl(String.valueOf(map.get("THING_CL_NM"))));      // 물건분류
			sb.append(StringUtil.nvl(String.valueOf(map.get("THING_NM"))));         // 물건종류
			sb.append(StringUtil.nvl(String.valueOf(map.get("STRCT_STNDRD"))));     // 지목구조및규격
			sb.append(StringUtil.nvl(String.valueOf(map.get("REAL_LNDCGR_NM"))));   // 용도
			sb.append(StringUtil.nvl(String.valueOf(map.get("NOW_USE_STTUS"))));    // 현실적이용현황
			sb.append(StringUtil.nvl(String.valueOf(map.get("LAD_SE_NM"))));        // 토지구분
			sb.append(StringUtil.nvl(String.valueOf(map.get("REMNDR_LAD_SE_NM")))); // 잔여지구분
			sb.append(StringUtil.nvl(String.valueOf(map.get("AR_LGSTR"))));         // 지적
			sb.append(StringUtil.nvl(String.valueOf(map.get("AR_INCRPR"))));        // 편입
			sb.append(StringUtil.nvl(String.valueOf(map.get("UNIT_NM"))));          // 단위
			sb.append(StringUtil.nvl(String.valueOf(map.get("RM_1"))));             // 비고
			sb.append(StringUtil.nvl(String.valueOf(map.get("BGNN_LNM"))));         // 당초지번
			sb.append(StringUtil.nvl(String.valueOf(map.get("RGIST_TRGET_AT"))));   // 등기대상
		}
		else if("2".equals(gbn)) {
			sb.append(StringUtil.nvl(String.valueOf(map.get("OWNER_NM"))));         // 성명
			sb.append(StringUtil.nvl(String.valueOf(map.get("IHIDNUM"))));          // 주민번호
			sb.append(StringUtil.nvl(String.valueOf(map.get("ADRES"))));            // 주소
			sb.append(StringUtil.nvl(String.valueOf(map.get("TELNO_1"))));          // 연락처
			sb.append(StringUtil.nvl(String.valueOf(map.get("POSESN_QOTA"))));      // 지분
			sb.append(StringUtil.nvl(String.valueOf(map.get("AR"))));               // 면적
			sb.append(StringUtil.nvl(String.valueOf(map.get("RM"))));               // 비고
			sb.append(StringUtil.nvl(String.valueOf(map.get("ZIP_DM_1"))));         // DM우편번호
			sb.append(StringUtil.nvl(String.valueOf(map.get("ADRES_DM_1"))));       // DM주소
		}
		else if("3".equals(gbn)) {
			sb.append(StringUtil.nvl(String.valueOf(map.get("PARTCPNT_NM"))));      // 성명
			sb.append(StringUtil.nvl(String.valueOf(map.get("PARTCPNT_IHIDNUM")))); // 주민번호
			sb.append(StringUtil.nvl(String.valueOf(map.get("PARTCPNT_ADRES"))));   // 주소
			sb.append(StringUtil.nvl(String.valueOf(map.get("PARTCPNT_TELNO_1")))); // 연락처
			sb.append(StringUtil.nvl(String.valueOf(map.get("RELATE_KND"))));    // 관계구분
			sb.append(StringUtil.nvl(String.valueOf(map.get("PARTCPNT_RM"))));      // 비고
		}
		
		return sb;
	}
	
	
	@SuppressWarnings({ "rawtypes" })
	private Map mapToMap(Map inMap){
		inMap.put("REWARD_ODR"        ,inMap.get("Column0"));
		inMap.put("LOCPLC_CODE"       ,inMap.get("Column1"));
		inMap.put("LNM_SE"            ,inMap.get("Column2"));
		inMap.put("LNM"               ,inMap.get("Column3"));
		inMap.put("SLNO"              ,inMap.get("Column4"));
		inMap.put("THING_CL"          ,inMap.get("Column5"));
		inMap.put("THING_NM"          ,inMap.get("Column6"));
		inMap.put("LNDCGR_LGSTR"      ,inMap.get("Column7"));
		inMap.put("LNDCGR_INCRPR"     ,inMap.get("Column8"));
		inMap.put("STRCT_STNDRD"      ,inMap.get("Column9"));
		inMap.put("REAL_LNDCGR"       ,inMap.get("Column10"));
		inMap.put("NOW_USE_STTUS"     ,inMap.get("Column11"));
		inMap.put("LAD_SE"            ,inMap.get("Column12"));
		inMap.put("REMNDR_LAD_SE"     ,inMap.get("Column13"));
		inMap.put("AR_LGSTR"          ,inMap.get("Column14"));
		inMap.put("AR_INCRPR"         ,inMap.get("Column15"));
		inMap.put("UNIT"              ,inMap.get("Column16"));
		inMap.put("RM_1"              ,inMap.get("Column17"));
		inMap.put("BGNN_LNM"          ,inMap.get("Column18"));
		inMap.put("THING_SN"          ,inMap.get("Column19"));
		inMap.put("RGIST_TRGET_AT"    ,inMap.get("Column20"));
		inMap.put("OWNER_NM"          ,inMap.get("Column21"));
		inMap.put("IHIDNUM"           ,inMap.get("Column22"));
		inMap.put("ZIP"               ,inMap.get("Column23"));
		inMap.put("ADRES"             ,inMap.get("Column24"));
		inMap.put("TELNO_1"           ,inMap.get("Column25"));
		inMap.put("POSESN_QOTA"       ,inMap.get("Column26"));
		inMap.put("AR"                ,inMap.get("Column27"));
		inMap.put("OWNER_RM"          ,inMap.get("Column28"));
		inMap.put("ZIP_DM_1"          ,inMap.get("Column29"));
		inMap.put("ADRES_DM_1"        ,inMap.get("Column30"));
		inMap.put("PARTCPNT_NM"       ,inMap.get("Column31"));
		inMap.put("PARTCPNT_IHIDNUM"  ,inMap.get("Column32"));
		inMap.put("PARTCPNT_ADRES"    ,inMap.get("Column33"));
		inMap.put("PARTCPNT_TELNO_1"  ,inMap.get("Column34"));
		inMap.put("RELATE_KND"        ,inMap.get("Column35"));
		inMap.put("PARTCPNT_RM"       ,inMap.get("Column36"));
		
		return inMap;
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void procTbcmpThing(Map map, String gbn){
		
		int thingSn = -1;
		int ownerNo = -1;
		int ownerSn = -1;
		int partcpntSn = -1;
		int thingSnChk = -1;

		if("1".equals(gbn)) {

			//엑셀업로드시 물건고유번호 존재 확인
			if(null != map.get("THING_SN") && !"".equals(StringUtil.nvl(String.valueOf(map.get("THING_SN"))))) { 
				thingSnChk = (Integer)baseDao.select("CMP020200DAO.tbcmpThingWtnncThingSnChk", map);
				
				if(thingSnChk == 0) {
					throw new NexaServiceException("info.물건번호.확인",String.valueOf(map.get("THING_SN")));
				}
			}
			
			if(null == map.get("THING_SN") || thingSnChk <= 0) {
				//물건고유번호 채번
				thingSn = (Integer)baseDao.select("CmpCommonDAO.thingWtnncSn", map);
				map.put("THING_SN", thingSn);
				map.put("Column19", thingSn);
			}

			//물건조서 머지등록수정
			baseDao.insert("CMP020200DAO.thingWtnncC", map);				
		}
		else if("2".equals(gbn)) {
			
			if(null != map.get("OWNER_NM")) {
				//소유자 번호 조회
				map.put("OWNER_SE", "1");
				ownerNo = (Integer)baseDao.select("CMP020200DAO.tbcmpOwnerNo", map);
				map.put("OWNER_NO", ownerNo);
				
				if(0 == ownerNo) {
					//소유자 번호 채번
					ownerNo = (Integer)baseDao.select("CmpCommonDAO.ownerNo", map);
					map.put("OWNER_NO", ownerNo);

					//소유자등록(TBCMP_OWNER)
					baseDao.insert("CMP020200DAO.ownerC", map); //소유자등록
				}
				
				//물건소유자일련번호 확인
				ownerSn = (Integer)baseDao.select("CMP020200DAO.tbcmpThingOwnerNo", map);
				
				if(0 == ownerSn) {
					//물건소유자일련번호 채번
					ownerSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerSn", map);
				}

				map.put("OWNER_SN", ownerSn);
				//물건소유자등록(TBCMP_THING_OWNER)
				baseDao.insert("CMP020200DAO.thingOwnerC", map);
			}
		}
		else if("3".equals(gbn)) {
			
			if(null != map.get("PARTCPNT_NM")) {
				Map tmap = new HashMap<String, Object>();
				tmap.put("BSNS_AREA_CODE", map.get("BSNS_AREA_CODE"));
				tmap.put("OWNER_NM"      , map.get("PARTCPNT_NM"));
				tmap.put("OWNER_SE"      , "2");
				tmap.put("ADRES"         , map.get("PARTCPNT_ADRES"));
				tmap.put("IHIDNUM"       , map.get("PARTCPNT_IHIDNUM"));
				tmap.put("TELNO_1"       , map.get("PARTCPNT_TELNO_1"));
				tmap.put("ZIP_DM_1"      , "");
				tmap.put("ADRES_DM_1"    , "");
				
				//소유자 번호 조회
				ownerNo = (Integer)baseDao.select("CMP020200DAO.tbcmpOwnerNo", tmap);
				tmap.put("OWNER_NO", ownerNo);
				map.put("PARTCPNT_NO", ownerNo);
				
				if(0 == ownerNo) {
					//소유자 번호 채번
					ownerNo = (Integer)baseDao.select("CmpCommonDAO.ownerNo", tmap);
					map.put("PARTCPNT_NO", ownerNo);
					
					tmap.put("OWNER_NO"  , ownerNo);

					//소유자등록(TBCMP_OWNER)
					baseDao.insert("CMP020200DAO.ownerC", tmap); //소유자등록
				}

				//물건관계인 일련번호 확인
				partcpntSn = (Integer)baseDao.select("CMP020200DAO.tbcmpThingPartcpntNo", map);

				if(0 == partcpntSn) {
					//관계인일련번호 채번
					partcpntSn = (Integer)baseDao.select("CmpCommonDAO.thingPartcpntSn", map);
				}
				map.put("PARTCPNT_SN", partcpntSn);
				
				//물건관계인 등록(TBCMP_THING_PARTCPNT)
				baseDao.insert("CMP020200DAO.thingPartcpntC", map);
			}
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingWtnncDeleteAll(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("thingWtnncDeleteAll Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.delete("CMP020200DAO.thingWtnncDeleteAll", inMap);
		
	}
}
