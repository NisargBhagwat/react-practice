import React from "react";
import ReactDOM from "react-dom/client";

// hot module reloading (hmr)
// hmr work on File Watcher algorithem - written in c++ss 
// Bundling
// minify
// cleaning our code 
// create dev and production build 
// super fast build algorithm 
// Image optimization 
// catching while development 
// file compression 
// compatable with older version of browser 
// Https on dev ]
// manage port number 
// consistent hashing algorithm  
// zero config 
// tree shaking - removing un-wanted 

const heading = React.createElement("div", {}, [
    React.createElement("h1", {
        style: {
            color: "tomato"
        }
    }, "Namaste javascript! parcel"),
    React.createElement("h1", {}, "Namaste javascript!"),
    React.createElement("h1", {}, "Namaste javascript!"),
]);

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(heading);