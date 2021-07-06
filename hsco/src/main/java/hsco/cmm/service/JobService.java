package hsco.cmm.service;

import javax.annotation.Resource;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.dao.BatchDao;


public class JobService  {
	
    
	
    @Resource(name="BatchDao")
	protected BatchDao batchDao;
    
    public SqlMapClientDaoSupport getDao() {
		return batchDao.getDao();
	}

  
    
    
}