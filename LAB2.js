const simpleIterMetodBtn = document.getElementById("simpleIterMetod");
const zeidelMetodBtn = document.getElementById("zeidelMetod");

const iterationElement = document.getElementById("Iteration");

const x1ValueElement = document.getElementById("x1Value");
const x2ValueElement = document.getElementById("x2Value");
const x3ValueElement = document.getElementById("x3Value");
const x4ValueElement = document.getElementById("x4Value");

const DomAnsXIter = (xAll, iteration) => {
    x1ValueElement.textContent = `x1 ≈ ${xAll.x1}`;
    x2ValueElement.textContent = `x2 ≈ ${xAll.x2}`;
    x3ValueElement.textContent = `x3 ≈ ${xAll.x3}`;
    x4ValueElement.textContent = `x4 ≈ ${xAll.x4}`;

    iterationElement.textContent= `Iteration = ${iteration}`
}

const E = 0.000001
var simpleIterIter = 0;
var zeidelMetodIter = 0;

const differentX = (xPrev, xCurr) => {
    difX1 = Math.abs(xPrev.x1 - xCurr.x1);
    difX2 = Math.abs(xPrev.x2 - xCurr.x2);
    difX3 = Math.abs(xPrev.x3 - xCurr.x3);
    difX4 = Math.abs(xPrev.x4 - xCurr.x4);

    if (Math.max(difX1, difX2, difX3, difX4) < E) {
        return false;
    } return true;
}

const SystemCount = (xAll) => {
    let resArr = {};

    resArr.x1 = (5 - 5 * xAll.x2 - 3 * xAll.x3) / 6;
    resArr.x2 = (20 - 2 * xAll.x1 - 3 * xAll.x3 - xAll.x4) / -7;
    resArr.x3 = (18 - 5 * xAll.x1 - 2 * xAll.x2 + xAll.x4) / 13;
    resArr.x4 = (7 - 12 * xAll.x1 - 18 * xAll.x2 + 22 * xAll.x3) / 41;

    return resArr;
}


// Метод простих ітерацій
const simpleIterMetod = () => {
    var xPrev = { x1 : 0, x2 : 0, x3 : 0, x4 : 0};
    var xCurr = SystemCount(xPrev);
    simpleIterIter = 0;
    
    while (differentX(xPrev, xCurr)) {
        xPrev = xCurr;
        xCurr = SystemCount(xPrev);
        simpleIterIter++;
    }
    console.log(xCurr);
    console.log(simpleIterIter);
    DomAnsXIter(xCurr, simpleIterIter);
}



const funcX1 = (xAll) => {
    return (5 - 5 * xAll.x2 - 3 * xAll.x3) / 6;
}

const funcX2 = (xAll) => {
    return (20 - 2 * xAll.x1 - 3 * xAll.x3 - xAll.x4) / -7;
}

const funcX3 = (xAll) => {
    return (18 - 5 * xAll.x1 - 2 * xAll.x2 + xAll.x4) / 13;
}

const funcX4 = (xAll) => {
    return (7 - 12 * xAll.x1 - 18 * xAll.x2 + 22 * xAll.x3) / 41;
}

// Метод Зейделя
const zeidelMetod = () => {
    var xPrevZedel = { x1 : 0, x2 : 0, x3 : 0, x4 : 0};
    let xCurrZedel = { ...xPrevZedel };
    zeidelMetodIter = 0;
    
    xCurrZedel.x1 = funcX1(xCurrZedel);
    xCurrZedel.x2 = funcX2(xCurrZedel);
    xCurrZedel.x3 = funcX3(xCurrZedel);
    xCurrZedel.x4 = funcX4(xCurrZedel);
    
    while (differentX(xCurrZedel, xPrevZedel)) {
        xPrevZedel = { ...xCurrZedel };

        xCurrZedel.x1 = funcX1(xCurrZedel);
        xCurrZedel.x2 = funcX2(xCurrZedel);
        xCurrZedel.x3 = funcX3(xCurrZedel);
        xCurrZedel.x4 = funcX4(xCurrZedel);
        zeidelMetodIter++;
    }
    console.log(xCurrZedel);
    console.log(zeidelMetodIter);
    DomAnsXIter(xCurrZedel, zeidelMetodIter);
}

simpleIterMetod();
zeidelMetod();


simpleIterMetodBtn.onclick = simpleIterMetod; 
zeidelMetodBtn.onclick = zeidelMetod;