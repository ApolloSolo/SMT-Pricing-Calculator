const calcCurrent = document.getElementById("calc-current");
const container = document.getElementById("container");

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
  container.classList.remove("hide");
  calcCurrent.textContent = "Update"

  // Value Outputs
  const compactionRatioValue = parseFloat(document.getElementById("compRate").value.trim())/100;
  const futureMonthHaulsEl = document.getElementById("futureMonthHauls")
  let futureMonthHaulsValue = ((1 - compactionRatioValue) * currentMonthHaulsValue).toFixed(2)
  futureMonthHaulsEl.textContent = futureMonthHaulsValue

  const smashPerWeekEl = document.getElementById('smashPerWeek');


  let eliminatedHaulsValue = (currentMonthHaulsValue - futureMonthHaulsValue).toFixed(2)
  let smashPerMonthValue = ((eliminatedHaulsValue * 2)/numBins).toFixed(2)
  let smashPerWeekValue = (smashPerMonthValue/4.33).toFixed(2)
  c(smashPerWeekValue);

  if(currentMonthHaulsValue == 1) {
    smashPerWeekEl.textContent = Math.ceil(smashPerWeekValue)/2
  } else {
    smashPerWeekEl.textContent = Math.ceil(smashPerWeekValue);
  }
 

  // New Haul cost
  const newMonthlyHaulCostEl = document.getElementById('newMonthlyHaulCost');
  let newMonthlyHaulCostValue = (futureMonthHaulsValue * currentPerHaulCost).toFixed(2);
  c(newMonthlyHaulCostValue)
  c(futureMonthHaulsValue)
  c(currentPerHaulCost)
  newMonthlyHaulCostEl.textContent = newMonthlyHaulCostValue

  let expectedDiscountPrice = currentMonthHaulCostValue*(compactionRatioValue);

  let smashFeeMonthValue = expectedDiscountPrice - newMonthlyHaulCostValue
  c(smashFeeMonthValue);
  const smashFeeEl = document.getElementById("smashFee").textContent = smashFeeMonthValue.toFixed(2);

  const totalMonthlyEl = document.getElementById("totalMonthly").textContent = expectedDiscountPrice.toFixed(2);

  const totalAnnualEl = document.getElementById("totalAnnual").textContent = (expectedDiscountPrice * 12).toFixed(2);
  }

calcCurrent.addEventListener('click', calcCurrentData);