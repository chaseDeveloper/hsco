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
                this.set_name("HRM010408");
                this.set_classname("");
                this.set_titletext("직무추천 등록");
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
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"D01\" type=\"STRING\" size=\"256\"/><Column id=\"D02\" type=\"STRING\" size=\"256\"/><Column id=\"D03\" type=\"STRING\" size=\"256\"/><Column id=\"M01\" type=\"STRING\" size=\"1024\"/><Column id=\"M02\" type=\"STRING\" size=\"1024\"/><Column id=\"M03\" type=\"STRING\" size=\"1024\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_LIST1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR_APPN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REC_RANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_LIST2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR_APPN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"REC_RANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_LIST3", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR_APPN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DR_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"INX\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A4\" type=\"STRING\" size=\"256\"/><Column id=\"A5\" type=\"STRING\" size=\"256\"/><Column id=\"A6\" type=\"STRING\" size=\"256\"/><Column id=\"A7\" type=\"STRING\" size=\"256\"/><Column id=\"B1\" type=\"STRING\" size=\"256\"/><Column id=\"B2\" type=\"STRING\" size=\"256\"/><Column id=\"B3\" type=\"STRING\" size=\"256\"/><Column id=\"B4\" type=\"STRING\" size=\"256\"/><Column id=\"B5\" type=\"STRING\" size=\"256\"/><Column id=\"B6\" type=\"STRING\" size=\"256\"/><Column id=\"B7\" type=\"STRING\" size=\"256\"/><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm329", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHOISE_RT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("DS_SPORT_RANK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">1지망</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">2지망</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">3지망</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_WORK_RATIO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "68", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd01", "absolute", "0", "30", "437", "303", null, null, this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_DTY_LIST1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직무\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:HR_CLSF_SE_NM\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" text=\"bind:SPORT_DTY_NM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grd02", "absolute", "515", "0", null, "334", "0", null, this.div_work);
            obj.set_taborder("3");
            obj.set_binddataset("DS_DTY_LIST2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"지망구분\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"직무\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:SPORT_RANK\" combodataset=\"DS_SPORT_RANK\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" text=\"bind:HR_CLSF_SE_NM\"/><Cell col=\"4\" text=\"bind:EMPNM\"/><Cell col=\"5\" text=\"bind:SPORT_DTY_NM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "333", null, "10", "2.62%", null, this.div_work);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "343", null, "21", "80.02%", null, this.div_work);
            obj.set_taborder("5");
            obj.set_text("직무추천 집계");
            obj.set_cssclass("sta_WF_Title02");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "362", null, "5", "51.79%", null, this.div_work);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grdList2", "absolute", "0", "369", null, null, "0", "0", this.div_work);
            obj.set_taborder("8");
            obj.set_binddataset("DS_DR_LIST");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"136\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"합계\"/><Cell col=\"3\" colspan=\"7\" text=\"업무직\"/><Cell col=\"10\" colspan=\"7\" text=\"기술직\"/><Cell col=\"17\" colspan=\"7\" text=\"기능직\"/><Cell row=\"1\" col=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"4\" text=\"1급\"/><Cell row=\"1\" col=\"5\" text=\"2급\"/><Cell row=\"1\" col=\"6\" text=\"3급\"/><Cell row=\"1\" col=\"7\" text=\"4급\"/><Cell row=\"1\" col=\"8\" text=\"5급\"/><Cell row=\"1\" col=\"9\" text=\"6급\"/><Cell row=\"1\" col=\"10\" text=\"소계\"/><Cell row=\"1\" col=\"11\" text=\"1급\"/><Cell row=\"1\" col=\"12\" text=\"2급\"/><Cell row=\"1\" col=\"13\" text=\"3급\"/><Cell row=\"1\" col=\"14\" text=\"4급\"/><Cell row=\"1\" col=\"15\" text=\"5급\"/><Cell row=\"1\" col=\"16\" text=\"6급\"/><Cell row=\"1\" col=\"17\" text=\"소계\"/><Cell row=\"1\" col=\"18\" text=\"1급\"/><Cell row=\"1\" col=\"19\" text=\"2급\"/><Cell row=\"1\" col=\"20\" text=\"3급\"/><Cell row=\"1\" col=\"21\" text=\"4급\"/><Cell row=\"1\" col=\"22\" text=\"5급\"/><Cell row=\"1\" col=\"23\" text=\"6급\"/></Band><Band id=\"body\"><Cell style=\"background2: ;\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"background2: ;\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');font:bold 9 Dotum;\" text=\"bind:TOT\"/><Cell col=\"3\" celltype=\"none\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');font:bold 9 Dotum;\" text=\"bind:A7\"/><Cell col=\"4\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A1\"/><Cell col=\"5\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A2\"/><Cell col=\"6\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A3\"/><Cell col=\"7\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A4\"/><Cell col=\"8\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A5\"/><Cell col=\"9\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:A6\"/><Cell col=\"10\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');font:bold 9 Dotum;\" text=\"bind:B7\"/><Cell col=\"11\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B1\"/><Cell col=\"12\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B2\"/><Cell col=\"13\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B3\"/><Cell col=\"14\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B4\"/><Cell col=\"15\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B5\"/><Cell col=\"16\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:B6\"/><Cell col=\"17\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');font:bold 9 Dotum;\" text=\"bind:C7\"/><Cell col=\"18\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C1\"/><Cell col=\"19\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C2\"/><Cell col=\"20\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C3\"/><Cell col=\"21\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C4\"/><Cell col=\"22\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C5\"/><Cell col=\"23\" style=\"background:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');background2:EXPR( INX == '99'  ? &quot;#adc6dc&quot; :  '');\" text=\"bind:C6\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("Button57", "absolute", "467", "105", "21", "55", null, null, this.div_work);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("Button58", "absolute", "467", "175", "21", "55", null, null, this.div_work);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "100", "27", null, null, this.div_work);
            obj.set_taborder("12");
            obj.set_text("지망구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "99", "0", "120", "27", null, null, this.div_work);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_border("1 solid #c9ced9ff");
            obj.style.set_color("#5d6a7bff");
            this.div_work.addChild(obj.name, obj);
            obj = new Combo("cmb_sportRank", "absolute", "102", "3", "114", "21", null, null, this.div_work);
            this.div_work.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.style.set_font("bold 9 Gulim");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_value("1");
            obj.set_text("1지망");
            obj.set_innerdataset("@DS_SPORT_RANK");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "317", "0", "120", "27", null, null, this.div_work);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_border("1 solid #c9ced9ff");
            obj.style.set_color("#5d6a7bff");
            this.div_work.addChild(obj.name, obj);
            obj = new Combo("cmb_workRt", "absolute", "320", "3", "114", "21", null, null, this.div_work);
            this.div_work.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_font("bold 9 Gulim");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@DS_WORK_RATIO");
            obj = new Static("Static05", "absolute", "218", "0", "100", "27", null, null, this.div_work);
            obj.set_taborder("17");
            obj.set_text("근무비율");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0%", "0", null, "33", "2.69%", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNM", "absolute", null, "5", "147", "22", "8", null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNO", "absolute", null, "5", "80", "22", "160", null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE00", "absolute", null, "6", "50", "20", "245", null, this.div_SearchArea);
            obj.set_taborder("4");
            obj.set_text("추천자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "216", "5", "122", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_index("-1");
            obj = new Static("sta_SE", "absolute", "171", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "84", "5", "72", "22", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_max("2999");
            obj.set_min("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "64", "20", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_DEPT_CODE", "absolute", null, "4", "144", "22", "337", null, this.div_SearchArea);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.6%", null, this);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "43", null, "21", "79.98%", null, this);
            obj.set_taborder("41");
            obj.set_text("부서장 직무(직원)추천 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0%", "62", null, "5", "2.6%", null, this);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "516", "43", "212", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("직원 직무지원 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "94", null, "5", "58%", null, this);
            obj.set_taborder("44");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1056, 750, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_background("#00000000");
            		p.set_scrollbars("none");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1022, 41, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
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
            		p.set_titletext("직무추천 등록");

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
            obj = new BindItem("item24","div_SearchArea.spn_YEAR","value","DS_COND","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_SearchArea.cmb_ODR_SE","value","DS_COND","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_SearchArea.edt_DEPT_CODE","value","DS_COND","SPORT_DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_work.cmb_sportRank","value","ds_curOdrInfo","CUR_ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_work.cmb_workRt","value","ds_curOdrInfo","CUR_ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010408.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010408.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010408.xfdl", function() {
        /***********************************************************************
        * 화면ID   : HRM010408.xfdl
        * 화면명   : 직무추천등록[부서장]
        * 화면설명 : 부서별 지원자 명단을 조회하여 직무지원추천 내역을 등록한다.
        * 작성일   : 2015.07.02
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
        this.sRank = "";
        var closAtFlag = "";	//마감구분 플래그

         /***********************************************************************
         * 메뉴 변수 선언부
         ************************************************************************/

        
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010408_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010408_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load(차수콤보)
        	this.fn_loadCombo();
        	
        	// 검색조건 컴포넌트 초기값 부여(현재적용 년도/차수)
        	this.fn_init_current();	
        	
        	this.div_SearchArea.edt_RECOMEND_MANNO.set_value(this.fn_getEmpno());  // 현.접속자 사번
        	this.div_SearchArea.edt_RECOMEND_MANNM.set_value(this.fn_getEmpnm());  // 현.접속자 성명
        	this.div_SearchArea.edt_DEPT_CODE.set_value(this.gfn_getDeptId());  // 현.접속자 부서코드		
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
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "fn_callbackAfterLoad('odrSe')");    
        	
        	// 근무비율
            this.gfn_loadCodeComboWithDs(this, "", this.DS_WORK_RATIO, "HRM329", "", "Y", " ", "N", "fn_callbackAfterLoad('work')");    
        }

        //----------------------------------------- 
        // 공통 Callback 함수에서 호출할 함수 
        //-----------------------------------------  
        this.fn_callbackAfterLoad = function (str)
        {
        	if(str == 'odrSe')
        		this.fn_search();
        	else 
        		this.div_work.cmb_workRt.set_value('1');	//근무비율 기본 1지망으로 set
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
        this.fn_search = function()
        {
        	this.DS_COND.setColumn(0, "SPORT_RANK", this.div_work.cmb_sportRank.value);
        	//this.ds_hrm329.clearData();
        	this.DS_DTY_LIST1.clearData();
        	this.DS_DTY_LIST2.clearData();
        	//this.DS_DTY_LIST3.clearData();
        	
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
        	
        	if (!this.comUtils.isDatasetUpdated(this.DS_DTY_LIST1) && !this.comUtils.isDatasetUpdated(this.DS_DTY_LIST2)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("mainCUD");
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
        	
        // 		case "mainSearchList":
        // 			var sController   	= "hsco/mis/hrm/HRM010408/mainSearchList.do";
        // 	        var sInDatasets   	= "input1=DS_COND";
        // 			var sOutDatasets  	= "ds_hrm329=output0 DS_DTY_LIST1=output1 DS_DTY_LIST2=output2 DS_DTY_LIST3=output3";
        // 			break;
        		case "mainSearchList":
        			var sController   	= "hsco/mis/hrm/HRM010408/mainSearchList2.do";
         	        var sInDatasets   	= "input1=DS_COND";
         			var sOutDatasets  	= "DS_DTY_LIST1=output1 DS_DTY_LIST2=output2";
        			break;
        		case "mainCUD":
        			var sController   	= "hsco/mis/hrm/HRM010408/mainCUD2.do";
        			var sInDatasets   	= "input1=DS_DTY_LIST1:U input2=DS_DTY_LIST2:U";
        			var sOutDatasets  	= "";
        			break;
        		
        		case "mainSearchAllList": // List 집계
        			var sController   	= "hsco/mis/hrm/HRM010409T01/mainSearchList.do";  //--> HRM010409
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_DR_LIST=output1";
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
        			case "mainSearchList":
        				this.DS_DR_LIST.clearData();
        				this.fn_transaction("mainSearchAllList");
        				break;
        			case "mainCUD":
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

        
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        this.fn_getChoiseRt = function(code)
        {
        	var findRow  = this.ds_hrm329.findRow("CODE", code);
        	var choiseRt = this.ds_hrm329.getColumn(findRow, "CHOISE_RT");
        	if(this.comUtils.isNull(choiseRt)) {
        		choiseRt = "0";
        	}
        	var rtnStr   = " (근무비율 : " + choiseRt + "%)"
        	return rtnStr;
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

        /***********************************************************************************
         * 체크된 부서장추천내역을 직원지원내역으로 이동
        ************************************************************************************/
        this.div_work_Button58_onclick = function(obj,e)
        {
        	var chkFindRow = this.DS_DTY_LIST1.findRow("CHK", "1");
         	var rowCnt = this.DS_DTY_LIST1.getRowCount();
         	
        	if(chkFindRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        			return;
        	}
        	
        	//이동/삭제 처리를 위해 대상 그리드의 체크된 목록을 데이터셋에 따로 생성
        	var dsRtn = new Dataset(); 
        	dsRtn = this.gfn_getCheckData(this.div_work.grd01, "CHK");
        	
        	//직원 직무 내역으로 이동
        	for(var row = 0; row < rowCnt; row++) {
        		var strVal = dsRtn.getColumn(row, "EMPNO");
        		var findRow = this.DS_DTY_LIST1.findRow("EMPNO", strVal);
         		
          		//체크된 행(새로 생성된 데이터셋에서 직원번호로 찾음)
          		if(findRow != -1){
        			var nRow = this.DS_DTY_LIST2.addRow();
        			
        			this.DS_DTY_LIST2.setColumn(nRow, "STDR_YEAR", this.DS_DTY_LIST1.getColumn(findRow, "STDR_YEAR"));
        			this.DS_DTY_LIST2.setColumn(nRow, "ODR_SE", this.DS_DTY_LIST1.getColumn(findRow, "ODR_SE"));
        			this.DS_DTY_LIST2.setColumn(nRow, "SPORT_SE", this.DS_DTY_LIST1.getColumn(findRow, "SPORT_SE"));
        			this.DS_DTY_LIST2.setColumn(nRow, "SPORT_RANK", this.DS_DTY_LIST1.getColumn(findRow, "SPORT_RANK"));
        			this.DS_DTY_LIST2.setColumn(nRow, "EMPNO", this.DS_DTY_LIST1.getColumn(findRow, "EMPNO"));
        			this.DS_DTY_LIST2.setColumn(nRow, "EMPNM", this.DS_DTY_LIST1.getColumn(findRow, "EMPNM"));
        			this.DS_DTY_LIST2.setColumn(nRow, "SPORT_DTY_NM", this.DS_DTY_LIST1.getColumn(findRow, "SPORT_DTY_NM"));
        			this.DS_DTY_LIST2.setColumn(nRow, "HR_CLSF_SE_NM", this.DS_DTY_LIST1.getColumn(findRow, "HR_CLSF_SE_NM"));
         		}
         		
         		//부서장 추천으로 이동 후 직원내역에서 삭제
          		var empNo = dsRtn.getColumn(row, "EMPNO");
         		var nRow1 = this.DS_DTY_LIST1.findRow("EMPNO" ,empNo);
        		this.DS_DTY_LIST1.deleteRow(nRow1);
        	}
        }

        /***********************************************************************************
         * 체크된 직원지원내역을 부서장추천내역으로 이동
        ************************************************************************************/
        this.div_work_Button57_onclick = function(obj,e)
        {
         	var chkFindRow = this.DS_DTY_LIST2.findRow("CHK", "1");
         	var rowCnt = this.DS_DTY_LIST2.getRowCount();
         	
        	if(chkFindRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        			return;
        	}
        	
        	//이동/삭제 처리를 위해 대상 그리드의 체크된 목록을 데이터셋에 따로 생성
        	var dsRtn = new Dataset(); 
        	dsRtn = this.gfn_getCheckData(this.div_work.grd02, "CHK");
        	
        	//부서장 추천으로 이동
        	for(var row = 0; row < rowCnt; row++) {
        		var strVal = dsRtn.getColumn(row, "EMPNO");
        		var findRow = this.DS_DTY_LIST2.findRow("EMPNO", strVal);
         		
          		//체크된 행(새로 생성된 데이터셋에서 직원번호로 찾음)
          		if(findRow != -1){
        			var nRow = this.DS_DTY_LIST1.addRow();
        			
        			this.DS_DTY_LIST1.setColumn(nRow, "STDR_YEAR", this.DS_DTY_LIST2.getColumn(findRow, "STDR_YEAR"));
        			this.DS_DTY_LIST1.setColumn(nRow, "ODR_SE", this.DS_DTY_LIST2.getColumn(findRow, "ODR_SE"));
        			this.DS_DTY_LIST1.setColumn(nRow, "SPORT_SE", this.DS_DTY_LIST2.getColumn(findRow, "SPORT_SE"));
        			this.DS_DTY_LIST1.setColumn(nRow, "SPORT_RANK", this.DS_DTY_LIST2.getColumn(findRow, "SPORT_RANK"));
        			this.DS_DTY_LIST1.setColumn(nRow, "SPORT_DEPT_CODE", this.DS_DTY_LIST2.getColumn(findRow, "SPORT_DEPT_CODE"));
        			this.DS_DTY_LIST1.setColumn(nRow, "EMPNO", this.DS_DTY_LIST2.getColumn(findRow, "EMPNO"));
        			this.DS_DTY_LIST1.setColumn(nRow, "EMPNM", this.DS_DTY_LIST2.getColumn(findRow, "EMPNM"));
        			this.DS_DTY_LIST1.setColumn(nRow, "SPORT_DTY_NM", this.DS_DTY_LIST2.getColumn(findRow, "SPORT_DTY_NM"));
        			this.DS_DTY_LIST1.setColumn(nRow, "HR_CLSF_SE_NM", this.DS_DTY_LIST2.getColumn(findRow, "HR_CLSF_SE_NM"));
        			this.DS_DTY_LIST1.setColumn(nRow, "REC_RANK", this.div_work.cmb_sportRank.value);
         		}
         		
         		//부서장 추천으로 이동 후 직원내역에서 삭제
          		var empNo = dsRtn.getColumn(row, "EMPNO");
         		var nRow1 = this.DS_DTY_LIST2.findRow("EMPNO" ,empNo);
        		this.DS_DTY_LIST2.deleteRow(nRow1);
        	}
        }

        /***********************************************************************************
         * 지망구분 콤보 내용 변경될 때
        ************************************************************************************/
        this.div_work_cmb_curOdr_onitemchanged = function(obj,e)
        {
        	this.div_work.cmb_workRt.set_value(obj.value);
        	this.fn_search();
        }

        
        /**********************************************************************
        * 그리드 영역 
        ***********************************************************************/
        /*
         * 함수명  	: div_work_grd_onheadclick
         * 설명 		: 그리드 전체파일선택 ON/OFF 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_grd_onheadclick(obj,e);
         */
        this.div_work_grd_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        /*
         * 함수명  	: div_work_grd_oncellclick
         * 설명 		: 그리드 Body의 체크 버튼이 눌러졌을 때, Head 부분의 체크 버튼을 꺼 줌.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_grd_oncellclick(obj,e);
         */
        this.div_work_grd_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM010408_oninit, this);
            this.addEventHandler("onload", this.HRM010408_onload, this);
            this.div_work.grd01.addEventHandler("onheadclick", this.div_work_grd_onheadclick, this);
            this.div_work.grd01.addEventHandler("oncellclick", this.div_work_grd_oncellclick, this);
            this.div_work.grd02.addEventHandler("oncellclick", this.div_work_grd_oncellclick, this);
            this.div_work.grd02.addEventHandler("onheadclick", this.div_work_grd_onheadclick, this);
            this.div_work.Button57.addEventHandler("onclick", this.div_work_Button57_onclick, this);
            this.div_work.Button58.addEventHandler("onclick", this.div_work_Button58_onclick, this);
            this.div_work.cmb_sportRank.addEventHandler("onitemchanged", this.div_work_cmb_curOdr_onitemchanged, this);

        };

        this.loadIncludeScript("HRM010408.xfdl");

       
    };
}
)();
