var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
inputType.addEventListener("change",myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "gram" && resultTypeValue ==="kilogram"){
        
        result.value = Number(input.value) * 0.001;  
    }
    if(inputTypeValue === "gram" && resultTypeValue ==="pound"){
    
    result.value = Number(input.value) * 0.00220462;
    }
    if(inputTypeValue === "gram" && resultTypeValue ==="gram"){
    
    result.value = input.value
    }


    if(inputTypeValue === "kilogram" && resultTypeValue ==="gram"){
    
        result.value = Number(input.value) * 1000;
        
    }
    if(inputTypeValue === "kilogram" && resultTypeValue ==="pound"){
    
        result.value = Number(input.value) * 2.20462;
        
    }
    if(inputTypeValue === "kilogram" && resultTypeValue ==="kilogram"){
    
        result.value = input.value
    }

    if(inputTypeValue === "pound" && resultTypeValue ==="gram"){
    
        result.value = Number(input.value) * 453.592;
        
    }
    if(inputTypeValue === "pound" && resultTypeValue ==="kilogram"){
    
        result.value = Number(input.value) * 0.453592;
        
    }
    if(inputTypeValue === "pound" && resultTypeValue ==="pound"){
    
        result.value = input.value
    }

}

