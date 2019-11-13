import React from 'react';
import './NavBar.css';
import Imagen from "../logoPagWeb.png"
import ImagenUsuario from "../imagenUsuario.jpg"

function NavBar(props) {
    return (
        <div className=" NavBar bg-secondary text-white text-center ">
            <div className="Logo">                                       
                <img src={Imagen} className="ImagenLogo"></img>
            </div>
            <div>
                <nav className="PestanasNavbar">
                    <a className="Pestañas" href="Home.html">Home</a>
                    <a className="Pestañas" href="Construct.html">Construct</a>
                </nav>
            </div>
            <form>
                <div >
                    <input className="BarraBusqueda" placeholder="Busqueda avanzada..." />
                </div>
            </form>

            <div>
                <button className="BotonUsuario" >
                <div className="DropdownUsuario">
                    <h4 className= "NombreUsuario">Octavio César Palacios López</h4>
                    <img src={ImagenUsuario} className= "ImagenUsuario" />
                    <a href="#">Información</a>
                    <a href="#">Ayuda</a>
                    <a href="#">Configuración</a>
                    <a href="#">Cerrar Sesión</a>
                </div> 
                </button>
            </div>
        </div>
    );
}
export default NavBar;
