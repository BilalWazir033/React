import  {Logo}  from "../../images/Logo.js";
const Title = ()=>{
    return(
        <a href="/">
            <img className="logo" src={Logo} alt="Logo" />
        </a>
    )
}

export default Title;

git add .
git commit -m "Added Title component with logo image"
git push origin main