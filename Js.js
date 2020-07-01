new Vue({
    el: "#FizzBuzz",
    data: {
        num: 0,
        output:null
    },
    methods: {
        fizzBuzz() {
            this.num = 0;
            let fizzBuzzCounter = setInterval(this.counter, 50);
        },
        counter() {
            this.num++;
            if (this.num == 101) {
                clearInterval(this.fizzBuzzCounter);
                return
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
