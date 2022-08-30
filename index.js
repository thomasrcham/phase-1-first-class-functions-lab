const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0,2)

const returnLastTwoDrivers = () => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fareMult){
    function fareMultiplier (fareInt) {return fareInt * fareMult}
    return fareMultiplier;
} 

function fareDoubler (fare) {
    createFareMultiplier(2);
    /*let doubled = fareMultiplier * fare;*/
    return fare * 2;
}

fareDoubler(2);