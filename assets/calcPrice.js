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
  let currentMonthHaulsValue = parseFloat(numBins * currentHaulsPerMonthEl).toFixed(2);
  currentMonthHauls.textContent = currentMonthHaulsValue;

  // Cost Inputs
  const currentPerHaulCost = parseFloat(
    document.getElementById("currentPerHaulCost").value.trim()
  );

  // Cost Output

  const currentMonthHaulCostEl = document.getElementById("currentMonthHaulCost");
  let currentMonthHaulCostValue = parseFloat(currentPerHaulCost * currentMonthHaulsValue).toFixed(2);
  currentMonthHaulCostEl.textContent = currentMonthHaulCostValue

  const currentAnualHaulCost = document.getElementById("currentAnualHaulCost");
  let currentAnualHaulCostValue = (currentMonthHaulCostValue * 12).toFixed(2)
  currentAnualHaulCost.textContent = currentAnualHaulCostValue;

  //Remove hide class
  container.classList.remove("hide");
  calcCurrent.textContent = "Update"

  // Value Outputs
  const compactionRatioValue = parseFloat(document.getElementById("compRate").value.trim()) / 100;
  const futureMonthHaulsEl = document.getElementById("futureMonthHauls")
  let futureMonthHaulsValue = parseFloat(((1 - compactionRatioValue) * currentMonthHaulsValue)).toFixed(2)
  //Ratio derived
  console.log("futureMonthHaulsValue")
  c(futureMonthHaulsValue)
  futureMonthHaulsEl.textContent = futureMonthHaulsValue

  let futureTotalHaulingMonthlyCost = Number(futureMonthHaulsValue)

  const smashPerWeekEl = document.getElementById('smashPerWeek');


  let eliminatedHaulsValue = (currentMonthHaulsValue - futureMonthHaulsValue).toFixed(2)
  let smashPerMonthValue = ((eliminatedHaulsValue * 2) / numBins).toFixed(2)
  let smashPerWeekValue = (smashPerMonthValue / 4.33).toFixed(2)
  c(smashPerWeekValue);

  if (currentMonthHaulsValue == 1) {
    smashPerWeekEl.textContent = Math.ceil(smashPerWeekValue) / 2
  } else {
    smashPerWeekEl.textContent = Math.ceil(smashPerWeekValue);
  }


  // New Haul cost
  const newMonthlyHaulCostEl = document.getElementById('newMonthlyHaulCost');
  let newMonthlyHaulCostValue = (futureMonthHaulsValue * currentPerHaulCost).toFixed(2);
  newMonthlyHaulCostEl.textContent = newMonthlyHaulCostValue

  let expectedDiscountPrice = parseFloat(currentMonthHaulsValue * currentPerHaulCost).toFixed(2);
  console.log("expectedDiscountPrice")
  c(expectedDiscountPrice)

  let smashFeeMonthValue = parseFloat(expectedDiscountPrice - newMonthlyHaulCostValue).toFixed(2);
  c(smashFeeMonthValue);
  //const smashFeeEl = document.getElementById("smashFee").textContent = smashFeeMonthValue;

  const savingsRate = document.getElementById("savingsRate").value.trim() / 100
  let totalMonthlyEl = document.getElementById("totalMonthly");
  let totalMonthlyCostValue = (Number(expectedDiscountPrice) * (1 - Number(savingsRate))).toFixed(2)
  totalMonthlyEl.textContent = totalMonthlyCostValue;
  let smashFeeValue = parseFloat(Number(totalMonthlyCostValue) - Number(newMonthlyHaulCostValue)).toFixed(2);
  let smashFeeEl = document.getElementById("smashFee").textContent = smashFeeValue;


  let totalAnnualEl = document.getElementById("totalAnnual");
  let totalAnnualValue = (totalMonthlyCostValue * 12).toFixed(2);
  totalAnnualEl.textContent = totalAnnualValue;

  // Convert
  currentMonthHaulCostValue = "$ " + currentMonthHaulCostValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  currentMonthHaulCostEl.textContent = currentMonthHaulCostValue

  currentAnualHaulCostValue = "$ " + currentAnualHaulCostValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  currentAnualHaulCost.textContent = currentAnualHaulCostValue;

  newMonthlyHaulCostValue = "$ " + newMonthlyHaulCostValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  newMonthlyHaulCostEl.textContent = newMonthlyHaulCostValue

  smashFeeValue = "$ " + smashFeeValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  smashFeeEl = document.getElementById("smashFee").textContent = smashFeeValue;

  totalMonthlyCostValue = "$ " + totalMonthlyCostValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalMonthlyEl.textContent = totalMonthlyCostValue;

  totalAnnualValue = "$ " + totalAnnualValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAnnualEl.textContent = totalAnnualValue;
}

calcCurrent.addEventListener('click', calcCurrentData);