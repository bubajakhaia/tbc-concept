import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Breadcrumbs.css';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < items.length - 1 ? (
              
              <Link  to={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="breadcrumb-separator"></span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired // href should be required for Link
    })
  ).isRequired
};

export default Breadcrumbs;