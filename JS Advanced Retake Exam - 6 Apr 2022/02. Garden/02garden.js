class Garden {

    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired){

        if(spaceRequired > this.spaceAvailable){
            throw new Error ("Not enough space in the garden.");
        }else{
            
            this.plants.push({
                plantName,
                spaceRequired,
                ripe : false,
                quantity : 0
            })
            this.spaceAvailable = this.spaceAvailable - spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity){

        let currentPlant = this.plants.find(plants => plants.plantName === plantName);

        if(!currentPlant){
            throw new Error (`There is no ${plantName} in the garden.`);
        }
        if(currentPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if(quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity = quantity;

        if(quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`
        }
        if(quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants = this.plants.filter(plant => plant.plantName !== plantName);

        this.storage.push({
            plantName : currentPlant.plantName,
            quantity : currentPlant.quantity
        })

        return `The ${plantName} has been successfully harvested.`
    }
    generateReport(){

        let buff = [];

        console.log(`The garden has ${this.spaceAvailable} free space left.`);
        

        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName))
                    .forEach(plant => buff.push(plant.plantName) );
        
                    console.log(`Plants in storage: ${buff.join(', ')} `);
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




