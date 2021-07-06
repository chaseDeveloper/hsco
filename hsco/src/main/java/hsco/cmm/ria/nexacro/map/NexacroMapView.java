package hsco.cmm.ria.nexacro.map;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.view.AbstractView;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformType;

import hsco.cmm.ria.nexacro.ConvertDataType;
import hsco.cmm.ria.nexacro.NexacroConstant;


/**
 * Map 형태의 DTO 들을 XPlatform Data에 맞게 변경하는 View
 * 
 * @author yimoc@tobesoft.com
 * 
 */
public class NexacroMapView extends AbstractView {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Override
	protected void renderMergedOutputModel(Map model,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		logger.debug("XPlatformView.renderMergedOutPutModel() start%%%");
		PlatformData platformData = new PlatformData();
		VariableList outVariableList = new VariableList();
		DataSetList outDatasetList = new DataSetList();

		setResult(model, outVariableList);
		setOutVariableMap(model, outVariableList);
		setOutDataSetMap(model, outDatasetList);

		platformData.setVariableList(outVariableList);
		platformData.setDataSetList(outDatasetList);

		logger.debug(platformData.saveXml());
		
		/** XML output 객체(PlatformResponse) 만들기 **/
		HttpPlatformResponse hPlatformRsp = new HttpPlatformResponse(response);
		hPlatformRsp.setCharset(PlatformType.DEFAULT_CHAR_SET);
		hPlatformRsp.setData(platformData);
		hPlatformRsp.sendData();
	}

	/**
	 * 결과 값을 셋팅한다.
	 * 
	 * @param model
	 * @param variabeList
	 */
	private void setResult(Map<String, Object> model, VariableList variabeList) {
		variabeList.add(NexacroConstant.ERROR_CODE,
				(String) model.get(NexacroConstant.ERROR_CODE));
		variabeList.add(NexacroConstant.ERROR_MSG,
				(String) model.get(NexacroConstant.ERROR_MSG));
	}

	@SuppressWarnings("rawtypes")
	public void setOutVariableMap(Map<String, Object> model, VariableList variabeList) {
		Map<String, Object> map = (Map<String, Object>) model .get(NexacroConstant.OUT_VARIABLES_ATT_NAME);

		if (map == null)
			return;
		
		/*
		// getKey("key") lookup을 entrySet iterator로 변경 by jdkim
		Set<String> keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			String key = iter.next();
			Object value = map.get(key);
			Variable var = makeVariable(key, value);
			variabeList.add(var);
		}
		*/
		
		Iterator entries = map.entrySet().iterator();
		while(entries.hasNext()){
			Map.Entry entry = (Map.Entry)entries.next();
			String key = (String)entry.getKey();
			Object value = entry.getValue();
			Variable var = makeVariable(key, value);
			variabeList.add(var);
		}
	}

	protected Variable makeVariable(String name, Object value) {
		Variable var = new Variable(name);
		int dataType = ConvertDataType.getPlatformDataType(value);
		var.setType(dataType);
		var.set(value);
		return var;
	}

	/*
	 * Map<String, List<Map>>
	 */
	@SuppressWarnings("rawtypes")
	public void setOutDataSetMap(Map<String, Object> model, DataSetList dataSetList) {
		// 여러개의 Datast으로 이루어져있다.
		Map <String, DataSetMap> map = (Map <String, DataSetMap>) model.get(NexacroConstant.OUT_DATASET_ATT_NAME);
		if (map == null)
			return;
        
		/*
		 // map.get(dsName)을 entrySet iterator로 변경 by jdkim
		Set keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			// 하나의 DataSet으로 이루어진 정보(List)를 꺼낸다.
			String dsName = iter.next();
			//DataSetMap dsMap = new DataSetMap();
			DataSetMap dsMap= map.get(dsName);
			DataSet ds = new DataSet(dsName);
			setDataSet(dsMap, ds);
			dataSetList.add(ds);
		}
		*/
		
		Iterator entries = map.entrySet().iterator();
		while(entries.hasNext()){
			Map.Entry entry = (Map.Entry)entries.next();
			String dsName = (String)entry.getKey();
			DataSetMap dsMap = (DataSetMap)entry.getValue();
			DataSet ds = new DataSet(dsName);
			setDataSet(dsMap, ds);
			dataSetList.add(ds);
		}

	}

	/**
	 * List 형태의 Map 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
	 * 
	 * @param datasetInfo
	 * @param ds
	 */
	private void setDataSet(DataSetMap datasetInfo, DataSet ds) {
		int rowIndex = 0;
		for (int i = 0; i < datasetInfo.size(); i++) {
			Set keySet = datasetInfo.getKeySet(i);
			if(keySet.contains(NexacroConstant.ONLY_METADATA_RETURN)){
				Iterator<String> iter2 = keySet.iterator();
				while (iter2.hasNext()) {
					String key = iter2.next();
					if(!key.equals(NexacroConstant.ONLY_METADATA_RETURN)){
						int value = (Integer)datasetInfo.getMapValue(i, key);
						if (ds.getColumn(key) == null) {
							ds.setChangeStructureWithData(true);
							ds.addColumn(key, ConvertDataType.getPlatformDataTypeFromSqlType(value));
						}
					}
				}				
				
			}else{
				rowIndex = ds.newRow();
				Iterator<String> iter2 = keySet.iterator();
				
				String typeName = null;
				
				while (iter2.hasNext()) {
					String key = iter2.next();
					Object value = datasetInfo.getMapValue(i, key);
					if (ds.getColumn(key) == null) {
						ds.setChangeStructureWithData(true);
						ds.addColumn(key, ConvertDataType.getPlatformDataType(value));
					}
					
					typeName = ConvertDataType.getDataType(value);
					if (typeName.equals(Boolean.class.getName())) {
						if((value.toString().toUpperCase()).equals("TRUE"))
							value = 1;
						else
							value = 0;
					}
					
					ds.set(rowIndex, key, value);
				}
			}
		}
	}
}