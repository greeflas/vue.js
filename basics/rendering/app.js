var vm = new Vue({
    el: '#app',
    data: {
        isOk: true,

        showPopup: true,

        type: 'C'
    },
    methods: {
        closePopup: function () {
            this.showPopup = false;
        }
    }
});