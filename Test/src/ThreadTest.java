import java.util.Arrays;


public class ThreadTest {
	public static void main(String[] args) throws InterruptedException {
		ThreadDemo t = new ThreadDemo("丫头");
		t.start();
		Thread.currentThread().sleep(100);
		t.interrupt();
		System.out.println(t.interrupted());
		//t.sop("jade");
		//Thread.dumpStack();
		//OutputStreamWriter out = new OutputStreamWriter(System.err);
		//System.out.println(out);
		Thread[] tArray = new Thread[Thread.activeCount()];
		int num = Thread.enumerate(tArray);
		System.out.println( "线程复制 　  	 ：" + Arrays.toString(tArray));
		System.out.println("当前线程  	: " + Thread.currentThread());
		ClassLoader loader = t.getContextClassLoader();
		System.out.println("ClassLoader 	: " + loader);
		System.out.println("线程标示符 	: " + t.getId());
		System.out.println("线程名称		:" + t.getName());
		System.out.println("线程优先级	:" + t.getPriority());
		System.out.println("线程状态		:" + t.getState());
		ThreadGroup group = t.getThreadGroup();
		System.out.println("线程组		:" + group);//主线程有线程组[name=main,maxpri=10]
		System.out.println("当前线程是否被指定锁监视		:" + Thread.holdsLock("jade"));
		System.exit(0);
		sop();
	}

	private static void sop() {
		for(int i = 0;i<10000;i++){
			System.out.println("虞琪");
		}
	}
}
