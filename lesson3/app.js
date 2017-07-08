var vm = new Vue({
    el: '#app',
    data: {
        test: 7,
        msg: 'test v-once directive'
    },
    created: function () {
        // `this` is vm object
        console.log('Value of test field: ' + this.test);
    }
});