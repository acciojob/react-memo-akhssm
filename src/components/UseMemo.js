const ExpensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;

  // Can reduce the number for faster dev testing
  for (let i = 0; i < 10000000; i++) {
    result += num * 2;
  }

  return result;
};

export default ExpensiveCalculation;
