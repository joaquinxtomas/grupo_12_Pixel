import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Route, Link, Routes } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
import Products from './Products';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" t/* o="/GenresInDb" */>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" /* to="/LastMovieInDb" */>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>LastMovieInDb</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" /* to="/ContentRowMovies" */>
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentRowMovies</span>
                    </Link>
                </li>

                {/* tabla */}
                <li className="nav-item">
                    <Link className="nav-link" to='/list'>
                        <i className="fas fa-fw fa-film"></i>
                        <span>Tabla de productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route exact path='/' element={<ContentWrapper />} />
               {/*  <Route path='/GenresInDb' element={<GenresInDb />} />
                <Route path='/LastMovieInDb' element={<LastMovieInDb />} />
                <Route path='/ContentRowMovies' element={<ContentRowMovies />} />
                <Route path='/table' element={<Movie />} />
                <Route path='*' element={<Error404 />} /> */}
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;