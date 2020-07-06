new Vue({
    el: "#FizzBuzz",
    data: {
        num: 0,
        output:null,
        fizzBuzzCounter: null,        
    },
    methods: {
        fizzBuzz() {
            clearInterval(this.fizzBuzzCounter);
            this.num = 0;
            this.fizzBuzzCounter = setInterval(this.counter, 1000)
        },
        counter() {
            this.num++;
            if (this.num == 101) {
                clearInterval(this.fizzBuzzCounter);
            }
            else if (this.num % 15 == 0) {
                this.output = "FizzBuzz!";
            }
            else if (this.num % 3 == 0) {
                this.output = "Fizz!";
            }
            else if (this.num % 5 == 0) {
                this.output = "Buzz!";
            }
            else {
                this.output = this.num;
            }
        }

    }
})
