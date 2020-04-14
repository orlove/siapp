import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Всё для управления и хранения состояния приложения (Redux)
import { Provider } from 'react-redux';
import { store, persistor } from './redux/index';
import { PersistGate } from 'redux-persist/integration/react';

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(eruda => {}); //runtime download
}
