// Code your solution in this file!
const hqLocation = '50';
function distanceFromHqInBlocks(){
    const pickupLocation = '49';
    return (hqLocation - pickupLocation);
}

function distanceFromHqInBlocks(){
    const pickupLocation = '42';
    return (hqLocation - pickupLocation);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(){
    const pickupLocation = '49';
    return ((hqLocation - pickupLocation) * 264)
}

function distanceFromHqInFeet(){
    const pickupLocation = '42';
    return ((hqLocation - pickupLocation) * 264);
}


function distanceTravelledInFeet(){
    const tripStart = 48
    const tripFinish = 43
    return (tripStart - tripFinish) * 264
}

function distanceFromTravelledInFeet(){
    const tripStart = 60
    const tripFinish = 50
    return (tripStart - tripFinish) * 264
}