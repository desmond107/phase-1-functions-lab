// Code your solution in this file!
let distanceBlocks;
let feetDistance;
let farePrice;

function distanceFromHqInBlocks(distance){
    if(distance > 42){
        let distanceBlocks = distance % 42
        return distanceBlocks
    }
    else {
        let distanceBlocks = 42 - distance
        return distanceBlocks
    }

}

function distanceFromHqInFeet(distance){
    if (distance > 42){
        let feetDistance = ((distance - 42) * 264)
        return feetDistance
    }
    else{
        let feetDistance = ((42 - distance)* 264)
        return feetDistance
    }
}
function distanceTravelledInFeet( start, destination){
    if (start < destination){
        return(destination - start) * 264
    }
    else {
        return (start - destination) * 264
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02
    }else if ( distance > 2000 && distance < 2500){
        return 25
    }else { return 'cannot travel that far'}
}