const drivers = ["Mary","Anne","Antony"];
const driversInfo = [
    {
        name: "Mary",
        residence: "Nairobi",
    },
    {
        name : "Anne",
        residence : "Mombasa"
    },
    {
        name : "Antony",
        residence : "Nairobi",
    },
];
function findMatching(drivers,name){
return drivers.filter((element) => element.toLowerCase() === name.toLowerCase());

}
// console.log(findMatching(drivers,"ANNE"));
function fuzzyMatch(drivers,name){
return drivers.filter((element) => element.startsWith(name))
}
// console.log(fuzzyMatch(drivers,"A"));

function matchName(drivers,name){
    return drivers.filter((element) => element.name === name);
}
// console.log(matchName(driversInfo,"Antony"));