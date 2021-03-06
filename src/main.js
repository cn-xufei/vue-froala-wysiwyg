// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './examples/App'

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';

import VueFroala from 'src';

Vue.use(VueFroala);
new Vue({
 render: h => h(App)

}).$mount('#app')
