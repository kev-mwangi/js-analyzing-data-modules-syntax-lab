const datejs = require("datejs");

function combineUsers(...args) {

   
    const combinedObject = {
        users: []
    };
  for (let arr of args) {
        combinedObject.users = [
            ...combinedObject.users,
            ...arr
        ];
    }
combinedObject.merge_date = new Date().toString("M/d/yyyy");
     return combinedObject;
}
console.log(
    combineUsers(
        ["Kelvin", "Eric"],
        ["Mwangi", "Chege"],
        ["Maina"]
    )
);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};