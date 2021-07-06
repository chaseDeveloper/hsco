package hsco.pms.rnt.prm.RNT02030900;

//사용안하는 VO class
public class PuchasRentCntrctVo {

	String CNTRCTR_NO;			// 계약자번호
	String PUCHAS_CSTMR_NO;		// 매입임대고객번호

	/**
	 * 계약자번호 getter
	 */
	public String getCNTRCTR_NO() {
		return CNTRCTR_NO;
	}

	/**
	 * 계약자번호 setter
	 */
	public void setCNTRCTR_NO(String cNTRCTR_NO) {
		CNTRCTR_NO = cNTRCTR_NO;
	}

	/**
	 * 매입임대고객번호 getter
	 */
	public String getPUCHAS_CSTMR_NO() {
		return PUCHAS_CSTMR_NO;
	}

	/**
	 * 매입임대고객번호 setter
	 */
	public void setPUCHAS_CSTMR_NO(String pUCHAS_CSTMR_NO) {
		PUCHAS_CSTMR_NO = pUCHAS_CSTMR_NO;
	}
}
