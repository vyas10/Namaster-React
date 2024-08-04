import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // This is an object as a whole and not a tag
// const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")])]) // This is pretty messed up so to make it easier, jsx is been used but we saw this as this is core React and that is what it means to us.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading, parent]); // render is responsible to convert the object into the tag and put it on the DOM.

// React Elements

// React.createElement => Object => Html Element (render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React ✌");
// Now everytime you create a element like this (mentioned above) it is like writing html inside js. Which is actually the core Reat, but it is not very developer friendly.
// So, the facebook developers created something known as JSX 
// JSX is different and React is different - completely
// JSX is a syntax for JS to create React elements easily
// We can write React without JSX


// JSX -- Not HTML its HTML/XML like syntax
const JsxHeading = <h1>Hello JS from JSX ✌</h1>
const number = 1000;
const elem = <span>Hi this is span tag</span>
// React Components
// Two types: 1. Class Base Components 2. Functional Components
// Class Base Components : OLD (no body uses this)
// Functional Components : NEW 

// React Functional component : Just a normal js function
// A function that returns some piece os JSX is known as functional component in React
// Rule 1st : Name it with a capital letter or you would get an error 
const HeadingComponent = () => {
    return <h1> Namaste JSX From Function Component </h1>
}; // This is a correct version --

const Title = () => (
    <h1>Hello there, this is a title to check component composition</h1>
)
// Example of Component Composition
const HeadingComponent2 = () => (
    <div>
        {number}
        {elem}
        {console.log("It works !")}
        <HeadingComponent/>
        <Title />
        {Title()} 
       <h1> Namaste JSX From Function Component 2</h1>
    </div>

); // This is also a correct version -- we will be sticking to this version -- 
const HeadingComponent3 = () => <h1> Namaste JSX From Function Component 3</h1>; // This is also a correct version --

const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a Root
// root.render(JsxHeading) // This is how you render a React Element
root.render(<HeadingComponent2 />) // This is how you render a React Component