﻿(function(){return function(_a){var _b;this.registerScript(_a,function(){this.gfn_sendUms=function(_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n){try{if(!sSndDt){var _o="0";}else{var _o="1";}if(_f==null||_f==undefined||_f==""){this.gfn_message("comm.입력.요청.을","발송서비스타입");return false;}if(_d==null||_d==undefined||_d==""){this.gfn_message("comm.입력.요청.를","부서코드");return false;}if(_e==null||_e==undefined||_e==""){this.gfn_message("comm.입력.요청.를","발신자전화번호");return false;}if(_j.rowcount==0){this.gfn_message("comm.입력.요청.를","수신자 정보");return false;}if(_i==null||_i==undefined||_i==""){this.gfn_message("comm.입력.요청.를","발송메시지");return false;}if(_f=="M"){if(_h==null||_h==undefined||_h==""){this.gfn_message("comm.입력.요청.을","메시지 제목");return false;}}if(_m=="1"){if(_n==null||_n.getRowCount()==0){this.gfn_message("info.UMS.첨부미지정");return false;}}var _p=new Dataset;_p.set_id("ds_UmsTran");if(!this.ds_UmsTran){this.insertChild(0,"ds_UmsTran",_p);_p.addColumn("SNDNG_ID","BIGDECIMAL","11");_p.addColumn("SNDNG_SVC_TY","string","1");_p.addColumn("DEPT_CODE","string","6");_p.addColumn("RECPTN_TELNO","string","12");_p.addColumn("SNDNG_TELNO","string","12");_p.addColumn("SNDNG_RESVE_DT","string","16");_p.addColumn("SNDNG_STTUS","string","2");_p.addColumn("MSSAGE_TY","string","2");_p.addColumn("MMS_SJ","string","120");_p.addColumn("SNDNG_CN","string","4000");_p.addColumn("MMS_FILE_CNT","INT","1");_p.addColumn("MMS_FILE_PATH1","string","128");_p.addColumn("MMS_FILE_PATH1_SIZE","int","8");_p.addColumn("MMS_FILE_PATH2","string","128");_p.addColumn("MMS_FILE_PATH2_SIZE","int","8");_p.addColumn("MMS_FILE_PATH3","string","128");_p.addColumn("MMS_FILE_PATH3_SIZE","int","8");_p.addColumn("MMS_FILE_PATH4","string","128");_p.addColumn("MMS_FILE_PATH4_SIZE","int","8");_p.addColumn("MMS_FILE_PATH5","string","128");_p.addColumn("MMS_FILE_PATH5_SIZE","int","8");_p.addColumn("MMS_SENDER_ID","string","12");_p.addColumn("REGISTER_ID","string","12");_p.addColumn("UPDUSR_ID","string","12");_p.addColumn("BROAD_MSG_AT","string","1");_p.addColumn("CHANGE_WORD1","string","20");_p.addColumn("CHANGE_WORD2","string","20");_p.addColumn("CHANGE_WORD3","string","20");_p.addColumn("CHANGE_WORD4","string","20");_p.addColumn("CHANGE_WORD5","string","20");_p.addColumn("RESERVE_SNDNG_YN","string","1");}this.ds_smsTran.clearData();var _q=_j.getRowCount();for(var _ab=0;_ab<_q;_ab++ ){this.ds_smsTran.addRow();this.ds_smsTran.setColumn(0,"MT_REFKEY",sSndDeptcode);_p.setColumn(_ab,"SNDNG_SVC_TY",_f);_p.setColumn(_ab,"DEPT_CODE",_d);_p.setColumn(_ab,"RECPTN_TELNO",_j.getColumn(_ab,"RECPTN_TELNO"));_p.setColumn(_ab,"SNDNG_TELNO",_e);_p.setColumn(_ab,"RESERVE_SNDNG_YN",_o);if(_o=="1"){_p.setColumn(_ab,"SNDNG_RESVE_DT",_k);}_p.setColumn(_ab,"SNDNG_STTUS","0");_p.setColumn(_ab,"MSSAGE_TY",_g);_p.setColumn(_ab,"SNDNG_CN",_i);if(_f=="M"){_p.setColumn(_ab,"MMS_SJ",_h);var _r=_n.getRowCount();_p.setColumn(_ab,"MMS_FILE_CNT",_r);for(var _ac=0;_ac<_r;_ac++ ){var _s=_ac+1;var _t="MMS_FILE_PATH"+_s;var _u="MMS_FILE_PATH"+_s+"_SIZE";_p.setColumn(_ab,_t,_n.getColumn(_ac,_t));_p.setColumn(_ab,_u,_n.getColumn(_ac,_u));}}_p.setColumn(_ab,"MMS_SENDER_ID",this.gfn_getUserId());_p.setColumn(_ab,"REGISTER_ID",this.gfn_getUserId());_p.setColumn(_ab,"UPDUSR_ID",this.gfn_getUserId());_p.setColumn(_ab,"BROAD_MSG_AT",_l);var _v=0;var _w="";var _x="";var _y="";var _z="";var _aa="";if(_l=="1"){_w=_j.getColumn(_ab,"CHANGE_WORD1");_x=_j.getColumn(_ab,"CHANGE_WORD2");_y=_j.getColumn(_ab,"CHANGE_WORD3");_z=_j.getColumn(_ab,"CHANGE_WORD4");_aa=_j.getColumn(_ab,"CHANGE_WORD5");if(_w==null||_w==undefined||_w==""){_v++ ;}if(_x==null||_x==undefined||_x==""){_v++ ;}if(_y==null||_y==undefined||_y==""){_v++ ;}if(_z==null||_z==undefined||_z==""){_v++ ;}if(_aa==null||_aa==undefined||_aa==""){_v++ ;}if(_v==0){this.gfn_message("comm.입력.요청.를","동보메시지 단어");return false;}_p.setColumn(_ab,"CHANGE_WORD1",_w);_p.setColumn(_ab,"CHANGE_WORD2",_x);_p.setColumn(_ab,"CHANGE_WORD3",_y);_p.setColumn(_ab,"CHANGE_WORD4",_z);_p.setColumn(_ab,"CHANGE_WORD5",_aa);}}Ex.core.tran(this,"sendUms","hsco/cmm/ums/sendUms.do","input1=ds_UmsTran","","","_fn_callBack",true);}catch(e){}};this.sms_MultiMessage=function(_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m){try{if(!_i){var _n="N";}else{var _n="Y";}if(_h.rowcount==0){this.gfn_message("comm.입력.요청.를","수신자 정보");return false;}var _o=new Dataset;_o.set_id("ds_smsTran");if(!this.ds_smsTran){this.insertChild(0,"ds_smsTran",_o);_o.addColumn("MT_REFKEY","string","40");_o.addColumn("CALLBACK","string","25");_o.addColumn("SMS_SCDLE_TYPE","string","2");_o.addColumn("DATE_CLIENT_REQ","string","20");_o.addColumn("CONTENT","string","4000");_o.addColumn("SERVICE_TYPE","string","20");_o.addColumn("SUBJECT","string","40");_o.addColumn("INPUT_TYPE","string","2");_o.addColumn("CHANGE_WORD1","string","20");_o.addColumn("CHANGE_WORD2","string","20");_o.addColumn("CHANGE_WORD3","string","20");_o.addColumn("CHANGE_WORD4","string","20");}this.ds_smsTran.clearData();this.ds_smsTran.addRow();this.ds_smsTran.setColumn(0,"MT_REFKEY",_d);this.ds_smsTran.setColumn(0,"CALLBACK",_e);this.ds_smsTran.setColumn(0,"SMS_SCDLE_TYPE",_n);this.ds_smsTran.setColumn(0,"DATE_CLIENT_REQ",_i);this.ds_smsTran.setColumn(0,"CONTENT",_g);this.ds_smsTran.setColumn(0,"SERVICE_TYPE",_f);this.ds_smsTran.setColumn(0,"INPUT_TYPE","0");this.ds_smsTran.setColumn(0,"CHANGE_WORD1",_j);this.ds_smsTran.setColumn(0,"CHANGE_WORD2",_k);this.ds_smsTran.setColumn(0,"CHANGE_WORD3",_l);this.ds_smsTran.setColumn(0,"CHANGE_WORD4",_m);var _p=new Dataset;_p.set_id("ds_smsClient");if(!this.ds_smsClient){this.insertChild(1,"ds_smsClient",_p);_p.addColumn("RECIPIENT_NUM","string","25");_p.addColumn("CHANGE_WORD5","string","20");}this.ds_smsClient.clearData();for(var _q=0;_q<_h.rowcount;_q++ ){this.ds_smsClient.addRow();this.ds_smsClient.setColumn(_q,"RECIPIENT_NUM",_h.getColumn(_q,"RECIPIENT_NUM"));this.ds_smsClient.setColumn(_q,"CHANGE_WORD5",_h.getColumn(_q,"CHANGE_WORD5"));}Ex.core.tran(this,"saveSmstranList","hsco/com/sym/cdm/SYM030700/SmstranCUD.do","input1=ds_smsTran input2=ds_smsClient","","","_fn_callBack",true);}catch(e){}};this.messenger_send=function(_c,_d,_e,_f,_g,_h,_i,_j){try{if(!_d){this.gfn_message("comm.항목.입력.을","수신자사번");return false;}if(!_j){this.gfn_message("comm.항목.입력.을","알림제목");return false;}var _k=new Dataset;_k.set_id("ds_messngr");this.insertChild(0,"ds_messngr",_k);_k.addColumn("RCVER_USER_ID","string","256");_k.addColumn("RCVER_USER_NM","string","256");_k.addColumn("SENDER_USER_ID","string","256");_k.addColumn("SENDER_USER_NM","string","256");_k.addColumn("NTCN_SJ","string","256");_k.addColumn("LINK_ADRES","string","500");_k.addColumn("NTCN_CN","string","4000");_k.addRow();_k.setColumn(0,"RCVER_USER_ID",_d);_k.setColumn(0,"RCVER_USER_NM",_e);_k.setColumn(0,"SENDER_USER_ID",_f);_k.setColumn(0,"SENDER_USER_NM",_g);_k.setColumn(0,"NTCN_SJ",_j);_k.setColumn(0,"LINK_ADRES",_i);_k.setColumn(0,"NTCN_CN",_h);Ex.core.tran(this,"saveNtcnSndngList","/hsco/com/sym/msm/SYM110100/NtcnSndngCUD.do","input1=ds_messngr:U","","","_fn_callBack",true);}catch(e){return false;}};this._fn_callBack=function(_c,_d,_e){if(_d!=0){this.gfn_callback_message(_c,_d,_e);}else{switch(_c){case "saveSmstranList":this.gfn_message("success.SMS발송.성공");break;case "saveNtcnSndngList":this.gfn_message("success.알림발송.성공");break;case "saveEmailsendList":this.gfn_message("success.이메일발송.성공");break;}}};this.email_send=function(_c,_d,_e,_f,_g,_h,_i,_j,_k){try{if(!_h){this.gfn_message("comm.항목.입력.을","수신자이메일");return false;}if(!_i){this.gfn_message("comm.항목.입력.을","발신자이메일");return false;}var _l=new Dataset;_l.set_id("ds_email");this.insertChild(0,"ds_email",_l);_l.addColumn("RCVER_ID","string","256");_l.addColumn("RCVER_NM","string","256");_l.addColumn("SENDER_ID","string","256");_l.addColumn("SENDER_NM","string","256");_l.addColumn("SENDER_EMAIL","string","500");_l.addColumn("RCVER_EMAIL","string","500");_l.addColumn("EMAIL_CJ","string","500");_l.addColumn("EMAIL_CN","string","8000");_l.addRow();_l.setColumn(0,"RCVER_ID",_d);_l.setColumn(0,"RCVER_NM",_e);_l.setColumn(0,"SENDER_ID",_f);_l.setColumn(0,"SENDER_NM",_g);_l.setColumn(0,"SENDER_EMAIL",_h);_l.setColumn(0,"RCVER_EMAIL",_i);_l.setColumn(0,"EMAIL_CJ",_j);_l.setColumn(0,"EMAIL_CN",_k);Ex.core.tran(this,"saveEmailsendList","hsco/com/sym/cdm/SYM030700/EmailsendCUD.do","input1=ds_email:U","","","_fn_callBack",true);}catch(e){return false;}};});this.loadIncludeScript(_a);_b=null;};})();