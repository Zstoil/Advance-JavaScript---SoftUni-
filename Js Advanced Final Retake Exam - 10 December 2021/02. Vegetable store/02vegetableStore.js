class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }

    loadingVegetables(vegetables) {

        let buff = [];
        for (let line of vegetables) {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let currentProduct = this.availableProducts.find(x => x.type === type);
            if (!currentProduct) {

                this.availableProducts.push({
                    type,
                    quantity,
                    price
                })
            } else {
                currentProduct.quantity += quantity;
                if (currentProduct.price < price) {
                    currentProduct.price = price;
                }
            }

        }

        this.availableProducts.forEach(x => {
            buff.push(`${x.type}`);

        })
        return `Successfully added ${buff.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0

        
        for (let line of selectedProducts) {
            let [type, quantity] = line.split(' ')
            quantity = Number(quantity);
            let currProd = this.availableProducts.find(x => x.type === type);
            let priceForProduct = 0;

            if (!currProd) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if (currProd.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else {
                    priceForProduct = currProd.price * quantity;
                    currProd.quantity -= quantity;
                    totalPrice += priceForProduct
                }
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
        let currProduct = this.availableProducts.find(x => x.type === type);

        if(!currProduct){
            throw new Error(`${type} is not available in the store.`)
        }
        if(quantity > currProduct.quantity){
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }else{
            currProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision (){

        let buff =[];
        let firstLine = "Available vegetables:"
        buff.push(firstLine);

        this.availableProducts.sort((a,b) => a.price - b.price)
            .forEach(el => {
                buff.push(`${el.type}-${el.quantity}-$${el.price}`)
            })
            let lastLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`
            buff.push(lastLine);

            return buff.join('\n')

    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
