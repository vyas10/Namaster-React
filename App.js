import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // This is an object as a whole and not a tag
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")])]) // This is pretty messed up so to make it easier, jsx is been used but we saw this as this is core React and that is what it means to us.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, parent]); // render is responsible to convert the object into the tag and put it on the DOM.aaaaaaaaaaaaaaaaa