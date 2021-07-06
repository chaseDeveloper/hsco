CREATE OR REPLACE PROCEDURE TBRNT_RIGHT_ANALS_SAVE (
/*******************************************************************************
[T01]PROC    명: TBRNT_RIGHT_ANALS_SAVE
[T02]PROC  기능: 부동산코드를 조회 및 생성 하고 신청자 권리분석을 등록한다.
[T03]처리  시기: 
[T04]작성  일자: 2015.06.23
[T05]작  성  자: 이광원
[T07]수정  이력
-----------------------------------------------------------------------
                           수  정  이  력
-----------------------------------------------------------------------
수 정 일  :        수 정 자 : 
    
 
-----------------------------------------------------------------------
수 정 일  :        수 정 자 : 

******************************************************************************/
    IN_MTLTY                                IN      TBRNT_ESTATE_CODE.MTLTY%TYPE,
    IN_TLPHON_1                             IN      TBRNT_ESTATE_CODE.TLPHON_1%TYPE,
    IN_AREA_SE                              IN      TBRNT_ESTATE_CODE.AREA_SE%TYPE,
    
    IN_ESTATE_SE                            IN      TBRNT_ESTATE_CODE.ESTATE_SE%TYPE,
    IN_ESTATE_CODE                          IN      TBRNT_ESTATE_CODE.ESTATE_CODE%TYPE,
    IN_USE_AT                               IN      TBRNT_ESTATE_CODE.USE_AT%TYPE,
    
    IN_APPLCNT_NO                           IN      TBRNT_APPLCNT.APPLCNT_NO%TYPE,
    IN_APPLCNT_CNTRCTR_SE		            IN	    TBRNT_RIGHT_ANALS.APPLCNT_CNTRCTR_SE%TYPE,
    IN_APPLCNT_CNTRCTR_NO		            IN	    TBRNT_RIGHT_ANALS.APPLCNT_CNTRCTR_NO%TYPE,
    IN_SN		                            IN	    TBRNT_RIGHT_ANALS.SN%TYPE,
    IN_RCEPT_DE		                        IN	    TBRNT_RIGHT_ANALS.RCEPT_DE%TYPE,
    IN_ESTATE_SE		                    IN    	TBRNT_RIGHT_ANALS.ESTATE_SE%TYPE,
    IN_ESTATE_CODE		                    IN    	TBRNT_RIGHT_ANALS.ESTATE_CODE%TYPE,
    IN_ZIP		                            IN    	TBRNT_RIGHT_ANALS.ZIP%TYPE,
    IN_ADRES		                        IN	    TBRNT_RIGHT_ANALS.ADRES%TYPE,
    IN_ADRES_DETAIL		                    IN    	TBRNT_RIGHT_ANALS.ADRES_DETAIL%TYPE,
    IN_OWNER		                        IN    	TBRNT_RIGHT_ANALS.OWNER%TYPE,
    IN_AR		                            IN    	TBRNT_RIGHT_ANALS.AR%TYPE,
    IN_PC_DECSN_MTH		                    IN	    TBRNT_RIGHT_ANALS.PC_DECSN_MTH%TYPE,
    IN_HOUSE_POTVALE		                IN    	TBRNT_RIGHT_ANALS.HOUSE_POTVALE%TYPE,
    IN_HOUSE_STDPC		                    IN    	TBRNT_RIGHT_ANALS.HOUSE_STDPC%TYPE,
    IN_RCOGN_RATE		                    IN    	TBRNT_RIGHT_ANALS.RCOGN_RATE%TYPE,
    IN_HOUSE_PC		                        IN    	TBRNT_RIGHT_ANALS.HOUSE_PC%TYPE,
    IN_DEBT_RATE		                    IN    	TBRNT_RIGHT_ANALS.DEBT_RATE%TYPE,
    IN_FDLTR_ESTBS_AMOUNT		            IN    	TBRNT_RIGHT_ANALS.FDLTR_ESTBS_AMOUNT%TYPE,
    IN_RLDB_ESTBS_AMOUNT		            IN	    TBRNT_RIGHT_ANALS.RLDB_ESTBS_AMOUNT%TYPE,
    IN_LEGACY_RENT_AMOUNT	             	IN	    TBRNT_RIGHT_ANALS.LEGACY_RENT_AMOUNT%TYPE,
    IN_LFSTS_CONFM_AMOUNT	              	IN	    TBRNT_RIGHT_ANALS.LFSTS_CONFM_AMOUNT%TYPE,
    IN_CDIT_PRESV_MTHD		                IN	    TBRNT_RIGHT_ANALS.CDIT_PRESV_MTHD%TYPE,
    IN_CONFM_AT		                        IN	    TBRNT_RIGHT_ANALS.CONFM_AT%TYPE,
    IN_ANALS_RESULT	                      	IN	    TBRNT_RIGHT_ANALS.ANALS_RESULT%TYPE,
    IN_RM		                            IN	    TBRNT_RIGHT_ANALS.RM%TYPE,
    IN_REGISTER_ID	                      	IN	    TBRNT_RIGHT_ANALS.REGISTER_ID%TYPE,
    IN_REGIST_DT	                        IN	    TBRNT_RIGHT_ANALS.REGIST_DT%TYPE,
    IN_UPDUSR_ID	                        IN	    TBRNT_RIGHT_ANALS.UPDUSR_ID%TYPE,
    IN_UPDT_DT		                        IN    	TBRNT_RIGHT_ANALS.UPDT_DT%TYPE

)

