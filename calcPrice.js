const calcBtn = document.getElementById('calc-smash');
const currentPerMonthEl = document.getElementById('currentPerMonth')
const numBinsEl = document.getElementById('numBins');

function calcHaulMonth() {
    let haulDumpsterMonth = document.getElementById('haulDumpsterMonth');
    let value = currentPerMonthEl.value.trim();
    let anotherValue = numBinsEl.value.trim();
    let perDumpster  = value/anotherValue
    haulDumpsterMonth.value = perDumpster.toFixed(2)
}

function calcCurrentCost() {

}

calcBtn.addEventListener('click', calcCurrentCost)
currentPerMonthEl.addEventListener('change', calcHaulMonth)
numBinsEl.addEventListener('change', calcHaulMonth)
