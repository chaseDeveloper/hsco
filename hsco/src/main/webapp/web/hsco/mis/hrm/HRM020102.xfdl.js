(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("HRM020102");
                this.set_classname("HRM020102");
                this.set_titletext("채용공고관리");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_empmnPblanc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMNPBLANCNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMNBGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTMTHSE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANCSTTUSSE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANCNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_TY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BGN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"PAPERS_DSPTH_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTNG_DSPTH_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_DSPTH_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_RESULT_DSPTH_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAPERS_DSPTH_TM\" type=\"STRING\" size=\"256\"/><Column id=\"WRTNG_DSPTH_TM\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_DSPTH_TM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_RESULT_DSPTH_TM\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_PRT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_PRT_TM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">EMPMNPBLANCNM</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\"/><Col id=\"expr\"/><Col id=\"msgId\">채용공고명</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">EMPMNBGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">채용공고일자</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">RCEPTMTHSE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">접수방법</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">RCEPT_BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">접수시작일</Col><Col id=\"to\">RCEPT_ENDDE</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">RCEPT_ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">접수종료일</Col><Col id=\"from\">RCEPT_BGNDE</Col></Row><Row><Col id=\"compId\">ds_empmnRcritRealm</Col><Col id=\"msgId\">채용구분</Col><Col id=\"colId\">EMPMN_SE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_empmnRcritRealm</Col><Col id=\"colId\">APYEXM_REALM_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">응시분야구분</Col></Row><Row><Col id=\"compId\">ds_empmnRcritRealm</Col><Col id=\"colId\">APYEXM_CLSF_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">응시직급구분</Col></Row><Row><Col id=\"compId\">ds_empmnRcritRealm</Col><Col id=\"msgId\">경쟁구분</Col><Col id=\"colId\">CMPET_SE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_empmnRcritRealm</Col><Col id=\"msgId\">채용예정인원</Col><Col id=\"colId\">PREARNGE_NMPR</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">APYEXM_PRT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">응시표출력일자</Col></Row><Row><Col id=\"compId\">ds_empmnPblanc</Col><Col id=\"colId\">APYEXM_PRT_TM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">응시표출력시간</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_empmnRcritRealm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CMPET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_REALM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PREARNGE_NMPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rceptMthSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pblancSttusSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_jssfcSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_realmSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clsfSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_key", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_file", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_empmnYear", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odrSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_TY_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm082", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm083", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm084", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_choiseSbjectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHOISE_SBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJECT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm099", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_WFDA_Label00", "absolute", "0", "180", "1031", "27", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label05", "absolute", "0", "67", "1031", "27", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label07", "absolute", "0", "119", "1031", "27", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label01", "absolute", "0", "93", "1031", "27", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", null, null, "0", this.div_search);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("채용년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "202", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("차수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_EMPMN_YEAR", "absolute", "80", "5", "107", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_empmnYear");
            obj.set_codecolumn("EMPMN_YEAR");
            obj.set_datacolumn("EMPMN_YEAR");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_enableevent("true");
            obj = new Combo("cmb_ODR_SE", "absolute", "240", "5", "107", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_codecolumn("ODR_SE");
            obj.set_datacolumn("ODR_SE");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_enableevent("true");

            obj = new Static("Static05", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, null, "10", "400", "308", "0", this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "631", "96", "47", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "461", "96", "47", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pblancNo01", "absolute", "0", "119", "100", "27", null, null, this);
            obj.set_taborder("9");
            obj.set_text("공고문 URL");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_url", "absolute", "902", "124", "58", "19", null, null, this);
            obj.set_taborder("10");
            obj.set_text("이동");
            obj.set_cssclass("btn_WF_Link");
            obj.style.set_border("1 solid #c5ab6eff");
            obj.style.set_color("#804500ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_url", "absolute", "102", "122", "798", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_value("https://www.hsuco.or.kr/html/05_guide/guide06.asp?process_type=view&b_idx=-551&BBS_id=list_e&page=1&keyword=&keyfield=");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_file", "absolute", "867", "96", "128", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnDt", "absolute", "765", "67", "100", "27", null, null, this);
            obj.set_taborder("15");
            obj.set_text("채용공고일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rceptDt", "absolute", "255", "93", "100", "27", null, null, this);
            obj.set_taborder("16");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnPblancNm", "absolute", "0", "67", "100", "27", null, null, this);
            obj.set_taborder("17");
            obj.set_text("채용공고명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pblancNo", "absolute", "765", "93", "100", "27", null, null, this);
            obj.set_taborder("18");
            obj.set_text("공고번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rceptMthSe", "absolute", "0", "93", "100", "27", null, null, this);
            obj.set_taborder("19");
            obj.set_text("접수방법");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RCEPT_ENDDE", "absolute", "527", "96", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Calendar("cal_RCEPT_BGNDE", "absolute", "357", "96", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Combo("cmb_rceptMthSe", "absolute", "102", "96", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@ds_rceptMthSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Calendar("cal_empmnDt", "absolute", "867", "70", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Edit("edt_empmnPblancNm", "absolute", "102", "70", "578", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tbhrmRcritRealm", "absolute", "0", "267", null, null, "318", "0", this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_empmnRcritRealm");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"채용년도\"/><Cell col=\"2\" text=\"채용차수\"/><Cell col=\"3\" text=\"직종구분\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"경쟁구분\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"채용구분\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"응시직급구분\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"응시분야구분\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"예정인원\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EMPMN_YEAR\"/><Cell col=\"2\" text=\"bind:ODR_SE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:JSSFC_SE\" combodataset=\"ds_jssfcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CMPET_SE\" combodataset=\"ds_hrm082\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:EMPMN_SE\" combodataset=\"ds_hrm083\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APYEXM_CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:APYEXM_REALM_SE\" combodataset=\"ds_hrm084\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:PREARNGE_NMPR\" mask=\"!#,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_choiseSbjectList", "absolute", null, "267", "280", null, "28", "0", this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_choiseSbjectList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"선택과목\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CHOISE_SBJECT\" editdisplay=\"edit\" combodataset=\"ds_hrm099\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowInsert", "absolute", null, "242", "64", "21", "450", null, this);
            obj.set_taborder("35");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDelete", "absolute", null, "242", "64", "21", "384", null, this);
            obj.set_taborder("36");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowCancel", "absolute", null, "242", "64", "21", "318", null, this);
            obj.set_taborder("37");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowInsert00", "absolute", null, "242", "64", "21", "160", null, this);
            obj.set_taborder("38");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDelete00", "absolute", null, "242", "64", "21", "94", null, this);
            obj.set_taborder("39");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowCancel00", "absolute", null, "242", "64", "21", "28", null, this);
            obj.set_taborder("40");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "0", "33", "1032", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnLastResult00", "absolute", "0", "43", "100", "19", null, null, this);
            obj.set_taborder("42");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "62", "1032", "5", null, null, this);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "233", "1032", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnLastResult01", "absolute", "0", "243", "100", "19", null, null, this);
            obj.set_taborder("45");
            obj.set_text("모집분야");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "262", "1032", "5", null, null, this);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnLastResult02", "absolute", null, "243", "77", "19", "231", null, this);
            obj.set_taborder("47");
            obj.set_text("선택과목");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "512", "96", "15", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_apyexmPrtTm", "absolute", "206", "183", "47", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_apyexmPrtDe", "absolute", "102", "183", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Static("sta_apyexmPrtDt", "absolute", "0", "180", "100", "27", null, null, this);
            obj.set_taborder("68");
            obj.set_text("응시표출력");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "146", "1032", "10", null, null, this);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empmnLastResult03", "absolute", "0", "156", "100", "19", null, null, this);
            obj.set_taborder("71");
            obj.set_text("통보일시");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "175", "1032", "5", null, null, this);
            obj.set_taborder("72");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label02", "absolute", "0", "206", "1031", "27", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_papersDspthTm00", "absolute", "461", "183", "47", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_papersDspthDe00", "absolute", "357", "183", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("sta_wrtngDspthDt00", "absolute", "510", "180", "100", "27", null, null, this);
            obj.set_taborder("76");
            obj.set_text("필기시험");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_wrtngDspthDe00", "absolute", "612", "183", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("77");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new MaskEdit("msk_wrtngDspthTm00", "absolute", "716", "183", "47", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ncsDspthDt00", "absolute", "765", "180", "100", "27", null, null, this);
            obj.set_taborder("79");
            obj.set_text("인적성검사");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ncsDspthDe00", "absolute", "867", "183", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new MaskEdit("msk_ncsDspthTm00", "absolute", "971", "183", "47", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lastResultDspthDt00", "absolute", "0", "206", "100", "27", null, null, this);
            obj.set_taborder("82");
            obj.set_text("최종합격자발표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_lastResultDspthDe00", "absolute", "102", "209", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("83");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new MaskEdit("msk_lastResultDspthTm00", "absolute", "206", "209", "47", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Static("sta_papersDspthDt00", "absolute", "255", "180", "100", "27", null, null, this);
            obj.set_taborder("85");
            obj.set_text("서류전형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1030, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM020102");
            		p.set_titletext("채용공고관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_SearchArea.spn_empnmYear","value","DS_SEARCH","EMPMN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_SearchArea.spn_odrSe","value","DS_SEARCH","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div00.edt_VRSC_MAN_CALL","value","DS_WRKCP","TELNO_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_detailBox.edt_empmnPblancNm","value","ds_empmnPblanc","EMPMNPBLANCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_detailBox.cal_empmnDt","value","ds_empmnPblanc","EMPMNBGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_detailBox.cmb_rceptMthSe","value","ds_empmnPblanc","RCEPTMTHSE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_detailBox.cal_RCEPT_BGNDE","value","ds_empmnPblanc","RCEPT_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_detailBox.cal_RCEPT_ENDDE","value","ds_empmnPblanc","RCEPT_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_detailBox.cmb_pblancSttusSE","value","ds_empmnPblanc","PBLANCSTTUSSE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_detailBox.edt_file","value","ds_empmnPblanc","PBLANCNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_detailBox.edt_file00","value","ds_empmnPblanc","FILE_SN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_search.cmb_EMPMN_YEAR","value","ds_cond00","EMPMN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_search.cmb_ODR_SE","value","ds_cond00","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","MaskEdit01","value","ds_empmnPblanc","END_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","MaskEdit00","value","ds_empmnPblanc","BGN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_file","value","ds_empmnPblanc","PBLANCNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cal_RCEPT_ENDDE","value","ds_empmnPblanc","RCEPT_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cal_RCEPT_BGNDE","value","ds_empmnPblanc","RCEPT_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmb_rceptMthSe","value","ds_empmnPblanc","RCEPTMTHSE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cal_empmnDt","value","ds_empmnPblanc","EMPMNBGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_empmnPblancNm","value","ds_empmnPblanc","EMPMNPBLANCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","msk_apyexmPrtTm","value","ds_empmnPblanc","APYEXM_PRT_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_apyexmPrtDe","value","ds_empmnPblanc","APYEXM_PRT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","msk_papersDspthTm00","value","ds_empmnPblanc","PAPERS_DSPTH_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","cal_papersDspthDe00","value","ds_empmnPblanc","PAPERS_DSPTH_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","cal_wrtngDspthDe00","value","ds_empmnPblanc","WRTNG_DSPTH_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","msk_wrtngDspthTm00","value","ds_empmnPblanc","WRTNG_DSPTH_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","cal_ncsDspthDe00","value","ds_empmnPblanc","NCS_DSPTH_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","msk_ncsDspthTm00","value","ds_empmnPblanc","NCS_DSPTH_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","cal_lastResultDspthDe00","value","ds_empmnPblanc","LAST_RESULT_DSPTH_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","msk_lastResultDspthTm00","value","ds_empmnPblanc","LAST_RESULT_DSPTH_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM020102.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM020102.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM020102.xfdl", function() {
        /***********************************************************************
         * 업무구분 : MIS > 인사관리 > 채용공고관리
         * 화면ID   : HRM020102
         * 화면명   : 채용공고 관리
         * 화면설명 : 채용공고를 관리한다.
         * 작성일   : 2015.07.22
         * 작성자   : 이혜선
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         *   
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
            this.ds_empmnRcritRealm
        	,this.ds_empmnPblanc
        ];

        this.saveRow = -1;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM020102_oninit = function(obj,e)
        {

        }

        this.HRM020102_onload = function(obj,e)
        {	
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        	this.fn_loadCombo();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        }

        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
         /*
         * 함수명  	: fn_loadCombo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_loadCombo = function ()
        {	
        	var comboParams = [
        		 ["ds_hrm082", "HRM082", "1", ""] 		//경쟁구분
        		,["ds_hrm083", "HRM083", "1", ""] 		//채용구분
        		,["ds_hrm084", "HRM084", "1", ""] 		//응시분야구분
        		,["ds_clsfSe", "HRM002", "1", ""] 		//응시직종구분
        		,["ds_jssfcSe", "HRM091", "1", ""] 		//직급구분
        		,["ds_rceptMthSe", "HRM098", "1", ""] 		//직급구분
        		,["ds_hrm099", "HRM099", "1", ""] 		//선택과목
        	];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: 공통 callback
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callbackAfter();
         */
        this.fn_callbackAfter = function ()
        {
        	this.ds_cond00.set_enableevent(true);
        	this.fn_empmnYearCombo(); //채용년도 조회
        }

         /*
         * 함수명  	: fn_empmnYearCombo
         * 설명 		: 입사지원관리 채용년도combo에 데이터를 불러온다
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_empmnYearCombo();
         */
        this.fn_empmnYearCombo = function()
        {
        	this.ds_empmnYear.clearData();
        	this.fn_transaction("selectEmpmnYearCombo");
        }

         /*
         * 함수명  	: fn_search
         * 설명 		: 채용공고관리 조회 이벤트 처리      
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.ds_empmnPblanc.clearData();
        	this.ds_empmnRcritRealm.clearData();
        	this.fn_transaction("selectEmpmnPblancList");
        	
        	this.fn_transaction("selectEmpmnRcritRealmList");
        }

         /*
         * 함수명  	: this.div_work_tab_tbhrmEmpmn_onchanged
         * 설명 		: 탭 페이지 변경 시 조회 이벤트 처리
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_detailBox_tab_tbhrmEmpmn_onchanged();
         */
        this.div_detailBox_tab_tbhrmEmpmn_onchanged = function(obj,e)
        {
        	this.fn_transaction("selectEmpmnRcritRealmList");
        }

        
         /*
         * 함수명  	: fn_save
         * 설명 		: 채용공고관리 저장 이벤트 처리
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {	
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_empmnPblanc) && !this.comUtils.isDatasetUpdated(this.ds_empmnRcritRealm) && !this.comUtils.isDatasetUpdated(this.ds_choiseSbjectList)){
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	// validation 체크(기본사항)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_empmnPblanc, this.ds_validation)) {
        		return;
        	}
        	// validation 체크(모집분야)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_empmnRcritRealm, this.ds_validation)) {
        		return;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부") )
        	{
        		this.saveRow = this.ds_empmnRcritRealm.rowposition;
        		this.fn_transaction("saveEmpmnPblancCUD");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectEmpmnPblancList": // 채용공고관리 기본사항 불러오기
        			var sController   	= "hsco/mis/hrm/HRM020102/empmnPblancList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_empmnPblanc=output1";
        			break;
        		case "selectEmpmnYearCombo": // 채용년도 콤보데이터 불러오기
        			var sController   	= "hsco/mis/hrm/HRM020201/empmnYearComboList.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_empmnYear=output1";
        			break;
        		case "selectOdrSeCombo":				// 채용년도,차수 불러오기
        			var sController   	= "hsco/mis/hrm/HRM020102/empmnKeyList.do";
        			var sInDatasets   	= "input1=ds_cond01";
        			var sOutDatasets  	= "ds_odrSe=output1";
        			break;	
        		case "selectEmpmnRcritRealmList": // 모집분야 불러오기
        			var sController   	= "hsco/mis/hrm/HRM020102/empmnRcritRealmList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_empmnRcritRealm=output1";
        			break;
        		case "selectChoiseSbjectList": // 과목목록 불러오기
        			var sController   	= "hsco/mis/hrm/HRM020102/selectChoiseSbjectList.do";
        			var sInDatasets   	= "input1=ds_cond2";
        			var sOutDatasets  	= "ds_choiseSbjectList=output1";
        			break;
        		case "saveEmpmnPblancCUD":	 // 채용공고관리 저장
        			var sController   	= "hsco/mis/hrm/HRM020102/empmnPblancCUD.do";
        			var sInDatasets   	= "input1=ds_empmnPblanc:U input2=ds_empmnRcritRealm:U input3=ds_choiseSbjectList:U";
        			var sOutDatasets  	= "";
        			break;	
        	}
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/

        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	} else {
        		switch (strSvcId) {
        			case "selectEmpmnPblancList": // 채용공고관리 기본사항 불러오기
        				//this.fn_transaction("keyList");
        				break;
        			case "selectEmpmnYearCombo": // 채용년도 콤보데이터 불러오기
        				this.div_search.cmb_EMPMN_YEAR.set_index(0);
        				break;
        			case "selectOdrSeCombo": // 차수 콤보데이터 불러오기
        				this.ds_cond00.setColumn(0,"ODR_SE",this.ds_odrSe.getColumn(0, "ODR_SE"));
        				break;	
        			case "keyList":
        				break;
        			case "selectEmpmnRcritRealmList": // 모집분야 조회
        				if(this.saveRow > -1){
        					this.ds_empmnRcritRealm.set_rowposition(this.saveRow);
        					this.saveRow = -1;
        				}	
        				break;	
        			case "saveEmpmnPblancCUD": // 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        		}
        	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/
        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert= function()
        {
        	if(this.ds_empmnPblanc.getRowCount()>0){
        		var msg = this.div_search.cmb_EMPMN_YEAR.value+"년 "+this.div_search.cmb_ODR_SE.value+"차"+" 채용공고는 이미 존재합니다.";
         		this.gfn_message("info.처리불가",msg);
        		return false;
        	}
        		
        	this.ds_empmnPblanc.addRow();
        	this.ds_empmnPblanc.setColumn(0,"PBLANCNO",this.div_search.cmb_EMPMN_YEAR.value+this.div_search.cmb_ODR_SE.value.padLeft(2,"0"));
        	this.ds_empmnPblanc.setColumn(0,"EMPMN_YEAR",this.ds_cond00.getColumn(0,"EMPMN_YEAR"));
        	this.ds_empmnPblanc.setColumn(0,"ODR_SE",this.ds_cond00.getColumn(0,"ODR_SE"));
        	this.ds_empmnPblanc.setColumn(0,"PBLANC_URL", "/customer/hiring/recruitWrite/"+this.ds_cond00.getColumn(0,"EMPMN_YEAR")+"_"+this.ds_cond00.getColumn(0,"ODR_SE"));
        }

        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete= function()
        {	
        	this.ds_empmnPblanc.deleteRow(this.ds_empmnPblanc.rowposition);	
        	this.ds_empmnRcritRealm.clearData();
        }

        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel= function()
        {
        	if ( this.gfn_message("confirm.취소여부") ) { 
        		
        		this.ds_empmnPblanc.reset();		//기본사항
        		this.ds_empmnPblanc.applyChange();	
        		this.ds_empmnPblanc.set_rowposition(0);
        		
        		if(this.div_work.tab_tbhrmEmpmn.tabindex == 0){ //모집분야
        			this.ds_empmnRcritRealm.reset();		
        			this.ds_empmnRcritRealm.applyChange();	
        			return;
        		}
        	}	
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        /*
         * 함수명  	: fn_check
         * 설명 		: 변경사항 체크 함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_check();
         */
        this.fn_check= function()
        {	
        	if(Ex.util.isUpdated(this.ds_empmnRcritRealm) || Ex.util.isUpdated(this.ds_empmnPblanc) || Ex.util.isUpdated(this.ds_choiseSbjectList)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")){
        			return false; //아니오	
        		}
        		else{
        			return true;
        		}
        	}else{
        		return true;
        	}
        }

        /*
         * 함수명  	: fn_check2
         * 설명 		: 변경사항 체크 함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_check2();
         */
        this.fn_check2= function()
        {
        	if(Ex.util.isUpdated(this.ds_empmnRcritRealm)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")){
        			return false; //아니오	
        		}
        		else{
        			return true;
        		}
        	}else{
        		return true;
        	}
        }

        /*
         * 함수명  	: div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_oncellclick
         * 설명 		: 체크 전체해제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_oncellclick();
         */
        this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}
        }

        /*
         * 함수명  	: div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick
         * 설명 		: 헤드클릭 정렬, 체크박스 전체전택
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick();
         */
        this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}	
        	this.gfn_gridSort(obj, e);
        }

        /*
         * 함수명  	: div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick
         * 설명 		: 공고문 탭 - 공고문 적용
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick();
         */
        this.div_work_tab_tbhrmEmpmn_tabpage2_btn_uploadFiles00_onclick = function(obj,e)
        {
        	
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_empmnWrtanc)){
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}

        	if(this.gfn_message("confirm.저장.여부") )
        	{
        		this.fn_transaction("saveBDT");  // 공고문 적용
        	}
        }

        
        /*공고문 URL 보기*/
        this.btn_url_onclick = function(obj,e)
        {
        	//var url = this.ds_empmnPblanc.getColumn(this.ds_empmnPblanc.rowposition,"PBLANC_URL");
        	var url = this.edt_url.value;
        	if(url == undefined || url == ''){
        		this.gfn_message("info.처리불가","공고문 URL이 없습니다");
        		return;
        	}
        	
        	window.open(url);
        }

        

        
        /***********************************************************************
        * 버튼 관련 함수
        ************************************************************************/
        /*
         * 함수명  	: fn_rowInsert
         * 설명 		: 행추가 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowInsert();
         */
        this.fn_rowInsert = function()
        {	
        	
        	if(this.ds_empmnPblanc.rowcount == 0) {
        		alert("채용공고 먼저 등록 후, 모집분야를 추가해주세요.");
        		return false;
        	}
        	
        	// 채용공고가 신규일 때, 
        	if(this.ds_empmnPblanc.getRowType(0) == "2") {
        		var empmnYear = this.ds_cond00.getColumn(0, "EMPMN_YEAR");
        		var odrSe = this.ds_cond00.getColumn(0, "ODR_SE");
        		var odrRow = this.ds_odrSe.findRow("ODR_SE", odrSe);
        		var empmnTySe = this.ds_odrSe.getColumn(odrRow, "EMPMN_TY_SE");
        		
        	// 채용공고가 기존에 등록되어있을 때,
        	}else {
        		var cRow = this.ds_empmnPblanc.rowposition;
        		var empmnYear = this.ds_empmnPblanc.getColumn(cRow, "EMPMN_YEAR");
        		var odrSe = this.ds_empmnPblanc.getColumn(cRow, "ODR_SE");
        		var empmnTySe = this.ds_empmnPblanc.getColumn(cRow, "EMPMN_TY_SE");
        	
        	}
        	
        	var nRow = this.ds_empmnRcritRealm.addRow();
        	this.ds_empmnRcritRealm.setColumn(nRow, "EMPMN_YEAR", empmnYear);
        	this.ds_empmnRcritRealm.setColumn(nRow, "ODR_SE", odrSe);
        	this.ds_empmnRcritRealm.setColumn(nRow, "JSSFC_SE", empmnTySe);
        }

        /*
         * 함수명  	: fn_rowDelete
         * 설명 		: 행삭제 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowDelete();
         */
        this.fn_rowDelete = function()
        {
        	if(this.ds_empmnRcritRealm.rowcount > 0) {
        		if (this.gfn_message("confirm.삭제여부")) {
        			var cRow = this.ds_empmnRcritRealm.rowposition;
        			this.ds_empmnRcritRealm.deleteRow(cRow);
        			
        		}
        	}
        }

        /*
         * 함수명  	: fn_rowCancel
         * 설명 		: 행취소 이벤트처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowCancel();
         */
        this.fn_rowCancel = function()
        {
        	// 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.ds_empmnRcritRealm)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }

            if (this.gfn_message("confirm.취소여부")) {
                this.ds_empmnRcritRealm.reset();
                this.ds_empmnRcritRealm.applyChange();
            }
        }

        /*
         * 함수명  	: fn_subject_add
         * 설명 		: 선택과목 행추가 버튼 클릭 시 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_subject_add();
         */
        this.fn_subject_add = function(obj,e)
        {
        	
        	var masterRow = this.ds_empmnRcritRealm.rowposition;
        	
        	if(masterRow > -1) {
        		var empmnYear = this.ds_empmnRcritRealm.getColumn( masterRow, "EMPMN_YEAR");
        		var odrSe = this.ds_empmnRcritRealm.getColumn( masterRow, "ODR_SE");
        		var sn = this.ds_empmnRcritRealm.getColumn( masterRow, "SN");
        		
        		var detailRow = this.ds_choiseSbjectList.addRow();
        		
        		this.ds_choiseSbjectList.setColumn(detailRow, "EMPMN_YEAR", empmnYear);
        		this.ds_choiseSbjectList.setColumn(detailRow, "ODR_SE", odrSe);
        		this.ds_choiseSbjectList.setColumn(detailRow, "SN", sn);
        	}
        }

        
        /*
         * 함수명  	: fn_subject_delete
         * 설명 		: 선택과목 행삭제 버튼 클릭 시 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_subject_delete();
         */
        this.fn_subject_delete = function(obj,e)
        {
        	if(this.ds_choiseSbjectList.rowcount > 0) {
        		if (this.gfn_message("confirm.삭제여부")) {
        			var cRow = this.ds_choiseSbjectList.rowposition;
        			this.ds_choiseSbjectList.deleteRow(cRow);
        			
        		}
        	}
        }

        /*
         * 함수명  	: fn_subject_cancel
         * 설명 		: 선택과목 행취소 버튼 클릭 시 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_subject_cancel();
         */
        this.fn_subject_cancel = function(obj,e)
        {
        	// 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.ds_choiseSbjectList)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }

            if (this.gfn_message("confirm.취소여부")) {
                this.ds_choiseSbjectList.reset();
                this.ds_choiseSbjectList.applyChange();
            }
        }

        
        /***********************************************************************
        * 데이터셋 관련 함수
        ************************************************************************/

        /*
         * 함수명  	: ds_cond00_oncolumnchanged
         * 설명 		: 검색조건 데이터셋 컬럼 변경시
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cond00_oncolumnchanged();
         */
        this.ds_cond00_oncolumnchanged = function(obj,e)
        {
        	//채용년도콤보 변경시 차수 콤보데이터 셋팅
        	if(e.columnid == "EMPMN_YEAR") {
        		this.ds_odrSe.clearData();
        		this.ds_cond00.setColumn(0,"ODR_SE","0");
        		this.ds_cond01.clearData();
        		this.ds_cond01.addRow();
        		this.ds_cond01.setColumn(0,"EMPMN_YEAR",this.ds_cond00.getColumn(0,"EMPMN_YEAR"));
        		this.fn_transaction("selectOdrSeCombo");
        	}
        	if(e.columnid == "ODR_SE") {
        		this.fn_search();
        	}
        }

        /*
         * 함수명  	: ds_cond00_cancolumnchange
         * 설명 		: 검색조건 데이터셋 컬럼 변경전 update check
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cond00_cancolumnchange();
         */
        this.ds_cond00_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "EMPMN_YEAR") {
        		if(!this.fn_check()){
        			return false;
        		}
        	}
        	if(e.columnid == "ODR_SE") {
        		if(!this.fn_check()){
        			return false;
        		}
        	}
        }

        /*
         * 함수명  	: ds_empmnRcritRealm_oncolumnchanged
         * 설명 		: 모집분야 탭 직종변경시 직급 필터링
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_empmnRcritRealm_oncolumnchanged();
         */
        this.ds_empmnRcritRealm_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="JSSFCSE"){
        		if(obj.getColumn(obj.rowposition,"JSSFCSE")=="004"){ //계약직일때
        			this.ds_clsfSe.set_filterstr("CODE=='000'"); //0급만
        		}
        		else{
        			this.ds_clsfSe.set_filterstr("CODE!='000'"); //0급제외
        		}
        	}
        }

        /*
         * 함수명  	: ds_empmnPblanc_cancolumnchange
         * 설명 		: 채용정보 데이터 변경 전 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_empmnPblanc_cancolumnchange();
         */
        this.ds_empmnPblanc_cancolumnchange = function(obj,e)
        {
        	// 시각
        	if(e.columnid == "BGN_TM") {
        		var de = obj.getColumn(e.row, "RCEPT_BGNDE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","접수시작일자를 먼저 입력해주세요.");
        			return false;
        		}
        	}else if(e.columnid == "END_TM") {
        		var de = obj.getColumn(e.row, "RCEPT_ENDDE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","접수종료일자를 먼저 입력해주세요.");
        			return false;
        		}	
        	}else if(e.columnid == "PAPERS_DSPTH_TM") {
        		var de = obj.getColumn(e.row, "PAPERS_DSPTH_DE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","서류전형 결과통보일자를 먼저 입력해주세요.");
        			return false;
        		}	
        	}else if(e.columnid == "WRTNG_DSPTH_TM") {
        		var de = obj.getColumn(e.row, "WRTNG_DSPTH_DE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","필기시험 결과통보일자를 먼저 입력해주세요.");
        			return false;
        		}		
        	}else if(e.columnid == "NCS_DSPTH_TM") {
        		var de = obj.getColumn(e.row, "NCS_DSPTH_DE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","인적성검사 결과통보일자를 먼저 입력해주세요.");
        			return false;
        		}				
        	}else if(e.columnid == "LAST_RESULT_DSPTH_TM") {
        		var de = obj.getColumn(e.row, "LAST_RESULT_DSPTH_DE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","최종합격자발표 결과통보일자를 먼저 입력해주세요.");
        			return false;
        		}		
        	}else if(e.columnid == "APYEXM_PRT_TM") {
        		var de = obj.getColumn(e.row, "APYEXM_PRT_DE");
        		if(!this.comUtils.isNull(e.newvalue) && !this.comUtils.isTime(e.newvalue)) {
        			this.gfn_message("comm.값.무효");
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return false;
        		}else if(this.comUtils.isNull(de)) {
        			this.gfn_message("info.처리불가","응시표출력 일자를 먼저 입력해주세요.");
        			return false;
        		}		
        	}
        	
        	// 일자
        	else if((e.columnid == "RCEPT_BGNDE")) {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "BGN_TM", null);
        		}
        	}else if(e.columnid == "RCEPT_ENDDE") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "END_TM", null);
        		}
        	}else if(e.columnid == "PAPERS_DSPTH_DE") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "PAPERS_DSPTH_TM", null);
        		}	
        	}else if(e.columnid == "WRTNG_DSPTH_DE") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "WRTNG_DSPTH_TM", null);
        		}		
        	}else if(e.columnid == "NCS_DSPTH_DE") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "NCS_DSPTH_TM", null);
        		}			
        	}else if(e.columnid == "LAST_RESULT_DSPTH_DE") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "LAST_RESULT_DSPTH_TM", null);
        		}	
        	}else if(e.columnid == "APYEXM_PRT_DE") {		// 응시표 출력
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "APYEXM_PRT_TM", null);
        		}			
        	}
        }

        
        /*
         * 함수명  	: ds_empmnRcritRealm_onrowposchanged
         * 설명 		: 모집분야 행 변경 후 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_empmnRcritRealm_onrowposchanged();
         */
        this.ds_empmnRcritRealm_onrowposchanged = function(obj,e)
        {
        	this.ds_choiseSbjectList.clearData();
        	if(e.newrow > -1) {
        		var masterRow = obj.rowposition;

        		var empmnYear = obj.getColumn(masterRow, "EMPMN_YEAR");
        		var odrSe = obj.getColumn(masterRow, "ODR_SE");
        		var sn = obj.getColumn(masterRow, "SN");
        				
        		this.ds_cond2.clearData();
        		this.ds_cond2.addRow();
        		this.ds_cond2.setColumn(0, "EMPMN_YEAR", empmnYear);
        		this.ds_cond2.setColumn(0, "ODR_SE", odrSe);
        		this.ds_cond2.setColumn(0, "SN", sn);
        		
        		this.fn_transaction("selectChoiseSbjectList");
        	}
        }

        
        /*
         * 함수명  	: ds_empmnRcritRealm_canrowposchange
         * 설명 		: 모집분야 행 변경 전 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_empmnRcritRealm_canrowposchange();
         */
        this.ds_empmnRcritRealm_canrowposchange = function(obj,e)
        {
            // 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.ds_choiseSbjectList)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }

        	this.ds_choiseSbjectList.reset();
        	this.ds_choiseSbjectList.applyChange();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond00.addEventHandler("oncolumnchanged", this.ds_cond00_oncolumnchanged, this);
            this.ds_cond00.addEventHandler("cancolumnchange", this.ds_cond00_cancolumnchange, this);
            this.ds_empmnPblanc.addEventHandler("onrowposchanged", this.ds_empmnPblanc_onrowposchanged, this);
            this.ds_empmnPblanc.addEventHandler("cancolumnchange", this.ds_empmnPblanc_cancolumnchange, this);
            this.ds_empmnRcritRealm.addEventHandler("oncolumnchanged", this.ds_empmnRcritRealm_oncolumnchanged, this);
            this.ds_empmnRcritRealm.addEventHandler("onrowposchanged", this.ds_empmnRcritRealm_onrowposchanged, this);
            this.ds_empmnRcritRealm.addEventHandler("canrowposchange", this.ds_empmnRcritRealm_canrowposchange, this);
            this.ds_cond01.addEventHandler("oncolumnchanged", this.ds_cond00_oncolumnchanged, this);
            this.ds_cond01.addEventHandler("cancolumnchange", this.ds_cond00_cancolumnchange, this);
            this.addEventHandler("oninit", this.HRM020102_oninit, this);
            this.addEventHandler("onload", this.HRM020102_onload, this);
            this.btn_url.addEventHandler("onclick", this.btn_url_onclick, this);
            this.grd_tbhrmRcritRealm.addEventHandler("oncellclick", this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_oncellclick, this);
            this.grd_tbhrmRcritRealm.addEventHandler("onheadclick", this.div_work_tab_tbhrmEmpmn_tabpage1_grd_tbhrmRcritRealm_onheadclick, this);
            this.btn_RowInsert.addEventHandler("onclick", this.fn_rowInsert, this);
            this.btn_RowDelete.addEventHandler("onclick", this.fn_rowDelete, this);
            this.btn_RowCancel.addEventHandler("onclick", this.fn_rowCancel, this);
            this.btn_RowInsert00.addEventHandler("onclick", this.fn_subject_add, this);
            this.btn_RowDelete00.addEventHandler("onclick", this.fn_subject_delete, this);
            this.btn_RowCancel00.addEventHandler("onclick", this.fn_subject_cancel, this);

        };

        this.loadIncludeScript("HRM020102.xfdl");

       
    };
}
)();
