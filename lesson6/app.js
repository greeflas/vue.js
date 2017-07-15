Vue.component('my-component', {
    template: '<p class="text-line"></p>'
});

var vm = new Vue({
    el: '#app',
    data: {
        isActive: true,

        classObject: {
            active: true
            // has-error: function () {}
        },

        activeClass: 'active',

        styleObject: {
            fontSize: '16px',
            color: 'black',
            fontWeight: 'bold'
        }
    }
});