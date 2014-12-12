public class ThreadDemo extends Thread {

	private String name;

	public ThreadDemo(String name) {
		this.name = name;
	}

	@Override
	public synchronized void run() {

		for (int i = 0; i < 10000; i++) {
			 System.out.println(name + " : :" + i);
		}
		
		super.run();
	}

	public void sop(String param) {
		synchronized (param) {
			System.out.println("hello world!");			
		}
	}

}
