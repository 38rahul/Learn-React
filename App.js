 import React from "react";
 import ReactDOM from "react-dom/client";

// React.CreateElement => JS Object => Render to dom=> it becomes html element(HTMl element)

// const heading =  React.createElement("h1",{id :"heading"}, "Hello Rahul kumar");
// const heading1 =  React.createElement("h1",{id :"heading"}, "Hello Rahul kumar");
// console.log(heading)

// React Element
    const heading = (
                <h1 className="headin1" tabIndex="1">
                 Namaste React By Rahul</h1>
                );

                // react component
    const Heading1 = () => (
                <div id="parent 1">
                    <div id="parent 2">
                        <h1 className="headin1" tabIndex="1">
                 Namaste React By Rahul Heading1 from functional components</h1>
                    </div>
                </div>
                );



// React component, 2 types of components
// 1: Class Based component - OLD -> Uses javascript classes
// 2: Functional Component  - NEW -> Uses Javascript Functions

// React Functional Component -> it is juse a Javascript functions
// when you are creating any functional component name starts with capital letter otherwise you will get error
// A functional Component is a Normal JS funtions which return some  jsx Element/code
// A function which is returning some jsx is a functional component.

const HeadingComponent = () => {
                return <h1 className="heading1"> this is component 1 </h1>
            }

// you won't find lot of people writing return 

// what is the difference between react element and react Component

const HeadingComponent2 = () => (
    <div id="container">
        <h1 className="heading2"> this is component 2.</h1>
    </div>
);


// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => babel transpiles it to React.CreateElement => React Element Object => Render to dom=> it becomes html element (HTMl element)

const root = ReactDOM.createRoot(document.getElementById("root"));

// component composition

const RahulComponent1 = () => (
    <div className="div">
        <h1> This is heading Rahul Component 1</h1>
    </div>
);

const element = <span>THis is span</span>

const title = (
    
        <div className="div">
            {element}
        <h1> This is title </h1>
    </div>
);

const num = 1000;

const RahulComponent2 = () =>(
   
    <div>
        <RahulComponent1/>
        <h1>{title} </h1>
        {num}
        {100 - 90}
        {console.log(title)}
        {console.log(" Hey, I'm learning javascript and Rahul")}
        {'rha'+' '+'kumar'}
        <div>
            <h1> Component composition</h1>
        </div>
        {RahulComponent1()}
        {<RahulComponent1/>}
        {<RahulComponent1></RahulComponent1>}
    </div>
)

root.render(<RahulComponent2/>);

// JSX


// what is component conpositions ??
// putting one components inside another.
