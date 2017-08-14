Vue.component('global-component', {
    template: '<h3>This is global Vue component</h3>'
});

Vue.component('render-title', {
    props: ['content'],
    template: '<h1>{{ content }}</h1>'
});

var vm = new Vue({
    el: '#app',
    components: {
        'local-component': {
            template: '<h3>This is local Vue component</h3>'
        }
    }
});