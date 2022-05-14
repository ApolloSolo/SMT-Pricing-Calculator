const calcBtn = document.getElementById('calc-smash');

function estimateNumHauls() {
    let smashDisplay = document.querySelector(".smash-calc");
    smashDisplay.classList.remove('hide');
    let currentHaulsInput = parseFloat(document.getElementById('currentPerMonth').value.trim());
    let numBinInput = parseInt(document.getElementById('currentPerMonth').value.trim());
    let compactionRateInput = parseFloat(document.getElementById('compRate').value.trim());

    let estimateHaulsOutput = document.getElementById('estHauls');
    let smashesReqOutput = document.getElementById('smashedRequired');
    let smashWeekOutput = document.getElementById('smashWeek');
    let smashMonthOutput = document.getElementById('smashMonth');

    let hauls = compactionRateInput/100 * currentHaulsInput;
    estimateHaulsOutput.value = hauls
    smashesReqOutput.value = currentHaulsInput * hauls;

    let weeklySmashes = (currentHaulsInput * hauls)/4
    smashWeekOutput.value = weeklySmashes;

    let smashMonth = (weeklySmashes*52)/12;
    smashMonthOutput.value = smashMonth.toFixed(1);

}

calcBtn.addEventListener('click', estimateNumHauls)