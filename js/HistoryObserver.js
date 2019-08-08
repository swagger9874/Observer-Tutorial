class HistoryObserver{
    constructor(){
        this.history = [];
    }

    update(){
        this.history.unshift(model.color[0].toUpperCase())
        
        let msg = "The most used 5 colors were: "
        for(let i=0;i<5;i++){
            if(this.history[i]){
                msg += this.history[i] + " "
            }
        }
        console.log(msg)
    }
}