import React from 'react';

const Paginacion = ({ birdsPerPage, totalBirds, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBirds / birdsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginador">
      <ul className='pagination justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number) } href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginacion;