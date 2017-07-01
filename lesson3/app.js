var vm = new Vue({
    data: {
        test: 7
    },
    created: function () {
        // this is vm object
        console.log('Value of test field: ' + this.test);
    }
});