package hsco.cmm.file;

import java.util.Map;

import javax.annotation.Resource;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;

@Repository("fileUploadDAO")
public class FileUploadDao extends BaseDao {
	/** Log 생성*/
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    
	
	@Resource(name = "sqlMapClient")
    public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {
        //super.setSqlMapClient(sqlMapClient);
        super.setSuperSqlMapClient(sqlMapClient);
    }
	
	/**
	 * 파일첨부 시퀀스 가져오기
	 * @param 
	 * @return Long
	 */
	public Long selectFileSn() throws NexaDaoException{
		log.info("====== "+this.getClass().getName()+".selectFileSn 시작 ======");			
		return (Long)select("fileUploadDAO.selectFileSn");
	}
	/**
	 * 파일순차 가져오기
	 * @param Long fileSn 파일일련번호
	 * @return Integer
	 */
	public Integer selectFileOrdr(Map fileSn)  throws NexaDaoException{
		log.info("====== "+this.getClass().getName()+".selectFileOrdr 시작 ======");
		return (Integer)select("fileUploadDAO.selectFileOrdr", fileSn);
	}
}
