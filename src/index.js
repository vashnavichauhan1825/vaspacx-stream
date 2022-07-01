import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import { makeServer } from "./server";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { AuthProvider } from "Context/AuthContext";
import { PlaylistProvider } from "Context/PlaylistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <PlaylistProvider>
  <AuthProvider>
    <App />
    </AuthProvider>
    </PlaylistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
