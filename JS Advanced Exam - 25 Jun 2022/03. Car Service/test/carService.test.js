let carService = require('../03. Car Service_Resources');
let { assert } = require("chai");


describe("Tests carService", function () {
    describe("Test isItExpensive", function () {

        it("issue ii equal to 'Engine' or 'Transmission' ", function () {
            let exp = `The issue with the car is more severe and it will cost more money`
            assert.equal(carService.isItExpensive("Engine"), exp);
            assert.equal(carService.isItExpensive("Transmission"), exp);
        });
        it("issue is not equal to 'Engine' or 'Transmission'", () => {
            let exp = "The overall price will be a bit cheaper"
            assert.equal(carService.isItExpensive("NotEngine"), exp);
            assert.equal(carService.isItExpensive(""), exp);
            assert.equal(carService.isItExpensive("{}"), exp);
        })
    });

    describe("Test Discount", () => {

        it("numberOfParts is smaller ot equal to 2", () => {
            let exp = "You cannot apply a discount"
            assert.equal(carService.discount(2, 100), exp);
            assert.equal(carService.discount(1, 100), exp);
        })

        it("numberOfParts is higher than 2 and smaller or equal to 7", () => {

            let exp = `Discount applied! You saved 15$`

            assert.equal(carService.discount(5, 100), exp);
            assert.equal(carService.discount(3, 100), exp);
        })

        it("numberOfParts is higher than 7", () => {

            let exp = `Discount applied! You saved 30$`

            assert.equal(carService.discount(10, 100), exp);
        })

        it("numberOfParts and totalPrice are not a number", () => {
            assert.throw(() => carService.discount('pesho', 100), 'Invalid input')
            assert.throw(() => carService.discount(5, 'pesho'), 'Invalid input')
            assert.throw(() => carService.discount("gosho", 'pesho'), 'Invalid input')
        })
    })

    describe("Test partsToBuy", () => {

        it('Test partsCatalog or neededParts parameters are not an arrays', () => {
            assert.throw(() => carService.partsToBuy(["pesho"], "pesho"), "Invalid input")
            assert.throw(() => carService.partsToBuy("pesho", ["pesho"]), "Invalid input")
            assert.throw(() => carService.partsToBuy("pesho", "gosho"), "Invalid input")
        })

        it("should", () => {
            assert.equal(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 },{ part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"]),145);

            assert.equal(carService.partsToBuy([],["blowoff valve", "injectors"]),0)
        })
    })
});
