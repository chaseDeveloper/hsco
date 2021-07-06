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
                this.set_name("SAL010201");
                this.set_classname("SAL010201");
                this.set_titletext("지급공제기준코드관리");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_PYMNT_DDC_STDR_CODE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"TAXT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS_FCLTY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS_INSTR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS_TMPR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ASYY_CALC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_STDR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_ADI_AT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_ENNC\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPMNY_ACNUT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCPMNY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"WAGE_PEAK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCTV_AT\" type=\"STRING\" size=\"256\"/><Column id=\"POIGS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PSDP_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTTK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTY_MANAGE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INSTR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DSPTC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"TMPR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CRW_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS_CRW_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_PD_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">지급</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">공제</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">-</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_TAXT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">비과세</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">과세</Col></Row><Row><Col id=\"data\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ALLWNC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">보수</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">수당</Col></Row><Row><Col id=\"data\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1일</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">20일</Col></Row><Row><Col id=\"data\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SEARCH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">DS_PYMNT_DDC_STDR_CODE</Col><Col id=\"colId\">PYMNT_DDC_SE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지급공제구분</Col></Row><Row><Col id=\"compId\">DS_PYMNT_DDC_STDR_CODE</Col><Col id=\"colId\">PYMNT_DDC_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지급공제코드</Col><Col id=\"nlength\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bankcode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "15", "5", "87", "21", null, null, this.div_search);
            obj.set_taborder("95");
            obj.set_text("지급공제구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "221", "5", "65", "21", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "9.72%", "2", null, "32", "89.89%", null, this.div_search);
            obj.set_taborder("98");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "20.31%", "1", null, "25", "78.33%", null, this.div_search);
            obj.set_taborder("101");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_PYMNT_DDC", "absolute", "104", "5", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cmb_PYMNT_DDC_innerdataset = new Dataset("cmb_PYMNT_DDC_innerdataset", this.div_search.cmb_PYMNT_DDC);
            cmb_PYMNT_DDC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지급코드</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">공제코드</Col></Row></Rows>");
            obj.set_innerdataset(cmb_PYMNT_DDC_innerdataset);
            obj.set_taborder("103");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("edt_PYMNT_DDC_CODE_NM", "absolute", "270", "5", "147", "21", null, null, this.div_search);
            obj.set_taborder("104");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "97.36%", "0", null, "735", "1.23%", null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "98.77%", "0", null, "735", "0%", null, this);
            obj.set_taborder("3");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "39", null, "19", "83.95%", null, this);
            obj.set_taborder("5");
            obj.set_text("지급공제기준코드정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "53", null, "5", "2.64%", null, this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_PYMNT_DDC_STDR_CODE", "absolute", "0", "58", null, null, "28", "0", this);
            obj.set_taborder("7");
            obj.set_binddataset("DS_PYMNT_DDC_STDR_CODE");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"59\"/><Column size=\"93\"/><Column size=\"170\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"0\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"117\"/><Column size=\"139\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"지급공제코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"지급공제코드명\"/><Cell col=\"4\" rowspan=\"2\" text=\"출력순서\"/><Cell col=\"5\" rowspan=\"2\" text=\"과세구분\"/><Cell col=\"6\" text=\"수당구분\"/><Cell col=\"7\" text=\"지급일자\"/><Cell col=\"8\" colspan=\"4\" text=\"통상임금\"/><Cell col=\"12\" text=\"일할계산\"/><Cell col=\"13\" rowspan=\"2\" text=\"임금피크\"/><Cell col=\"14\" rowspan=\"2\" text=\"사용여부\"/><Cell col=\"15\" rowspan=\"2\" text=\"비고\"/><Cell col=\"16\" rowspan=\"2\" text=\"은행명\"/><Cell col=\"17\" rowspan=\"2\" text=\"계좌번호\"/><Cell col=\"18\" rowspan=\"2\" text=\"예금주\"/><Cell col=\"19\" colspan=\"8\" text=\"기본 지급/공제 항목\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\" text=\"일반\"/><Cell row=\"1\" col=\"9\" text=\"시설&#13;&#10;관리\"/><Cell row=\"1\" col=\"10\" text=\"강사\"/><Cell row=\"1\" col=\"11\" text=\"운수\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"19\" text=\"임원\"/><Cell row=\"1\" col=\"20\" text=\"일반\"/><Cell row=\"1\" col=\"21\" text=\"청원&#13;&#10;경찰\"/><Cell row=\"1\" col=\"22\" text=\"계약\"/><Cell row=\"1\" col=\"23\" text=\"시설&#13;&#10;관리\"/><Cell row=\"1\" col=\"24\" text=\"강사\"/><Cell row=\"1\" col=\"25\" text=\"파견\"/><Cell row=\"1\" col=\"26\" text=\"운수\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'combo':'none'\" text=\"bind:PYMNT_DDC_SE\" combodataset=\"DS_PD_SE\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"2\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'normal':'none'\" text=\"bind:PYMNT_DDC_CODE\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:PYMNT_DDC_CODE_NM\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:OUTPT_ORDR\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXT_SE\" combodataset=\"DS_TAXT\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ALLWNC_SE\" combodataset=\"DS_ALLWNC\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYMNT_DE_SE\" combodataset=\"DS_DE\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ODYGS_AT\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ODYGS_FCLTY_AT\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ODYGS_INSTR_AT\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ODYGS_CRW_AT\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ASYY_CALC_AT\" combodataset=\"DS_SE\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WAGE_PEAK_AT\" combodataset=\"DS_SE\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_ENNC\" combodataset=\"DS_SE\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"15\" edittype=\"normal\" text=\"bind:RM\" editlimit=\"200\" editlengthunit=\"utf8\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:RCPMNY_BANK_CODE\" combodataset=\"ds_bankcode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"17\" edittype=\"normal\" text=\"bind:RCPMNY_ACNUT_NO\" editlimit=\"20\" editlengthunit=\"utf8\"/><Cell col=\"18\" edittype=\"normal\" text=\"bind:DPSTR\" editlimit=\"30\" editlengthunit=\"utf8\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:EXCTV_AT\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:POIGS_AT\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PSDP_AT\"/><Cell col=\"22\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNTTK_AT\"/><Cell col=\"23\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:FCLTY_MANAGE_AT\"/><Cell col=\"24\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:INSTR_AT\"/><Cell col=\"25\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DSPTC_AT\"/><Cell col=\"26\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CRW_AT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
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
            		p.set_classname("SAL010201");
            		p.set_titletext("지급공제기준코드관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SAL010201.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL010201.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("SAL010201.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 지급공제기준코드관리
         * 화면ID   : SAL010201
         * 화면명   : 지급공제기준코드관리
         * 화면설명 : 지급공제기준코드을 관리한다.
         * 작성일   : 2017.03.27
         * 작성자   : 이상명
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *   
         ***********************************************************************/
         
        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
        	 this.DS_PYMNT_DDC_STDR_CODE
        ];

        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.SAL010201_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }
         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010201_onload = function(obj,e)
        {
        	this.fn_loadCombo();
        	this.div_search.cmb_PYMNT_DDC.setFocus(true);
        	this.fn_search();   
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);	
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);	
        }

        /***********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        this.fn_loadCombo = function()
        {
        	var comboParams = [ ["ds_bankcode", "COM021", 1, ""]       // 은행코드             
        		              ];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);	
        }

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {

        	// 초기화
        	this.DS_PYMNT_DDC_STDR_CODE.clearData();
        	
        	// 조회조건 	
        	this.DS_SEARCH.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.DS_SEARCH.addRow();      // 조회 데이터셋 행추가	
        	this.DS_SEARCH.setColumn(nRow,"PYMNT_DDC_SE",this.div_search.cmb_PYMNT_DDC.value);
        	this.DS_SEARCH.setColumn(nRow,"PYMNT_DDC_CODE_NM",this.div_search.edt_PYMNT_DDC_CODE_NM.value);	
        	
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.DS_SEARCH, this.ds_validation)) {
        		return;
        	}	
        	
        	this.fn_transaction("selectPymntddcList");
        }

        
        /***********************************************************************
         * 설명: 신규
         ************************************************************************/
        this.fn_insert = function()
        {
        	var nRow = this.DS_PYMNT_DDC_STDR_CODE.addRow();
        	var bFocus = this.grd_PYMNT_DDC_STDR_CODE.setFocus(true);
        	var bSucc = this.grd_PYMNT_DDC_STDR_CODE.setCellPos(1);		
        }

        /***********************************************************************
         * 설명: 추가
         ************************************************************************/
        this.fn_add = function()
        {
        	var nRow = this.DS_PYMNT_DDC_STDR_CODE.insertRow(this.DS_PYMNT_DDC_STDR_CODE.rowposition+1);	
        }

        /***********************************************************************
         * 설명: 삭제
         ************************************************************************/
        this.fn_delete = function()
        {	
        	if ( this.gfn_message("confirm.삭제여부")) {  
        		var nRow = this.DS_PYMNT_DDC_STDR_CODE.rowposition;
        		this.DS_PYMNT_DDC_STDR_CODE.deleteRow(nRow);	
        	}	
        }

        
        /***********************************************************************
         * 설명: 취소
         ************************************************************************/
        this.fn_cancel = function()
        {
        	if ( this.gfn_message("confirm.취소여부") ) {  //모든 내용을 복원 하시겠습니까?
        		this.DS_PYMNT_DDC_STDR_CODE.reset();		//DATASET ROLLBACK
        		this.DS_PYMNT_DDC_STDR_CODE.applyChange();	//DATASET COMMIT
        		return;
        	}	

        }

        
        /***********************************************************************
         * 설명: 저장
         ************************************************************************/
        this.fn_save = function()
        {
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.DS_PYMNT_DDC_STDR_CODE, this.ds_validation)) {
        		return;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("savePymntddcList");
        	}
        }

        
        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectPymntddcList": 
        			var sController   	= "hsco/mis/sal/SAL010201/selectPymntDdcList.do";
        			var sInDatasets   	= "input1=DS_SEARCH";
        			var sOutDatasets  	= "DS_PYMNT_DDC_STDR_CODE=output1";
        			break;		
        		case "savePymntddcList":	
        			var sController   	= "hsco/mis/sal/SAL010201/pymntDdcCUD.do";	
        			var sInDatasets   	= "input2=DS_PYMNT_DDC_STDR_CODE:U";
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
        	/*this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);*/
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {		
        		switch (strSvcId) {
        			case "selectPymntddcList": 
        			    
        				break;							
        			case "savePymntddcList":
        			//    this.alert("저장이 완료되었습니다."); 
        			    this.fn_search();
        			    break;
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 헤드클릭 정렬
        ***********************************************************************************/
        this.grd_PYMNT_DDC_STDR_CODE_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }

        
        /***********************************************************************************
        * 설명	: 조회 엔터키 실행
        ***********************************************************************************/
        this.div_search_edt_PYMNT_DDC_CODE_NM_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		 this.fn_search();
        	}
        }

        /***********************************************************************************
        * 설명	: 그리드의 내용을 엑셀파일로 다운로드
        ***********************************************************************************/
        this.Excel_down_onclick = function(obj,e)
        {
            this.gfn_exportExcel(this.grd_PYMNT_DDC_STDR_CODE, "PYMNT_DDC_STDR_CODE");
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SAL010201_onload, this);
            this.addEventHandler("oninit", this.SAL010201_oninit, this);
            this.div_search.edt_PYMNT_DDC_CODE_NM.addEventHandler("onkeyup", this.div_search_edt_PYMNT_DDC_CODE_NM_onkeyup, this);
            this.grd_PYMNT_DDC_STDR_CODE.addEventHandler("onheadclick", this.grd_PYMNT_DDC_STDR_CODE_onheadclick, this);

        };

        this.loadIncludeScript("SAL010201.xfdl");

       
    };
}
)();
