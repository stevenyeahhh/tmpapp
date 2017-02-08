y=function(x){return Math.cos(x)-x }
y=function(x){return Math.exp(-x)-x }
function setTwoPoints(a,b,times){
	if(times>0){
		fa=y(a);
		fb=y(b);
		c=(a+b)/2;
		fc=y(c);
		distance=Math.abs(a-b);
		times--;
		console.log("fa:"+fa+"--fb:"+fb+"--fc:"+fc)
		if(fa>0 && fc<0){
			point= (a+c)/2;
			//point= (fa+fc)/2;
			console.info(times+":"+point+"=>1.");
			setTwoPoints(a,c,times);
		}
		if(fa<0 && fc>0){
			point= (a+c)/2;
			//point= (fa+fc)/2;
			console.info(times+":"+point+"=>2.");
			setTwoPoints(a,c,times);
		}
		if(fc>0 && fb<0){
			point= (b+c)/2;
			//point= (fb+fc)/2;
			console.info(times+":"+point+"=>3.");
			setTwoPoints(c,b,times);
		}
		if(fc<0 && fb>0){
			point= (b+c)/2;
			//point= (fb+fc)/2;
			console.info(times+":"+point+"=>4.");
			setTwoPoints(b,c,times);
		}

	}
}