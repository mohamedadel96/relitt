import Vue from 'vue'
import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
 
// DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('yyyy LLL dd')
Vue.use(Datetime)
Vue.component('datetime', Datetime);
