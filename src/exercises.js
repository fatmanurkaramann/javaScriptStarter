function friendsNumber(number1, number2) {
  const firstPositiveDividorSum = controlFunction(number1);
  const secondPositiveDividorSum = controlFunction(number2);

  if (
    number1 === secondPositiveDividorSum &&
    number2 === firstPositiveDividorSum
  ) {
    console.log(`${number1} ve ${number2} friends number`);
  } else {
    console.log(`${number1} ve ${number2} not friends number`);
  }
}
const controlFunction = (number) => {
  let positiveDividorSum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      positiveDividorSum += 1;
    }
  }
  return positiveDividorSum;
};
friendsNumber(220, 284);

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    if (numbers[i] < 0) {
      isPrime = false;
      console.log(numbers[i] + " asal değil");
    }
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        isPrime = false;
        console.log(numbers[i] + " asal değil");
      }
    }
    if (isPrime == true) {
      console.log(numbers[i] + " sayı asal");
    }
  }
}
findPrime(3, 5, -4, 8, 9, 86, 46, 17);

function isPerfectNumber(number) {
  let positiveDividorSum = 0;

  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      positiveDividorSum += i;
    }
  }
  if (positiveDividorSum === number) {
    return true;
  } else {
    return false;
  }
}

let perfectNumbers=[]
for (let i = 0; i < 1000; i++) {
  let isPerfect=isPerfectNumber(i)
  if(isPerfect==true){
    perfectNumbers.push(i)
  }
  
}
console.log(perfectNumbers)

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    if (numbers[i] <= 1 ) {
      isPrime = false;
      console.log(numbers[i] + " asal değil");
    }
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        return false;
      }
    }
    if (isPrime == true) {
     return true
    }
  }
}
let primeNumbers=[]
for (let i = 0; i < 50; i++) {
  let isPrime=findPrime(i)
  if(isPrime==true){
    primeNumbers.push(i)
  }
  
}
console.log("prime number: "+primeNumbers)