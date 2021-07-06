package hsco.cmm.sanc.service;

import java.util.Map;

import hsco.cmm.dao.BaseDao;

public interface SancAfterProcService {
/*
        
[1 상신] - 기안 서명후
sh /newhandy/handy83/tomcat6/webapps/qdb-linkage/WEB-INF/sh/SancCall.sh $FormName$ $EmpNo$ $DeptCode$ 1 $MISKEY$ $ApprId$  http://10.50.10.145/hsco/cmm/sanc/result.do


[2 반려] - 반송 서명 후
sh /newhandy/handy83/tomcat6/webapps/qdb-linkage/WEB-INF/sh/SancCall.sh $FormName$ $EmpNo$ $DeptCode$ 2 $MISKEY$ $ApprId$  http://10.50.10.145/hsco/cmm/sanc/result.do


[3 취소] - 결재취소 직후
sh /newhandy/handy83/tomcat6/webapps/qdb-linkage/WEB-INF/sh/SancCall.sh $FormName$ $EmpNo$ $DeptCode$ 3 $MISKEY$ $ApprId$  http://10.50.10.145/hsco/cmm/sanc/result.do


[4 중간결재] - 중간결재 서명 후
sh /newhandy/handy83/tomcat6/webapps/qdb-linkage/WEB-INF/sh/SancCall.sh $FormName$ $EmpNo$ $DeptCode$ 4 $MISKEY$ $ApprId$  http://10.50.10.145/hsco/cmm/sanc/result.do


[5 완료] - 최종결재 서명 후, 기안자 전결 서명후
sh /newhandy/handy83/tomcat6/webapps/qdb-linkage/WEB-INF/sh/SancCall.sh $FormName$ $EmpNo$ $DeptCode$ 5 $MISKEY$ $ApprId$  http://10.50.10.145/hsco/cmm/sanc/result.do
*/
	
	/**
	 * [1 상신] - 기안 서명후
	 * @param baseDao TODO
	 * @param pMap TODO
	 */
	public void sancAfterProc_01(BaseDao baseDao, Map<String, Object> pMap);
	
	/**
	 * [2 반려] - 반송 서명 후
	 * @param baseDao TODO
	 * @param pMap TODO
	 */
	public void sancAfterProc_02(BaseDao baseDao, Map<String, Object> pMap);
	
	/**
	 * [3 취소] - 결재취소 직후
	 * @param baseDao TODO
	 * @param pMap TODO
	 */
	public void sancAfterProc_03(BaseDao baseDao, Map<String, Object> pMap);
	
	/**
	 * [4 중간결재] - 중간결재 서명 후
	 * @param baseDao TODO
	 * @param pMap TODO
	 */
	public void sancAfterProc_04(BaseDao baseDao, Map<String, Object> pMap);
	
	/**
	 * [5 완료] - 최종결재 서명 후, 기안자 전결 서명후
	 * @param baseDao TODO
	 * @param pMap TODO
	 */
	public void sancAfterProc_05(BaseDao baseDao, Map<String, Object> pMap);
}
