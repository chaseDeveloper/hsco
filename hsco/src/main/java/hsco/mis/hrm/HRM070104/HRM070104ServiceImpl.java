package hsco.mis.hrm.HRM070104;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM070104ServiceImpl.java
 * @Description     : 병가신청내역목록을 관리하는 서비스 구현체 클래스
 * @author          : 이수지
 * @since           : 2017. 12. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 06.      이수지              최초생성
 * </pre>  
 */
@Service("HRM070104Service")
public class HRM070104ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 병가신청내역 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUserInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070104DAO.selectUserInfo", inMap));
        outDataset.put("output01", outDsMap);
    }
    
    
    /**
     * 병가신청내역 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDissVcatnList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070104DAO.selectDissVcatnList", inMap));
        outDataset.put("output01", outDsMap);
    }
    
    /**
     * 병가 수정, 삭제, 등록 처리
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
    
    public int dissVcatnCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        DataSetMap list = (DataSetMap) inDataset.get("input01");
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			int existAt = 0;
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					existAt = (int)baseDao.select("HRM070104DAO.chkDate", map);
	                if(existAt == 0) {
	                	baseDao.insert("HRM070104DAO.dissVcatnListC", map);
	                }
	                else {
	                	String errMsg = (String) map.get("EMPNM") + "님의 기간이";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
	                break;
				case DataSet.ROW_TYPE_UPDATED :
					existAt = (int)baseDao.select("HRM070104DAO.chkDate", map);
	                if(existAt == 0) {
	                	iRow += baseDao.update("HRM070104DAO.dissVcatnListU", map);
	                }
	                else {
	                    String errMsg = (String) map.get("EMPNM") + "님의 기간이";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM070104DAO.dissVcatnListD", map);
                    break;
			}	
        }
        return iRow;
    }

    /**
     * 첨부파일 조회
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }
        
        String fileSn = "";
        if (!StringUtils.isEmpty(inMap.get("FILE_SN"))) {
            fileSn = (String) inMap.get("FILE_SN");
        }

        inMap.put("FILE_SN", fileSn);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
}
