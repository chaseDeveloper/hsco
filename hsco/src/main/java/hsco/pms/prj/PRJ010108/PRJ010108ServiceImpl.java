package hsco.pms.prj.PRJ010108;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010108ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 10. 31.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 31.                  이수지                최초생성
 * </pre>
 */

@Service("PRJ010108Service")
public class PRJ010108ServiceImpl extends BaseService implements PRJ010108Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDsMain(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010108DAO.selectDs_Root", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDsSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010108DAO.selectDs_Sub", inMap));
        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveDsMain(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                map.put("BZ_PCP_SN", baseDao.select("PRJ010108DAO.createBzPcpSn"));
                baseDao.insert("PRJ010108DAO.insertDs_Root", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("PRJ010108DAO.updateDs_Root", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("PRJ010108DAO.deleteDs_Root", map);
                break;
            }
        }
        
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                map.put("BZ_PCP_SN", baseDao.select("PRJ010108DAO.createBzPcpSn"));
                baseDao.insert("PRJ010108DAO.insertDs_Root", map);
                baseDao.update("PRJ010108DAO.updateFstBzPcpSn", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("PRJ010108DAO.updateDs_Root", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("PRJ010108DAO.deleteDs_Root", map);
                break;
            }
        }
    }

    /**
     * 파일 조회
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010108DAO.selectCtgryFile", inMap));
        outDataset.put("output1", outDsMap);
    }

    /**
     * 첨부파일 수정사항 저장
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        List<Map> resultList = new ArrayList<Map>();
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                case DataSet.ROW_TYPE_UPDATED:
                    String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
                    if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
                        ctgryFileId = (String) baseDao.select("PRJ010108DAO.getCtgryFileId", map);
                        map.put("CTGRY_FILE_ID", ctgryFileId);
                        baseDao.insert("PRJ010108DAO.insertCtgryFile", map);
                        
                        String docSn = (String) map.get("DOC_SN");
                        if (StringUtils.isEmpty(docSn) || "".equals(docSn)) {
                            docSn = (String) baseDao.select("PRJ010108DAO.getDocSn", map);
                            map.put("DOC_SN", docSn);
                            baseDao.update("PRJ010108DAO.updateDocSn", map);        // 문서번호 갱신(부모테이블)
                        }
                        baseDao.insert("PRJ010108DAO.insertDocRgs", map);       // 문서 등록 추가
                    }

                    
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("PRJ010108DAO.deleteCtgryFile", map);
                    baseDao.delete("PRJ010108DAO.deleteDocRgs", map);
                    /*

                    map.put("DOC_SN", "");

                    // 문서번호 갱신(부모테이블)
                    baseDao.update("PRJ010108DAO.updateDocSn", map);
                    */
                    break;
            }
            resultList.add(map);
        }

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(resultList);
        outDataset.put("output1", outDsMap);
    }
}
