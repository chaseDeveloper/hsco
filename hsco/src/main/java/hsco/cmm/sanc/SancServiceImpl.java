package hsco.cmm.sanc;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.sanc.service.SancAfterProcService;
import hsco.cmm.sanc.service.SancFormID01ServiceImpl;
import hsco.cmm.sanc.service.SancFormID02ServiceImpl;
import hsco.cmm.sanc.service.SancFormID03ServiceImpl;
import hsco.cmm.sanc.service.SancFormID04ServiceImpl;
import hsco.cmm.sanc.service.SancFormID05ServiceImpl;
import hsco.cmm.sanc.service.SancFormID06ServiceImpl;
import hsco.cmm.sanc.service.SancFormID07ServiceImpl;
import hsco.cmm.sanc.service.SancFormID08ServiceImpl;
import hsco.cmm.sanc.service.SancFormID09ServiceImpl;
import hsco.cmm.sanc.service.SancFormID10ServiceImpl;
import hsco.cmm.sanc.service.SancFormID11ServiceImpl;
import hsco.cmm.sanc.service.SancFormID12ServiceImpl;
import hsco.cmm.sanc.service.SancFormID13ServiceImpl;
import hsco.cmm.sanc.service.SancFormID14ServiceImpl;
import hsco.cmm.sanc.service.SancFormID15ServiceImpl;
import hsco.cmm.sanc.service.SancFormID16ServiceImpl;
import hsco.cmm.sanc.service.SancFormID17ServiceImpl;
import hsco.cmm.sanc.service.SancFormID18ServiceImpl;
import hsco.cmm.sanc.service.SancFormID19ServiceImpl;
import hsco.cmm.sanc.service.SancFormID20ServiceImpl;
import hsco.cmm.sanc.service.SancFormID21ServiceImpl;
import hsco.cmm.sanc.service.SancFormID22ServiceImpl;
import hsco.cmm.sanc.service.SancFormID23ServiceImpl;
import hsco.cmm.sanc.service.SancFormID24ServiceImpl;
import hsco.cmm.sanc.service.SancFormID25ServiceImpl;
import hsco.cmm.sanc.service.SancFormID26ServiceImpl;
import hsco.cmm.sanc.service.SancFormID27ServiceImpl;
import hsco.cmm.sanc.service.SancFormID28ServiceImpl;
import hsco.cmm.sanc.service.SancFormID29ServiceImpl;
import hsco.cmm.sanc.service.SancFormID30ServiceImpl;
import hsco.cmm.sanc.service.SancFormID31ServiceImpl;
import hsco.cmm.sanc.service.SancFormID32ServiceImpl;
import hsco.cmm.sanc.service.SancFormID33ServiceImpl;
import hsco.cmm.sanc.service.SancFormID34ServiceImpl;
import hsco.cmm.sanc.service.SancFormID35ServiceImpl;
import hsco.cmm.sanc.service.SancFormID36ServiceImpl;
import hsco.cmm.sanc.service.SancFormID37ServiceImpl;
import hsco.cmm.sanc.service.SancFormID38ServiceImpl;
import hsco.cmm.sanc.service.SancFormID40ServiceImpl;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

