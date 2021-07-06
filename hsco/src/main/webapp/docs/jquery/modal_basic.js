/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();
	
	/*
	 * 리스트 추가 시  port_area 안에 ul 을 추가 한다.
	 * 주의할점
	 * id 는  유동적 이고 class 는 고정적이다
	 * class 명은 건들지 않는다.
	 * 모달 창의 내용은 추가 시 basic-modal-content_01 넘버 +1 
	 */
	$(".modal_btn").click(function(idx){ 
		$('#basic-modal-'+$(this).attr("id")).modal();
	});
	  
});
 