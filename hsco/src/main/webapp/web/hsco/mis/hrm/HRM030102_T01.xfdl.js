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
                this.set_name("HRM030201_T1");
                this.set_classname("form");
                this.set_titletext("기본사항");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new GroupBox("GroupBox01", "absolute", null, "236", "321", "79", "414", null, this);
            obj.set_text("신체사항");
            obj.set_taborder("0");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO26", "absolute", null, "5", "43", "27", "689", null, this);
            obj.set_taborder("1");
            obj.set_text("본적");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label00", "absolute", null, "5", "330", "27", "361", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO00", "absolute", null, "5", "45", "27", "317", null, this);
            obj.set_taborder("3");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label01", "absolute", null, "5", "85", "27", "233", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO03", "absolute", null, "31", "64", "27", "668", null, this);
            obj.set_taborder("5");
            obj.set_text("자가운전");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO04", "absolute", null, "31", "42", "27", "603", null, this);
            obj.set_taborder("6");
            obj.set_text("차종");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label05", "absolute", null, "31", "64", "27", "540", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO05", "absolute", null, "31", "62", "27", "479", null, this);
            obj.set_taborder("8");
            obj.set_text("차량No");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label06", "absolute", null, "31", "68", "27", "412", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label04", "absolute", null, "31", "26", "27", "644", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", null, "37", "16", "14", "648", null, this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO07", "absolute", null, "57", "39", "27", "693", null, this);
            obj.set_taborder("12");
            obj.set_text("종교");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label08", "absolute", null, "57", "49", "27", "645", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO08", "absolute", null, "57", "42", "27", "604", null, this);
            obj.set_taborder("14");
            obj.set_text("취미");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label10", "absolute", null, "57", "68", "27", "412", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label03", "absolute", null, "5", "68", "27", "12", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO01", "absolute", null, "5", "42", "27", "192", null, this);
            obj.set_taborder("17");
            obj.set_text("호주");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label02", "absolute", null, "5", "70", "27", "123", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label09", "absolute", null, "57", "66", "27", "539", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO09", "absolute", null, "57", "62", "27", "478", null, this);
            obj.set_taborder("20");
            obj.set_text("특기");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO02", "absolute", null, "5", "45", "27", "79", null, this);
            obj.set_taborder("21");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", null, "80", "321", "160", "414", null, this);
            obj.set_text("병역사항");
            obj.set_taborder("22");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO10", "absolute", null, "102", "42", "27", "690", null, this);
            obj.set_taborder("23");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label11", "absolute", null, "102", "66", "27", "625", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO11", "absolute", null, "102", "66", "27", "560", null, this);
            obj.set_taborder("25");
            obj.set_text("미필사유");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label12", "absolute", null, "102", "143", "27", "418", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO12", "absolute", null, "128", "42", "27", "690", null, this);
            obj.set_taborder("27");
            obj.set_text("군별");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label13", "absolute", null, "128", "84", "27", "607", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO13", "absolute", null, "128", "42", "27", "567", null, this);
            obj.set_taborder("29");
            obj.set_text("병과");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label14", "absolute", null, "128", "150", "27", "418", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO14", "absolute", null, "154", "42", "27", "690", null, this);
            obj.set_taborder("31");
            obj.set_text("계급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label15", "absolute", null, "154", "84", "27", "607", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO15", "absolute", null, "154", "42", "27", "567", null, this);
            obj.set_taborder("33");
            obj.set_text("역종");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label16", "absolute", null, "154", "150", "27", "418", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO16", "absolute", null, "180", "42", "53", "690", null, this);
            obj.set_taborder("35");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label17", "absolute", null, "180", "273", "27", "418", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label18", "absolute", null, "206", "124", "27", "567", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO17", "absolute", null, "206", "42", "27", "527", null, this);
            obj.set_taborder("38");
            obj.set_text("군번");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label19", "absolute", null, "206", "110", "27", "418", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO18", "absolute", null, "258", "43", "27", "689", null, this);
            obj.set_taborder("40");
            obj.set_text("신장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label21", "absolute", null, "258", "51", "27", "542", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO20", "absolute", null, "258", "56", "27", "487", null, this);
            obj.set_taborder("42");
            obj.set_text("혈액형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label22", "absolute", null, "258", "70", "27", "418", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO21", "absolute", null, "283", "42", "27", "690", null, this);
            obj.set_taborder("44");
            obj.set_text("색맹");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label24", "absolute", null, "283", "83", "27", "512", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO23", "absolute", null, "283", "42", "27", "471", null, this);
            obj.set_taborder("46");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label25", "absolute", null, "283", "54", "27", "418", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox02", "absolute", null, "80", "399", "81", "12", null, this);
            obj.set_text("유공자사항");
            obj.set_taborder("48");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO24", "absolute", null, "103", "66", "27", "342", null, this);
            obj.set_taborder("49");
            obj.set_text("유공자명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label26", "absolute", null, "102", "74", "27", "269", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO25", "absolute", null, "102", "42", "27", "228", null, this);
            obj.set_taborder("51");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label27", "absolute", null, "102", "73", "27", "156", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO27", "absolute", null, "102", "66", "27", "91", null, this);
            obj.set_taborder("53");
            obj.set_text("전공사항");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label28", "absolute", null, "102", "77", "27", "15", null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO28", "absolute", null, "129", "66", "27", "342", null, this);
            obj.set_taborder("55");
            obj.set_text("수권자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label29", "absolute", null, "128", "74", "27", "269", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO29", "absolute", null, "128", "42", "27", "228", null, this);
            obj.set_taborder("57");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label30", "absolute", null, "128", "77", "27", "15", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label31", "absolute", null, "128", "74", "27", "155", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox03", "absolute", null, "159", "399", "80", "12", null, this);
            obj.set_text("장애사항");
            obj.set_taborder("60");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO31", "absolute", null, "182", "42", "27", "366", null, this);
            obj.set_taborder("61");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label32", "absolute", null, "182", "46", "27", "321", null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO32", "absolute", null, "182", "67", "27", "255", null, this);
            obj.set_taborder("63");
            obj.set_text("수첩No.");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label33", "absolute", null, "182", "78", "27", "178", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label34", "absolute", null, "182", "99", "27", "15", null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO33", "absolute", null, "182", "66", "27", "113", null, this);
            obj.set_taborder("66");
            obj.set_text("판정기관");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO30", "absolute", null, "128", "66", "27", "91", null, this);
            obj.set_taborder("67");
            obj.set_text("보훈No.");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO34", "absolute", null, "208", "55", "27", "353", null, this);
            obj.set_taborder("68");
            obj.set_text("발급일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label35", "absolute", null, "208", "99", "27", "255", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO35", "absolute", null, "208", "55", "27", "201", null, this);
            obj.set_taborder("70");
            obj.set_text("장애명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label36", "absolute", null, "208", "57", "27", "145", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO36", "absolute", null, "208", "74", "27", "72", null, this);
            obj.set_taborder("72");
            obj.set_text("중복장애");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label37", "absolute", null, "208", "58", "27", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox04", "absolute", null, "236", "399", "79", "12", null, this);
            obj.set_text("재산상태");
            obj.set_taborder("74");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO37", "absolute", null, "258", "55", "27", "353", null, this);
            obj.set_taborder("75");
            obj.set_text("동산");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label38", "absolute", null, "258", "140", "27", "214", null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO38", "absolute", null, "283", "55", "27", "353", null, this);
            obj.set_taborder("77");
            obj.set_text("부동산");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label39", "absolute", null, "283", "140", "27", "214", null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO39", "absolute", null, "258", "66", "27", "149", null, this);
            obj.set_taborder("79");
            obj.set_text("재산총액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO40", "absolute", null, "283", "66", "27", "149", null, this);
            obj.set_taborder("80");
            obj.set_text("가옥");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label40", "absolute", null, "258", "134", "27", "16", null, this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label41", "absolute", null, "283", "134", "27", "16", null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", null, "8", "323", "21", "365", null, this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", null, "34", "57", "21", "544", null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", null, "34", "61", "21", "415", null, this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", null, "60", "43", "21", "648", null, this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", null, "60", "60", "21", "542", null, this);
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", null, "8", "61", "21", "16", null, this);
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", null, "8", "79", "21", "236", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_innerdataset("ds_nlty");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("Combo01", "absolute", null, "104", "60", "21", "628", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_innerdataset("ds_mtrscCrrspndSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Edit("Edit06", "absolute", null, "8", "64", "21", "126", null, this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", null, "60", "61", "21", "415", null, this);
            obj.set_taborder("92");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", null, "105", "135", "21", "422", null, this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", null, "131", "76", "21", "612", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_innerdataset("ds_msclSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("Combo03", "absolute", null, "156", "76", "21", "612", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_innerdataset("ds_mltdtcsSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("Combo04", "absolute", null, "131", "142", "21", "422", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_curimptSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("Combo05", "absolute", null, "157", "142", "21", "422", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_innerdataset("ds_clssSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Calendar("Calendar05", "absolute", null, "183", "122", "21", "566", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar00", "absolute", null, "183", "122", "21", "423", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("sta_ODR_SE00", "absolute", null, "183", "15", "22", "547", null, this);
            obj.set_taborder("100");
            obj.set_text("~");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", null, "209", "41", "21", "647", null, this);
            obj.set_taborder("101");
            obj.set_inputtype("digit");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", null, "209", "41", "21", "587", null, this);
            obj.set_taborder("102");
            obj.set_inputtype("digit");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE01", "absolute", null, "208", "15", "22", "629", null, this);
            obj.set_taborder("103");
            obj.set_text("년");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE02", "absolute", null, "208", "15", "22", "570", null, this);
            obj.set_taborder("104");
            obj.set_text("월");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", null, "209", "102", "21", "423", null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE04", "absolute", null, "260", "15", "22", "543", null, this);
            obj.set_taborder("106");
            obj.set_text("kg");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", null, "260", "32", "22", "559", null, this);
            obj.set_taborder("107");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", null, "260", "25", "22", "460", null, this);
            obj.set_taborder("108");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", null, "260", "22", "22", "421", null, this);
            obj.set_taborder("109");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE05", "absolute", null, "261", "23", "22", "441", null, this);
            obj.set_taborder("110");
            obj.set_text("RH");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("8 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE06", "absolute", null, "286", "29", "22", "538", null, this);
            obj.set_taborder("111");
            obj.set_text("좌:우");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("8 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17", "absolute", null, "285", "25", "22", "515", null, this);
            obj.set_taborder("112");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", null, "285", "25", "22", "567", null, this);
            obj.set_taborder("113");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19", "absolute", null, "285", "48", "22", "421", null, this);
            obj.set_taborder("114");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", null, "286", "131", "22", "220", null, this);
            obj.set_taborder("115");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21", "absolute", null, "260", "131", "22", "220", null, this);
            obj.set_taborder("116");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22", "absolute", null, "260", "128", "22", "18", null, this);
            obj.set_taborder("117");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", null, "185", "41", "21", "323", null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25", "absolute", null, "185", "72", "21", "181", null, this);
            obj.set_taborder("119");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26", "absolute", null, "185", "92", "21", "19", null, this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", null, "211", "93", "21", "258", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("Edit27", "absolute", null, "211", "52", "21", "147", null, this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", null, "211", "51", "21", "19", null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29", "absolute", null, "105", "67", "21", "273", null, this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30", "absolute", null, "105", "67", "21", "159", null, this);
            obj.set_taborder("125");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31", "absolute", null, "105", "71", "21", "18", null, this);
            obj.set_taborder("126");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32", "absolute", null, "131", "67", "21", "273", null, this);
            obj.set_taborder("127");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33", "absolute", null, "131", "67", "21", "159", null, this);
            obj.set_taborder("128");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34", "absolute", null, "131", "71", "21", "18", null, this);
            obj.set_taborder("129");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35", "absolute", null, "286", "128", "22", "18", null, this);
            obj.set_taborder("130");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label20", "absolute", "6.27%", "258", null, "26", "85.87%", null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label23", "absolute", null, "283", "56", "27", "635", null, this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", null, "285", "48", "22", "640", null, this);
            obj.set_taborder("133");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO22", "absolute", null, "283", "42", "27", "594", null, this);
            obj.set_taborder("134");
            obj.set_text("시력");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO19", "absolute", null, "258", "42", "26", "592", null, this);
            obj.set_taborder("135");
            obj.set_text("체중");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ODR_SE03", "absolute", "11.33%", "260", null, "22", "85.6%", null, this);
            obj.set_taborder("136");
            obj.set_text("cm");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "6.53%", "260", null, "22", "88.4%", null, this);
            obj.set_taborder("137");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox05", "absolute", null, "31", "399", "53", "12", null, this);
            obj.set_text("노동조합");
            obj.set_taborder("138");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO43", "absolute", null, "52", "40", "27", "69", null, this);
            obj.set_taborder("139");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label07", "absolute", "370", "52", "99", "27", null, null, this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label42", "absolute", "378", "60", "99", "27", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label43", "absolute", null, "52", "53", "27", "17", null, this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", null, "56", "93", "21", "261", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar03", "absolute", null, "56", "93", "21", "111", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("144");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("Edit23", "absolute", null, "56", "45", "21", "22", null, this);
            obj.set_taborder("145");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", null, "34", "16", "14", "330", null, this);
            obj.set_taborder("146");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO06", "absolute", null, "52", "52", "27", "205", null, this);
            obj.set_taborder("147");
            obj.set_text("탈퇴일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APYEXM_NO41", "absolute", null, "52", "52", "27", "357", null, this);
            obj.set_taborder("148");
            obj.set_text("가입일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("기본사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item45","CheckBox01","value","ds_tbhrmHrEtc","PVT_DRV_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Edit00","value","ds_tbhrmHrEtc","PRMDMCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Edit02","value","ds_tbhrmHrEtc","VHCTY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Edit03","value","ds_tbhrmHrEtc","VHCLE_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Edit04","value","ds_tbhrmHrEtc","RELGN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","Edit05","value","ds_tbhrmHrEtc","HOBBY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Edit01","value","ds_tbhrmHrEtc","HUSEDR_RELATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Combo00","value","ds_tbhrmHrEtc","NLTY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","Combo01","value","ds_tbhrmHrEtc","MTRSC_CRRSPND_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Edit06","value","ds_tbhrmHrEtc","HUSEDR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","Edit07","value","ds_tbhrmHrEtc","SPCABL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","Edit08","value","ds_tbhrmHrEtc","MTRSC_INCMP_PRVONSH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","Combo02","value","ds_tbhrmHrEtc","MSCL_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","Combo03","value","ds_tbhrmHrEtc","CLSS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","Combo04","value","ds_tbhrmHrEtc","CURIMPT_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","Combo05","value","ds_tbhrmHrEtc","MLTDTCS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","Calendar05","value","ds_tbhrmHrEtc","ENST_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","Calendar00","value","ds_tbhrmHrEtc","DMBLZ_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","Edit09","value","ds_tbhrmHrEtc","ARMY_CAREER_YY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Edit10","value","ds_tbhrmHrEtc","ARMY_CAREER_MT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","Edit11","value","ds_tbhrmHrEtc","SSN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","Edit13","value","ds_tbhrmHrEtc","BDWGH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","Edit14","value","ds_tbhrmHrEtc","BDP_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","Edit15","value","ds_tbhrmHrEtc","RH_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item81","Edit17","value","ds_tbhrmHrEtc","VSPR_RIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item80","Edit18","value","ds_tbhrmHrEtc","VSPR_LFT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","Edit19","value","ds_tbhrmHrEtc","HEALTH_STTUS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","Edit20","value","ds_tbhrmHrEtc","PRPRTY_ESTATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item83","Edit21","value","ds_tbhrmHrEtc","PRPRTY_MVBLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item85","Edit22","value","ds_tbhrmHrEtc","PRPRTY_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","Edit24","value","ds_tbhrmHrEtc","TROBL_GRAD_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","Edit25","value","ds_tbhrmHrEtc","TROBL_PKTBUK_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","Edit26","value","ds_tbhrmHrEtc","TROBL_JDGMNT_INSTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","Calendar01","value","ds_tbhrmHrEtc","ISSU_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","Edit27","value","ds_tbhrmHrEtc","TROBL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","Edit28","value","ds_tbhrmHrEtc","DPLCT_TROBL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","Edit29","value","ds_tbhrmHrEtc","MERITER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","Edit30","value","ds_tbhrmHrEtc","MERITER_RELATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","Edit31","value","ds_tbhrmHrEtc","MAJOR_MATTER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","Edit32","value","ds_tbhrmHrEtc","ATHZER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","Edit33","value","ds_tbhrmHrEtc","MERITER_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","Edit34","value","ds_tbhrmHrEtc","RWDMRT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item89","Edit35","value","ds_tbhrmHrEtc","PRPRTY_HUSE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item79","Edit16","value","ds_tbhrmHrEtc","ACHRMTPS_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","Edit12","value","ds_tbhrmHrEtc","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item100","Calendar02","value","ds_tbhrmHrEtc","LBUN_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","Calendar03","value","ds_tbhrmHrEtc","LBUN_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item103","Edit23","value","ds_tbhrmHrEtc","LBUN_RSPOFC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","CheckBox00","value","ds_tbhrmHrEtc","LBUN_SBSCRB_AT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T01.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T01.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.sta_WFDA_Label00.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label01.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label05.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label06.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label04.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.CheckBox01.addEventHandler("onclick", this.div_work_Div02_CheckBox02_onclick, this);
            this.sta_WFDA_Label08.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label10.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label03.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label02.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label09.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.GroupBox00.addEventHandler("onlbuttondown", this.div_work_div_detail00_tab_empInfo_tabpage1_GroupBox00_onlbuttondown, this);
            this.sta_WFDA_Label11.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label12.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label13.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label14.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label15.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label16.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label17.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label18.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label19.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label21.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label22.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label24.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label25.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.GroupBox02.addEventHandler("onlbuttondown", this.div_work_div_detail00_tab_empInfo_tabpage1_GroupBox02_onlbuttondown, this);
            this.sta_WFDA_Label26.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label27.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label28.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label29.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label30.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label31.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.GroupBox03.addEventHandler("onlbuttondown", this.div_work_div_detail00_tab_empInfo_tabpage1_GroupBox03_onlbuttondown, this);
            this.sta_WFDA_Label32.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label33.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label34.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label35.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label36.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label37.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label38.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label39.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label40.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label41.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label20.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label23.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.GroupBox05.addEventHandler("onlbuttondown", this.div_work_div_detail00_tab_empInfo_tabpage1_GroupBox02_onlbuttondown, this);
            this.sta_WFDA_Label07.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label42.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);
            this.sta_WFDA_Label43.addEventHandler("onclick", this.Div01_Div00_sta_WFDA_Label01_onclick, this);

        };

        this.loadIncludeScript("HRM030102_T01.xfdl");

       
    };
}
)();
