Vue.component('global-component', {
    template: '<h3>This is global Vue component</h3>'
});

Vue.component('render-title', {
    props: ['content'],
    template: '<h1>{{ content }}</h1>'
});

/*
types:
String
Number
Boolean
Function
Object
Array
Symbol
*/
Vue.component('validation-component', {
    props: {
        propA: 'Number',
        propB: ['String', 'Number'],
        propC: {
            type: 'String',
            required: true
        },
        propD: {
            type: 'Number',
            default: 100
        },
        propE: {
            type: 'Object',
            default: function () {
                return {message: 'not set'};
            }
        },
        propF: {
            validator: function (value) {
                return value > 10;
            }
        }
    }
});

Vue.component('counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return { counter: 0 }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment');
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
       total: 0
    },
    components: {
        'local-component': {
            template: '<h3>This is local Vue component</h3>'
        }
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
});