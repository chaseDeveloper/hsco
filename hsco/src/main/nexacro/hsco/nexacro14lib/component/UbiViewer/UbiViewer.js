if (!nexacro.UbiViewer) {

	var context = null;
	var callback_id = "";
	
	// ==============================================================================
	// nexacro.UbiViewer
	// ==============================================================================
	nexacro.UbiViewer = function(id, position, left, top, width, height, right, bottom, parent) {
		if (nexacro.Browser == "Runtime")
		{
			nexacro.Component.call(this, id, position , left, top, width, height, right, bottom, parent);
		} else {
			nexacro.Static.call(this, id, position, left, top, width, height, right, bottom, parent);
		}

		this.context = parent;
	    this._plugin_elem = null;

		this.divTarget = null;
		this.viewer = null;
		this.width = width;
		this.height = height;

		this.gatewayurl = "";
		this.resource = "";
		this.jrffile = "";
		this.masterfilename = "";
		this.resid = "";
		this.arg = '';

		this.scale = "100";
		this.toolbar = "true";
		this.timeout = "60000";
		this.key = '';

		this.ismultireport = "false";
		this.multicount = 1;
		this.reporttitle = '';
		this.sheetname = '';
		this.bgcolor = '#f3f3f3';
		this.bgimage = '';
		this.flicking = "false";

		this.direction = '';
		this.language = 'korean';
		this.isexportchartimage = "true";
		this.scrollpage = "true";

		this.designDataset = null;
		this.gridDataset = null;
		this.datasets = [];
		this.localdatasets = [];

		// ActiveX 사용을 위한 변수
		this.dataurl = "";
		this.reporturl = "";
		this.fileurl = "";
		this.datasource = "";
		this.isdeflater = "true";
		this.isbase64 = "true";
		this.isunicode = "false";
		this.utfdata = "false";
		this.exportfilename = "";
		this.excelsheetperpage = "false";
		this.excelsheetpermasterpage = "false";
		this.excelsheetperreport = "false";
		this.excelsheetperpagecount = "100";

//		this.callback_id = "";

		// HTML 뷰어에서만 사용
		this.isStreaming = false;

		this.excelExportLineItem = false;
		// 사용자 폰트
		this.fontElement = "";
		// 보이스아이 설정
		this.isvoiceye = false;
	};

	var _pUbiViewer = nexacro._createPrototype(nexacro.Static);
	nexacro.UbiViewer.prototype = _pUbiViewer;
	_pUbiViewer._type = "nexacroUbiViewer";
	_pUbiViewer._type_name = "UbiViewer";

	_pUbiViewer.set_gatewayurl = function(v) {
		this.gatewayurl = v;
	};
	_pUbiViewer.set_resource = function(v) {
		this.resource = v;
	};
	_pUbiViewer.set_jrffile = function(v) {
		this.jrffile = v;
	};
	_pUbiViewer.set_masterfilename = function(v) {
		this.masterfilename = "";
	};
	_pUbiViewer.set_resid = function(v) {
		this.resid = v;
	};
	_pUbiViewer.set_arg = function(v) {
		this.arg = v;
	};

	_pUbiViewer.set_scale = function(v) {
		this.scale = v;
	};
	_pUbiViewer.set_toolbar = function(v) {
		this.toolbar = v;
	};
	_pUbiViewer.set_timeout = function(v) {
		this.timeout = v;
	};
	_pUbiViewer.set_key = function(v) {
		this.key = v;
	};

	_pUbiViewer.set_ismultireport = function(v) {
		this.ismultireport = v;
	};
	_pUbiViewer.set_multicount = function(v) {
		this.multicount = v;
	};
	_pUbiViewer.set_reporttitle = function(v) {
		this.reporttitle = v;
	};
	_pUbiViewer.set_sheetname = function(v) {
		this.sheetname = v;
	};
	_pUbiViewer.set_bgcolor = function(v) {
		this.bgcolor = v;
	};
	_pUbiViewer.set_bgimage = function(v) {
		this.bgimage = v;
	};
	_pUbiViewer.set_flicking = function(v) {
		this.flicking = v;
	};

	_pUbiViewer.set_direction = function(v) {
		this.direction = v;
	};
	_pUbiViewer.set_language = function(v) {
		this.language = v;
	};
	_pUbiViewer.set_isexportchartimage = function(v) {
		this.isexportchartimage = v;
	};
	_pUbiViewer.set_excelExportLineItem = function(v) {
		this.excelExportLineItem = v;
	};
	_pUbiViewer.set_isStreaming = function(v) {
		this.isStreaming = v;
	};
	_pUbiViewer.set_userwidth = function(v) {
		this.userwidth = v;
	};
	_pUbiViewer.set_userheight = function(v) {
		this.userheight = v;
	};
	_pUbiViewer.set_scrollpage = function(v) {
		this.scrollpage = v;
	};

	// ActiveX용
	_pUbiViewer.set_dataurl = function(v) {
		this.dataurl = v;
	};
	_pUbiViewer.set_reporturl = function(v) {
		this.reporturl = v;
	};
	_pUbiViewer.set_datasource = function(v) {
		this.datasource = v;
	};
	_pUbiViewer.set_isdeflater = function(v) {
		this.isdeflater = v;
	};
	_pUbiViewer.set_isbase64 = function(v) {
		this.isbase64 = v;
	};
	_pUbiViewer.set_isunicode = function(v) {
		this.isunicode = v;
	};
	_pUbiViewer.set_utfdata = function(v) {
		this.utfdata = v;
	};

	_pUbiViewer.set_exportfilename = function(v) {
		this.exportfilename = v;
	};
	_pUbiViewer.set_excelsheetperpage = function(v) {
		this.excelsheetperpage = v;
	};
	_pUbiViewer.set_excelsheetpermasterpage = function(v) {
		this.excelsheetpermasterpage = v;
	};
	_pUbiViewer.set_excelsheetperreport = function(v) {
		this.excelsheetperreport = v;
	};
	_pUbiViewer.set_excelsheetperpagecount = function(v) {
		this.excelsheetperpagecount = v;
	};
	_pUbiViewer.set_fontElement = function(v) {
		this.fontElement = v;
	};
	_pUbiViewer.set_isvoiceye = function(v) {
		this.isvoiceye = v;
	};

	_pUbiViewer.retrieve = function(parent, callback) {
		context = parent;
		callback_id = callback;

		// dataset이 있을 경우 정보 전송
		var _rs_ = String.fromCharCode(30);
		var _cs_ = String.fromCharCode(31);
		var _nrs_ = String.fromCharCode(28);
		var _ncs_ = String.fromCharCode(29);
		var dsinfos = [];

		if (callback)
		{
			this.callback_id = callback;
		}

		var datasetInfos = this.datasets;
		if (datasetInfos)
		{
			for (var i=0; i<datasetInfos.length; i++)
			{
				if (datasetInfos[i])
				{
					dsinfos.push(""+ _nrs_);
					for (var j=0; j<datasetInfos[i].length; j++)
					{
						dsinfos.push(datasetInfos[i][j]);
						dsinfos.push(""+ _ncs_);
					}
				}
			}
		}
		var localDatasetInfos = this.localdatasets;

		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem)
			{
				if (this.reporturl != "" && this.reporturl.substr(this.reporturl.length - 1) != "/")
				{
					this.reporturl += "/";
				}

				plugin_elem._plugin_object.callMethod("SetVariable", "ClientType", "nexacro");
				plugin_elem._plugin_object.setProperty("FontRevision", true);
				plugin_elem._plugin_object.setProperty("PrintMarginRevision", true);

				// toolbar 설정
				plugin_elem._plugin_object.callMethod("setToolbar", this.toolbar);
				// Scale
				plugin_elem._plugin_object.callMethod("setPageScale", this.scale);

				plugin_elem._plugin_object.setProperty("IsMultiReport", this.ismultireport);
				plugin_elem._plugin_object.setProperty("MultiCount", this.multicount);
				// 리소스 설정
				plugin_elem._plugin_object.setProperty("fileURL", this.fileurl);
				plugin_elem._plugin_object.setProperty("resource", "fixed");

				// Argument 설정
				plugin_elem._plugin_object.callMethod("setArg", this.arg);

				// ExcelExportLineItem 설정
				plugin_elem._plugin_object.callMethod("SetVariable", "Excel.ExportLineItem", this.excelExportLineItem);
				plugin_elem._plugin_object.callMethod("SetVariable", "Excel.SheetPerPage", this.excelsheetperpage);
				plugin_elem._plugin_object.callMethod("SetVariable", "Excel.SheetPerMasterPage", this.excelsheetpermasterpage);
				plugin_elem._plugin_object.callMethod("SetVariable", "Excel.SheetPerReport", this.excelsheetperreport);
				plugin_elem._plugin_object.callMethod("SetVariable", "Excel.SheetPerPageCount", this.excelsheetperpagecount);
				plugin_elem._plugin_object.callMethod("SetVariable", "sheetName", this.sheetname);
				if(this.reporttitle !="") {
					plugin_elem._plugin_object.callMethod("setReportTitle", this.reporttitle);
				}
				// usePDF2를 true로 사용
				plugin_elem._plugin_object.callMethod("SetVariable", "usePDF2", true);
				
				// Dataset 설정
				if (dsinfos != "")
				{
					// 서버의 데이터셋을 이용할 경우
					plugin_elem._plugin_object.callMethod("setServletURL2", this.dataurl);
					plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.DatasetInfos", dsinfos.join(""));
					plugin_elem._plugin_object.setProperty("UtfData", "true");
				}
				else if (localDatasetInfos && localDatasetInfos.length > 0)
				{
					// Local Dataset 이용할 경우
//					plugin_elem._plugin_object.callMethod("SetVariable", "useTobeCSV", "true");
					for (var i=0; i<localDatasetInfos.length; i++)
					{
						if (localDatasetInfos[i] && localDatasetInfos[i].length == 2)
						{
							var ssvdata = [];
							ssvdata.push("SSV:utf-8" + _rs_);
							ssvdata.push(localDatasetInfos[i][1].saveSSV(localDatasetInfos[i][1].name, "A"));
							plugin_elem._plugin_object.callMethod("SetDataset", localDatasetInfos[i][0], ssvdata.join(""));
							ssvdata = "";
						}
					}
					plugin_elem._plugin_object.setProperty("IsDeflater", this.isdeflater);
					plugin_elem._plugin_object.callMethod("SetVariable", "isBase64", this.isbase64);
					plugin_elem._plugin_object.setProperty("IsUnicode", this.isunicode);
					plugin_elem._plugin_object.setProperty("UtfData", this.utfdata);

				} else {
					plugin_elem._plugin_object.setProperty("IsDeflater", this.isdeflater);
					plugin_elem._plugin_object.callMethod("SetVariable", "isBase64", this.isbase64);
					plugin_elem._plugin_object.setProperty("IsUnicode", this.isunicode);
					plugin_elem._plugin_object.setProperty("UtfData", this.utfdata);

					plugin_elem._plugin_object.callMethod("setServletURL2", this.dataurl);
					plugin_elem._plugin_object.callMethod("setDatasource", this.datasource);
				}
				plugin_elem._plugin_object.callMethod("setJrfFileDir", "");
				plugin_elem._plugin_object.callMethod("setJrfFileName", this.reporturl + this.jrffile);
				
				plugin_elem._plugin_object.callMethod("setFontElement", this.fontElement);

				if (this.designDataset && this.designDataset != "")
				{
					// runtime report
					plugin_elem._plugin_object.callMethod("LoadTemplet", this.reporturl + this.jrffile);
					plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.DesignData", this.designDataset);
					plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.RuntimeData", this.gridDataset);
					plugin_elem._plugin_object.callMethod("RetrieveBind");
				}
				else
				{
					plugin_elem._plugin_object.callMethod("Retrieve");
				}

				this.designDataset = "";
				this.gridDataset = "";
				
				//this.datasets = [];
				//this.localdatasets = [];
				this.datasets = [];
				this.localdatasets = [];

				//plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.DatasetInfos","");
				//plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.DesignData", "");
				//plugin_elem._plugin_object.callMethod("SetVariable", "Nexacro.RuntimeData", "");
				
				if (callback)
					callback_func();
			}
		}
		else
		{
			// runtime일 경우 runtimedata 생성
			var runtimedata = "";
			var streamdata = "";
			if (this.designDataset)
			{
				// dataset SSV 전송에 필요한 정보 생성
				var ssvlist = [];
				ssvlist.push("SSV:utf-8" + _rs_);
				ssvlist.push(this.designDataset);
				ssvlist.push(this.gridDataset);
				runtimedata = ssvlist.join("");
				dsinfos = [];
			}
			else
			{
				// Local dataset을 이용한는 경우
				if (localDatasetInfos && localDatasetInfos.length > 0)
				{
					// Local Dataset 이용할 경우
					// dataset SSV 전송에 필요한 정보 생성
					var ssvlist = [];
					// sqlid 명
					ssvlist.push("LOCALDATASET:" + _rs_);
					for (var i=0; i<localDatasetInfos.length; i++)
					{
						if (localDatasetInfos[i] && localDatasetInfos[i].length == 2)
						{
							ssvlist.push(localDatasetInfos[i][0] + _cs_);	// SQLID
							ssvlist.push(localDatasetInfos[i][1].name + _cs_);	// Dataset ID
							ssvlist.push(_rs_);
						}
					}
					// local dataset의 data 도출
					ssvlist.push("SSV:utf-8" + _rs_);
					for (var i=0; i<localDatasetInfos.length; i++)
					{
						if (localDatasetInfos[i] && localDatasetInfos[i].length == 2)
						{
							ssvlist.push(localDatasetInfos[i][1].saveSSV(localDatasetInfos[i][1].name, "A"));
						}
					}
					streamdata = ssvlist.join("");
					dsinfos = [];
				}
			}

			// 조회전 Nexacro UbiViewer에 설정된 변수를 viewer에 설정
			this.viewer.params.gatewayurl = this.gatewayurl;
			this.viewer.params.resource = this.resource;
			this.viewer.params.jrffile = this.jrffile;
			this.viewer.params.masterfilename = this.masterfilename;
			this.viewer.params.resid = this.resid;
			this.viewer.params.arg = this.arg;
			this.viewer.params.divid = "ubiviewer_" + this._unique_id;
			this.viewer.params.scale = this.scale;
			this.viewer.params.toolbar = this.toolbar;
			this.viewer.params.timeout = this.timeout;
			this.viewer.params.key = this.key;
			this.viewer.params.ismultireport = this.ismultireport;
			this.viewer.params.multicount = this.multicount;
			this.viewer.params.reporttitle = this.reporttitle;
			this.viewer.params.sheetname = this.sheetname;
			this.viewer.params.bgcolor = (this.bgcolor.length == 9) ? (this.bgcolor.substring(0, 7)) : (this.bgcolor);
			this.viewer.params.bgimage = this.bgimage;
			this.viewer.params.flicking = this.flicking;
			this.viewer.params.direction = this.direction;
			this.viewer.params.language = this.language;
			this.viewer.params.isexportchartimage = this.isexportchartimage;
			this.viewer.params.userwidth = this.userwidth;
			this.viewer.params.userheight = this.userheight;
			this.viewer.params.scrollpage = this.scrollpage;
			this.viewer.params.runtimedata = runtimedata;
			this.viewer.params.datasetinfos = dsinfos.join("");
			this.viewer.params.streamdata = streamdata;
			this.viewer.params.isStreaming = ""+this.isStreaming;
			this.viewer.params.excelExportLineItem = ""+this.excelExportLineItem;
			this.viewer.params.fontElement = this.fontElement;
			this.viewer.params.isvoiceye = ""+ this.isvoiceye;
			this.viewer.params.reqtype = 0;

			// 런타임리포트 여부에 따른 툴바설정
			if (this.runtimedata == "") {
				this.viewer.setVisibleToolbar("EXCEL_TYPE1",true);
				this.viewer.setVisibleToolbar("EXCEL_TYPE2",true);
			}
			else {
				this.viewer.setVisibleToolbar("EXCEL_TYPE2",false);
			}
			
			this.designDataset = "";
			this.gridDataset = "";
			this.localdatasets = [];
			this.datasets = [];

			// 리포트 조회
			this.viewer.showReport(callback_func);
		}
	};

	// 디자인 정보를 담고있는 dataset 생성
	_pUbiViewer.getDesignDataset = function(parent) {
		var designDataset = new Dataset("dsDesign", parent);
		// 컬럼 생성
		var colnames = ["type", 
						"row", 
						"col", 
						"rowspan", 
						"colspan", 
						"align", "halignexpr", "valignexpr",
						"value", "valueexpr", "text",	// text
						"background", "backgroundexpr", "bgcolor",	// bgcolor
						"foreground", "foregroundexpr",
						"font", "fontexpr",
						"merge",
						"autosize", "autosizeexpr", 
						"autofont", "autofontexpr",
						"linespace", 
						"suppressing",
						// margin
						"leftmargin",
						"topmargin",
						"rightmargin",
						"bottommargin", 
						// ---------- 여기까지 반영되어 있음. ----------
						// border
						"leftborder", "leftborderstyle", "leftborderthickness", "leftbordercolor", "leftborderstyleexpr", "leftborderthicknessexpr", "leftbordercolorexpr", 
						"rightborder", "rightborderstyle", "rightborderthickness", "rightbordercolor", "rightborderstyleexpr", "rightborderthicknessexpr", "rightbordercolorexpr", 
						"topborder", "topborderstyle", "topborderthickness", "topbordercolor", "topborderstyleexpr", "topborderthicknessexpr", "topbordercolorexpr", 
						"bottomborder", "bottomborderstyle", "bottomborderthickness", "bottombordercolor", "bottomborderstyleexpr", "bottomborderthicknessexpr", "bottombordercolorexpr", 
						"updiagonalborder", "updiagonalborderstyle", "updiagonalborderthickness", "updiagonalbordercolor", "updiagonalborderstyleexpr", "updiagonalborderthicknessexpr", "updiagonalbordercolorexpr", 
						"downdiagonalborder", "downdiagonalborderstyle", "downdiagonalborderthickness", "downdiagonalbordercolor", "downdiagonalborderstyleexpr", "downdiagonalborderthicknessexpr", "downdiagonalbordercolorexpr", 
						// 
						"topleftpointexpr",
						"widthexpr",
						"heightexpr",
						"visibleexpr",
						"transperentexpr",
						"underlineexpr",
						"formatexpr",
						"maskexpr",
						"htmlconversionexpr"];
		
		for (var i=0; i<colnames.length; i++)
		{
			designDataset.addColumn(colnames[i], "string");
		}

		return designDataset;
	}

	callback_func = function()
	{
		if (this.callback_id) {
			var func = this.context[this.callback_id];
			if (func)
				func.call(this.context);
		}
	};

	_pUbiViewer.aboutBox = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("aboutBox");
			}
		} else {
			this.viewer.aboutbox();
		}
	};
	_pUbiViewer.exportPdf = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "PDF");
			}
		} else {
			this.viewer.exportPdf();
		}
	};
	_pUbiViewer.exportExcel = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Excel");
			}
		} else {
			this.viewer.exportExcel();
		}
	};
	_pUbiViewer.exportExcelNo = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Excel_No");
			}
		} else {
			this.viewer.exportExcelNo();
		}
	};
	_pUbiViewer.exportRtf = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Rtf");
			}
		} else {
			this.viewer.exportRtf();
		}
	};
	_pUbiViewer.exportHwp = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Hwp");
			}
		} else {
			this.viewer.exportHwp();
		}
	};
	_pUbiViewer.exportHml = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Hml");
			}
		} else {
			this.viewer.exportHml();
		}
	};
	_pUbiViewer.exportPptx = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Pptx");
			}
		} else {
			this.viewer.exportPptx();
		}
	};
	_pUbiViewer.exportDocx = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if(this.exportfilename != "") {
					alert(this.exportfilename);
					plugin_elem._plugin_object.setProperty("exportFileName",this.exportfilename);
				}
				plugin_elem._plugin_object.callMethod("ExportFile", "Docx");
			}
		} else {
			this.viewer.exportDocx();
		}
	};
	
	// ActiveX에서만 사용 가능
	_pUbiViewer.exportSet = function(val) {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				if (val != undefined)
					plugin_elem._plugin_object.callMethod("SetVariable", "Export.Type", val);
				plugin_elem._plugin_object.callMethod("exportset");
			}
		}
	};
	_pUbiViewer.print = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("directPrint");
			}
		} else {
			this.viewer.print();
		}
	};
	_pUbiViewer.printSet = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("printset");
			}
		} else {
			this.viewer.printSet();
		}
	};
	_pUbiViewer.printPDF = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("directPrint");
			}
		} else {
			this.viewer.printPDF();
		}
	};
	_pUbiViewer.printHTML = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("directPrint");
			}
		} else {
			this.viewer.printHTML();
		}
	};
	_pUbiViewer.previous = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("previousPage");
			}
		} else {
			this.viewer.previous();
		}
	};
	_pUbiViewer.next = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("nextPage");
			}
		} else {
			this.viewer.next();
		}
	};
	_pUbiViewer.first = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("firstPage");
			}
		} else {
			this.viewer.first();
		}
	};
	_pUbiViewer.last = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("lastPage");
			}
		} else {
			this.viewer.last();
		}
	};
	_pUbiViewer.gopage = function(iPage) {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("setPage", iPage);
			}
		} else {
			this.viewer.gopage(iPage);
		}
	};
	_pUbiViewer.zoomIn = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("zoomIn");
			}
		} else {
			this.viewer.zoomin();
		}
	};
	_pUbiViewer.zoomOut = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("zoomOut");
			}
		} else {
			this.viewer.zoomout();
		}
	};
	_pUbiViewer.refresh = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) {
				plugin_elem._plugin_object.callMethod("refresh");
			}
		} else {
			this.viewer.refresh();
		}
	};
	_pUbiViewer.setMenuTextToolbar = function(menu, val) {
		this.viewer.setMenuTextToolbar(menu, val);
	};
	_pUbiViewer.setVisibleToolbar = function(menu, val) {
		this.viewer.setVisibleToolbar(menu, val);
	};
	_pUbiViewer.setEnableToolbar = function(menu, val) {
		this.viewer.setEnableToolbar(menu, val);
	};
	_pUbiViewer.setSaveMenu = function(menu) {
		this.viewer.setSaveMenu(menu);
	};
	_pUbiViewer.setPrintMenu = function(menu) {
		this.viewer.setPrintMenu(menu);
	};

