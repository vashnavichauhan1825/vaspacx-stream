import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import { makeServer } from "./server";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { AuthProvider } from "Context/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
