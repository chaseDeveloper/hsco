package hsco.cmm.innerSanctn;

//import static java.lang.System.err;  // 개발 시에만 주석 해제
//import static java.lang.System.out;  // 개발 시에만 주석 해제

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
//import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.ui.Model;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.ria.nexacro.map.DataSetMap;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: InnerSanctionPostProcessor.java
 * @Description  	: 내부결재 후처리 호출 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *
 * </pre>  
 */
public class InnerSanctionPostProcessor {
	
	
	
	/**
	 * 후처리 호출 실행
	 * @param (String className, String methodName, BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) 
	 * @return void
	 */
	@SuppressWarnings("rawtypes")
	public static void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
		Logger log = LoggerFactory.getLogger(InnerSanctionPostProcessor.class);

		Map sanctnInfo = null; 
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		if (dsSetMap != null){
			sanctnInfo = dsSetMap.get(0);
		}
		if(log.isDebugEnabled()){
			log.info("################################################################################");
			log.info("#### INNER_SANCTN POSTPROCESS BEGIN                                         ####");
			log.info("################################################################################");
			log.info("#INNER_SANCTN_ID		:" + sanctnInfo.get("INNER_SANCTN_ID"));
			log.info("#INNER_SANCTN_MDL_ID  :" + sanctnInfo.get("INNER_SANCTN_MDL_ID"));
			log.info("#INNER_SANCTN_MDL_NM  :" + sanctnInfo.get("INNER_SANCTN_MDL_NM"));
			log.info("#SYS_SE_CODE          :" + sanctnInfo.get("SYS_SE_CODE"));
			log.info("#JOB_SE               :" + sanctnInfo.get("JOB_SE"));
			log.info("#JOB_KEY              :" + sanctnInfo.get("JOB_KEY"));
			log.info("#POSPROC_AT           :" + sanctnInfo.get("POSPROC_AT"));
			log.info("#POSPROC_CLASS        :" + sanctnInfo.get("POSPROC_CLASS"));
			log.info("#POSPROC_OPRTIN_NM    :" + sanctnInfo.get("POSPROC_OPRTIN_NM"));
			log.info("#USER_ID              :" + sanctnInfo.get("USER_ID"));
			log.info("#LAST_SANCTN_STTUS    :" + sanctnInfo.get("LAST_SANCTN_STTUS"));
			log.info("#LAST_SANCTNER_ID     :" + sanctnInfo.get("LAST_SANCTNER_ID"));
			log.info("################################################################################");
		}
		
		if(!"1".equals(sanctnInfo.get("POSPROC_AT"))){
			log.debug("후처리클래스 후처리여부 : "+sanctnInfo.get("POSPROC_AT"));
			return;
		}
		
		if("".equals(sanctnInfo.get("POSPROC_CLASS"))){
			log.debug("후처리클래스 미등록");
			return;
		}
		
		if("".equals(sanctnInfo.get("POSPROC_OPRTIN_NM"))){
			log.debug("후처리메소드 미등록");
			return;
		}
		
		String className = (String)sanctnInfo.get("POSPROC_CLASS"); 
		String methodName = (String)sanctnInfo.get("POSPROC_OPRTIN_NM");
		
		try {
			Class<?> claz = Class.forName(className);
			Object obj = claz.newInstance();
			Method method = claz.getMethod(methodName, new Class[]{BaseDao.class, DataSetMap.class, Map.class, Map.class, Map.class, Map.class});
			
			log.debug("후처리클래스 {}의  메소드 {}()를 호출합니다.", className, method);
			try {
				method.setAccessible(true);
				method.invoke(obj, new Object[]{baseDao, tranInfo, inVar, inDataset, outVar, outDataset});
			}catch (IllegalArgumentException e){
				Throwable cause = e.getCause();
				log.error("후처리클래스 {}의  메소드{}() 호출이 실패했습니다: {}", className, method, cause.getMessage());
			}catch(InvocationTargetException e){
				Throwable cause = e.getCause();
				if(cause == null){
					throw new IllegalStateException("IllegalStateException이 발생하였지만, 원인이 null입니다!", e);
				}else{
					if(cause instanceof RuntimeException){
						log.error("후처리클래스{}의  메소드{} 호출이 실패했습니다[InvocationTargetException] : {}", className, method, cause.getMessage());
						throw (RuntimeException) cause;
					}else if(cause instanceof Exception){
						log.error("후처리클래스 {}의  메소드{}() 호출이 실패했습니다: {}", className, method, cause.getMessage());
						e.printStackTrace(System.err);
					}
				}
			}
		} catch (InstantiationException e) {
			e.printStackTrace();
			log.error("InstantiationException : ", e.getCause().getMessage());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
			log.error("IllegalAccessException : ", e.getCause().getMessage());
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			log.error("ClassNotFoundException : ", e.getCause().getMessage());
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
			log.error("NoSuchMethodException : ", e.getCause().getMessage());
		} catch (SecurityException e) {
			e.printStackTrace();
			log.error("SecurityException : ", e.getCause().getMessage());
		}
	}
}