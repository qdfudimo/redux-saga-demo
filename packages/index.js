import{ ButtonPlugin} from "./Button/index"
import{ InputPlugin} from "./Input/index"
const viPlugin = {
    install(app) {
        ButtonPlugin.install(app);
        InputPlugin.install(app);
    },
  };
  
  export default viPlugin;
  
  export * from './Input';
  export * from './Button';