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
                this.set_name("HRM010406");
                this.set_classname("");
                this.set_titletext("직무지원 신청");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GRP_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">정원</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">현원</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">결원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DEPT_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">10</Col><Col id=\"CD_NM\">도시공사</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"CD_NM\">본부</Col></Row><Row><Col id=\"CD\">30</Col><Col id=\"CD_NM\">실</Col></Row><Row><Col id=\"CD\">40</Col><Col id=\"CD_NM\">단</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"CD_NM\">팀</Col></Row><Row><Col id=\"CD\">60</Col><Col id=\"CD_NM\"/></Row><Row><Col id=\"CD\">70</Col><Col id=\"CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_BPLC_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">본사</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">주거복지처</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"CD_NM\">레포츠센터</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_R_DTL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"D01\" type=\"STRING\" size=\"256\"/><Column id=\"D02\" type=\"STRING\" size=\"256\"/><Column id=\"D03\" type=\"STRING\" size=\"256\"/><Column id=\"W01\" type=\"STRING\" size=\"256\"/><Column id=\"W02\" type=\"STRING\" size=\"256\"/><Column id=\"W03\" type=\"STRING\" size=\"256\"/><Column id=\"M01\" type=\"STRING\" size=\"1024\"/><Column id=\"M02\" type=\"STRING\" size=\"1024\"/><Column id=\"M03\" type=\"STRING\" size=\"1024\"/><Column id=\"DEPT_NM01\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM02\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_S_DTL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RANK\" type=\"INT\" size=\"256\"/><Column id=\"SPORT_MAN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_MOTV\" type=\"STRING\" size=\"1024\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_COND", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_MAN_EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_curInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_deptCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DEPT_LEVEL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BEFORE_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BPLC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"USE_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"USE_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTPT_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "69", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            obj.getSetter("titletext").set("직무지원 신청");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "69.84%", "207", null, "350", "0.19%", null, this.div_work);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "69.84%", "58", null, "150", "0.19%", null, this.div_work);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Div("div_dept03", "absolute", "69.84%", "29", null, "30", "0.19%", null, this.div_work);
            obj.set_taborder("27");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #dee1e9ff");
            this.div_work.addChild(obj.name, obj);
            obj = new Edit("edt_deptCode03", "absolute", "3", "4", "93", "21", null, null, this.div_work.div_dept03);
            obj.set_taborder("9");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("6");
            this.div_work.div_dept03.addChild(obj.name, obj);
            obj = new Button("btn_dept03", "absolute", "74", "4", "22", "21", null, null, this.div_work.div_dept03);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.div_dept03.addChild(obj.name, obj);
            obj = new Edit("edt_deptNm03", "absolute", "101", "4", null, "21", "3", null, this.div_work.div_dept03);
            obj.set_taborder("11");
            this.div_work.div_dept03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "69.84%", "0", null, "30", "0.19%", null, this.div_work);
            obj.set_taborder("18");
            obj.set_text("3순위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "39.86%", "207", null, "350", "30.07%", null, this.div_work);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "39.86%", "58", null, "150", "30.07%", null, this.div_work);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Div("div_dept02", "absolute", "39.86%", "29", null, "30", "30.07%", null, this.div_work);
            obj.set_taborder("26");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #dee1e9ff");
            this.div_work.addChild(obj.name, obj);
            obj = new Edit("edt_deptCode02", "absolute", "3", "4", "93", "21", null, null, this.div_work.div_dept02);
            obj.set_taborder("6");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("6");
            this.div_work.div_dept02.addChild(obj.name, obj);
            obj = new Button("btn_dept02", "absolute", "74", "4", "22", "21", null, null, this.div_work.div_dept02);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.div_dept02.addChild(obj.name, obj);
            obj = new Edit("edt_deptNm02", "absolute", "101", "4", null, "21", "3", null, this.div_work.div_dept02);
            obj.set_taborder("8");
            this.div_work.div_dept02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "39.86%", "0", null, "30", "30.07%", null, this.div_work);
            obj.set_taborder("17");
            obj.set_text("2순위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "9.89%", "207", null, "350", "60.04%", null, this.div_work);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "9.89%", "58", null, "150", "60.04%", null, this.div_work);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.addChild(obj.name, obj);
            obj = new Div("div_dept01", "absolute", "9.89%", "29", null, "30", "60.04%", null, this.div_work);
            obj.set_taborder("28");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #dee1e9ff");
            this.div_work.addChild(obj.name, obj);
            obj = new Edit("edt_deptCode01", "absolute", "3", "4", "93", "21", null, null, this.div_work.div_dept01);
            obj.set_taborder("6");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("6");
            this.div_work.div_dept01.addChild(obj.name, obj);
            obj = new Button("btn_dept01", "absolute", "74", "4", "22", "21", null, null, this.div_work.div_dept01);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.div_dept01.addChild(obj.name, obj);
            obj = new Edit("edt_deptNm01", "absolute", "101", "4", null, "21", "4", null, this.div_work.div_dept01);
            obj.set_taborder("8");
            this.div_work.div_dept01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "9.89%", "0", null, "30", "60.04%", null, this.div_work);
            obj.set_taborder("16");
            obj.set_text("1순위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "207", null, "350", "90.01%", null, this.div_work);
            obj.set_taborder("20");
            obj.set_text("지원동기");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "29", null, "30", "90.01%", null, this.div_work);
            obj.set_taborder("19");
            obj.set_text("지원부서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", null, "30", "90.01%", null, this.div_work);
            obj.set_taborder("15");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_MOTV1", "absolute", "10.18%", "210", null, "344", "60.33%", null, this.div_work);
            obj.set_taborder("9");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1024");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_MOTV00", "absolute", "40.25%", "210", null, "344", "30.46%", null, this.div_work);
            obj.set_taborder("10");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1024");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_MOTV02", "absolute", "70.22%", "210", null, "344", "0.58%", null, this.div_work);
            obj.set_taborder("11");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1024");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_DTY_NM1", "absolute", "10.18%", "61", null, "144", "60.33%", null, this.div_work);
            obj.set_taborder("6");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("255");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_DTY_NM2", "absolute", "40.25%", "61", null, "144", "30.46%", null, this.div_work);
            obj.set_taborder("7");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("255");
            this.div_work.addChild(obj.name, obj);
            obj = new TextArea("txt_DTY_NM3", "absolute", "70.22%", "61", null, "144", "0.58%", null, this.div_work);
            obj.set_taborder("8");
            obj.set_wordwrap("english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("255");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0%", "58", null, "150", "90.01%", null, this.div_work);
            obj.set_taborder("21");
            obj.set_text("지원직무");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#00000019");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "60", "20", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "80", "5", "68", "22", null, null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_max("2999");
            obj.set_min("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_SE", "absolute", "163", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "208", "5", "116", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_odrSe");
            obj.style.set_background("#f0f0f0ff");
            obj.set_index("-1");
            obj = new Static("sta_STDR_DE01", "absolute", null, "6", "50", "20", "241", null, this.div_SearchArea);
            obj.set_taborder("4");
            obj.set_text("지원자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_SPORT_MANNO", "absolute", null, "5", "80", "22", "156", null, this.div_SearchArea);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_SPORT_MANNM", "absolute", null, "5", "142", "22", "9", null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "43", null, "21", "79.98%", null, this);
            obj.set_taborder("39");
            obj.set_text("직무 지원내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0%", "62", null, "5", "51.75%", null, this);
            obj.set_taborder("40");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 310, 30, this.div_work.div_dept03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #dee1e9ff");

            	}
            );
            this.div_work.div_dept03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 310, 30, this.div_work.div_dept02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #dee1e9ff");

            	}
            );
            this.div_work.div_dept02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 310, 30, this.div_work.div_dept01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #dee1e9ff");

            	}
            );
            this.div_work.div_dept01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 666, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_background("#00000000");
            		p.set_scrollbars("none");
            		p.getSetter("titletext").set("직무지원 신청");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 33, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SearchArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("직무지원 신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item42","div_work.div_dept01.edt_deptCode01","value","DS_DTY_R_DTL","D01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_work.div_dept01.edt_deptNm01","value","DS_DTY_R_DTL","DEPT_NM01");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("item24","div_work.txt_MOTV1","value","DS_DTY_R_DTL","M01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_work.edt_DEPT1","value","DS_DTY_R_DTL","D01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_work.edt_DEPT2","value","DS_DTY_R_DTL","D02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_work.edt_DEPT3","value","DS_DTY_R_DTL","D03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_work.txt_MOTV00","value","DS_DTY_R_DTL","M02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_work.txt_MOTV02","value","DS_DTY_R_DTL","M03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_SearchArea.spn_YEAR","value","DS_COND","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_SearchArea.cmb_ODR_SE","value","DS_COND","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_SearchArea.edt_SPORT_MANNO","value","DS_COND","SPORT_MAN_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","HRM010406.txt_MOTV1","value","DS_DTY_R_DTL","M01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","HRM010406.txt_MOTV00","value","DS_DTY_R_DTL","M02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","HRM010406.txt_MOTV02","value","DS_DTY_R_DTL","M03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","HRM010406.txt_DTY_NM1","value","DS_DTY_R_DTL","W01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","HRM010406.txt_DTY_NM2","value","DS_DTY_R_DTL","W02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","HRM010406.txt_DTY_NM3","value","DS_DTY_R_DTL","W03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_work.txt_DTY_NM1","value","DS_DTY_R_DTL","W01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_work.txt_DTY_NM2","value","DS_DTY_R_DTL","W02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_work.txt_DTY_NM3","value","DS_DTY_R_DTL","W03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_work.div_dept02.edt_deptCode02","value","DS_DTY_R_DTL","D02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_work.div_dept03.edt_deptCode03","value","DS_DTY_R_DTL","D03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_work.div_dept02.edt_deptNm02","value","DS_DTY_R_DTL","DEPT_NM02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_work.div_dept03.edt_deptNm03","value","DS_DTY_R_DTL","DEPT_NM03");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010406.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010406.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010406.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010406.xfdl
         * 화면명   : 직무지원 신청
         * 화면설명 : 직원별로 본인의 직무지원을 신청한다.
         * 작성일   : 2015.06.24
         * 작성자   : 박병일
         * 수정이력 :  
         ***********************************************************************  
         *     수정일     작성자   내용
         ***********************************************************************
         *    
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
        this.nRowPos = 0;  
        var sFlag = "";
        var cdChgColumn = "";
        var nmChgColumn = "";
        var closAtFlag = "";	//마감구분 플래그

         /***********************************************************************
         * 메뉴 변수 선언부
         ************************************************************************/
        // this.strMenuId ="";

        
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010406_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010406_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load(차수콤보)
        	this.fn_loadCombo();
        	
        	// 검색조건 컴포넌트 초기값 부여(현재적용 년도/차수)
        	this.fn_init_current();	
        	
        	this.div_SearchArea.edt_SPORT_MANNO.set_value(this.fn_getEmpno());  // 현.접속자 사번
        	this.div_SearchArea.edt_SPORT_MANNM.set_value(this.fn_getEmpnm());  // 현.접속자 성명	
        }

        
        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initForm();
         */ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        }

        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	// 조건에 사용되는 Dataset 초기화
        	this.gfn_initCondDs(this, this.div_search);
        }

        //----------------------------------
        // Get Current 평가차수
        //----------------------------------
        this.fn_init_current = function()
        {
        	this.ds_curInfo.clearData();
        	this.fn_transaction("selectCurStdrOdrInfo");
        }

        //-----------------------------------------------------
        // 화면의 Combo 에 데이터를 불러온다. (공통코드)
        //-----------------------------------------------------
         this.fn_loadCombo = function ()
        {
            // 평가차수
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "fn_callbackAfterLoad");    
        }

        //----------------------------------------- 
        // 공통 Callback 함수에서 호출할 함수 
        //-----------------------------------------  
        this.fn_callbackAfterLoad = function ()
        {
        	this.fn_search();
        }

        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search= function()
        {
        	this.DS_DTY_R_DTL.clearData();
        	this.fn_transaction("mainSearchList");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	
        	if (sFlag != "D"){
        		this.fn_DsDummy();
        	}

        	if( sFlag != "D" && Ex.util.isUpdated(this.DS_DTY_R_DTL) ){	
        		if(this.gfn_message("confirm.저장.여부"))	{
        		    nRowPos = this.DS_DTY_R_DTL.rowposition;
        			this.fn_transaction("mainCU");
        		}
        	} else if( sFlag == "D" ){
        		if(this.gfn_message("confirm.저장.여부"))	{
        			this.fn_transaction("mainD");
        		}		
        	}else{
        		return;
        	}
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
        	
        		case "mainSearchList": // ListMst 불러오기
        			var sController   	= "hsco/mis/hrm/HRM010406/mainSearchList.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_DTY_R_DTL=output1";
        			break;
        			
        		case "mainCU": // 신규,수정  
        			var sController   	= "hsco/mis/hrm/HRM010406/mainCU.do";
        	        var sInDatasets   	= "input1=DS_DTY_S_DTL";		
        			var sOutDatasets  	= "";
        			break;
        			
        		case "mainD": // 삭제
        			var sController   	= "hsco/mis/hrm/HRM010406/mainD.do";
        	        var sInDatasets   	= "input1=DS_COND"; 			
        			var sOutDatasets  	= "";
        			break;
        				
        		case "selectCurStdrOdrInfo": // GET 현재 공모차수(기준년도&차수)
        			var sController   	= "hsco/mis/hrm/HRMCommon/selectCurStdrOdrInfo.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_curInfo=output1";
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
        	}
        	
        	if (nErrorCode == '0'){
        		switch (strSvcId) {
        			case "mainSearchList": // ListInfo 불러오기
        				if(this.DS_DTY_R_DTL.getRowCount() == 0) {
        					this.fn_insert();
        				}
        				break;
        						
        			case "mainCU": // 신규,수정
        			    this.fn_search();
        				break;
        				
        			case "mainD": // 삭제
        				this.fn_search();			
        				break;
        			
        			case "selectCurStdrOdrInfo": // GET 현재 공모차수
        				this.fn_setCurInfo("stdrYear");
        				this.fn_setCurInfo("odrSe");  //TO-DO 확장보완		
        				this.fn_setCurInfo("closAt"); //마감구분
        				
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
        //----------
        // 신규
        //----------
        this.fn_insert = function()
        {
        	//공모마감 체크
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	
        	if(this.DS_DTY_R_DTL.getRowCount() > 0) {
        		this.gfn_message("info.처리불가", "1건이상 추가할 수 없습니다.");
        		return false;
        	}
        	
        	// 신규 추가조건 체크	
        	this.DS_DTY_R_DTL.clearData();
        	var nRow = this.DS_DTY_R_DTL.addRow();
        	// Flag Set			
        	sFlag = "I";
        }

        //---------
        // 삭제
        //---------
        this.fn_delete= function()
        {
        	//공모마감 체크
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	
        	var nCurRow  = this.DS_DTY_R_DTL.rowposition;
        	this.DS_DTY_R_DTL.deleteRow(nCurRow);
        	sFlag = "D";
        }

        //---------
        // 취소
        //---------
        this.fn_cancel = function ()
        {
        	this.DS_DTY_R_DTL.reset();			//DATASET ROLLBACK
        	this.DS_DTY_R_DTL.applyChange();	//ROWTYPE_NORMAL("normal")
        	sFlag = "";
        	return;	
        }

        //---------
        // 인쇄
        //---------
        this.fn_print = function ()
        {
        	system.print(this.div_work.DS_PSNCPA_DTL);
        }
        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        //---------------------------------
        // save 직전 변환처리
        //---------------------------------
        this.fn_DsDummy = function ()
        {
        	this.DS_DTY_S_DTL.clearData();	
        	
        	for ( var i = 1 ; i <= 3 ; i++ )
        	{
        	    var nRow = this.DS_DTY_S_DTL.addRow();
        		var sColInfo = "SPORT_DEPT_CODE=D0" + i.toString() + ", SPORT_DTY_NM=W0" + i.toString()	+  ", SPORT_MOTV=M0" + i.toString();
        		// Key Set		
        		this.DS_DTY_S_DTL.setColumn(nRow, "STDR_YEAR", this.DS_COND.getColumn(0,"STDR_YEAR"));
        		this.DS_DTY_S_DTL.setColumn(nRow, "ODR_SE", this.DS_COND.getColumn(0,"ODR_SE"));		
        		this.DS_DTY_S_DTL.setColumn(nRow, "SPORT_RANK", i);
        		this.DS_DTY_S_DTL.setColumn(nRow, "SPORT_MAN_EMPNO", this.DS_COND.getColumn(0,"SPORT_MAN_EMPNO"));
                // Contents Set					
        		this.DS_DTY_S_DTL.copyRow(nRow, this.DS_DTY_R_DTL, 0, sColInfo );
        	}
        }

        
        this.DS_DTY_R_DTL_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "D01" || e.columnid == "D02" || e.columnid == "D03") {
        		var d01    = e.columnid=="D01" ? e.newvalue : obj.getColumn(e.row, "D01");
        		var d02    = e.columnid=="D02" ? e.newvalue : obj.getColumn(e.row, "D02");
        		var d03    = e.columnid=="D03" ? e.newvalue : obj.getColumn(e.row, "D03");
        		var deptNm = e.columnid=="D01" ? "DEPT_NM01" : (e.columnid=="D02" ? "DEPT_NM02" : (e.columnid=="D03" ? "DEPT_NM03" : ""));
        		if( (d01==d02&&!this.comUtils.isNull(d01)&&!this.comUtils.isNull(d02)) || (d01==d03&&!this.comUtils.isNull(d01)&&!this.comUtils.isNull(d03)) || (d02==d03&&!this.comUtils.isNull(d02)&&!this.comUtils.isNull(d03)) ) {
        			this.gfn_message("info.처리불가", "다른 부서를 선택해주시기 바랍니다.");
        			cdChgColumn = e.columnid;
        			nmChgColumn = deptNm;
        			if(e.columnid == "D01"){
        			    this.alert("D01");
        				this.div_work.div_dept01.edt_deptNm01.set_value("");			
        			}else if(e.columnid == "D02"){
        				this.div_work.div_dept02.edt_deptNm02.set_value("");			
        			}else if(e.columnid == "D03"){
        				this.div_work.div_dept03.edt_deptNm03.set_value("");
        			}			
        		}
        	}
        	
        	if(e.columnid == cdChgColumn) {
        		cdChgColumn = "";
        		return false;
        	}
        	
        	if(e.columnid == nmChgColumn) {
        		nmChgColumn = "";
        		return false;
        	}
        }

        //-------------------------------------------------------
        // KEY 검색조건 컴포넌트 초기값(현채차수) 부여
        //-------------------------------------------------------
        this.fn_setCurInfo = function(strComp)
        {
        	if (this.ds_curInfo.rowcount ==  1 ){
        		if (strComp == "stdrYear"){
        			var sCurStdrYear = this.ds_curInfo.getColumn(0,"STDR_YEAR");
        			this.div_SearchArea.spn_YEAR.set_value(sCurStdrYear);
        		}else if (strComp == "odrSe"){
        			var sCurOdrSe 	= this.ds_curInfo.getColumn(0,"ODR_SE");
        			this.div_SearchArea.cmb_ODR_SE.set_value(sCurOdrSe);
        		}else if(strComp == "closAt"){
        			closAtFlag = this.ds_curInfo.getColumn(0,"CLOS_AT");
        		}
        	}
        }
        //----------------------------
        // 예정부서 검색팝업 호출
        //----------------------------
        this.div_work_div_dept01_btn_dept01_onclick = function(obj,e)
        {
        	var deptCode = "";
        	var deptNm   = "";
        	var popId    = "";
        	
        	if(obj.name=='btn_dept01'){	//1지망
        		deptCode = this.div_work.div_dept01.edt_deptCode01.value;
        		deptNm   = this.div_work.div_dept01.edt_deptNm01.value;
        		popId    = "deptPop01";
        	}else if(obj.name=='btn_dept02'){	//2지망
        		deptCode = this.div_work.div_dept02.edt_deptCode02.value;
        		deptNm   = this.div_work.div_dept02.edt_deptNm02.value;
        		popId    = "deptPop02";
        	}else if(obj.name=='btn_dept03'){	//3지망
        		deptCode = this.div_work.div_dept03.edt_deptCode03.value;
        		deptNm   = this.div_work.div_dept03.edt_deptNm03.value;
        		popId    = "deptPop03";
        	}

        	var parm = {
        		 arg_0      : this
        		,deptCode   : ""
        		,deptNm     : ""
        		,preAt      : "1"  //add. 예정부서 : 1 일반시행부서 : 0
        	};
        	this.gfn_popup(popId, 400, 400, "부서선택", parm, "com::deptCode_P01.xfdl", "fn_popupCallBack", true);	
        	
        }
        //-------------------------------
        // 예정부서 검색팝업 CallBack
        //-------------------------------
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {
        	this.ds_deptCode.clearData();
        	nRowCnt = this.ds_deptCode.loadXML(sReturn);
        	
        	if(!nRowCnt){
        		this.ds_deptCode.addRow();
        	}
        	
        	if(sPopupId == "deptPop01") {	//1지망 부서
        		this.div_work.div_dept01.edt_deptCode01.set_value(this.ds_deptCode.getColumn(0, "DEPT_CODE"));
        		this.div_work.div_dept01.edt_deptNm01.set_value(this.ds_deptCode.getColumn(0, "DEPT_NM"));
        	}else if(sPopupId == "deptPop02"){	//2지망 부서
        		this.div_work.div_dept02.edt_deptCode02.set_value(this.ds_deptCode.getColumn(0, "DEPT_CODE"));
        		this.div_work.div_dept02.edt_deptNm02.set_value(this.ds_deptCode.getColumn(0, "DEPT_NM"));
        	}else if(sPopupId == "deptPop03"){ 	//3지망 부서
        		this.div_work.div_dept03.edt_deptCode03.set_value(this.ds_deptCode.getColumn(0, "DEPT_CODE"));
        		this.div_work.div_dept03.edt_deptNm03.set_value(this.ds_deptCode.getColumn(0, "DEPT_NM"));
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DS_DTY_R_DTL.addEventHandler("cancolumnchange", this.DS_DTY_R_DTL_cancolumnchange, this);
            this.addEventHandler("oninit", this.HRM010406_oninit, this);
            this.addEventHandler("onload", this.HRM010406_onload, this);
            this.div_work.div_dept03.btn_dept03.addEventHandler("onclick", this.div_work_div_dept01_btn_dept01_onclick, this);
            this.div_work.div_dept02.btn_dept02.addEventHandler("onclick", this.div_work_div_dept01_btn_dept01_onclick, this);
            this.div_work.div_dept01.btn_dept01.addEventHandler("onclick", this.div_work_div_dept01_btn_dept01_onclick, this);
            this.div_work.txt_MOTV00.addEventHandler("oneditclick", this.div_work_txt_MOTV00_oneditclick, this);

        };

        this.loadIncludeScript("HRM010406.xfdl");

       
    };
}
)();
