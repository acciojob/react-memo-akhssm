const ExpensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;

  for (let i = 0; i < 10000000; i++) {
    result += num * 2;
  }

  return result;
};

export default ExpensiveCalculation;
