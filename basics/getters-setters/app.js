var vm = new Vue({
    el: '#app',
    data: {
        message: 'Test',

        firstName: 'Vasya',
        lastName: 'Pupkin'
    },
    computed: {
        reversedMessage: function () {
            // will be added to cache
            return this.message.split('').reverse().join('');
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (value) {
                var parts = value.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }
    }
});