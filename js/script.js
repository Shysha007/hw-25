function counter (initialValue = 0) {

    const counterStatistic = {
        increase: 0,
        decrease:0,
        get:0,
        getStatistic:0

    }

    const func = {
        increase (num) {
            counterStatistic.increase++
            return initialValue += num;
        },
        decrease (num) {
            counterStatistic.decrease++
            return initialValue -= num;
        },
        get() {
            counterStatistic.get++
            return initialValue;
        },
        getStatistic() {
            counterStatistic.getStatistic++
            return counterStatistic;
        }
            
        
    }

    return func;

   
}

let counterInst = counter();
counterInst.increase(100);
counterInst.decrease(10); 
counterInst.decrease(10); 
console.log(counterInst.get());
console.log(counterInst.getStatistic());



