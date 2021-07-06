package hsco.cmm.web;

import javax.servlet.ServletContext;

import org.springframework.web.context.ServletContextAware;

import egovframework.rte.ptl.mvc.tags.ui.pagination.AbstractPaginationRenderer;
/**
 * ImagePaginationRenderer.java 클래스
 *
 * @author 권재만
 * @since 2020. 6. 22.
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *
 *   수정일      수정자           수정내용
 *  -------    -------------    ----------------------
 *   2020. 6. 22.   권재만       오산 portal 페이징소스 참고
 * </pre>
 */
public class ImagePaginationRenderer extends AbstractPaginationRenderer implements ServletContextAware{

	private ServletContext servletContext;

	public ImagePaginationRenderer() {

	}

	public void initVariables(){

		firstPageLabel 		= "";
		previousPageLabel 	= "";
		currentPageLabel 	= "";
		otherPageLabel 		= "";
		nextPageLabel 		= "";
		lastPageLabel 		= "";

		firstPageLabel 		+= "		<a href=\"?pageIndex={1}\" onclick=\"{0}({1});return false; \" class=\"arrow prev_dub\"><span class=\"blind\">처음으로</span></a>";

		previousPageLabel 	+="			<a id=\"page_first_a\" href=\"?pageIndex={1}\" onclick=\"{0}({1});return false; \" class=\"arrow prev\"><span class=\"blind\">이전 페이지로</span></a>";

		currentPageLabel  	+="			<a href=\"#a\" class=\"active\">{0}</a>";

		otherPageLabel	  	+="			<a href=\"?pageIndex={1}\" onclick=\"{0}({1});return false; \">{2}</a>";

		nextPageLabel	  	+="			<a id=\"page_last_a\" href=\"?pageIndex={1}\" onclick=\"{0}({1});return false; \" class=\"arrow next\"><span class=\"blind\">다음 페이지로</span></a>";
		
		lastPageLabel	  	+="			<a href=\"?pageIndex={1}\" onclick=\"{0}({1});return false; \" class=\"arrow next_dub\"><span class=\"blind\">맨끝으로</span></a>";

	}

	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
		initVariables();
	}

}
