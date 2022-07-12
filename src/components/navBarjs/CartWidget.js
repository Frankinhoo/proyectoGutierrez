

const CartWidget = () => {
    return (
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <a href="/pages/clientes.html" id="usuario" title="Clientes" ><button type="button" className="btn btn-dark position-relative"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
            >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85"></path>
            </svg>
            </button></a>
            <a href="./pages/carrito.html" id="botonCarrito" title="Ver Carrito"><button type="button" className="btn btn-dark position-relative"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
            >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17H6V3H4"></path>
                <path d="M6 5l14 1-1 7H6"></path>
            </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></button></a>
        </div>
    )
}

export default CartWidget;