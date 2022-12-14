class SmartHike {
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal (peak, altitude){
        if(!this.goals.hasOwnProperty(peak)){
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }else{
            return `${peak} has already been added to your goals`;
        }
    }
   
    hike (peak, time, difficultyLevel){
        time = Number(time);

        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`)
        }else{
            if(this.resources === 0 ){
                throw new Error("You don't have enough resources to start the hike");
            }
        }

        let currentResource = this.resources - (time * 10);
        this.resources = currentResource;
        
        if(this.resources < 0){
            return "You don't have enough resources to complete the hike";
        }else{
            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel
            })
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest (time){

        let timeRest = time * 10;

        if((this.resources + timeRest) >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }else{
            this.resources += timeRest;
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }

    showRecord (criteria){
        if (this.listOfHikes.length === 0){
            return `${this.username} has not done any hiking yet`
        }

        if(criteria === 'all'){
            this.listOfHikes.forEach((el) => {
                console.log(('All hiking records:'));
                console.log(`${this.username} hiked ${el[0]} for ${el[1]} hours`); 

            })
        }
    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


