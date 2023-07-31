import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className ="container-fluid">
            <Link className ="navbar-brand" to="/">Main App</Link>
            <div className ="collapse navbar-collapse" id="navbarNav">
            <ul className ="navbar-nav">

                <NavLink to="/" className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }>
                    Home
                </NavLink>

                <NavLink to="/about" className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }>
                    About
                </NavLink>

                <NavLink to="/login" className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }>
                    Login
                </NavLink>


                {/* <li className ="nav-item">
                <a className ="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className ="nav-item">
                <a className ="nav-link" href="#">Features</a>
                </li>
                <li className ="nav-item">
                <a className ="nav-link" href="#">Pricing</a>
                </li>
                <li className ="nav-item">
                <a className ="nav-link disabled">Disabled</a>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>
        {/* <hr/>
        <Link to='./'>Home</Link>
        <Link to='./about'>About</Link>
        <Link to='./login'>Login</Link> */}
    </>
  )
}