/*
	_pUbiViewer.setDataset = function (id, url, datasetid, args, datatype)
    {
		if (nexacro.Browser != "Runtime")
		{
			this.datasets.SetAt(id, [url, datasetid, args, datatype]);
		}
    };
*/

	_pUbiViewer.setRuntimeData = function(designDataset, gridDataset) {
		this.designDataset = designDataset.saveSSV("dsDesign", "A");
		this.gridDataset = gridDataset.saveSSV("dsGrid", "A");
	};

	_pUbiViewer.addTransaction = function (parent, strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, nDataType)
    {
		var loadItem = new nexacro.TransactionItem(strURL, parent, strSvcID, strInDatasets, strOutDatasets, strArgument, nDataType, false);
		var sendData = loadItem._sendData;
		// Data가 encoding 되어있을 경우 Decoding
		if (sendData.indexOf("&") == 0)
		{
			sendData = nexacro._decodeXml(sendData);
		}

		this.datasets.push([strURL, sendData, strOutDatasets, nDataType]);
//application.trace(loadItem._sendData);
    };

	_pUbiViewer.setDataset = function (sqlId, dataset)
    {
		this.localdatasets.push([sqlId, dataset]);
    };


    _pUbiViewer.removeAllDataset = function() {
    	
    };

    _pUbiViewer.on_create_contents = function() 
	{
		if (nexacro.Browser == "Runtime")
		{
			var control_elem = this.getElement();
			if (control_elem)
			{
				// Runtime일 경우 테두리 없앰.
				this.style.set_border("0 solid #808080ff");

				this._plugin_elem = new nexacro.PluginElement(control_elem);
				this._plugin_elem.classid = "{256887A3-916F-4C82-86B3-F432BA83097B}";
				this._plugin_elem.windowed = true;
				this._plugin_elem.popupstyle = false;
				this._plugin_elem.setElementSize(this._client_width, this._client_height);
			}
		}
		else 
		{
			nexacro.Static.prototype.on_create_contents.call(this);
		}
	};

	_pUbiViewer.on_created_contents = function() {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem)
			{
				plugin_elem.component = this;
				plugin_elem.create();
				plugin_elem.initEvent();
				this.document = plugin_elem._document;
				this.window = plugin_elem._winodw;
			}
		}
		else
		{
			nexacro.Static.prototype.on_created_contents.call(this);
			var divTarget = document.getElementById(this._unique_id + 'TextBoxElement');
			// IE7일 경우 상위 div 도출
			if (__ubi_isIE && __ubi_ieVersion < 8) {
				divTarget = divTarget.parentNode; 
			}
			/*
			divTarget.innerHTML = "<div id='ubiviewer_" + this._unique_id
					+ "' style='border:0px solid red;width:" + this.width
					+ "px;height:" + this.height + "px'></div>";
			*/
			divTarget.innerHTML = "<div id='ubiviewer_" + this._unique_id
					+ "' style='border:0px solid red;width:" + this._client_width
					+ "px;height:" + this._client_height + "px'></div>";

			this.viewer = new UbiViewer({
				gatewayurl : this.gatewayurl,
				resource : this.resource,
				jrffile : this.jrffile,
				masterfilename : this.masterfilename,
				resid : this.resid,
				arg : this.arg,
				divid : "ubiviewer_" + this._unique_id,
				scale : this.scale,
				toolbar : this.toolbar,
				timeout : this.timeout,
				key : this.key,
				ismultireport : this.ismultireport,
				multicount : this.multicount,
				reporttitle : this.reporttitle,
				sheetname : this.sheetname,
				bgcolor : (this.bgcolor.length == 9) ? (this.bgcolor.substring(0, 7)) : (this.bgcolor),
				bgimage : this.bgimage,
				flicking : this.flicking || "false",
				direction : this.direction,
				language : this.language,
				isexportchartimage : this.isexportchartimage,
				userwidth : this.userwidth,
				userheight : this.userheight,
				clienttype : "nexacro",
				scrollpage : this.scrollpage,
				runtimedata : "",
				iswa : "false"
			});
		}
	};

	_pUbiViewer.on_destroy_contents = function ()
    {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) 
			{
//				nexacro.PluginElement.prototype.destroy.call(plugin_elem);
				this.window = null;
				this.document = null;
				plugin_elem.destroy();
				this._plugin_elem = null;
			}
		}
		else
		{
//			nexacro.Static.prototype.on_destroy_contents.call(this);
			
			if (this.viewer)
			{
				this.viewer.destroy();
				this.viewer = null;
			}
		}
    };

    _pUbiViewer.on_update_position = function (resize_flag, move_flag)
    {
		if (nexacro.Browser == "Runtime")
		{
			nexacro.Component.prototype.on_update_position.call(this, resize_flag, move_flag);
			var plugin_elem = this._plugin_elem;
			if (plugin_elem)
			{
				plugin_elem.on_update_position();
			}
		} else {
			nexacro.Static.prototype.on_update_position.call(this, resize_flag, move_flag);
		}
    }; 

	_pUbiViewer.on_change_containerRect = function(width, height) 
    {
		if (nexacro.Browser == "Runtime")
		{
			var plugin_elem = this._plugin_elem;
			if (plugin_elem) 
			{
				plugin_elem.setElementSize(width, height);
			}
		} else {
			nexacro.Static.prototype.on_change_containerRect.call(this, width, height);
			// HTML Viewer Size 조정
			var divTarget = document.getElementById("ubiviewer_" + this._unique_id);
			if (divTarget) {
				divTarget.style.width = width +"px";
				divTarget.style.height = height +"px";
				if (this.viewer)
				{
					this.viewer.resize();
				}
			}
		}
	};
	_pUbiViewer.set_enable = function (v)
	{
	    v = nexacro._toBoolean(v);
	    if (this.enable != v)
	    {
			if (nexacro.Browser == "Runtime")
			{
				var plugin_elem = this._plugin_elem;
				this.enable = v;
				if (this._is_created)
				{
					var enable_flag = (this.parent._real_enable && v);
					if (this._real_enable != enable_flag)
					{
						this._real_enable = enable_flag;
		                this._stat_change(enable_flag ? "enable" : "disable", this._pseudo);
						this.on_apply_prop_enable(this._real_enable);
						this._plugin_elem.setElementEnable(enable_flag);
					}
				}
			} else {

			}
	    }
	};
	
	_pUbiViewer.on_apply_custom_setfocus = function (evt_name)
	{
	    if (nexacro._enableaccessibility)
	    {
	    	nexacro.Component.prototype.on_apply_custom_setfocus.call(this, evt_name);
	    }
	    
//		if (nexacro.Browser != "Runtime")
//		{
//			document.getElementById("ubiviewer_mainframe_childframe_form_UbiViewerUbiToolbarButton_SaveButton").focus();
//		}
	    
//	    var ifrm_elem = this._ifrm_elem;
//	    if (ifrm_elem)
//	    {
//    		ifrm_elem._setElementFocus();
//	    }
	}; 

	_pUbiViewer._setAccessibilityOutfocusAction = function ()
    {
        var accessibility = this.on_find_CurrentStyle_accessibility("enable");

//        if (accessibility)
//        {
//            var _ifrm_elem = this._ifrm_elem;
//            if (_ifrm_elem)
//            {
//                if (_ifrm_elem._prev_outfocus_message_elem)
//                    _ifrm_elem._prev_outfocus_message_elem.setElementText(accessibility.action);
//                if (_ifrm_elem._next_outfocus_message_elem)
//                    _ifrm_elem._next_outfocus_message_elem.setElementText(accessibility.action);
//            }
//        }
    };

	
	delete _pUbiViewer;
}