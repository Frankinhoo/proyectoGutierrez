import logoMarca from '../../assets/zapatillas.png'
import CartWidget from './CartWidget';
    
const NavBar = () => {
    return <header className="container-fluid bg-dark">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src={logoMarca} alt="Malibu Hype" title="Malibu Hype"/></a>
                        <a className="nav-link active" href="index.html"><h2 className="text-white">Malibu Hype</h2></a>
                    </div>
                </nav>
            </div>
            <CartWidget/>
        </div>
    </header>
}
export default NavBar;