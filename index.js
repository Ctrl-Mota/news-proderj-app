import { registerRootComponent } from "expo";

import App from "./App";
import { AppRegistry } from "react-native";
import Router from "./src/routes";
import { name as appName } from "./app.json";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Router);
