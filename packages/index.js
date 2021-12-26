import { ButtonPlugin } from "./Button/index";
import { InputPlugin } from "./Input/index";
const components = [
    ButtonPlugin,
    InputPlugin
]
const viPlugin = {
    install(app) {
        components.forEach(item => item.install(app))
    },
};

export default viPlugin;

export * from './Input';
export * from './Button';