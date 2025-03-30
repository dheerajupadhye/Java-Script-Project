function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight == '' || height == '') {
        document.getElementById("result").innerText = 'Please enter both weight and height';
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);  // Round to 2 decimal places

    // Determine BMI category
    var resultText = `Your BMI is: ${bmi}\n`;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById("result").innerText = resultText;
}
