Vue.component('global-component', {
    template: '<h3>This is global Vue component</h3>'
});

var vm = new Vue({
    el: '#app',
    components: {
        'local-component': {
            template: '<h3>This is local Vue component</h3>'
        }
    }
});