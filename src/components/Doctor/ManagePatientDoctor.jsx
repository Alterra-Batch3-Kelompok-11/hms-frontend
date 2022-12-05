import React from 'react'

export default function ManagePatientDoctor(props) {

    const { openPopup, setOpenPopup } = props;

    let popupStyle = {
      display: 'block',
    }
  return (  
    <div className="modal fade" style={popupStyle}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">  
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close">
            </button>
          </div>
          <div className="modal-body">
          ...
          </div>
        </div>
      </div>
    </div>
  )
}
