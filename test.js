const request = require("supertest");
const app = require("./app.js");



//-------------------------- Root test -------------------------------//

describe("Request the html page",()=>{

   it("Returns html page",(done)=>{
      request(app)
      .get("/")
      .expect("Content-Type",/html/,done);

   });
});


//--------------------------- Root with data test ------------------ //

describe("Request to the root ",()=>{

   it("Gets a 200 status code ",(done)=>{

        request(app)
         .get("/doctors")
         .expect(200,done)
         
   });

   it("Returns json type  Content ",(done)=>{
    
          request(app)
            .get("/doctors")
            .expect("Content-Type",/json/,done);
    
       });

});



//---------------------- Root with specific data test ------------------ //

describe("Request for the Doctors with id",()=>{

   it("Returns 200 status Code",(done)=>{

      request(app)
        .get("/doctors/:id")
        .expect(200,done);

   });

  

});

//----------------------- post testing --------------------------//

describe("Request 201 status for posting ",()=>{

  it("Return 201 status code",(done)=>{

      request(app)
      .post("/doctors")
      .send("name=Omer+Sayem&id=123")
      .expect(201,done);
        

  })

  it("Returns doctors ",(done)=>{

      request(app)
       .post("/doctors")
       .send("name=Omer&id=123")
       .expect(/omer/i,done);


  })

})