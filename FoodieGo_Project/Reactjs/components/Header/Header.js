import Title from "../Title/title.js";
const Header = ()=>{
    return(
        <div className="header">
            <Title />

            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}