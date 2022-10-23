class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage) {

        if(!model || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error ("Invalid input!");
        }
        if (
            model.length <= 0 ||
            typeof horsepower !== "number" ||
            typeof price !== "number" ||
            typeof mileage !== "number"
          ) {
            throw new Error("Invalid input!");
          }
        
            this.availableCars.push({
            model, 
            horsepower : Number(horsepower), 
            price :Number(price) , 
            mileage : Number(mileage)
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        
    }
    sellCar (model, desiredMileage) {
        desiredMileage = Number(desiredMileage)
                let currentModel = this.availableCars.find((el) => el.model === model);

                if(!currentModel){
                    throw new Error(`${model} was not found!`)
                }

                let differentMileage = Math.abs(desiredMileage - currentModel.mileage);
                    if(currentModel.mileage <= desiredMileage){
                        currentModel.price = currentModel.price
                    }else{
                        if(differentMileage <= 40000){
                        currentModel.price = currentModel.price * 0.95;
                    }
                    if(differentMileage > 40000){
                        currentModel.price = currentModel.price * 0.90;
                    }
                     }
                    
                        let index = this.availableCars.indexOf(currentModel);
                        this.availableCars.splice(index, 1);
                        let horsepower = currentModel.horsepower;
                        let soldPrice = currentModel.price;
                        this.soldCars.push({
                        model,
                        horsepower,
                        soldPrice,
                         });

                        this.totalIncome += Number(soldPrice);
                    
                    return `${model} was sold for ${soldPrice.toFixed(2)}$` 
        }
        currentCar () {

            if (this.availableCars.length <= 0){
                throw new Error ("There are no available cars")
            }
            let buff =[];
            let firstLine = "-Available cars:"
            buff.push(firstLine);
            this.availableCars.forEach(el => {
                buff.push(`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`)
            })

            return buff.join('\n')
        }

        salesReport (criteria){
            if(criteria === "horsepower"){
                this.soldCars.sort((a,b)=> b.horsepower - a.horsepower)
            }else if(criteria === "model"){
                this.soldCars.sort((a,b)=> a.model.localeCompare(b.model))
            }else{
                throw new Error("Invalid criteria!");
            }

            let buff = [];

            let firstLine = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
            buff.push(firstLine);

            let numOfSoldCars = this.soldCars.length;

            let secondLine = `-${numOfSoldCars} cars sold:`
            buff.push(secondLine);

            this.soldCars.forEach((x) => {
                buff.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`)
            })

            return buff.join('\n')
        }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




