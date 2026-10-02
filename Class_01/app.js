// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello from js';


// const root = document.getElementById('root');
// root.appendChild(heading);



// const heading = React.createElement('h1', {}, 'Hello from js');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const App = ()=>{
// return React.createElement(
//  "h1",
//  {} ,
//  "I am an H1 tag"
// )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(App())






// const heading = React.createElement("h1", {}, "Hello from js");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



// {/* <h1 class = 'heading'>Hello</h1>
// <h1 className="heading">Hello</h1> */}





// const a = 10 ;
// const b = 20 ;

// const heading = <h1>Hello {a+b}</h1>







// const name = 'Atifkhan'

// const element = <h1>Hello {name.toUpperCase()}</h1>


// const element2 = (
//     <div style={{color:"red"}} className="parent">
//         <div className="child">
//             <h1>Child</h1>
//         </div>
//     </div>
// )

const heading = React.createElement(
    "h1",
    {},
    "Hello from js"
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(heading);
