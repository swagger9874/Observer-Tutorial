class NumberModel{
    constructor (){
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    increment(){
        const colors = ["red", "green", "orange", "blue"];


        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.notify();
    }

    addObservers(o){
        this.observers.push(o);
    }

    notify(){
        for(let o of this.observers){
            o.update(this);
        }

    }


}