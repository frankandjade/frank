import java.util.ArrayList;
import java.util.List;

import javax.sound.midi.Sequence;


public class Jade<T> {

	public static void main(String[] args) {
		
	}
	
	public static <T extends Sequence> String getName(T a){
		return a.toString();
	}
}
