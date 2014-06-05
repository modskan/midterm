function findFirstEvenNumber(ab){
	if(ab instanceof Array){
		retunValue = null;

		for(i=0; i<10; i++){
			if(ab[i]%2 == 0){
				retunValue = ab[i];
				i=100;
			}
		}
	  return retunValue;
	}
};