function factorial(ab){
	if(ab>0){
		ab = Math.floor(ab);
		for(i=ab-1; i>0; i--){
			ab = ab*(i);
		}
		return ab;
	}
	else {
		return null;
	}
};