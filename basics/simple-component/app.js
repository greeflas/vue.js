Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, text: 'first item' },
            { id: 2, text: 'second item' },
            { id: 3, text: 'third item' }
        ]
    }
});