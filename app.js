const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // what the hack body parser do ? i dont know 
const _ = require("lodash"); 
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(express.static('public'));

var doctors=[
    {
        name:"omer sayem",
        id :"15-30172-2"
    },
    {
        name:"sable megh",
        id:"15-30154-2"
    }
]


  // our database to store doctor


//--------------------------get route --------------------------------//

app.get("/doctors", (req, res) => {
                                 //to get the things in doctor database 
    res.json(doctors);
  

});

//to get the individual id 

app.get("/doctors/:id", (req, res) => {

    res.json(doctors);

});

//---------------------  post route ----------------------------------- //

app.post("/doctors", (req, res) => {
let newName= req.body                     // req.body is an object gets things from req
//yet to work

    
});

//--------------------- put route -----------------------------------//

app.put("/doctors/:id", (req, res) => {
    let doctorUpdate = req.body; // updater doctor info 

    if (doctorUpdate.id) { // check if this update has id , if not delete it 
        delete doctorUpdate;
    }

    var newDoctorUpdateId = _.findIndex(doctors, req.params.id); //find the index of of the id from the doctors array
    if (doctors[newDoctorUpdateId]) { // if updated id contains the index 
        var updatedLion = _.assign(doctors[newDoctorUpdateId], doctorUpdate); // marge the id with new 
        res.json(updatedLion);

    } else {
        res.send();
    }


})

//---------------------- delete route ------------------------------------//

app.delete("/doctors/:id", (req, res) => {
    let findTheIdNew = _.findIndex(doctors, req.params.id);
    if (doctors[findTheIdNew]) {
        res.json(doctors.splice(findTheIdNew, 1));

    } else {

        res.send();
    }

});

module.exports = app;