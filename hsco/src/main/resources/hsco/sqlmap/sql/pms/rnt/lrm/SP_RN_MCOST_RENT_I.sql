CREATE OR REPLACE PROCEDURE DUCODVL.SP_RN_RENT_COST_IU(
   in_cntrctr_no    tbrnt_lfsts_cntrct.cntrctr_no%type,
   in_dec_date      tbrnt_lfsts_house_cntrctr.sport_bgnde%type,    --조정일자
   in_cal_date      tbrnt_lfsts_house_cntrctr.sport_bgnde%type,
   in_last_entry    tbrnt_lfsts_cntrct.update_id%TYPE,
   in_cal_class     varchar2
)
AS

CURSOR c_loop IS
    select a.cntrctr_no, a.cntrctr_co , a.cntrct_de , a.sport_bgnde , a.sport_endde , a.rntchrg , a.rsvmney , b.resci_trmnat_de
      from tbrnt_lfsts_house_cntrctr a
      left join tbrnt_lfsts_resci_trmnat b on a.cntrctr_no = b.cntrctr_no and a.cntrct_co = b.cntrctr_co
     where a.cntrctr_no = in_cntrctr_no
       --and in_cal_date between rent_fdate and nvl(cend_date,rent_tdate)
       -- 2015-09-14 당월임대 종료 자료 부과 하기 위해 수정
       and to_char(a.sport_bgnde,'yyyymm') between to_char(a.sport_bgnde,'yyyymm') and to_char(nvl(b.resci_trmnat_de,a.sport_endde),'yyyymm')
   ;   
   
   r_loop c_loop%ROWTYPE;

  ls_rent_date varchar2(6);
  ls_cnt  number;
  ls_day  number;
  ls_amt  float;--rnt_rent_mcost.rent_amt%type;
  ls_amt1 float;--rnt_rent_mcost.rent_amt%type;
  ls_amt2 float;--rnt_rent_mcost.rent_amt%type;
  
  ls_tdate tbrnt_lfsts_house_cntrctr.sport_endde%type;
  ls_rent_amt tbrnt_lfsts_house_cntrctr.rntchrg%type;
-- exec SP_RN_RENT_COST_IU('0082013001','2013-06-30','admin','C');
BEGIN

 OPEN c_loop;
 FETCH c_loop INTO r_loop;
 WHILE c_loop%FOUND LOOP
 
    ls_cnt  := 0;
    ls_day  := 0;
    ls_amt  := 0;    
    ls_amt1 := 0;
    ls_amt2 := 0;
    
    
    -- 임대시작월이 계산기준월-1인 경우
    if to_char(r_loop.sport_bgnde,'yyyymm') = to_char( add_months(in_cal_date, -1),'yyyymm') then    
       
        -- 임대시작월의 임대료 존재여부 확인
        select count(1) into ls_cnt
          from tbrnt_lfsts_mt_rntchrg
         where cntrctr_no = r_loop.cntrctr_no
           and levy_ym = to_char( r_loop.sport_bgnde, 'yyyymm')
       ;   

       if ls_cnt = 0 then -- 미존재시 : 임대시작일자 ~ 임대시작월의 월말까지의 임대료 + 계산기준월의 1 ~ 계산일까지의 임대료
         
          ls_day := last_day(r_loop.sport_bgnde) - r_loop.sport_bgnde + 1;
          ls_amt := r_loop.rntchrg / to_char(last_day(r_loop.sport_bgnde),'dd');
           
          ls_amt1 := ls_day * ls_amt;
          
       end if;                
       
       ls_day := to_char(in_cal_date,'dd');
       ls_amt := r_loop.rntchrg / to_char(last_day(in_cal_date),'dd');
          
       ls_amt2 := ls_day * ls_amt;     
       
    elsif to_char(r_loop.sport_bgnde,'yyyymm') = to_char(in_cal_date,'yyyymm') then  -- 임대시작월이 계산기준월과 일치하는지 확인

       -- 임대시작일 ~ 계산기준일까지의 임대료
       ls_day := (in_cal_date - r_loop.rent_fdate) + 1;
       ls_amt := r_loop.rent_amt / to_char(last_day(in_cal_date),'dd');
          
       ls_amt2 := ls_day * ls_amt;    
    
        
       -- 재계약 여부 확인(2015.08.10 추가)
       BEGIN
           select sport_endde , rntchrg
             into ls_tdate, ls_rent_amt
             from tbrnt_lfsts_house_cntrctr a
            where cntrctr_no = in_cntrctr_no
              and cont_cnt < r_loop.cont_cnt
              and to_char(sport_endde,'yyyymm') = to_char(in_cal_date,'yyyymm')
           ;
           
           EXCEPTION WHEN NO_DATA_FOUND THEN 
             ls_rent_amt := 0;
       END;
           
       IF ls_rent_amt <> 0 THEN
              
          ls_day := to_char(ls_tdate,'dd');
          ls_amt := ls_rent_amt / to_char(last_day(ls_tdate),'dd');
          
          ls_amt2 := ls_amt2 + (ls_day * ls_amt); 
           
       END IF;

    elsif  to_char(r_loop.sport_bgnde,'yyyymm') < to_char(in_cal_date,'yyyymm') then  -- 임대시작월이 계산기준월과 이전인경우  
    
      if in_cal_class = 'C' then
        -- 임대시작일 ~ 계산기준일까지의 임대료
       ls_day := to_char(in_cal_date,'dd');
       ls_amt := r_loop.rent_amt / to_char(last_day(in_cal_date),'dd');
          
       ls_amt2 := ls_day * ls_amt; 
      else
        ls_amt1 := r_loop.rent_amt;
        ls_amt2 :=0;
      end if;
      
    end if;
     
    
    -- 기준월에 임대료 존재여부 확인
    select count(1) into ls_cnt
      from tbrnt_lfsts_mt_rntchrg
     where cntrctr_no = r_loop.cntrctr_no
       and levy_ym = to_char( in_cal_date, 'yyyymm')    
    ;     
    
    ls_amt1 := trunc(ls_amt1 + ls_amt2,-1); 
    ls_amt2 := trunc(ls_amt1 * 0.005,-1); 
    
    if ls_cnt = 0 then -- 당월 임대료가 없을 경우
    
       insert into tbrnt_lfsts_mt_rntchrg
             (cntrctr_no, levy_ym, bill_no, rqest_no , mdat_de, resci_trmnat_de, rntchrg_thsmon , rsvmney_thsmon ,opert_ty , regoster_id , regist_dt)
       values(r_loop.cntrctr_no, to_char(in_cal_date,'yyyymm'), 
              nvl((select max(rqest_no) from tbrnt_lfsts_mt_rntchrg where cntrctr_no = r_loop.cntrctr_no),0) + 1,
              decode(in_cal_class,'C',in_cal_date, last_day(in_cal_date)),
              in_cal_date, decode(in_cal_class,'C',in_cal_date, ''), 
              ls_amt1, ls_amt2,  in_cal_class, in_last_entry, sysdate
              ) ;
       
              