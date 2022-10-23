let rentCar = require('../rentCar');
let { assert} = require("chai");
let { describe } = require("mocha");

describe("Tests rentCar", function() {
    describe("Test searchCar", function() {

        it("Test string model is present in the shop ", function() {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"Audi"),`There is 1 car of model Audi in the catalog!` )
        });

        it("Test for not valid input arr and num", ()=>{
            assert.throw(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],10),"Invalid input!")
            }) 
        it("Test for not valid input arr and object", ()=>{ 
            assert.throw(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],{name:"Gosho"}),"Invalid input!")
        })
        it("Test for not valid input num and string", ()=>{ 
            assert.throw(()=>rentCar.searchCar(10,"Gosho"),"Invalid input!")
        })   
        it("Test for not valid input string and string", ()=>{  
            assert.throw(()=>rentCar.searchCar("pesho","Gosho"),"Invalid input!")
        })    
       
        it("no matching elements", ()=>{
            assert.throw(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"Mercedes"),'There are no such models in the catalog!')
        })
     });
     
     describe("Test calculatePriceOfCar",()=>{

        it("Test no such model",()=>{
            assert.throw(()=> rentCar.calculatePriceOfCar("Seat",10),'No such model in the catalog!')
        })

        it("Test invalid input num and num",()=>{
            assert.throw(()=> rentCar.calculatePriceOfCar(25,10),"Invalid input!")
        })
        it("Test invalid input arr and num",()=>{
            assert.throw(()=> rentCar.calculatePriceOfCar([25],10),"Invalid input!")
        })
        it("Test invalid input string and string",()=>{
            assert.throw(()=> rentCar.calculatePriceOfCar("Golf","pesho"),"Invalid input!")
        })
        it("Test invalid input string and object",()=>{
            assert.throw(()=> rentCar.calculatePriceOfCar("Golf",{}),"Invalid input!")
        })

        it("Test valid input",()=>{
            assert.equal(rentCar.calculatePriceOfCar('Mercedes',2),`You choose Mercedes and it will cost $100!`)
        })
     })

     describe("Test checkBudget", ()=>{

        it("Test invalid inputs num , num and string",()=>{
            assert.throw(()=> rentCar.checkBudget(5,5,"pesho"),"Invalid input!")
        })
        it("Test invalid inputs num , string and num",()=>{
            assert.throw(()=> rentCar.checkBudget(5,"pesho",50),"Invalid input!")
        })
        it("Test invalid inputs string , num and num",()=>{
            assert.throw(()=> rentCar.checkBudget("pesho",5,50),"Invalid input!")
        })

        it("Test biggest budget",()=>{
            assert.equal(rentCar.checkBudget(5,5,30),`You rent a car!`)
        })
        it("Test  budget equal",()=>{
            assert.equal(rentCar.checkBudget(5,5,25),`You rent a car!`)
        })
        it("Test less budget",()=>{
            assert.equal(rentCar.checkBudget(5,5,20),'You need a bigger budget!')
        })


     })
});
