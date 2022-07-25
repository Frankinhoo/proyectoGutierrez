import logoMarca from '../../assets/zapatillas.png'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

    
const NavBar = () => {
    return <header className="container-fluid bg-dark">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src={logoMarca} alt="Malibu Hype" title="Malibu Hype" /></a>
                        <Link className='nav-link active' to="/"><h2 className="text-white">Malibu Hype</h2></Link>
                    </div> 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Indumentaria">Indumentaria</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Joyeria">Joyeria</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <CartWidget/>
        </div>
    </header>
}
export default NavBar;

