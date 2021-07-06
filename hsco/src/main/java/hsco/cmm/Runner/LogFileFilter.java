package hsco.cmm.Runner;

import java.io.File;
import java.io.FilenameFilter;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LogFileFilter implements FilenameFilter {

	@Override
	public boolean accept(File dir, String name) {
		
		Date now = new java.util.Date();
		String date = new SimpleDateFormat("yyyy-MM-dd").format(now);
		
		return ( name.indexOf(date, 0) >= 0 );
	}

}
