import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// conditional rending
//  function App() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
//       <h1 className="text-5xl font-bold text-blue-600 mb-8">Welcome to the React Project!</h1>
//       </div>
//   );
//  } 


// function App() {
//   const isloggedIn = true; // Change this to false to test the "not logged in" state
//   if (isloggedIn) {
//     return <h1>Welcome to the React Project!</h1>
//   } else {
//     return <h1>Please log in to access the React Project.</h1>
//   }
// }


// ternary operator
// function App(){
//   const isloggedIn=false;
//   return <div>{isloggedIn?<h2>Welcome to the React Project</h2>:<h2>Please login to access React Project</h2>}</div>;
// }



// && operator used only for if
// function App(){
//   const isNotification=true;
//   return <div>{isNotification &&<p>You have a new notification.</p>}</div>
// }

git add . 
git commit -m "&& operator used only for if, ternary operator, conditional rendering, react fragments, array mapping"
git push origin main

//React fragments: to return a one fragment,file or component only
// function App() {
//   return(
//   <>
//   <h1>Hello My friend</h1>
//   <p>You are welcome any time, any where, for any purpose</p>
//   </>
//   );
// }

// array mapping
// function App(){
//   const fruits=["Apple","Banana","Mango"];
//   return (
//     <ul>
//     {fruits.map((fruit)=>
//     <li>{fruit}</li>
//   )}
//   </ul>
//   );
// }

// function App(){
//   const fruits=["Apple","Banana","Mango","Orange","Grapes"];
//   return (
//     <ul className='fruit-list'>
//     {fruits.map((fruit, index)=>
//     <li key={index}>{fruit}</li>
//   )}
//   </ul>
//   );
// }

// function App() {
//   const students = [
//     { id: 1, name: 'John Doe', age: 20 },
//     { id: 2, name: 'Jane Smith', age: 22 },
//     { id: 3, name: 'Michael Johnson', age: 19 },
//   ];
//   const isTeacher = false; // Change this to false to test the "not a teacher" state
//   return (
//     <>
//     <h1>Student List</h1>
//     {isTeacher && <p>Teacher Mode</p>}
//     <ul>
//       {students.map((student, index) => (
//         <li key={index}>
//           <strong>{student.name}</strong> - {student.age} years old
//         </li>
//       ))}
//     </ul>
//     </>
//   );
// }



 
 






 
export default App;
