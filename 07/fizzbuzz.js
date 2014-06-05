function fizzbuzz(ab){
	if(!isNaN(ab)){
		if(ab%15 == 0){
			return "fizzbuzz";
		}
		else if(ab%3 == 0){
			return "fizz";
		}
	    else if(ab%5 == 0){
		    return "buzz";
		}
		else{
		    return ab;
		}
	 }
	}
