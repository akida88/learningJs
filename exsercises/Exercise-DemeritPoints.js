
// Speed Limit = 70
// 5 over the speed -> 1
// more than 12 points -> suspended

//console.log(checkSpeed(50));

checkSpeed(71);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
        
    //else {
        // should be const not let points for not changing them accidently
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points);
}