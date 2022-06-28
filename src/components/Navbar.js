const NavBar = () => {
    return <header className="container-fluid bg-dark">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="nav-link active" href="index.html"><h2 className="text-white">Malibu Hype</h2></a>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <a href="/pages/clientes.html" id="usuario" title="Clientes" ><button type="button" className="btn btn-dark position-relative"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                </button></a>
                <a href="./pages/carrito.html" id="botonCarrito" title="Ver Carrito"><button type="button" className="btn btn-dark position-relative"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></button></a>
            </div>
        </div>
    </header>
}
export default NavBar;