AS

    V_CNT                                        INTEGER;



BEGIN
  -- 부동산코드 조회
	SELECT  COUNT(*)
	INTO    V_CNT
	FROM    TBRNT_ESTATE_CODE
	WHERE   MTLTY = IN_MTLTY
	  AND   TLPHON_1 = IN_TLPHON_1
	  AND   AREA_SE = IN_AREA_SE;
	
	IF V_CNT < 1 THEN
    
		BEGIN
			INSERT INTO TBRNT_ESTATE_CODE (
				ESTATE_SE
			  , ESTATE_CODE
			  , JIGEUP_GBCD
			  , USE_AT
			  , MTLTY

			) VALUES ( 
				IN_ESTATE_SE
			  , IN_ESTATE_CODE
			  , IN_USE_AT
			  , IN_MTLTY

			);

			EXCEPTION
				WHEN OTHERS    THEN 
					ROLLBACK;
					RETURN;
		END;

	END IF;

  -- 권리분석 처리
	SELECT  COUNT(*)
	INTO    V_CNT
	FROM    TBRNT_RIGHT_ANALS
	WHERE   APPLCNT_CNTRCTR_NO = IN_APPLCNT_NO;
	
	IF V_CNT < 1 THEN
    
		BEGIN
			INSERT INTO TBRNT_RIGHT_ANALS (
        , APPLCNT_CNTRCTR_SE --신청자계약자구분';
        , APPLCNT_CNTRCTR_NO --신청자계약자번호';
        , SN --일련번호';
        , RCEPT_DE --접수일자';
        , ESTATE_SE --부동산구분';
        , ESTATE_CODE --부동산코드';
        , ZIP --우편번호';
        , ADRES --주소';
        , ADRES_DETAIL --주소_상세';
        , OWNER --소유자';
        , AR --면적';
        , PC_DECSN_MTH --가격결정방법';
        , HOUSE_POTVALE --주택공시가격';
        , HOUSE_STDPC --주택기준가격';
        , RCOGN_RATE --인정비율';
        , HOUSE_PC --주택가격';
        , DEBT_RATE --부채비율';
        , FDLTR_ESTBS_AMOUNT --근저당설정금액';
        , RLDB_ESTBS_AMOUNT --전세권설정금액';
        , LEGACY_RENT_AMOUNT --기존임대금액';
        , LFSTS_CONFM_AMOUNT --전세승인금액';
        , CDIT_PRESV_MTHD --채권보전방식';
        , CONFM_AT --승인여부';
        , ANALS_RESULT --분석결과';
        , RM --비고';
        
			) VALUES ( 
			
        , IN_APPLCNT_CNTRCTR_SE --신청자계약자구분';
        , IN_APPLCNT_CNTRCTR_NO --신청자계약자번호';
        , (SELECT NVL(MAX(SN),0)+1 FROM TBRNT_RIGHT_ANALS)
        , IN_RCEPT_DE --접수일자';
        , "1"
        , IN_ESTATE_CODE --부동산코드';
        , IN_ZIP --우편번호';
        , IN_ADRES --주소';
        , IN_ADRES_DETAIL --주소_상세';
        , IN_OWNER --소유자';
        , IN_AR --면적';
        , IN_PC_DECSN_MTH --가격결정방법';
        , IN_HOUSE_POTVALE --주택공시가격';
        , IN_HOUSE_STDPC --주택기준가격';
        , IN_RCOGN_RATE --인정비율';
        , IN_HOUSE_PC --주택가격';
        , IN_DEBT_RATE --부채비율';
        , IN_FDLTR_ESTBS_AMOUNT --근저당설정금액';
        , IN_RLDB_ESTBS_AMOUNT --전세권설정금액';
        , IN_LEGACY_RENT_AMOUNT --기존임대금액';
        , IN_LFSTS_CONFM_AMOUNT --전세승인금액';
        , IN_CDIT_PRESV_MTHD --채권보전방식';
        , IN_CONFM_AT --승인여부';
        , IN_ANALS_RESULT --분석결과';
        , IN_RM --비고';
			);

			EXCEPTION
				WHEN OTHERS    THEN 
					ROLLBACK;
					RETURN;
		END;

	END IF;

EXCEPTION WHEN OTHERS THEN 

    ROLLBACK;

END TBRNT_RIGHT_ANALS_SAVE