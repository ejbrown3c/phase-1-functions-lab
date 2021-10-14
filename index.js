// Code your solution in this file!
const hq = 42
let passenger1 = 43
let passenger2 = 50
let passenger3 = 34

function distanceFromHqInBlocks (num){
    if (num > 42) {
        return num - hq;
    }
    else if (num < 42) {
        return hq - num;
    }
}

distanceFromHqInBlocks (num = 43)
distanceFromHqInBlocks (num = 50)
distanceFromHqInBlocks (num = 34)


function distanceFromHqInFeet(num) {
    if (num > 42) {
        return (num - hq) * 264;
    }
    else if (num < 42) {
        return (hq - num) * 264;
    }
}
distanceFromHqInFeet (43)
distanceFromHqInFeet (50)
distanceFromHqInFeet (34)

function distanceTravelledInFeet(numStart, numEnd) {
    if (numStart > numEnd) {
        return (numStart - numEnd)*264;
    }
    if (numStart < numEnd) {
        return (numEnd - numStart)*264;
    }
}
distanceTravelledInFeet (43, 48)
distanceTravelledInFeet (50, 60)
distanceTravelledInFeet (43, 28)

function distanceTravelledInFeet(numStart, numEnd) {
    if (numStart > numEnd) {
        return (numStart - numEnd)*264;
    }
    if (numStart < numEnd) {
        return (numEnd - numStart)*264;
    }
}



function calculatesFarePrice (numStart, numEnd) {
    let p = distanceTravelledInFeet (numStart, numEnd)
    if ( p < 399) {
        return (0);
    }
    else if ( p > 400 && p<= 2000){
        return ((p - 400) * .02);
    }
    else if (p > 2000 && p < 2499) {
        return (25);
    }
    else if (p > 2500 ) {
        return ('cannot travel that far');
    }   
}

calculatesFarePrice (43, 44)
calculatesFarePrice (34, 32)
calculatesFarePrice (50, 58)
calculatesFarePrice (34, 24)