var elForm = document.querySelector('.curency__form');

var elInput = document.querySelector('.curency__input');

var elSelect = document.querySelector('.curency__select');

var elResult = document.querySelector('.curency__result');

// money result 

var currencyUSD = 11000;

var currencyRUBL = 150;

var currencyEURO = 13000;

// button funcion 

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    // curency calculation function 

var inputValue = elInput.value;

var selectValue = elSelect.value;

var calculationUSD = (inputValue * currencyUSD).toFixed(2);

var calculationRUBL = (inputValue * currencyRUBL).toFixed(2);

var calculationEURO = (inputValue * currencyEURO).toFixed(2);

if(selectValue == 'usd'){
    elResult.textContent = calculationUSD;
}else if(selectValue == 'rubl'){
elResult.textContent = calculationRUBL
}else if(selectValue == 'euro'){
    elResult.textContent = calculationEURO
}else{
    elResult.textContent = "Choose currency"
}

})
