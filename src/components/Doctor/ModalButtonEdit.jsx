import React, { useEffect } from 'react';
import { ModalWrapper } from './style';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ModalButtonEdit = () => {
  let myRef;

  useEffect(() => {
    document.addEventListener('click', closeManageModal);
  }, []);

  const closeManageModal = (e) => {
    if (myRef && !myRef.contains(e.target)){
      closeModal();
    }
  }

  return (
    <ModalWrapper>
      <form ref={(node) => (myRef = node) }>
    <div className="modal-header">
        <div className="row">
            <div className="col-sm-7" style={{width:'525px'}}>
                <h3 className='border-bottom' style={{float:'left'}}>Registrasi Dokter</h3>
                <button onClick={closeManageModal} style={{float:'right', background:'#DDDDDD'}}><AiOutlineClose/></button>
            </div>
        </div>
    </div>
      <Row>
        <div className='col-sm-6'>
            <div className="mb-2">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" />
            </div>
            <div className="mb-2">
                <Form.Label>Nomor Lisensi</Form.Label>
                <Form.Control type="text" />
            </div>
            <div className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" />
            </div>
            <div className="mb-2">\
              <Row>
                <Col xs={12} md={6}>
                    <div className="mb-2">
                        <Form.Label>Profesi</Form.Label>
                        <Form.Select aria-label="Default select example">
                        </Form.Select>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="mb-2">
                        <Form.Label>Spesialis</Form.Label>
                        <Form.Select aria-label="Default select example">
                        </Form.Select>
                    </div>
                </Col>
              </Row>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="mb-2">
                <Form.Label>Tanggal lahir</Form.Label>
                <Form.Control type="datetime-local" />
            </div>
            <div className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" />
            </div>
            <div className="mb-2">
                <Form.Label>Jadwal Praktek</Form.Label>
                <Form.Select aria-label="Default select example">
                </Form.Select>
            </div>
        </div>
       </Row>
       <div className='row'>
        <div className='col-sm-6'></div>
        <div className="col-sm-6" style={{width:'500px'}}>
            <div class="button-group" style={{fontFamily: 'Poppins',marginTop:"10px", marginBottom:'30px'}}>
                <button  type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", float:'right', 
                padding: "10px", gap: "10px", borderRadius:"10px"}}>
                Kirim Data
                </button>
            </div>  
        </div>
       </div>     
      </form>
    </ModalWrapper>
  )
}

export default ModalButtonEdit