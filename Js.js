new Vue({
    el: "#FizzBuzz",
    data: {
        num: 0,
        output:null,
        fizzBuzzCounter: null, 
        showIt: false,
    },
    methods: {
        fizzBuzz() {
            clearInterval(this.fizzBuzzCounter);
            this.num = 0;
            this.fizzBuzzCounter = setInterval(this.counter, 1000)
        },
        counter() {
            this.showIt = false;
            this.num++;
            if (this.num == 101) {
                clearInterval(this.fizzBuzzCounter);
            }
            else if (this.num % 15 == 0) {
                this.output = "FizzBuzz!";
                this.showIt = true;
            }
            else if (this.num % 3 == 0) {
                this.output = "Fizz!";
                this.showIt = true;
            }
            else if (this.num % 5 == 0) {
                this.output = "Buzz!";
                this.showIt = true;
            }
            else {
                this.output = this.num;
                this.showIt = true;
            }
        }
    },
    computed: {

    }
})
