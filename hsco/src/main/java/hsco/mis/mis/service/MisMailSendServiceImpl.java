package hsco.mis.mis.service;

import java.io.File;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.activation.FileDataSource;
import javax.annotation.Resource;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import javax.servlet.ServletContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.context.ServletContextAware;

import hsco.cmm.service.BaseService;

@Service("misMailSendService")
public class MisMailSendServiceImpl extends BaseService implements ServletContextAware {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "javaMailSender")
	private JavaMailSenderImpl javaMailSender;
	
	@Resource(name="mailMessageSource")
	ReloadableResourceBundleMessageSource mailMessageSource;
	 
	private ServletContext servletContext;
	
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}
	
	/**
	 * 메일발송(단건)
	 * @param reciveEmailAddr		수신자 e-mail
	 * @param reciveCustName		수신자 성명
	 * @param sendMailAddr			송신자 e-mail
	 * @param sendMailName			송신자 성명
	 * @param sendMailTitle			메일제목
	 * @param template				메일템플릿
	 * @param contents				메일템플릿 Arguments 
	 * @param fileSn				첨부파일 일련번호
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String sendMail(String reciveEmailAddr, String reciveCustName, String sendMailAddr, String sendMailName, String sendMailTitle,
			String template, String[] contents, String fileSn) {
		try {

			File attachFile 			= null;
			String sendMailContents 	= mailMessageSource.getMessage(template, contents, Locale.getDefault());
			MimeMessage message 		= javaMailSender.createMimeMessage();
			MimeMessageHelper helper 	= new MimeMessageHelper(message, true, "UTF-8");

			helper.setFrom(new InternetAddress(sendMailAddr, sendMailName, "UTF-8"));
			helper.setTo(new InternetAddress(reciveEmailAddr, reciveCustName, "UTF-8"));
			helper.setSubject(sendMailTitle);
			helper.setText(sendMailContents, true);

			if(fileSn != null && !"".equals(fileSn)) {
				List<Map<String,Object>> list = (List<Map<String, Object>>) baseDao.list("MIS000000DAO.atchFileList", fileSn);
				for(Map<String,Object> map : list) {
					String savePath 	= (String)map.get("FILE_STRE_COURS");
					String saveFilename	= (String)map.get("STRE_FILE_NM");
					String orginlFileNm = (String)map.get("ORGINL_FILE_NM"); 
					String fileExtsn = (String)map.get("FILE_EXTSN");//파일 확장자
					String repoFilePath = savePath + File.separator + saveFilename+"."+fileExtsn; 
					attachFile = new File(repoFilePath); 
					if(attachFile.exists()) {						
						helper.addAttachment(MimeUtility.encodeText(orginlFileNm, "UTF-8", "B"), new FileDataSource(attachFile));
					}
				}
			} 

			String rootPath = servletContext.getRealPath("/");
			helper.addInline("id_bg_content"	, new FileSystemResource(new File(rootPath + "mail/images/bg_content.gif")));
			helper.addInline("id_bg_title"		, new FileSystemResource(new File(rootPath + "mail/images/bg_title.gif")));
			helper.addInline("id_icon_arrow"	, new FileSystemResource(new File(rootPath + "mail/images/icon_arrow.gif")));
			helper.addInline("id_icon_file"		, new FileSystemResource(new File(rootPath + "mail/images/icon_file.gif")));
			helper.addInline("id_mail_bottom"	, new FileSystemResource(new File(rootPath + "mail/images/mail_bottom.gif")));
			helper.addInline("id_mail_header"	, new FileSystemResource(new File(rootPath + "mail/images/mail_header.jpg")));
	
			javaMailSender.send(message);			

			return null;
		} catch (Exception e) {
			log.error("메일발송에러", e);
			return e.toString();
		}
	}
	
	/**
	 * 메일발송(대량)
	 * @param interAddr
	 * @param sendMailAddr
	 * @param sendMailName
	 * @param sendMailTitle
	 * @param template
	 * @param contents
	 * @param fileSn
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String sendMail(InternetAddress[] interAddr, String sendMailAddr, String sendMailName, String sendMailTitle,
			String template, String[] contents, String fileSn) {
		try {
			
			File attachFile 			= null;
			String sendMailContents 	= mailMessageSource.getMessage(template, contents, Locale.getDefault());
			MimeMessage message 		= javaMailSender.createMimeMessage();
			MimeMessageHelper helper 	= new MimeMessageHelper(message, true, "UTF-8");

			helper.setFrom(new InternetAddress(sendMailAddr, sendMailName, "UTF-8"));
			helper.setTo(interAddr);
			helper.setSubject(sendMailTitle);
			helper.setText(sendMailContents, true);

			if(fileSn != null && !"".equals(fileSn)) {
				List<Map<String,Object>> list = (List<Map<String, Object>>) baseDao.list("MIS000000DAO.atchFileList", fileSn);
				for(Map<String,Object> map : list) {
					String savePath 	= (String)map.get("FILE_STRE_COURS");
					String saveFilename	= (String)map.get("STRE_FILE_NM");
					String orginlFileNm = (String)map.get("ORGINL_FILE_NM");
					String fileExtsn = (String)map.get("FILE_EXTSN");//파일 확장자
					String repoFilePath = savePath + File.separator + saveFilename+"."+fileExtsn;
					attachFile = new File(repoFilePath);
					if(attachFile.exists()) {
						helper.addAttachment(MimeUtility.encodeText(orginlFileNm, "UTF-8", "B"), new FileDataSource(attachFile));
					}
				}
			}

			String rootPath = servletContext.getRealPath("/");
			helper.addInline("id_bg_content"	, new FileSystemResource(new File(rootPath + "mail/images/bg_content.gif")));
			helper.addInline("id_bg_title"		, new FileSystemResource(new File(rootPath + "mail/images/bg_title.gif")));
			helper.addInline("id_icon_arrow"	, new FileSystemResource(new File(rootPath + "mail/images/icon_arrow.gif")));
			helper.addInline("id_icon_file"		, new FileSystemResource(new File(rootPath + "mail/images/icon_file.gif")));
			helper.addInline("id_mail_bottom"	, new FileSystemResource(new File(rootPath + "mail/images/mail_bottom.gif")));
			helper.addInline("id_mail_header"	, new FileSystemResource(new File(rootPath + "mail/images/mail_header.jpg")));
			
			javaMailSender.send(message);

			return null;
		} catch (Exception e) {
			log.error("메일발송에러", e);
			return e.toString();
		}
	}
	
}
