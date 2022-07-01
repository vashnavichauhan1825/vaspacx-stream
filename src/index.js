import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import { makeServer } from "./server";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { AuthProvider } from "Context/AuthContext";
import { PlaylistProvider } from "Context/PlaylistContext";
import { VideoProvider } from "Context/ReducerContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <VideoProvider>
  <PlaylistProvider>
  <AuthProvider>
    <App />
    </AuthProvider>
    </PlaylistProvider>
    </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
