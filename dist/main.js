import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import "@Assets/css/index.css";
import "@Assets/css/tailwind.css";
import { store, persistor } from "./store";
import App from "./App";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            suspense: false,
        },
    },
});
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: _jsx("h1", { children: "hello" }), persistor: persistor, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }) }));
