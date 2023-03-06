const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formular = document.querySelector('.content');
const result = document.querySelector('#result');

const units = [
    'meter',
    'kilometer'
];

const hints = [{
    // 0
    sameUnit: 'gives the same value'
},

{
    // 1 centimeter to meter
    c_m: 'Divide the length by 100'
},

{
    // 2 CENTIMETER TO KILOMETER
    c_km: 'Divide the length by 100000'
},

{
    // 3 METER TO CENTIMETER
    m_c: 'Multiply the length by 100'
},

{
    // 4 METER TO KILOMETER
    m_km: 'Divide the length by 1000'
},
{
    //5 KILOMETER TO CENTIMETER
    km_cm: 'Multiply the length by 100000'
},
{
    // 6 KILOMETER TO METER
    km_m: 'Multiply the length by 1000'
},
];

const selesctElem = document.querySelectorAll('select');

for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selesctElem[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selesctElem[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

function convertUnits() {
    if ((convertFrom.value === 'centimeter') && (convertTo.value === 'centimeter') || (convertFrom.value === 'meter') && (convertTo.value === 'meter') || (convertFrom.value === 'kilometer') && (convertTo.value === 'kilometer')) {
        result.value = length.value;
        formular.textContent = hints[0].sameUnit;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value / 100;
        formular.textContent = hints[1].c_m;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'kilometer')) {
        result.value = length.value / 100000;
        formular.textContent = hints[2].c_km;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100;
        formular.textContent = hints[3].m_c;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'kilometer')) {
        result.value = length.value / 1000;
        formular.textContent = hints[4].m_km;
    }
    else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100000;
        formular.textContent = hints[5].km_cm;
    }
    else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'meter')) {
        result.value = length.value * 1000;
        formular.textContent = hints[6].km_m;
    }
}

convertFrom.addEventListener('change', convertUnits);
convertTo.addEventListener('change', convertUnits);
length.addEventListener('change', convertUnits);
