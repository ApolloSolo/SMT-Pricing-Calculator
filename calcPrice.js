const calcCurrent = document.getElementById("calc-current");
const currentState = document.getElementById("currentState");

const c = (el) => {
  console.log(el);
  console.log(typeof el);
};

const calcCurrentData = () => {
  //Inputs
  const currentHaulsPerMonthEl = parseFloat(
    document.getElementById("currentHaulsPerMonth").value.trim()
  );
  const numBins = parseFloat(document.getElementById("numBins").value.trim());

  //Outputs
  const currentWeekHaulsEl = document.getElementById("currentWeekHauls");
  currentWeekHaulsEl.textContent = currentHaulsPerMonthEl / 4;

  const currentMonthHauls = document.getElementById("currentMonthHauls");
  let currentMonthHaulsValue =  numBins * currentHaulsPerMonthEl;
  currentMonthHauls.textContent = currentMonthHaulsValue;

  // Cost Inputs
  const currentPerHaulCost = parseFloat(
    document.getElementById("currentPerHaulCost").value.trim()
  );

  // Cost Output

  const currentMonthHaulCostEl = document.getElementById("currentMonthHaulCost");
  let currentMonthHaulCostValue = currentPerHaulCost * currentMonthHaulsValue;
  currentMonthHaulCostEl.textContent = currentMonthHaulCostValue

  const currentAnualHaulCost = document.getElementById("currentAnualHaulCost");
  currentAnualHaulCost.textContent = (currentMonthHaulCostValue * 12).toFixed(1)

  //Remove hide class
  currentState.classList.remove("hide");

  // Value Outputs
  const compactionRatioValue = parseFloat(document.getElementById("compRate").value.trim())/100;
  const futureMonthHaulsEl = document.getElementById("futureMonthHauls")
  let futureMonthHaulsValue = ((1 - compactionRatioValue) * currentMonthHaulsValue).toFixed(1)
  futureMonthHaulsEl.textContent = futureMonthHaulsValue

  const eliminatedHauls = document.getElementById('eliminatedHauls');
  let eliminatedHaulsValue = (currentMonthHaulsValue - futureMonthHaulsValue).toFixed(1)
  c(eliminatedHaulsValue);
  eliminatedHauls.textContent = eliminatedHaulsValue
};


calcCurrent.addEventListener('click', calcCurrentData);