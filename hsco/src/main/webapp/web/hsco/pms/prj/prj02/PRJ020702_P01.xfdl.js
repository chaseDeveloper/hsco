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
                this.set_name("PRJ020702_P01");
                this.set_classname("PRJ020702_P01");
                this.set_titletext("연차별투자계획일괄등록");
                this._setFormPosition(0,0,1059,704);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BGN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"END_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">INQIRE_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">조회일자</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">소유자</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">IHIDNUM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주민번호</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">AR</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">면적</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">PRPOS</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">용도</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sample", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_QU\" type=\"STRING\" size=\"256\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD1\" type=\"STRING\" size=\"256\"/><Column id=\"CD2\" type=\"STRING\" size=\"256\"/><Column id=\"CD3\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CD_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CD_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CD_NM3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_1", this);
            obj.set_useclientlayout("1");
            obj._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD3\" type=\"STRING\" size=\"256\"/><Column id=\"M01\" type=\"STRING\" size=\"256\"/><Column id=\"M02\" type=\"STRING\" size=\"256\"/><Column id=\"M03\" type=\"STRING\" size=\"256\"/><Column id=\"M04\" type=\"STRING\" size=\"256\"/><Column id=\"M05\" type=\"STRING\" size=\"256\"/><Column id=\"M06\" type=\"STRING\" size=\"256\"/><Column id=\"M07\" type=\"STRING\" size=\"256\"/><Column id=\"M08\" type=\"STRING\" size=\"256\"/><Column id=\"M09\" type=\"STRING\" size=\"256\"/><Column id=\"M10\" type=\"STRING\" size=\"256\"/><Column id=\"M11\" type=\"STRING\" size=\"256\"/><Column id=\"M12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prmpcCode3", this);
            obj.set_updatecontrol("0");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prmpcCode", this);
            obj.set_updatecontrol("0");
            obj._setContents("<ColumnInfo><Column id=\"CL_SE\" type=\"STRING\" size=\"50\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prmpcCode1", this);
            obj.set_updatecontrol("0");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prmpcCode2", this);
            obj.set_updatecontrol("0");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static05", "absolute", "0", "2", "15", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "2", "0", null, "15", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "17", "205", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("연차별투자계획 일괄등록");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "888", "15", "50", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("userdata").set("fn_search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "941", "15", "50", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("userdata").set("fn_search");
            this.addChild(obj.name, obj);

            obj = new Div("div_WORK", "absolute", "15", "75", null, "614", "15", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_1", "absolute", "0", "0", null, null, "0", "0", this.div_WORK);
            obj.set_taborder("2");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"원가항목(대)\"/><Cell col=\"1\" rowspan=\"2\" text=\"원가항목(중)\"/><Cell col=\"2\" rowspan=\"2\" text=\"원가항목(소)\"/><Cell col=\"3\" colspan=\"12\" text=\"2016년\"/><Cell row=\"1\" col=\"3\" text=\"1월\"/><Cell row=\"1\" col=\"4\" text=\"2월\"/><Cell row=\"1\" col=\"5\" text=\"3월\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"5월\"/><Cell row=\"1\" col=\"8\" text=\"6월\"/><Cell row=\"1\" col=\"9\" text=\"7월\"/><Cell row=\"1\" col=\"10\" text=\"8월\"/><Cell row=\"1\" col=\"11\" text=\"9월\"/><Cell row=\"1\" col=\"12\" text=\"10월\"/><Cell row=\"1\" col=\"13\" text=\"11월\"/><Cell row=\"1\" col=\"14\" text=\"12월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:left;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column3\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column4\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column5\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column6\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column7\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column8\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column9\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column10\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column11\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column12\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column13\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 9 0 0;\" text=\"bind:Column14\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column3)||0')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column4)||0')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column5)||0')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column6)||0')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column7)||0')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column8)||0')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column9)||0')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column10)||0')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column11)||0')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column12)||0')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column13)||0')\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(Column14)||0')\"/></Band></Format></Formats>");
            this.div_WORK.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "994", "15", "50", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("userdata").set("fn_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "70", null, "5", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2", "40", null, "10", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown00", "absolute", null, "49", "82", "21", "175", null, this);
            obj.set_taborder("20");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelImport", "absolute", null, "49", "82", "21", "90", null, this);
            obj.set_taborder("21");
            obj.set_text("파일불러오기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "19", "746", "205", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("양식다운로드 샘플 데이터");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2", null, null, "15", "0", "0", this);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_1Down", "absolute", "16", "776", null, null, "14", "-268", this);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.set_binddataset("ds_sample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"원가항목(대)\"/><Cell col=\"1\" rowspan=\"2\" text=\"원가항목(중)\"/><Cell col=\"2\" rowspan=\"2\" text=\"원가항목(소)\"/><Cell col=\"3\" colspan=\"12\" text=\"2016년\"/><Cell row=\"1\" col=\"3\" text=\"1월\"/><Cell row=\"1\" col=\"4\" text=\"2월\"/><Cell row=\"1\" col=\"5\" text=\"3월\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"5월\"/><Cell row=\"1\" col=\"8\" text=\"6월\"/><Cell row=\"1\" col=\"9\" text=\"7월\"/><Cell row=\"1\" col=\"10\" text=\"8월\"/><Cell row=\"1\" col=\"11\" text=\"9월\"/><Cell row=\"1\" col=\"12\" text=\"10월\"/><Cell row=\"1\" col=\"13\" text=\"11월\"/><Cell row=\"1\" col=\"14\" text=\"12월\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:left;\" text=\"bind:FULL_CD_NM1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:FULL_CD_NM2\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:FULL_CD_NM3\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;controlalign:right;\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_2", "absolute", null, "52", "69", "20", "16", null, this);
            obj.set_taborder("26");
            obj.set_text("(단위 : 천원)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CL_SE00", "absolute", "23", "50", "90", "20", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일괄등록기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_bgnYear", "absolute", "114", "49", "73", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_value("2000");
            obj.set_max("2100");
            obj.set_min("2000");
            obj.set_cssclass("spn_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_endYear", "absolute", "203", "49", "73", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_value("2000");
            obj.set_max("2100");
            obj.set_min("2000");
            obj.set_cssclass("spn_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "191", "50", "13", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("~");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 614, this.div_WORK,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");

            	}
            );
            this.div_WORK.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 704, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PRJ020702_P01");
            		p.set_titletext("연차별투자계획일괄등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PRJ020702_P01.xfdl", "pms_lib::rntUtilInclude.xjs");
        this.registerScript("PRJ020702_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   : PRJ020702_P01
         * 화면명   : 연차별투자계획일괄등록
         * 화면설명 : 연차별투자계획일괄등록
         * 작성일   : 2015.11.02
         * 작성자   : 지효정
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         */
         
        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        //include "pms_lib::rntUtilInclude.xjs";

        this.PRJ020702_P01_oninit = function(obj,e)
        {
        	this.fn_init();
        	this.div_WORK.grd_1.clearEventHandler("onrbuttondown");	// 우클릭 이벤트 제거
        	this.div_WORK.grd_1.set_cellmovingtype('none')			// cellmovingtype none으로 변경
        }

        
        this.PRJ020702_P01_onload = function(obj,e)
        {
        	var objParam = this.parent.objParam;
        	var stdrYear = objParam.stdrYear;				// 기준년도
        	this.div_WORK.grd_1.setCellProperty('Head', 4, 'text', (stdrYear + 0) + '년');	// 투자계획 그리드
        	
        	this.spn_bgnYear.set_value(stdrYear);
        	this.spn_endYear.set_value(stdrYear);
        	this.fn_load_combo();
        }

        
        /*
         * 함수명  	: fn_load_combo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_load_combo = function ()
        {
        	this.fn_transaction("prmpcCodeList");		// 원가코드 조회
        	this.fn_transaction("sampleList");			// sample - 원가코드 조회
        }

        
        /*
         * 함수명  	: btn_save_onclick
         * 설명 		: 저장
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.btn_save_onclick = function(obj,e)
        {
        	var rowcount = this.ds_excel.rowcount;
        	for(var i = 0; i < rowcount; i++){
        		var cd1 = this.ds_excel.getColumn(i, "CD1") || '';
        		var cd2 = this.ds_excel.getColumn(i, "CD2") || '';
        		var cd3 = this.ds_excel.getColumn(i, "CD3") || '';
        		if(cd1 == '' || cd2 == '' || cd3 == ''){
        			this.alert("원가항목코드가 입력되지 않았습니다.");
        			this.ds_excel.set_rowposition(i);
        			return;
        		}
        	}
        	
        	if(this.ds_excel.isUpdated() == true){	
        		if(this.confirm("저장 하시겠습니까?")){
        			var objParam = this.parent.objParam;
        			var bsnsCode = objParam.bsnsCode;
        			var bgnYear  = this.spn_bgnYear.value;
        			var endYear  = this.spn_endYear.value;
        			var rowcount = this.ds_excel.rowcount;
        			var yearCnt  = endYear - bgnYear + 1;
        			var cd3     = '';
        			var colIdx   = 0;
        			
        			this.ds_1.clearData();
        			this.ds_1.set_enableevent(false);

        			for(i = 0; i < rowcount; i++){
        				cd3 = this.ds_excel.getColumn(i, "CD3");
        				colIdx = 3;
        				for(j = 0; j < yearCnt; j++){
        					var nRow = this.ds_1.addRow();
        					this.ds_1.setColumn(nRow, "BSNS_CODE", bsnsCode);
        					this.ds_1.setColumn(nRow, "STDR_YEAR", (bgnYear + j));
        					this.ds_1.setColumn(nRow, "CD3", code);
        					this.ds_1.setColumn(nRow, "M01", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M02", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M03", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M04", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M05", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M06", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M07", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M08", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M09", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M10", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M11", this.ds_excel.getColumn(i, "Column" + colIdx++));
        					this.ds_1.setColumn(nRow, "M12", this.ds_excel.getColumn(i, "Column" + colIdx++));
        				}
        			}
        			
        			this.ds_1.set_enableevent(true);
        			this.fn_transaction("save");
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_cancel_onclick
         * 설명 		: 취소
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(this.confirm("변경하신 모든 사항이 취소됩니다.")){
        		this.ds_excel.cancel();
        	}
        }

        
        /*
         * 함수명  	: btn_delete_onclick
         * 설명 		: 삭제
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_excel.deleteSelectRow();
        }

        
        /*
         * 함수명  	: btn_close_onclick
         * 설명 		: 종료
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        /*
         * 함수명  	: btn_excelDown_onclick
         * 설명 		: 양식다운로드 [엑셀다운로드]
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.btn_excelDown_onclick = function(obj,e)
        {
        	this.creatGridFormat2();
        	this.gfn_exportExcel(this.grd_1Down, "download");
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
        	var bSync = true;
        	var sController  = ""; 
        	var sInDatasets  = "";
        	var sOutDatasets = "";
        			
        	switch (strSvcId) {
        		case "sampleList":			// sample - 원가코드 조회
        			sController  = "hsco/pms/prj/PRJ020702/sampleList.do"; 
        			sInDatasets  = "";
        			sOutDatasets = "ds_sample=output1";
        			break;
        		case "prmpcCodeList":		// 원가코드 조회
        			sController  = "hsco/pms/prj/PRJ020702/prmpcCodeList.do";
        			sInDatasets  = "";
        			sOutDatasets = "ds_prmpcCode=output1";
        			break;
        		case "save":				// 연차별투자계획 일괄등록
        			sController  = "hsco/pms/prj/PRJ020702/save.do";
        			sInDatasets  = "input1=ds_1:U";
        			sOutDatasets = "";
        			break;
        	}
        	
        	if(this.fn_validate_tranasaction(strSvcId, sController, sInDatasets, sOutDatasets) == false){
        		return;
        	}
        	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, "", null, null, bSync); 
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
        	var bSuccess = nErrorCode == 0 ? true : false;
        	if (nErrorCode != 0) {
        		return this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	switch(strSvcId){
        		case "prmpcCodeList":
        			// 원가항목(대)
        			this.ds_prmpcCode.filter("CL_SE=='1'");
        			this.ds_prmpcCode1.copyData(this.ds_prmpcCode, true);
        			// 원가항목(중)
        			this.ds_prmpcCode.filter("CL_SE=='2'");
        			this.ds_prmpcCode2.copyData(this.ds_prmpcCode, true);
        			// 원가항목(소)
        			this.ds_prmpcCode.filter("CL_SE=='3'");
        			this.ds_prmpcCode3.copyData(this.ds_prmpcCode, true);
        			break;
        		case "save" :
        			if(this.gfn_message("success.처리.성공"));
        			break;	
        	}
        }

        
        /*
         * 함수명  	: btn_excelImport_onclick
         * 설명 		: 파일불러오기 [엑셀업로드]
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.btn_excelImport_onclick = function(obj,e)
        {
        	this.creatGridFormat1();
        	this.ds_excel.clear();
        	this.div_WORK.grd_1.binddataset = "";
        	

        	/* 엑셀업로드 callBack */
        	var fn_cb = function() {
        		var objParam = this.parent.objParam;
        		var bsnsCode = objParam.bsnsCode;				// 사업코드
        		var stdrYear = this.spn_bgnYear.value;			// 기간 시작년도
         		var rowcount = this.ds_excel.rowcount;
        		
        		this.ds_excel.set_enableevent(false);
        		this.ds_excel.deleteRow(1);
        		this.ds_excel.deleteRow(0);
        		this.ds_excel.addColumn("BSNS_CODE", "String");
        		this.ds_excel.addColumn("CD1", "String");
        		this.ds_excel.addColumn("CD2", "String");
        		this.ds_excel.addColumn("CD3", "String");
        		this.ds_excel.addColumn("BGN_YEAR", "String");;
        	
        		for(var i = 0; i < rowcount - 2; i++){
        			var cd1 = this.ds_excel.getColumn(i, "Column0") || '';
        			var cd2 = this.ds_excel.getColumn(i, "Column1") || '';
        			var cd3 = this.ds_excel.getColumn(i, "Column2") || '';
        			
        			//if(cd1 == '' && cd2 == '' && cd3 == '')	continue;
        			
        			cd1 = cd1.substr(1, 2);
        			cd2 = cd2.substr(1, 2);
        			cd3 = cd3.substr(1, 2);
        			
        			if(isNaN(cd1))	cd1 = '';
        			if(isNaN(cd2))	cd2 = '';
        			if(isNaN(cd3))	cd3 = '';
        			
        			this.ds_excel.setColumn(i, "BGN_YEAR", stdrYear);
        			this.ds_excel.setColumn(i, "BSNS_CODE", bsnsCode);
        			this.ds_excel.setColumn(i, "CD1", cd1 + "0000");
        			this.ds_excel.setColumn(i, "CD2", cd1 + cd2 + "00");
        			this.ds_excel.setColumn(i, "CD3", cd1 + cd2 + cd3);
        		}
        		
        		this.div_WORK.grd_1.binddataset = "ds_excel";
        		this.ds_excel.set_enableevent(true);
        	};

        	var arg = {
        		targetDs : this.ds_excel,
        		headSet  : false,
         		callBack : fn_cb
        	};
        	
        	this.gfn_importExcel(arg);
        }

        
        /*
         * 연차별투자계획 그리드 formats 생성
         */
        this.creatGridFormat1 = function(){
        	var colIndex = 0;
        	var i, j;
        	var bgnYear = this.spn_bgnYear.value;
        	var endYear = this.spn_endYear.value;
        	var yearCnt = endYear - bgnYear + 1;
        	var gridFormat  = "";
        	var gridColumns = "";
        	var gridRows    = "";
        	var gridHead    = "";
        	var gridBody    = "";
        	var gridSummary = "";
        	
        	// gridColumns
        	gridColumns = '<Column size="120" band="left" />'
        				+ '<Column size="120" band="left" />'
        				+ '<Column size="180" band="left" />';
        	for(i = 0; i < yearCnt * 12; i++){
        		gridColumns += '<Column size="80" />';
        	}
        	
        	// gridRows
        	gridRows = '<Row size="24" band="head" />'
        			 + '<Row size="24" band="head" />'
        			 + '<Row size="24" />'
        			 + '<Row size="24" band="summ" />';
        			 
        	// gridHead
        	gridHead = '<Cell rowspan="2" text="원가항목(대)"/>'
        			 + '<Cell col="1" rowspan="2" text="원가항목(중)"/>'
        			 + '<Cell col="2" rowspan="2" text="원가항목(소)"/>';
        			 
            colIndex = 3;
        	for(i = 0; i < yearCnt; i++){
        		gridHead += '<Cell col="' + colIndex + '" colspan="12" text="' + (bgnYear + i) + '년"/>';
        		colIndex += 12;
        	}
        	colIndex = 3;
        	for(i = 0; i < yearCnt; i++){
        		for(j = 0; j < 12; j++){
        			gridHead += '<Cell row="1" col="' + colIndex++ + '" text="' + (j + 1) + '월"/>';
        		}
        	}
        	
        	// gridBody
        	gridBody = '<Cell displaytype="combo" style="align:left;" text="bind:PRPOS_CODE" combodataset="ds_prmpcCode1" combocodecol="CODE" combodatacol="CODE_NM"/>'
        			 + '<Cell col="1" displaytype="combo" style="align:left;" text="bind:SUPLY_CODE" combodataset="ds_prmpcCode2" combocodecol="CODE" combodatacol="CODE_NM"/>';
        			 + '<Cell col="1" displaytype="combo" style="align:left;" text="bind:SUPLY_CODE" combodataset="ds_prmpcCode3" combocodecol="CODE" combodatacol="CODE_NM"/>';
            
        	colIndex = 3;
        	for(i = 0; i < yearCnt * 12; i++){
        		gridBody += '<Cell col="' + (colIndex + i) + '" displaytype="number" style="align:right;padding:0 9 0 0;" mask="#,##0" text="bind:Column' + (colIndex + i) + '"/>';
        	}
        	
        	//gridSummary
        	gridSummary = '<Cell colspan="3" style="align:center;" text="합계"/>';
        	colIndex = 3;
        	for(i = 0; i < yearCnt * 12; i++){
        		gridSummary += '<Cell col="' + (colIndex + i) + '" displaytype="number" text="expr:dataset.getSum(\'parseInt(Column' + (colIndex + i) + ')||0\')"/>';
        	}

        	// gridFormat
        	gridFormat = '<Formats>'
        			   + '<Format id="default">'
        			   + '<Columns>' + gridColumns + '</Columns>'
        			   + '<Rows>' + gridRows + '</Rows>'
        			   + '<Band id="head">' + gridHead + '</Band>'
        			   + '<Band id="body">' + gridBody + '</Band>'
        			   + '<Band id="summary">' + gridSummary + '</Band>'
        			   + '</Format>'
        			   + '</Formats>';

        	// 그리드 format set
        	this.div_WORK.grd_1.set_formats(gridFormat);
        }

        
        /*
         * 양식그리드 formats 생성
         */
        this.creatGridFormat2 = function(){
        	var colIndex = 0;
        	var i, j;
        	var bgnYear = this.spn_bgnYear.value;
        	var endYear = this.spn_endYear.value;
        	var yearCnt = endYear - bgnYear + 1;
        	var gridFormat  = "";
        	var gridColumns = "";
        	var gridRows    = "";
        	var gridHead    = "";
        	var gridBody    = "";
        	var gridSummary = "";
        	
        	// gridColumns
        	gridColumns = '<Column size="120" band="left" />'
        				+ '<Column size="120" band="left" />'
        				+ '<Column size="180" band="left" />';
        	for(i = 0; i < yearCnt * 12; i++){
        		gridColumns += '<Column size="70" />';
        	}
        	
        	// gridRows
        	gridRows = '<Row size="24" band="head" />'
        			 + '<Row size="24" band="head" />'
        			 + '<Row size="24" />';
        			 
        	// gridHead
        	gridHead = '<Cell rowspan="2" text="원가항목(대)"/>'
        			 + '<Cell col="1" rowspan="2" text="원가항목(중)"/>'
        			 + '<Cell col="2" rowspan="2" text="원가항목(소)"/>';
        			 
            colIndex = 3;
        	for(i = 0; i < yearCnt; i++){
        		gridHead += '<Cell col="' + colIndex + '" colspan="12" text="' + (bgnYear + i) + '년"/>';
        		colIndex += 12;
        	}
        	colIndex = 3;
        	for(i = 0; i < yearCnt; i++){
        		for(j = 0; j < 12; j++){
        			gridHead += '<Cell row="1" col="' + colIndex++ + '" text="' + (j + 1) + '월"/>';
        		}
        	}
        	
        	// gridBody
        	gridBody = '<Cell displaytype="normal" style="align:left;" text="bind:FULL_CD_NM1"/>'
        			 + '<Cell col="1" displaytype="normal" style="align:left;" text="bind:FULL_CD_NM2"/>'
        			 + '<Cell col="2" displaytype="normal" style="align:left;" text="bind:FULL_CD_NM3"/>';
            
        	colIndex = 3;
        	for(i = 0; i < yearCnt * 12; i++){
        		gridBody += '<Cell col="' + (colIndex + i) + '" displaytype="number" style="align:right;" mask="#,##0" />';
        	}
        	
        	// gridFormat
        	gridFormat = '<Formats>'
        			   + '<Format id="default">'
        			   + '<Columns>' + gridColumns + '</Columns>'
        			   + '<Rows>' + gridRows + '</Rows>'
        			   + '<Band id="head">' + gridHead + '</Band>'
        			   + '<Band id="body">' + gridBody + '</Band>'
        			   + '</Format>'
        			   + '</Formats>';

        	// 그리드 format set
        	this.grd_1Down.set_formats(gridFormat);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.PRJ020702_P01_oninit, this);
            this.addEventHandler("onload", this.PRJ020702_P01_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_excelDown00.addEventHandler("onclick", this.btn_excelDown_onclick, this);
            this.btn_excelImport.addEventHandler("onclick", this.btn_excelImport_onclick, this);
            this.spn_bgnYear.addEventHandler("onspin", this.div_search_spn_stRceptYr_onspin, this);
            this.spn_endYear.addEventHandler("onspin", this.div_search_spn_stRceptYr_onspin, this);

        };

        this.loadIncludeScript("PRJ020702_P01.xfdl");

       
    };
}
)();
