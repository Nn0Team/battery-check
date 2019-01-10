import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Home from './modules/home/components/Home';

Vue.use(VueDevtools, { host: process.env.HOST_APP });

new Vue({
	template: `
        <Frame>
            <Home />
        </Frame>`,

	components: {
		Home
	}
}).$start();
