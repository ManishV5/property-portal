import React from 'react'
function Modal(props) {
  return (
    <div class="modal fade" id={`${props.listing['listing-name']}_modal`} tabIndex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5">Buying</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            You are buying <b>{props.listing['listing-name']}</b> at <b>{props.listing['location']}</b> for price of Rs <b>{props.listing['price']}</b>
        </div>
        <div class="mb-3 text-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary ms-1">Continue</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Modal