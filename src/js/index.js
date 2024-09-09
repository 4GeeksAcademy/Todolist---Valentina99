//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
<script src="https://kit.fontawesome.com/616741f196.js" crossorigin="anonymous"></script>

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

