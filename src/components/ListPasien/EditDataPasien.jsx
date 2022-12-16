import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import instance from '../../API/AxiosInstance';
import { useState } from 'react';

function EditDataPasienPage (props) {
    const [data, setData] = useState({})

    const id = props.id.id
    
    if (props.show === true) {
        try {
            instance.get('patients/' + id)
             .then(res => setData(res.data.data))
             .catch(err => console.log(err))

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Data Pasien
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" value={data?.name} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control type="text" value={data?.nik} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Hp</Form.Label>
                            <Form.Control type="text" value={data?.phone} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Agama</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="world">Hello</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Tanggal lahir</Form.Label>
                            <Form.Control type="date" value={data?.birth_date} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" value={data?.address} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select aria-label="Default select example">
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Status Perkawinan</Form.Label>
                            <Form.Control type="text" value={data?.marital_status === true ? 'Menikah' : 'Belum Menikah'}/>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className='me-auto' onClick={props.onHide}>Simpan</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default EditDataPasienPage;
