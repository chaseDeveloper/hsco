/*
* jQuery pager plugin
* Version 1.0 (12/22/2008)
* @requires jQuery v1.2.6 or later
*
* Example at: http://jonpauldavies.github.com/JQuery/Pager/PagerDemo.html
*
* Copyright (c) 2008-2009 Jon Paul Davies
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* Read the related blog post and contact the author at http://www.j-dee.com/2008/12/22/jquery-pager-plugin/
*
* This version is far from perfect and doesn't manage it's own state, therefore contributions are more than welcome!
*
* Usage: .pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PagerClickTest });
*
* Where pagenumber is the visible page number
*       pagecount is the total number of pages to display
*       buttonClickCallback is the method to fire when a pager button is clicked.
*
* buttonClickCallback signiture is PagerClickTest = function(pageclickednumber) 
* Where pageclickednumber is the number of the page clicked in the control.
*
* The included Pager.CSS file is a dependancy but can obviously tweaked to your wishes
* Tested in IE6 IE7 Firefox & Safari. Any browser strangeness, please report.
*/
(function($) {
    $.fn.pager = function(options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);
        return this.each(function() {
        	// empty out the destination element and then render out the pager with the supplied options
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            // specify correct cursor activity
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };

    // render and return the pager with the supplied options
    function renderpager(pagenumber, pagecount, buttonClickCallback) {
    	var pageSize = 10;
        // setup $pager to hold render
        var $pager = $('<div class="pagination"></div>');
        var prevPageNumber = 0;
        var nextPageNumber = 0;
        
        if(pagenumber % pageSize > 0){
        	prevPageNumber = Math.floor(pagenumber / pageSize) * pageSize;
        	nextPageNumber = (Math.floor(pagenumber / pageSize)) * pageSize+1;
        } else {
        	prevPageNumber = (Math.floor(pagenumber / pageSize)-1) * pageSize;
        	nextPageNumber = (Math.floor(pagenumber / pageSize)-1) * pageSize+1;
        }
        
        if(prevPageNumber < 1){
        	prevPageNumber = 1;
        }
        
        if (nextPageNumber > pagecount) {
        	nextPageNumber = pagecount;
        }
        // add in the previous and next buttons
        $pager.append(renderButton('<span class="first">맨처음으로</span>', pagenumber, pagecount, buttonClickCallback)).append(renderButton('<span class="prev mr_10">이전페이지</span>', prevPageNumber, pagecount, buttonClickCallback));

        // pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
        var startPoint = 1;
        var endPoint = 10;
        
        /*
        if (pagenumber > 4) {
            startPoint = pagenumber - 4;
            endPoint = pagenumber + 4;
        }

        if (endPoint > pagecount) {
            startPoint = pagecount - 8;
            endPoint = pagecount;
        }
		*/
        if(pagenumber % pageSize > 0){
        	startPoint = Math.floor(pagenumber / pageSize) * pageSize + 1;
        	endPoint = Math.floor(pagenumber / pageSize) * pageSize + pageSize;
        } else {
        	startPoint = (Math.floor(pagenumber / pageSize)-1) * pageSize + 1;
        	endPoint = (Math.floor(pagenumber / pageSize)-1) * pageSize + pageSize;
        }
    	if (startPoint < 1) {
            startPoint = 1;
        }
        if (endPoint > pagecount) {
            endPoint = pagecount;
        }
		// loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {
        	var currentButton = null;
        	if(page == pagenumber){
        		currentButton = $('<strong>' + (page) + '</strong>');
        	}else{
        		currentButton = $('<a class="bgNone" href="#" onclick="return false;">' + (page) + '</a>');
        	}

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager);
        }
        // render in the next and last buttons before returning the whole rendered control back.
        //$pager.append(renderButton('<span class="next ml_10"></span>', pagenumber, pagecount, buttonClickCallback)).append(renderButton('<span class="last"></span>', nextPageNumber, pagecount, buttonClickCallback));
        $pager.append(renderButton('<span class="next ml_10">다음페이지</span>', nextPageNumber, pagecount, buttonClickCallback)).append(renderButton('<span class="last">맨마지막으로</span>', nextPageNumber, pagecount, buttonClickCallback));

        return $pager;
    }

    // renders and returns a 'specialized' button, ie 'next', 'previous' etc. rather than a page number button
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<a class="direction bgNone" href="#" onclick="return false;">' + buttonLabel + '</a>');
        var destPage = 1;
        var pageSize = 10;
        // work out destination page for required button type
        switch (buttonLabel) {
            case '<span class="first">맨처음으로</span>':
                destPage = 1;
                break;
            case '<span class="prev mr_10">이전페이지</span>':
                //destPage = pagenumber - 1;
            	//destPage = pagenumber - pageSize;
            	destPage = pagenumber;
            	break;
            case '<span class="next ml_10">다음페이지</span>':
                //destPage = pagenumber + 1;
            	destPage = pagenumber + pageSize;
            	//destPage = pagenumber;
            	if(destPage > pagecount){
            		destPage = pagecount;
            	}
                break;
            case '<span class="last">맨마지막으로</span>':
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == '<span class="first">맨처음으로</span>' || buttonLabel == '<span class="prev mr_10">이전페이지</span>') {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        } else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }

        return $Button;
    }

    // pager defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };
    
    PageClick = function(pageclickednumber) {
    	//$("#pager").pager({ pagenumber: pageclickednumber, pagecount: pagecount, buttonClickCallback: PageClick });
        fnLinkPage(pageclickednumber);
    };
})(jQuery);





