﻿if(application._enableaccessibility&&nexacro._accessibilitytype!=application._accessibilitytype){nexacro._accessibilitytype=application._accessibilitytype;nexacro._attachAccessibilityComponentFunctions();}if(nexacro._accessibilitytype==2){nexacro.AccessibilityUtil.GridHotkeyList={};nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_HOME]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_END]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_PAGE_UP]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_PAGE_DOWN]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;nexacro.AccessibilityUtil._usetooltip=false;nexacro.AccessibilityUtil.getAccessibilityLabel=function(_a){var _b="";if(_a&&_a.linkedcontrol){_b=_a.accessibility_label;}return _b;};nexacro.AccessibilityUtil.getAccessibilityAction=function(_a){var _b="";if(_a){_b=_a.accessibility_action;}return _b;};nexacro.AccessibilityUtil.getAccessibilityDescription=function(_a){var _b="";if(_a){_b=_a.accessibility_description;}return _b;};nexacro.AccessibilityUtil.setDOMNodeLabel=function(_a,_b){_a.innerText=_b;};nexacro.AccessibilityUtil.getAccessibilityAdditionalLabel=function(_a){var _b="";if(_a){var _c=_a.linkedcontrol;_b=_c._on_getAccessibilityAdditionalLabel()+_c._on_getAccessibilityAdditionalRole();}return _b;};}else if(nexacro._accessibilitytype==3){nexacro.AccessibilityUtil.GridHotkeyList={};nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_HOME]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_END]=nexacro.AccessibilityUtil.Hotkey.LASTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_UP]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_DOWN]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_LEFT]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_RIGHT]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;nexacro.AccessibilityUtil._usetooltip=true;nexacro.AccessibilityUtil.getAccessibilityLabel=function(_a){var _b="";if(_a){_b=_a.accessibility_label;}return _b;};nexacro.AccessibilityUtil.getAccessibilityAction=function(_a){var _b="";if(_a){_b=_a.accessibility_action;}return _b;};nexacro.AccessibilityUtil.getAccessibilityDescription=function(_a){var _b="";if(_a){_b=_a.accessibility_description;}return _b;};nexacro.AccessibilityUtil.setDOMNodeLabel=function(_a,_b){_a.setAttribute("aria-live","assertive");_a.innerHTML=_b;};}else if(nexacro._accessibilitytype==4){nexacro.AccessibilityUtil.GridHotkeyList={};nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_HOME]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_END]=nexacro.AccessibilityUtil.Hotkey.LASTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_UP]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_DOWN]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_LEFT]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_RIGHT]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;nexacro.AccessibilityUtil._usetooltip=true;nexacro.AccessibilityUtil.getAccessibilityLabel=function(_a){var _b="";if(_a){_b=_a.accessibility_label;}return _b;};nexacro.AccessibilityUtil.getAccessibilityAction=function(_a){var _b="";if(_a){_b=_a.accessibility_action;}return _b;};nexacro.AccessibilityUtil.getAccessibilityDescription=function(_a){var _b="";if(_a){_b=_a.accessibility_description;}return _b;};nexacro.AccessibilityUtil.setDOMNodeLabel=function(_a,_b){_a.setAttribute("aria-live","assertive");_a.innerHTML=_b;};nexacro.AccessibilityUtil.supportMobileApplicationAccessibility=function(_a,_b){var _c=_a._linked_element;if(_c&&!_b){var _d=_c.parent.linkedcontrol;if((_d&&_d._is_component&&!_d._is_subcontrol&&!(_d._is_form&&_d.parent._is_frame)&&!_d._is_frame)){if(_d._accessibility_role!="spin"&&_d._accessibility_role!="grid"&&_d._accessibility_role!="treegrid"&&_d._accessibility_role!="radio"&&_d._accessibility_role!="textbox"&&_d._accessibility_role!="edit"&&_d._accessibility_role!="webbrowser"&&_d._accessibility_role!="form"){nexacro.__setDOMNodeAccessibilityHidden(_a,true);}}else if(_d&&(_d instanceof nexacro.ScrollBar)){nexacro.__setDOMNodeAccessibilityHidden(_a,true);}}else{nexacro.__setDOMNodeAccessibilityHidden(_a,true);}};nexacro.AccessibilityUtil.cancelTouchEvent=function(_a){var _b=_a?_a.linkedcontrol:null;if(!_b&&_a.parent){_b=_a.parent.linkedcontrol;if(_b){return _a.parent.accessibility_role=="link";}}};nexacro.AccessibilityUtil.getAccessibilityAdditionalLabel=function(_a){var _b="";if(_a){var _c=_a.linkedcontrol;if(_c&&(_c._has_inputElement||_c._input_element)){if(!_c.password){if(_c instanceof nexacro.Combo&&_c._accessibility_role=="combobox"){_b=(_c.value)?_c.text:(_c.displaynulltext)?_c.displaynulltext:"";}else{_b=(_c._primitivevalue)?_c._makeCalendarText(_c._primitivevalue):(_c.value)?"":(_c.displaynulltext)?_c.displaynulltext:"";}}}}return _b;};}else if(nexacro._accessibilitytype==5){nexacro.AccessibilityUtil.GridHotkeyList={};nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_HOME]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_END]=nexacro.AccessibilityUtil.Hotkey.LASTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_UP]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_DOWN]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_LEFT]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_RIGHT]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;nexacro.AccessibilityUtil._usetooltip=true;nexacro.AccessibilityUtil.getAccessibilityLabel=function(_a){var _b="";if(_a){_b=_a.accessibility_label;}return _b;};nexacro.AccessibilityUtil.getAccessibilityAction=function(_a){var _b="";if(_a){_b=_a.accessibility_action;}return _b;};nexacro.AccessibilityUtil.getAccessibilityDescription=function(_a){var _b="";if(_a){_b=_a.accessibility_description;}return _b;};nexacro.AccessibilityUtil.setDOMNodeLabel=function(_a,_b){_a.setAttribute("aria-live","assertive");_a.innerHTML=_b;};nexacro.AccessibilityUtil.supportMobileApplicationAccessibility=function(_a,_b){return;};nexacro.AccessibilityUtil.unsupportMobileApplicationAccessibility=function(_a,_b){return;};nexacro.AccessibilityUtil.cancelTouchEvent=function(_a){var _b=_a?_a.linkedcontrol:null;if(!_b&&_a.parent){_b=_a.parent.linkedcontrol;if(_b){return _a.parent.accessibility_role=="link";}}};nexacro.AccessibilityUtil.getAccessibilityAdditionalLabel=function(_a){var _b="";if(_a){var _c=_a.linkedcontrol;if(_c&&(_c._has_inputElement||_c._input_element)){if(!_c.password){if(_c._is_created){if(_c.usedecorate){_b=_c.displaytext;}else{_b=_c.text?_c.text:_c.displaynulltext;}}else{_b=(_c._primitivevalue)?_c._makeCalendarText(_c._primitivevalue):(_c.text)?_c.text:"";}}}}return _b;};}else{nexacro.AccessibilityUtil.GridHotkeyList={};nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_HOME]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_END]=nexacro.AccessibilityUtil.Hotkey.LASTCELL;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_UP]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_DOWN]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_LEFT]=nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL+" "+nexacro.Event.KEY_ALT+" "+nexacro.Event.KEY_SHIFT+" "+nexacro.Event.KEY_RIGHT]=nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;nexacro.AccessibilityUtil._usetooltip=true;nexacro.AccessibilityUtil.getAccessibilityLabel=function(_a){var _b="";if(_a){_b=_a.accessibility_label;}return _b;};nexacro.AccessibilityUtil.getAccessibilityAction=function(_a){var _b="";if(_a){_b=_a.accessibility_action;}return _b;};nexacro.AccessibilityUtil.getAccessibilityDescription=function(_a){var _b="";if(_a){_b=_a.accessibility_description;}return _b;};nexacro.AccessibilityUtil.setDOMNodeLabel=function(_a,_b){_a.setAttribute("aria-live","assertive");_a.innerHTML=_b;};}nexacro.AccessibilityUtil.checkComponentHotkey=function(_a,_b,_c,_d,_e){var _f="";var _g=null;if(_d){_f=_f+nexacro.Event.KEY_CTRL+" ";}if(_c){_f=_f+nexacro.Event.KEY_ALT+" ";}if(_e){_f=_f+nexacro.Event.KEY_SHIFT+" ";}_f=_f+_b;if(_a instanceof nexacro.Grid){_g=nexacro.AccessibilityUtil.GridHotkeyList;}if(_g){return _g[_f];}return nexacro.AccessibilityUtil.Hotkey.NONE;};nexacro.AccessibilityUtil.isUseTooltipText=function(){if(nexacro._enableaccessibility&&!nexacro.AccessibilityUtil._usetooltip){return false;}return true;};nexacro._createFrameNode=nexacro._destroyFrameNode=nexacro._emptyFn;