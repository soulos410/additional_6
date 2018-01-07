module.exports = function zeros(expression) {
  let splitedArray = expression.split('*');
  let countFive = 0;
  let countTwo = 0;

  splitedArray.forEach(function(item){
  	let number = parseInt(item);
  	while(number > 0){
  		let bufferNumber = number;
  		while(true){
  		if (bufferNumber % 5 === 0) {
  			bufferNumber /= 5;
  			countFive++;
  		}
  		else if (bufferNumber % 2 === 0) {
  			bufferNumber /= 2;
  			countTwo++;
  		}
  		else break;
  	}
  	if(item.slice(item.length-2,item.length) === '!!')
  	{
  		number -= 2;
  	}
  	else
  	{
  		number--;
  	}

  }; 
});
 	return Math.min(countFive,countTwo); 
}
