//Our array or 'database' of toys
const TOYS = [
    {
      id: 1,
      name: "Tchoo tchoo train",
      price: "100",
      minimalAge: 3
    },
    {
      id: 2,
      name: "Teddy the bear",
      price: "10",
      minimalAge: 1
    },
    {
      id: 3,
      name: "Duplo set",
      price: "25",
      minimalAge: 2
    },
    {
      id: 4,
      name: "Lego set",
      price: "30",
      minimalAge: 5
    },
    {
      id: 5,
      name: "Remote controlled car",
      price: "50",
      minimalAge: 7
    }
  ]


//boiler plate for acquiring and accessing express
const express = require("express");
const app = express();
const port = 3000;


//root path/home page, shows the entire 'database' of toys as a JSON
app.get('/', (req, res) => {
    res.send(TOYS)
  });


//product path, shows specific toy passed on id parameter
  app.get('/products/:id', (req, res) => {
      //grab the given id
      let givenID = Number(req.params.id)

      //find the toy with given id
      let foundToy = TOYS.find(toy => toy.id === givenID)

      if (foundToy === undefined){
          res.send("None of our toys have this id. please pick one from 1 - 5")
      } else {
          res.send(foundToy);
      }
  })


//search path, shows toys based on age limit, name or both queries.
app.get('/search', (req, res) => {

    //check to see if age & name keys are within the query object
    if ('age' in req.query === true && 'name' in req.query === true){

        //displays filtered toys which meet both requirements
       let givenAge = Number(req.query.age)
        let givenName = req.query.name
       const filteredToys = TOYS.filter(toy => toy.name.includes(givenName) && toy.minimalAge <= givenAge)
       res.send(filteredToys);


    } 
    //check to see if name key is within the object
    else if ('name' in req.query === true){

        //displays filtered toys which meet name requirement
        let givenName = req.query.name
        console.log(givenName)
       const filteredToys = TOYS.filter(toy => toy.name.includes(givenName))
       res.send(filteredToys);


    }
    //check to see if age key is within the object
    else if ('age' in req.query === true) {


        //displays filtered toys which meet age requirement

       let givenAge = Number(req.query.age)
       const filteredToys = TOYS.filter(toy => toy.minimalAge <= givenAge)
       res.send(filteredToys);


    } 
    //to do if none of the ifs are met
    else {

        //display unfiltered database of toys
        res.send(TOYS)


    }
})




//setting server to listen out for requests
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})