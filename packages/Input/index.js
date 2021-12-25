import viInput from './src/index.vue';

export const InputPlugin = {
    install(app) {
        app.component('vi-input', viInput);
    }
};

export {
    viInput
};