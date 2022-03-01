
//the main class
class game{
    constructor(dolar , reapetNumber , goalNumber){
        this.reapetNumber = reapetNumber;
        this.dolar = dolar;
        this.goalNumber = goalNumber;
        this.success = 0;

        //the game function in game class constructor wich define the whole game

        this.play = ()=>{
            
            let pay = this.dolar;
            while(pay >= 1){
                
                let x = Math.random();
                if(x < 0.5 && x > 0){
                    pay++;
                    
                }else if(x > 0.5 && x < 1){
                    pay--;
                    
                }


                
                if(pay === this.goalNumber){
                    this.success ++;
                    break;
                }                
            }           
        }
    }


    //this function start the game 
    start = ()=>{
        for(let n = 0 ; n < this.reapetNumber ; n++){
            this.play();
        }
        return (this.success*100)/this.reapetNumber + "%";
    }
}




// here we start a game
let gm = new game(10 , 150 , 20);
console.log("your chance is :   "+gm.start());





