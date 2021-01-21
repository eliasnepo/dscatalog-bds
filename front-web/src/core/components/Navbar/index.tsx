import React from 'react';
import './styles.scss';

function Navbar() {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <a href="x" className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </a>
            </div>
            <div className="col-6 offset-2">
                <ul className="main-menu">
                    <li>
                        <a href="y" className="active">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="x">
                            CATÁLOGO
                        </a>
                    </li>
                    <li>
                        <a href="x">
                            ADMIN
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;