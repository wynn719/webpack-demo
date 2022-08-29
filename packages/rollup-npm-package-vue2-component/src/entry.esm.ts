import _Vue, { PluginFunction } from "vue";

// Import vue components
import * as components from "@/components/index";

// install function executed by Vue.use()
const install: PluginFunction<any> = function installLiveTest(
  Vue: typeof _Vue
) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Log version
console.info("This library version is: " + process.env.OUTPUT_FORMAT);

// Log mode
console.info("This library mode is: " + process.env.NODE_ENV);

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "./components/index";
