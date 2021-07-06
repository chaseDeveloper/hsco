package hsco.cmm.Runner;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BzQueue.java
 * @Description  	: 로그서비스데몬에서 사용하는 메시지큐 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.					정윤원				최초생성
 * </pre>
 */
public class BzQueue {
	
	
	private List<Object>		list;
	
	public BzQueue()
	{
		this(false);
	}

	public BzQueue(boolean bSync)
	{	
		list = bSync ? Collections.synchronizedList(new LinkedList()): new LinkedList();
	}

	public void enqueue(Object pObject)
	{
		list.add(pObject);
	}

	public Object dequeue()
	{
		return list.size() > 0 ? list.remove(0) : null;
	}

	public boolean remove(Object o){
		return list.remove(o);
	}
	
	public int size()
	{
		return list.size();
	}

	public void clear()
	{
		list.clear();
	}

}
