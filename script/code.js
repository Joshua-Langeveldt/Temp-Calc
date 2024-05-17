// Celsius to Fahrenheit
function celToFah(cel) {
    let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
    alert("It Is " + fahrenheit + " Degrees Outside");
}

// Fahrenheit to Celsius
function fahToCel(fah) {
    let celsius = ((fah - 32) * 5 / 9).toFixed(1);
    alert("It Is " + celsius + " Degrees Outside");
}

//Taking Calculated Results and Outputting it 
function calculateTemp() {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    let result;
    if (valueTemp == 'cel') {
        result = celToFah(inputTemp) + " Fahrenheit";
    } else {
        result = fahToCel(inputTemp) + " Celsius";
    }

    document.getElementById("result").innerHTML = result;
    
}
