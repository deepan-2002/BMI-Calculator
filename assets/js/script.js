let heightEl = document.querySelector('.height')
let weightEl = document.querySelector('.weight')
let resultBtn = document.querySelector('button')
let bmiResult = document.querySelector('.bmi-result')
let healthyWeight = document.querySelector('.healthy-weight')
let healthyHeight = document.querySelector('.healthy-height')
let statusTxt = document.querySelector('.status')
let result = document.querySelector('.result')

result.style.display = 'none'

let bmiCalci = () => {
    let height = parseInt(heightEl.value)
    let weight = parseInt(weightEl.value)

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight')
        return false
    }
    else {
        result.style.display = 'block'

        let bmi = weight / Math.pow(height / 100, 2);
        bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(1)} kg/m<sup>2</sup>`;
        healthyWeight.innerHTML = `Healthy Weight for the Height is <strong>${(18.5 * Math.pow(height / 100, 2)).toFixed(1)} kg - ${(25 * Math.pow(height / 100, 2)).toFixed(1)} kg </strong>`
        healthyHeight.innerHTML = `Your Height should between <strong>${100 * Math.sqrt(weight / 25).toFixed(1)} cm - ${100 * Math.sqrt(weight / 18.5).toFixed(1)} cm </strong> for this weight`

        if (bmi <= 16) {
            statusTxt.innerHTML = `<p class='text-pink-800'>Underweight</p>`
        }
        else if (bmi > 16 && bmi <= 17) {
            statusTxt.innerHTML = `<p class='text-pink-600'>Underweight</p>`
        }
        else if (bmi > 17 && bmi < 18.5) {
            statusTxt.innerHTML = `<p class='text-yellow-400'>Underweight</p>`
        }
        else if (bmi >= 18.5 && bmi <= 25) {
            statusTxt.innerHTML = `<p class='text-green-600'>Normal</p>`
        }
        else if (bmi > 25 && bmi <= 30) {
            statusTxt.innerHTML = `<p class='text-yellow-400'>Overweight</p>`
        }
        else if (bmi > 30 && bmi <= 35) {
            statusTxt.innerHTML = `<p class='text-pink-600'>Obesity</p>`
        }
        else if (bmi > 35 && bmi <= 40) {
            statusTxt.innerHTML = `<p class='text-pink-800'>Obesity</p>`
        }
        else {
            statusTxt.innerHTML = `<p class='text-pink-900'>Obesity</p>`
        }
    }
}

resultBtn.addEventListener('click', () => {
    bmiCalci()
})

weightEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        bmiCalci()
    }
})