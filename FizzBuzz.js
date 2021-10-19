const multOfThree = (num) => {
  const div = parseInt(num / 3);
  return num === div * 3;
}

const multOfFive = (num) => {
  const div = parseInt(num / 5);
  return num === div * 5;
}

for (let numCount = 0; numCount<101; numCount++){  
    if (multOfFive(numCount) && multOfThree(numCount)){
    		console.log('FizzBuzz')
    } else if (multOfThree(numCount)){
      console.log('Fizz');
    } else if (multOfFive(numCount)){
        console.log('Buzz')
    } else {
      console.log(numCount);
    }
};
