import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAllowedByRole } from 'core/utils/auth';
import './styles.scss';

const Navbar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        <NavLink to="/admin/products" className="admin-nav-item">
          <p>Meus Produtos</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/categories" className="admin-nav-item">
          <p>Minhas Categorias</p>
        </NavLink>
      </li>
      {isAllowedByRole(['ROLE_ADMIN']) && (
        <li>
          <NavLink to="/admin/users" className="admin-nav-item">
            <p>Meus Usuários</p>
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

export default Navbar;