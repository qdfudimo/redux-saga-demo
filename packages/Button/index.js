import ViButton from './src/index.vue';

export const ButtonPlugin = {
    install(app) {
        app.component('vi-button', ViButton);
    }
};

export {
    ViButton
};