@Service("SancService")
public class SancServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(SancServiceImpl.class);

	private static final String GW_SERVER = "http://10.50.10.100:8888";
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	public static Map<String, SancAfterProcService> SANC_AFTER_PROC_MAP = new HashMap<String, SancAfterProcService>();
	static {
		
		/**
		 * 양식추가 시점에 해당쿼리 실행 후 맵핑키 취득필요 (현재 35종 대응)
		 * 
		 * SELECT * FROM APPRFORM@DL_INTRACITY WHERE  FORMNAME LIKE 'M_%' ORDER BY FORMNAME
		 * 
		 */
		
		// 그룹웨어 (구)양식 구룹웨어 formid
		
		//M_01_출장신청서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500012000", new SancFormID01ServiceImpl());
		// M_02_근무상황부
		SANC_AFTER_PROC_MAP.put("JHOMS173430500013000", new SancFormID02ServiceImpl());
		// M_03_초과근무확인
		SANC_AFTER_PROC_MAP.put("JHOMS173430500014000", new SancFormID03ServiceImpl());
		// M_04_유연근무신청서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500015000", new SancFormID04ServiceImpl());
		// M_05_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500016000", new SancFormID05ServiceImpl());
		// M_06_병가신청서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500017000", new SancFormID06ServiceImpl());
		// M_07_휴직원
		SANC_AFTER_PROC_MAP.put("JHOMS173430500018000", new SancFormID07ServiceImpl());
		// M_08_복직원
		SANC_AFTER_PROC_MAP.put("JHOMS173430500019000", new SancFormID08ServiceImpl());
		// M_09_지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500020000", new SancFormID09ServiceImpl());
		// M_09_2_지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS180160522171000", new SancFormID09ServiceImpl());
		// M_10_지출결의서(자금이체)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500021000", new SancFormID10ServiceImpl());
		// M_11_지출결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500022000", new SancFormID11ServiceImpl());
		// M_12_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500023000", new SancFormID12ServiceImpl());
		// M_12_2_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS180160522172000", new SancFormID12ServiceImpl());
		// M_13_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500024000", new SancFormID13ServiceImpl());
		// M_13_2_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS180160522211000", new SancFormID13ServiceImpl());
		// M_14_여비지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500025000", new SancFormID14ServiceImpl());
		// M_14_2_여비지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS180160522212000", new SancFormID14ServiceImpl());
		// M_15_수입결의서
		SANC_AFTER_PROC_MAP.put("JHOMS173430500026000", new SancFormID15ServiceImpl());
		// M_16_수입결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500027000", new SancFormID16ServiceImpl());
		// M_17_여입결의서(수입)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500028000", new SancFormID17ServiceImpl());
		// M_18_반납결의서(수입)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500029000", new SancFormID18ServiceImpl());
		// M_19_직원임용
		SANC_AFTER_PROC_MAP.put("JHOMS173430500030000", new SancFormID19ServiceImpl());
		// M_20_호봉획정
		SANC_AFTER_PROC_MAP.put("JHOMS173430500031000", new SancFormID20ServiceImpl());
		// M_21_구입과지출(5인결재3인협조)
		SANC_AFTER_PROC_MAP.put("JHOMS173430500032000", new SancFormID21ServiceImpl());
		// M_22_초과근무신청
		SANC_AFTER_PROC_MAP.put("JHOMS173430500033000", new SancFormID22ServiceImpl());
		// M_23_차량운행일지
		SANC_AFTER_PROC_MAP.put("JHOMS173450500555000", new SancFormID23ServiceImpl());
		// M_24_유류수불대장
		SANC_AFTER_PROC_MAP.put("JHOMS173450500799000", new SancFormID24ServiceImpl());
		// M_25_발주계획
		SANC_AFTER_PROC_MAP.put("JHOMS173470502378000", new SancFormID25ServiceImpl());
		// M_26_계약의뢰
		SANC_AFTER_PROC_MAP.put("JHOMS173470502381000", new SancFormID26ServiceImpl());
		// M_27_계약시행건의
		SANC_AFTER_PROC_MAP.put("JHOMS173470502390000", new SancFormID27ServiceImpl());
		// M_28_계약서식_연간계약_의뢰(발주건n건)
		SANC_AFTER_PROC_MAP.put("JHOMS173520504579000", new SancFormID28ServiceImpl());
		// M_29_계약서식_계약_의뢰(발주건1건)
		SANC_AFTER_PROC_MAP.put("JHOMS173520504580000", new SancFormID29ServiceImpl());
		// M_30_계약서식_계약_시행보고(수의계약_의뢰건_1건)
		SANC_AFTER_PROC_MAP.put("JHOMS173520504581000", new SancFormID30ServiceImpl());
		// M_31_계약서식_계약_시행보고(수의계약_의뢰건_n건)
		SANC_AFTER_PROC_MAP.put("JHOMS173520504582000", new SancFormID31ServiceImpl());
		// M_32_계약서식_계약_시행보고(단건_시행보고)
		SANC_AFTER_PROC_MAP.put("JHOMS173520504583000", new SancFormID32ServiceImpl());
		// M_33_일상감사의뢰
		SANC_AFTER_PROC_MAP.put("JHOMS180070515035000", new SancFormID33ServiceImpl());
		// M_34_일상감사결과의견
		SANC_AFTER_PROC_MAP.put("JHOMS180070515036000", new SancFormID34ServiceImpl());
		// M_35_검사검수요청
		SANC_AFTER_PROC_MAP.put("JHOMS180110518683000", new SancFormID35ServiceImpl());
		// M_36_출장신청서(해외)
		SANC_AFTER_PROC_MAP.put("JHOMS181100586303000", new SancFormID36ServiceImpl());
		// M_37_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("JHOMS181290595960000", new SancFormID37ServiceImpl());
		// M_38_재택근무신청서
		SANC_AFTER_PROC_MAP.put("JHOMS202521206152000", new SancFormID38ServiceImpl());
		
		
		
		// 그룹웨어 (신)양식 그룹웨어 formid
		
		//INC_01_출장신청서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204323000", new SancFormID01ServiceImpl());
		// INC_02_근무상황부
		SANC_AFTER_PROC_MAP.put("JHOMS202511204324000", new SancFormID02ServiceImpl());
		// INC_03_초과근무확인
		SANC_AFTER_PROC_MAP.put("JHOMS202511204325000", new SancFormID03ServiceImpl());
		// INC_04_유연근무신청서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204327000", new SancFormID04ServiceImpl());
		// INC_05_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204328000", new SancFormID05ServiceImpl());
		// INC_06_병가신청서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204330000", new SancFormID06ServiceImpl());
		// INC_07_휴직원
		SANC_AFTER_PROC_MAP.put("JHOMS202511204333000", new SancFormID07ServiceImpl());
		// INC_08_복직원
		SANC_AFTER_PROC_MAP.put("JHOMS202511204334000", new SancFormID08ServiceImpl());
		// INC_09_2_지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204381000", new SancFormID09ServiceImpl());		
		// INC_09_지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204337000", new SancFormID09ServiceImpl());
		// INC_10_지출결의서(자금이체)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204339000", new SancFormID10ServiceImpl());
		// INC_11_지출결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204342000", new SancFormID11ServiceImpl());
		// INC_12_2_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204388000", new SancFormID12ServiceImpl());
		// INC_12_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204344000", new SancFormID12ServiceImpl());
		// INC_13_2_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204390000", new SancFormID13ServiceImpl());
		// INC_13_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204345000", new SancFormID13ServiceImpl());
		// INC_14_2_여비지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204391000", new SancFormID14ServiceImpl());
		// INC_14_여비지출결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204346000", new SancFormID14ServiceImpl());
		// INC_15_수입결의서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204347000", new SancFormID15ServiceImpl());
		// INC_16_수입결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204348000", new SancFormID16ServiceImpl());
		// INC_17_여입결의서(수입)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204349000", new SancFormID17ServiceImpl());
		// INC_18_반납결의서(수입)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204350000", new SancFormID18ServiceImpl());
		// INC_19_직원임용
		SANC_AFTER_PROC_MAP.put("JHOMS202511204353000", new SancFormID19ServiceImpl());
		// INC_20_호봉획정
		SANC_AFTER_PROC_MAP.put("JHOMS202511204354000", new SancFormID20ServiceImpl());
		// INC_21_구입과지출(5인결재3인협조)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204357000", new SancFormID21ServiceImpl());
		// INC_22_초과근무신청
		SANC_AFTER_PROC_MAP.put("JHOMS202511204359000", new SancFormID22ServiceImpl());
		// INC_23_차량운행일지
		SANC_AFTER_PROC_MAP.put("JHOMS202511204361000", new SancFormID23ServiceImpl());
		// INC_24_유류수불대장
		SANC_AFTER_PROC_MAP.put("JHOMS202511204363000", new SancFormID24ServiceImpl());
		// INC_25_발주계획
		SANC_AFTER_PROC_MAP.put("JHOMS202511204365000", new SancFormID25ServiceImpl());
		// INC_26_계약의뢰
		SANC_AFTER_PROC_MAP.put("JHOMS202511204367000", new SancFormID26ServiceImpl());
		// INC_27_계약시행건의
		SANC_AFTER_PROC_MAP.put("JHOMS202511204368000", new SancFormID27ServiceImpl());
		// INC_28_계약서식_연간계약_의뢰(발주건n건)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204370000", new SancFormID28ServiceImpl());
		// INC_29_계약서식_계약_의뢰(발주건1건)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204373000", new SancFormID29ServiceImpl());
		// INC_30_계약서식_계약_시행보고(수의계약_의뢰건_1건)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204374000", new SancFormID30ServiceImpl());
		// INC_31_계약서식_계약_시행보고(수의계약_의뢰건_n건)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204376000", new SancFormID31ServiceImpl());
		// INC_32_계약서식_계약_시행보고(단건_시행보고)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204377000", new SancFormID32ServiceImpl());
		// INC_33_일상감사의뢰
		SANC_AFTER_PROC_MAP.put("JHOMS202511204378000", new SancFormID33ServiceImpl());
		// INC_34_일상감사결과의견
		SANC_AFTER_PROC_MAP.put("JHOMS202511204379000", new SancFormID34ServiceImpl());
		// INC_35_검사검수요청
		SANC_AFTER_PROC_MAP.put("JHOMS202511204380000", new SancFormID35ServiceImpl());
		// INC_36_출장신청서(해외)
		SANC_AFTER_PROC_MAP.put("JHOMS202511204392000", new SancFormID36ServiceImpl());
		// INC_37_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("JHOMS202511204393000", new SancFormID37ServiceImpl());		
		// M_38_재택근무신청서
		SANC_AFTER_PROC_MAP.put("JHOMS202531206697000", new SancFormID38ServiceImpl());
		// INC_40_일상감사의견조치결과통보서
		SANC_AFTER_PROC_MAP.put("JHOMS202901242390000", new SancFormID40ServiceImpl());
		
		
		// 그룹웨어 (신)양식 연동서식 formid
		
		//INC_01_출장신청서
		SANC_AFTER_PROC_MAP.put("0000000046", new SancFormID01ServiceImpl());
		// INC_02_근무상황부
		SANC_AFTER_PROC_MAP.put("0000000047", new SancFormID02ServiceImpl());
		// INC_03_초과근무확인
		SANC_AFTER_PROC_MAP.put("0000000048", new SancFormID03ServiceImpl());
		// INC_04_유연근무신청서
		SANC_AFTER_PROC_MAP.put("0000000049", new SancFormID04ServiceImpl());
		// INC_05_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("0000000050", new SancFormID05ServiceImpl());
		// INC_06_병가신청서
		SANC_AFTER_PROC_MAP.put("0000000051", new SancFormID06ServiceImpl());
		// INC_07_휴직원
		SANC_AFTER_PROC_MAP.put("0000000052", new SancFormID07ServiceImpl());
		// INC_08_복직원
		SANC_AFTER_PROC_MAP.put("0000000053", new SancFormID08ServiceImpl());
		// INC_09_2_지출결의서
		SANC_AFTER_PROC_MAP.put("0000000054", new SancFormID09ServiceImpl());		
		// INC_09_지출결의서
		SANC_AFTER_PROC_MAP.put("0000000055", new SancFormID09ServiceImpl());
		// INC_10_지출결의서(자금이체)
		SANC_AFTER_PROC_MAP.put("0000000056", new SancFormID10ServiceImpl());
		// INC_11_지출결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("0000000057", new SancFormID11ServiceImpl());
		// INC_12_2_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("0000000058", new SancFormID12ServiceImpl());
		// INC_12_구입과지출결의서
		SANC_AFTER_PROC_MAP.put("0000000059", new SancFormID12ServiceImpl());
		// INC_13_2_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("0000000060", new SancFormID13ServiceImpl());
		// INC_13_공사(수선)집행과지출결의서
		SANC_AFTER_PROC_MAP.put("0000000061", new SancFormID13ServiceImpl());
		// INC_14_2_여비지출결의서
		SANC_AFTER_PROC_MAP.put("0000000062", new SancFormID14ServiceImpl());
		// INC_14_여비지출결의서
		SANC_AFTER_PROC_MAP.put("0000000063", new SancFormID14ServiceImpl());
		// INC_15_수입결의서
		SANC_AFTER_PROC_MAP.put("0000000064", new SancFormID15ServiceImpl());
		// INC_16_수입결의서(수입지출외현금)
		SANC_AFTER_PROC_MAP.put("0000000065", new SancFormID16ServiceImpl());
		// INC_17_여입결의서(수입)
		SANC_AFTER_PROC_MAP.put("0000000066", new SancFormID17ServiceImpl());
		// INC_18_반납결의서(수입)
		SANC_AFTER_PROC_MAP.put("0000000067", new SancFormID18ServiceImpl());
		// INC_19_직원임용
		SANC_AFTER_PROC_MAP.put("0000000068", new SancFormID19ServiceImpl());
		// INC_20_호봉획정
		SANC_AFTER_PROC_MAP.put("0000000069", new SancFormID20ServiceImpl());
		// INC_21_구입과지출(5인결재3인협조)
		SANC_AFTER_PROC_MAP.put("0000000070", new SancFormID21ServiceImpl());
		// INC_22_초과근무신청
		SANC_AFTER_PROC_MAP.put("0000000071", new SancFormID22ServiceImpl());
		// INC_23_차량운행일지
		SANC_AFTER_PROC_MAP.put("0000000072", new SancFormID23ServiceImpl());
		// INC_24_유류수불대장
		SANC_AFTER_PROC_MAP.put("0000000073", new SancFormID24ServiceImpl());
		// INC_25_발주계획
		SANC_AFTER_PROC_MAP.put("0000000074", new SancFormID25ServiceImpl());
		// INC_26_계약의뢰
		SANC_AFTER_PROC_MAP.put("0000000075", new SancFormID26ServiceImpl());
		// INC_27_계약시행건의
		SANC_AFTER_PROC_MAP.put("0000000076", new SancFormID27ServiceImpl());
		// INC_28_계약서식_연간계약_의뢰(발주건n건)
		SANC_AFTER_PROC_MAP.put("0000000077", new SancFormID28ServiceImpl());
		// INC_29_계약서식_계약_의뢰(발주건1건)
		SANC_AFTER_PROC_MAP.put("0000000078", new SancFormID29ServiceImpl());
		// INC_30_계약서식_계약_시행보고(수의계약_의뢰건_1건)
		SANC_AFTER_PROC_MAP.put("0000000079", new SancFormID30ServiceImpl());
		// INC_31_계약서식_계약_시행보고(수의계약_의뢰건_n건)
		SANC_AFTER_PROC_MAP.put("0000000080", new SancFormID31ServiceImpl());
		// INC_32_계약서식_계약_시행보고(단건_시행보고)
		SANC_AFTER_PROC_MAP.put("0000000081", new SancFormID32ServiceImpl());
		// INC_33_일상감사의뢰
		SANC_AFTER_PROC_MAP.put("0000000082", new SancFormID33ServiceImpl());
		// INC_34_일상감사결과의견
		SANC_AFTER_PROC_MAP.put("0000000083", new SancFormID34ServiceImpl());
		// INC_35_검사검수요청
		SANC_AFTER_PROC_MAP.put("0000000084", new SancFormID35ServiceImpl());
		// INC_36_출장신청서(해외)
		SANC_AFTER_PROC_MAP.put("0000000085", new SancFormID36ServiceImpl());
		// INC_37_출장(교육)결과보고서
		SANC_AFTER_PROC_MAP.put("0000000086", new SancFormID37ServiceImpl());
		// M_38_재택근무신청서
		SANC_AFTER_PROC_MAP.put("0000000087", new SancFormID38ServiceImpl());
		// INC_40_일상감사의견조치결과통보서
		SANC_AFTER_PROC_MAP.put("0000000090", new SancFormID40ServiceImpl());
	}
	
	
	public static Map<String, String> APPR_STATUS_MAP = new HashMap<String, String>();
	static {
		
		// 그룹웨어 (구)결재상태
		APPR_STATUS_MAP.put("1","1");	// 1:상신
		APPR_STATUS_MAP.put("2","2");   // 2:반려
		APPR_STATUS_MAP.put("3","3");   // 3:취소
		APPR_STATUS_MAP.put("4","4");   // 4:중간결재
		APPR_STATUS_MAP.put("5","5");   // 5:결재완료

		// 그룹웨어 (신)결재상태
		APPR_STATUS_MAP.put("PRCS","1");	// 결재진행			- 1:상신 
		APPR_STATUS_MAP.put("CMPT","5");	// 결재완료			- 5:결재완료
		APPR_STATUS_MAP.put("RJCT","2");	// 결재반려(반송)	- 2:반려
		APPR_STATUS_MAP.put("RCVY","3");	// 결재회수			- 3:취소
		APPR_STATUS_MAP.put("DELE","3");	// 삭제				- 3:취소
		//APPR_STATUS_MAP.put("","4");	// ??				- 4:중간결재
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void sanctn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		List<Map> outList1 = new ArrayList<Map>();
		List<Map> outList2 = new ArrayList<Map>();

		// sanctnKnd get
		boolean isSanc = false;
		for (int ds2Row = 0; ds2Row < inDsMap2.size(); ds2Row++) {
			Map chkMap = inDsMap2.get(ds2Row);
			String sanctnKnd = (String) baseDao.select("SancDAO.getSanctnKnd", chkMap);
			if ("1".equals(sanctnKnd) || "5".equals(sanctnKnd)) {
				// 이미 상신(1)이 되었거나 결재완료(5)된 경우
				inMap.put("SANCTN_KND", sanctnKnd);
				isSanc = true;
				break;
			}
		}

		// 이미 상신(1) 혹은 완료(5)가 아닌 경우
		if (!isSanc) {
			// getEmpData
			List<Map> sancEmpList = (List) baseDao.list("SancDAO.selectSancEmpInfo", inMap);
			if (sancEmpList.size() > 0) {
				Map sancEmpMap = sancEmpList.get(0);

				String userId = StringUtil.nvl((String) sancEmpMap.get("USER_ID"));
				String empCode = StringUtil.nvl((String) sancEmpMap.get("EMP_CODE"));
				String deptCode = StringUtil.nvl((String) sancEmpMap.get("DEPT_CODE"));
				String userKey = StringUtil.nvl((String) sancEmpMap.get("USER_KEY"));
				String empno = StringUtil.nvl((String) sancEmpMap.get("EMPNO"));

				inMap.put("USER_ID", userId);
				inMap.put("EMP_CODE", empCode);
				inMap.put("DEPT_CODE", deptCode);
				inMap.put("USER_KEY", userKey);
				inMap.put("EMPNO", empno);

				// new sanctnNo
				String sanctnNo = (String) baseDao.select("SancDAO.getSanctnNo");
				inMap.put("SANCTN_NO", sanctnNo);

				// update to My Table
				List misKeyList2 = new ArrayList();
				String misValList = "";
				for (int ds2Row = 0; ds2Row < inDsMap2.size(); ds2Row++) {
					List misKeyList = new ArrayList();
					Map misMap = inDsMap2.get(ds2Row);

					if(ds2Row == 0) {
						inMap.put("TABLE_NAME", (String) misMap.get("TABLE_NAME"));
					} else {
						misValList += "^";
					}
					String[] misKey = ((String) inMap.get("MIS_KEY_LIST")).split("\\|");
					String[] misVal = ((String) misMap.get("MIS_VAL_LIST")).split("\\|");
					misValList += (String) misMap.get("MIS_VAL_LIST");

					for (int keyRow = 0; keyRow < misKey.length; keyRow++) {
						Map misKeyMap = new HashMap();
						misKeyMap.put("misKey", misKey[keyRow]);
						misKeyMap.put("misValue", misVal[keyRow]);
						misKeyList.add(misKeyMap);
						misKeyList2.add(misKeyMap);
					}

					misMap.put("misKeyList", misKeyList);
					misMap.put("SANCTN_NO", sanctnNo);
					misMap.put(inMap.get("SANCTN_COLUMN"), sanctnNo);
					misMap.put("SANCTN_COLUMN", inMap.get("SANCTN_COLUMN"));
					baseDao.update("SancDAO.updateMisTable", misMap);

					// result Map
					outList2.add(misMap);
				}
				inMap.put("MIS_VAL_LIST", misValList);
				inMap.put("MIS_KEY_MAP",  misKeyList2.toString());

				// insert into Sanctn Master
				baseDao.insert("SancDAO.insertElctrnSanctnMastr", inMap);
			}
		} else {
			String errMsg = "해당 결재건은 이미 [상신] 혹은 [결재완료]되었습니다.";
			errMsg += "\n상단의 조회 버튼을 클릭하여 주시기바랍니다.";
			throw new NexaServiceException("info.처리불가", errMsg);
		}

		// result Map
		outList1.add(inMap);

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(outList1);
		outDsMap2.setRowMaps(outList2);
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 전자결재 콜백 저장
	 * 
	 * @param value
	 * @param map
	 */
	public void insertSancResult(String value, Map<String, Object> map) {
		baseDao.update("SancDAO.updateElctrnSanctnMastr", map);
		baseDao.insert("SancDAO.insertSancResult", value);
	}

	/**
	 * 전자결재 URL 취득
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked" })
	public void getSancURL(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map<String, Object> resultMap = (Map<String, Object>) baseDao.select("SancDAO.selectSanDocInfo", inDsMap.get(0));

		String link = "";
		
		try {
			
			String userKey = (String) resultMap.get("USER_KEY");
			String docId = (String) resultMap.get("DOC_ID");
			String xmlUri = GW_SERVER + "/bms/cz/cb/viw/OpenApiLinkViewDoc.act?K=" + userKey + "&width=1024&height=768&DOCID=" + docId;
			
			
			if (!StringUtil.isNull(userKey) && !StringUtil.isNull(docId)) {
				DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
				DocumentBuilder db = dbf.newDocumentBuilder();
				Document xml = null;
				xml = db.parse(xmlUri);
				Element element = xml.getDocumentElement();
				NodeList list = element.getChildNodes();
				if (list.getLength() > 0) {
					for (int i = 0; i < list.getLength(); i++) {
						NodeList childlist = list.item(i).getChildNodes();
						if (childlist.getLength() > 0) {
							for (int j = 0; j < childlist.getLength(); j++) {
								if ("link".equals(childlist.item(j).getNodeName())) {
									link = GW_SERVER + childlist.item(j).getTextContent();
								}
							}
						}
					}
				}
			}
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("LINK", link);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
	}
	
	
	// 결재 양식 가져오기
	public String getFormId(Map<String, Object> pMap) {
		return (String)baseDao.select("SancDAO.getFormId", pMap);
	}
	
	/**************************************************************************
	 * 여기부터는 안쓰는 함수들입니다 (에러방지용으로 남겨만 둠)
	 **************************************************************************/

	// 결재 시퀀스 가져오기
	public Integer selectSeqKey() {
		return null;
	}

	// Map<DataSetMap> Base 결재요청 (화면연동)
	public void requestApproval(Map<String, DataSetMap> inDataset, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// ..
	}

	// Map Base 결재요청
	public Map<String, ?> requestApproval(Map<String, Object> inMap) throws NexaServiceException {
		return null;
	}
}
