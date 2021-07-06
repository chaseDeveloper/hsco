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
                this.set_name("HRM010410");
                this.set_classname("");
                this.set_titletext("차수및마감관리");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_getClosAt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_CYCLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condDtlSub", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_evlOdrList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PSSRP_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"PSSRP_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSDE\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curOdrInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CUR_STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">STDR_YEAR</Col><Col id=\"msgId\">기준년도</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">4</Col><Col id=\"compId\">ds_evlOdrList</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_evlOdrList</Col><Col id=\"colId\">ODR_SE</Col><Col id=\"msgId\">차수</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">3</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_evlOdrList</Col><Col id=\"colId\">PSSRP_ENDDE</Col><Col id=\"msgId\">종료일자^시작일자</Col><Col id=\"from\">PSSRP_BGNDE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_activeSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">시행</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">예정</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odrSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "5", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "33", "277", "67", null, null, this.div_work);
            obj.set_taborder("75");
            obj.style.set_background("#ffffffff");
            obj.set_cssclass("sta_GID_Title");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "106", "40", "162", "27", null, null, this.div_work);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_border("1 solid #c9ced9ff");
            obj.style.set_color("#5d6a7bff");
            this.div_work.addChild(obj.name, obj);
            obj = new Edit("edt_curStdrYear", "absolute", "111", "43", "153", "21", null, null, this.div_work);
            obj.set_taborder("73");
            obj.set_readonly("true");
            obj.style.set_font("bold 9 Gulim");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "9", "193", "21", null, null, this.div_work);
            obj.set_taborder("34");
            obj.set_text("현재적용 공모차수");
            obj.set_cssclass("sta_WF_Title02");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0", "0", "336", "10", null, null, this.div_work);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "0", "29", null, "5", "0", null, this.div_work);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "1", "-24", "193", "21", null, null, this.div_work);
            obj.set_taborder("42");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_Title02");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grd_evlOdrList", "absolute", "0", "138", null, null, "0", "0", this.div_work);
            obj.set_taborder("43");
            obj.set_binddataset("ds_evlOdrList");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_autofittype("none");
            obj.style.set_background("#fa6c69ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"97\"/><Column size=\"120\"/><Column size=\"102\"/><Column size=\"98\"/><Column size=\"107\"/><Column size=\"86\"/><Column size=\"115\"/><Column size=\"111\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"기준년도\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"차수구분\"/><Cell col=\"3\" colspan=\"2\" text=\"공모기간\"/><Cell col=\"5\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"현재&#13;&#10;적용여부\"/><Cell col=\"6\" colspan=\"2\" text=\"마감\"/><Cell col=\"8\" rowspan=\"2\" text=\"시행여부\"/><Cell row=\"1\" col=\"3\" text=\"시작일자\"/><Cell row=\"1\" col=\"4\" text=\"종료일자\"/><Cell row=\"1\" col=\"6\" style=\"background: ;\" text=\"마감여부\"/><Cell row=\"1\" col=\"7\" text=\"마감일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" style=\"font:EXPR(CURRENT_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:STDR_YEAR\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'combo' : 'none'\" style=\"font:EXPR(CURRENT_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ODR_SE\" combodataset=\"ds_odrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:PSSRP_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:PSSRP_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"font:EXPR(CURRENT_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:CURRENT_AT\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"font:EXPR(CURRENT_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:CLOS_AT\" suppress=\"0\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:CLOSDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" style=\"background:EXPR(ACT_AT == '1' ? '#80bae7' :  '#fa6c69');background2:EXPR(ACT_AT == '1' ? '#80bae7' :  '#fa6c69');selectbackground:EXPR(ACT_AT == '1' ? '#80bae7' :  '#fa6c69');\" text=\"bind:ACT_AT\" combodataset=\"ds_activeSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static84", "absolute", "8", "40", "100", "27", null, null, this.div_work);
            obj.set_taborder("57");
            obj.set_text("현재 기준년도");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "8", "100", "336", "10", null, null, this.div_work);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "8", "133", null, "5", "-8", null, this.div_work);
            obj.set_taborder("77");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "113", "193", "21", null, null, this.div_work);
            obj.set_taborder("82");
            obj.set_text("공모차수 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "106", "66", "162", "27", null, null, this.div_work);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_border("1 solid #c9ced9ff");
            obj.style.set_color("#5d6a7bff");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "8", "66", "100", "27", null, null, this.div_work);
            obj.set_taborder("84");
            obj.set_text("현재 차수구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.addChild(obj.name, obj);
            obj = new Combo("cmb_curOdr", "absolute", "111", "69", "153", "21", null, null, this.div_work);
            this.div_work.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.style.set_font("bold 9 Gulim");

            obj = new Static("Static00", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("39");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "488", "0", "38", "5", null, null, this);
            obj.set_taborder("44");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 668, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_background("#00000000");
            		p.set_scrollbars("none");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("차수및마감관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_work.edt_curStdrYear","value","ds_curOdrInfo","CUR_STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_work.cmb_curOdr","value","ds_curOdrInfo","CUR_ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010410.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010410.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010410.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010410
         * 화면명   : 현재평가차수 설정[공모]
         * 화면설명 : 직위/직무공모시 현재평가차수를 설정등록한다.
         * 작성일   : 2016.06.23
         * 작성자   : 박병일
         * 수정이력 :
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        
        /***********************************************************************
         * Script Include
         ***********************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.sClosAt = "";
        this.nRowPos = 0;

         /***********************************************************************
         * 메뉴 변수 선언부
         ************************************************************************/

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010410_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }

        this.HRM010410_onload = function(obj,e)
        {
        	this.fn_loadCombo();
            this.fn_search();
        }

        //----------------------------------
        // Form/Dataset 오브젝트 초기화
        //----------------------------------
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        }

        //--------------------------
        // Dataset을 초기화한다.
        //--------------------------
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        }

        //-----------------------------------------------------
        // 화면의 Combo 에 데이터를 불러온다. (공통코드)
        //-----------------------------------------------------
         this.fn_loadCombo = function ()
        {
            // 평가차수
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "");    
        }

        
        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러
         **********************************************************************/

        //-------
        // 조회
        //-------
        this.fn_search = function()
        {
        	this.ds_curOdrInfo.clearData();
        	this.fn_transaction("selectCurOdr");
        }

        //--------------------------
        // 조회 - 평가차수 목록
        //--------------------------
        this.fn_searchOdrList = function()
        {
            this.ds_evlOdrList.clearData();
        	this.fn_transaction("selectOdrList");
        }

        //-------
        // 저장
        //-------
        this.fn_save = function()
        {
        	if(Ex.util.isUpdated(this.ds_evlOdrList)){
        		if(this.gfn_message("confirm.저장.여부"))	{
        		    //this.fn_copyDScheckedRow();
        		}
        	}else{
        		this.gfn_message("comm.데이터.변경.없음");
        		return;
        	}
        	
        	// validation 체크
        	if(!this.gfn_checkValidation(this.ds_evlOdrList, this.ds_validation)) {
        		return;
        	}
        	nRowPos = this.ds_evlOdrList.rowposition;				
        	this.fn_transaction("mainCUD");
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/

        /*
         * 함수명  	: fn_transaction
         * 설명 		: Transaction 요청 처리 함수
         * params  		: strSvcId : 서비스요청 ID
         * return Type 	: None
         * 사용법		: this.fn_transaction("SELECT");
         */
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {

        		case "selectCurOdr": // 현재차수 Info 불러오기
        			var sController   	= "hsco/mis/hrm/HRM010410/selectCurOdr.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_curOdrInfo=output1";
        			break;

        		case "selectOdrList": // 공모차수 List불러오기
        			var sController   	= "hsco/mis/hrm/HRM010410/selectOdrList.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_evlOdrList=output1";
        			break;

        		case "mainCUD": // 저장하기( main : 공모차수)
        			var sController   	= "hsco/mis/hrm/HRM010410/mainCUD.do";
        			var sInDatasets   	= "input1=ds_evlOdrList:U";
        			var sOutDatasets  	= "";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/

         /*
         * 함수명  	: fn_callBack
         * 설명 		: Transaction Callback 처리
         * params  		: strSvcId    : 서비스요청 ID
         *                nErrorCode  : 오류 메시지 코드 ([예] 0 : Success, 그밖의 경우, error)
         *                strErrorMsg : 오류 메시지([예]  success.insert|정상적으로 등록되었습니다.)
         * return Type 	: None
         * 사용법		:
         */
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	} else {
        		switch (strSvcId) {

        			case "selectCurOdr": // 현재차수 Info 불러오기
        			    //this.fn_setOrdMsg();			
        			    this.fn_searchOdrList();
        				break;

        			case "selectOdrList": // 평가 차수 List 불러오기
        				if(this.ds_evlOdrList.rowcount > 0 ){
        					this.ds_evlOdrList.set_rowposition(nRowPos);
        					nRowPos = 0;
        				}
        				break;

        			case "mainCUD": // 저장하기( main : 평가차수)
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
         
        //---------
        // 신규
        //--------- 
        this.fn_insert = function()
        {
        	var findRow = this.ds_evlOdrList.findRow("ACT_AT", '0');
        	if(findRow > -1) {
        		this.ds_evlOdrList.set_rowposition(findRow);
        		this.gfn_message("info.처리불가","미시행(예정) 차수정보는\n" + "1건만 등록가능합니다.");
        		return false;	
        	}
        	var nRow = this.ds_evlOdrList.addRow();
        	this.ds_evlOdrList.setColumn(nRow, "ACT_AT", '0');  //add.
        }

        //---------
        // 삭제
        //---------  
        this.fn_delete= function()
        {
        	var nCurRow  = this.ds_evlOdrList.rowposition;
        	var nRowType = this.ds_evlOdrList.getRowType(nCurRow);
        	var sActAt 	 = this.ds_evlOdrList.getColumn(nCurRow, "ACT_AT");
        	if (sActAt == '1'){
        		this.gfn_message("info.처리불가","이미 시행된 차수정보는\n" + "삭제할 수 없습니다.");
        		return false;	
        	}
        	
        	if(!this.gfn_message("confirm.삭제여부")){
        		return false;
        	}	
        	this.ds_evlOdrList.deleteRow(nCurRow);
        	//this.gfn_delMultiRow(this.ds_evlOdrList);	
        }

        

        //---------
        // 취소
        //---------
        this.fn_cancel = function()
        {
        	if (this.gfn_message("confirm.취소여부")) {
        	    this.ds_evlOdrList.reset();				//DATASET ROLLBACK
        		this.ds_evlOdrList.applyChange();		//DATASET COMMIT
        		return;
        	}
        }

        //----------------------------------------------------
        // Grid Head 클릭 이벤트 처리(Grid 데이터 정렬)
        //----------------------------------------------------
        this.div_work_grd_evlOdrList_onheadclick = function(obj,e)
        {
        	this.gfn_gridSort(obj, e);			// Grid 데이터 정렬
        }

        this.div_work_grd_evlOdrList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}		
        }

        this.div_work_grd_evlOdrList_onkeydown = function(obj,e)
        {
        	if ( e.keycode == 13 ) {
        		var brlst = obj.moveToNextCell();
        	}	
        }

        //------------------------------------------------
        //  그리드 item 선택변경 후
        //-------------------------------------------------
        this.ds_evlOdrList_oncolumnchanged = function(obj,e)
        {
            // 현재적용여부 item 변경시
        	if (e.columnid == "CURRENT_AT"){
        		if (e.oldvalue == "1"&& e.newvalue == "0"){
        			return;
        		}
        		this.fn_setUnCheckAll(obj, e);
        	}
        	// 마감여부 item 변경시
        	if(e.columnid == "CLOS_AT"){
        		if(e.newvalue == '0'){
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.row, "CLOSDE", null);
        			obj.set_updatecontrol(true);
        		} else {
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.row, "CLOSDE", this.dateUtils.today());
        			obj.set_updatecontrol(true);
        		}
        	}
        	// 마감일자 item 변경시
        	if(e.columnid == "CLOSDE"){
        		if(!this.comUtils.isNull(e.newvalue)){
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.row, "CLOS_AT", '1');
        			obj.set_updatecontrol(true);
        		} else {
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.row, "CLOS_AT", '0');
        			obj.set_updatecontrol(true);
        		}
        	}	
        }

        
        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/

        //------------------------------------------------
        //  적용여부 All unChecked (선택된 것 제외)
        //------------------------------------------------
        this.fn_setUnCheckAll = function (obj,e)
        {
        	var nCurRow = obj.rowposition;
        	var sVar = "0" //체크해제
        	obj.set_enableevent(false);
        	for (var i = 0; i < obj.getRowCount(); i++)
        	{
        		if (i == nCurRow){
        			continue;
        		}
        		obj.setColumn(i, e.columnid, sVar);
        	}
        	obj.set_enableevent(true);
        }

        //------------------------------------------------
        //  적용여부 Checked  Copy
        //------------------------------------------------
        // this.fn_copyDScheckedRow = function()
        // {
        // 	this.ds_target.clearData();
        // 
        // 	for(var i=0; i<this.ds_evlOdrList.getRowCount(); i++){
        // 		if (this.ds_evlOdrList.getColumn(i, "CURRENT_AT") == "1"){
        // 			var nRowNum = this.ds_target.addRow();
        // 			this.ds_target.copyRow(nRowNum, this.ds_evlOdrList, i);
        // 		}
        // 	}
        // 	//return; //for test
        // 	
        // 	// validation 체크
        // 	if(!this.gfn_checkValidation(this.ds_target, this.ds_validation)) {
        // 		return;
        // 	}
        // 		
        // 	this.fn_transaction("mainCUD");
        // }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_evlOdrList.addEventHandler("oncolumnchanged", this.ds_evlOdrList_oncolumnchanged, this);
            this.ds_evlOdrList.addEventHandler("cancolumnchange", this.ds_evlOdrList_cancolumnchange, this);
            this.addEventHandler("oninit", this.HRM010410_oninit, this);
            this.addEventHandler("onload", this.HRM010410_onload, this);
            this.div_work.grd_evlOdrList.addEventHandler("onheadclick", this.div_work_grd_evlOdrList_onheadclick, this);
            this.div_work.grd_evlOdrList.addEventHandler("onkeydown", this.div_work_grd_evlOdrList_onkeydown, this);

        };

        this.loadIncludeScript("HRM010410.xfdl");

       
    };
}
)();
