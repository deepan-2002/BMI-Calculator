let heightEl = document.querySelector('.height')
let weightEl = document.querySelector('.weight')
let resultBtn = document.querySelector('button')
let bmiResult = document.querySelector('.bmi-result')
let healthyWeight = document.querySelector('.healthy-weight')
let statusTxt = document.querySelector('.status')

let bmiCalci = () => {
    let height = parseInt(heightEl.value)
    let weight = parseInt(weightEl.value)
    
    if (isNaN(height) || isNaN(weight)) {
        bmiResult.textContent = "Please enter valid height and weight.";
    } else {
        let bmi = weight / Math.pow(height / 100, 2);
        bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(1)} kg/m<sup>2</sup>`;
        healthyWeight.innerHTML = `Healthy Weight for the Height is ${(18.5 * Math.pow(height / 100, 2)).toFixed(1)} kg - ${(25 * Math.pow(height / 100, 2)).toFixed(1)} kg`

        if(bmi<= 16){
            statusTxt.innerHTML = `Underweight`
        }
        else if(bmi> 16 && bmi <= 17){
            statusTxt.innerHTML = `Underweight`
        }
        else if(bmi> 17 && bmi < 18.5){
            statusTxt.innerHTML = `Underweight`
        }
        else if(bmi>= 18.5 && bmi <= 25){
            statusTxt.innerHTML = `Normal`
        }
        else if(bmi> 25 && bmi <= 30){
            statusTxt.innerHTML = `Overweight`
        }
        else if(bmi> 30 && bmi <= 35){
            statusTxt.innerHTML = `Obesity`
        }
        else if(bmi> 35 && bmi <= 40){
            statusTxt.innerHTML = `Obesity`
        }
        else{
            statusTxt.innerHTML = `Obesity`
        }
    }
}

resultBtn.addEventListener('click', () => {
    bmiCalci()
})