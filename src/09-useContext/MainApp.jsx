import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { OtraErrorPage } from "./OtraErrorPage"
import { NavBar } from "./NavBar"



export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar />
        <hr/>

        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='login' element={ <LoginPage /> } />
            <Route path='about' element={ <AboutPage /> } />

            //Opcion 1
            {/* <Route path='/*' element={ <OtraErrorPage /> } /> */}

            //Opcion 2, más elegante porque no deja URL sucias en la barra de navegación
            <Route path='/error' element={ <OtraErrorPage /> } />
            <Route path='/*' element={ <Navigate to='/error' /> } />
        </Routes>
    </UserProvider>
  )
}
