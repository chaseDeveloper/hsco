package hsco.cmm.messenger;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("UcMessengerService")
public class UcMessengerServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(UcMessengerServiceImpl.class);

	/**
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void sendMessage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		try {
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				baseDao.insert("UcMessengerDAO.sendMessage", map);
			}
		} catch (Exception e) {
			throw new NexaServiceException("info.처리불가", "메시지 전달 과정중에 오류가 발생하였습니다");
		}
	}

	/**
	 * 
	 * @param value
	 * @param map
	 * @throws NexaServiceException
	 */
	public void sendMessage(String recvIds, String subject, String contents) {
		
		try {
			Map<String,String> map = new HashMap<String,String>();
			map.put("SYSTEM_NAME"	,"경영정보시스템");
			map.put("RECV_IDS"		, recvIds);
			map.put("SUBJECT"		, subject);
			map.put("CONTENTS"		, contents);
			
			baseDao.insert("UcMessengerDAO.sendMessage", map);
		} catch(Exception e) {
			log.error("sendMessage2 - 메시지 전달 과정중에 오류가 발생하였습니다");
		}
		
	}

}
