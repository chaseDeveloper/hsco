package hsco.com.sym.not.SYM100101;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
* &#64;Project Name 	: 화성도시공사 차세대정보시스템
* &#64;Class Name   	: SYM100101ServiceImpl.java
* &#64;Description  	: 공지 관리하는 서비스 구현체 클래스
* &#64;author       	: 정 민
* &#64;since        	: 2018. 3. 16.
* &#64;version      	: 1.0
* &#64;see          	: 
* &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
* <pre>
* ------------------------------------------------------------------
* Modification Information 
* ------------------------------------------------------------------
*   작성일                        작성자                내용
* ------------------------------------------------------------------
 * 
 * </pre>
 */

@Service("SYM100101Service")
public class SYM100101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(SYM100101ServiceImpl.class);

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 공지목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNoticeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("SYM100101DAO.selectNoticeList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}

	/**
	 * 공지 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public int noticeCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		if (listSize > 0) {
			for (int x = 0; x < listSize; x++) {

				Map map = list.get(x);

				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

				switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SYM100101DAO.noticeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("SYM100101DAO.noticeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("SYM100101DAO.noticeD", map);
					break;
				default:
					break;
				}

			}
		}

		return iRow;

	}
}