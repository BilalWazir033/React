// function Student(props) {
//     console.log("Props: ", props);
//     return (
//         <>
//         <h1>Name: {props.name}</h1>
//         <h1>Age: {props.age}</h1>
//         <h1>City: {props.city}</h1>

//         </>
//     );
// }
// export default Student;

function Student({ name="Unknown", age=0, city="Unknown" }) {
    // console.log("Props: ", { name, age, city });
    return (
        <>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>City: {city}</h1>
        </>
    );
}

export default Student;