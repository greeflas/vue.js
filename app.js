// in console: app.message = 'new value';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, World!',
        tooltipMessage: 'This is tooltip message',
        seen: true,
        list: [
            {content: 'item 1'},
            {content: 'item 2'},
            {content: 'item 3'},
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});