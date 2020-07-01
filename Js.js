new Vue({
    el: "#FizzBuzz",
    data: {
        num: null,
    },
    methods: {
        main() {
            for (i = 1; i < 101; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    this.num = "FizzBuzz!";
                    console.log(this.num)
                }
                if (i % 3 == 0) {
                    this.num = "Fizz!";
                    console.log(this.num)
                }
                else if (i % 5 == 0) {
                    this.num = "Buzz!";
                    console.log(this.num)
                }
                else {
                    this.num = i;
                    console.log(this.num)
                }
            }
        }

    }
})
