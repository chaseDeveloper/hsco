package hsco.pms.cmp.Common;

public class TblInfoVo {
	String tableNm;
	String columnNm;
	
	public TblInfoVo(String tableNm, String columnNm){
		this.tableNm = tableNm;
		this.columnNm = columnNm;
		if(columnNm.equals("OWNER_SN")){
			System.out.println("columnNm : " + columnNm);
		}
	}
	public String getTableNm() {
		return tableNm;
	}
	public void setTableNm(String tableNm) {
		this.tableNm = tableNm;
	}
	public String getColumnNm() {
		return columnNm;
	}
	public void setColumnNm(String columnNm) {
		this.columnNm = columnNm;
	}
	
}
