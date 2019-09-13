import Vue from 'vue'
import App from './components/Todo.vue'
import eventBus from './eventBus'

Vue.config.productionTip = false

Vue.prototype.$eb = eventBus

new Vue({
    render: h => h(App),
}).$mount('#app')