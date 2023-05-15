import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimaryButton from './components/UI/PrimaryButton.vue';
import SecondaryButton from './components/UI/SecondaryButton.vue';


const app = createApp(App);

app
    .use(router)

    .component('PrimaryButton', PrimaryButton)
    .component('SecondaryButton', SecondaryButton);

app.mount('#app');
