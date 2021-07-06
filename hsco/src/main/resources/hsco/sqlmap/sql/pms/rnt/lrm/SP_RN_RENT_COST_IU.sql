create or replace 
PROCEDURE SP_RN_MCOST_RENT_I(
   IN_AREA_SE      TBRNT_LFSTS_CNTRCT.AREA_SE%TYPE,        -- 지역구분
   IN_DEC_DATE      TBRNT_LFSTS_MT_RNTCHRG.MDAT_DE%TYPE,   -- 조정일자
   IN_PAY_DATE      TBRNT_LFSTS_MT_RNTCHRG.MDAT_DE%TYPE,   -- 지급일자
   IN_FIRST_ENTRY   TBRNT_LFSTS_MT_RNTCHRG.REGISTER_ID%TYPE
)
IS
/*******************************************************************************
[T01]PROC    명: SP_RN_MCOST_RENT_I
[T02]PROC  기능: 월임대료 생성을 위한 대상자를 선정하고 SP_RN_RENT_COST_IU 호출한다.
[T03]처리  시기: 
[T04]작성  일자: 2015.09.21
[T05]작  성  자: 이광원
[T07]수정  이력
-----------------------------------------------------------------------
                           수  정  이  력
-----------------------------------------------------------------------
수 정 일  :        수 정 자 : 
    
 
-----------------------------------------------------------------------
수 정 일  :        수 정 자 : 

******************************************************************************/
/******************************************************************************
   NAME:  SP_RN_MCOST_RENT_I 
   전세임대 월임대료 조정  
******************************************************************************/
CURSOR C_LOOP IS

    SELECT DISTINCT B.CNTRCTR_NO--, B.CONT_CNT, B.HOUSE_SEQ, B.CONT_DATE, B.RENT_FDATE, B.RENT_TDATE, B.RENT_AMT, B.LOSS_AMT
      FROM TBRNT_LFSTS_CNTRCT A, TBRNT_LFSTS_HOUSE_CNTRCTR B , TBRNT_LFSTS_RESCI_TRMNAT C
     WHERE A.CNTRCTR_NO = B.CNTRCTR_NO
       AND A.CNTRCTR_NO = C.CNTRCTR_NO(+)
       AND A.CNTRCT_CO = C.CNTRCTR_CO(+)
       AND C.RESCI_TRMNAT_DE IS NULL
       AND TO_CHAR(IN_DEC_DATE,'YYYYMM') BETWEEN TO_CHAR(B.SPORT_BGNDE,'YYYYMM') AND TO_CHAR(B.SPORT_ENDDE,'YYYYMM')  
       AND NOT EXISTS(SELECT 1 FROM TBRNT_LFSTS_MT_RNTCHRG M WHERE M.CNTRCTR_NO = A.CNTRCTR_NO AND M.LEVY_YM = TO_CHAR(IN_PAY_DATE,'YYYYMM'))
       AND A.AREA_SE LIKE IN_AREA_SE ||'%'
          
   ;   
 
   R_LOOP C_LOOP%ROWTYPE;
   
BEGIN
  -- 당월 임대료 삭제(일괄생성 자료만 해당됨)
  DELETE TBRNT_LFSTS_MT_RNTCHRG A
     WHERE LEVY_YM = TO_CHAR(IN_PAY_DATE,'YYYYMM')
       AND OPERT_TY = 'A' -- 일괄생성
       AND RCIV_DE IS NULL
       AND EXISTS(SELECT 1 FROM TBRNT_LFSTS_CNTRCT B WHERE A.CNTRCTR_NO = B.CNTRCTR_NO AND B.AREA_SE LIKE AREA_SE ||'%')   
   ;
       
  OPEN C_LOOP;
 FETCH C_LOOP INTO R_LOOP;
 WHILE C_LOOP%FOUND LOOP
       
    SP_RN_RENT_COST_IU(R_LOOP.CNTRCTR_NO, IN_DEC_DATE , IN_PAY_DATE , IN_FIRST_ENTRY, 'A' );
      
 FETCH C_LOOP INTO R_LOOP;
 END LOOP;    
    
END SP_RN_MCOST_RENT_I;
/ 