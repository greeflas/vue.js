var vm = new Vue({
    el: '#app',
    data: {
        test: 7,

        msg: 'test v-once directive',

        rawHtmlContent: '<h1>This is raw HTML</h1>',

        dynamicId: 'btn-js',
        isBtnActive: true
    },
    created: function () {
        // `this` is vm object
        console.log('Value of test field: ' + this.test);
    }
});