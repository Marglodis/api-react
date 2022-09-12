import React from 'react'

const Modal = ({id,titulo, imagen}) => {
    
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <img src={imagen} alt={titulo}></img>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal