var vm = new Vue({
    el: '#question-app',
    data: {
        question: '',
        answer: 'Ask a question :)'
    },
    watch: {
        question: function (userQuestion) {
            this.answer = 'Waiting when you stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        // _.debounce is a method from lodash lib. See https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Question should be end with ? symbol.';
                    return;
                }
                this.answer = 'Thinking...';
                var vm = this;
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Cannot connect to API. Details (' + error + ')';
                    });
            },
            500 // sleep after user stop typing
        )
    }
});