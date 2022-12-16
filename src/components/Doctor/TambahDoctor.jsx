import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import instance from '../../API/AxiosInstance';
import { useState, useEffect } from "react";

function TambahDoctorPage(props) {
    const [dataSpesialis, setDataSpesialis] = useState([])
    const [dataProfesi, setDataProfesi] = useState([])

    useEffect(() => {
        instance.get('specialities')
        .then(res => setDataSpesialis(res.data.data.filter(item => item.name != "")))
        .catch(err => console.log(err))
       
       instance.get('roles')
        .then(res => setDataProfesi(res.data.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registrasi Tenaga Medis
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Lisensi</Form.Label>
                            <Form.Control type="text" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jadwal Praktek</Form.Label>
                            <Form.Control type="text" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Profesi</Form.Label>
                            <Form.Select aria-label="Default select example">
                            { dataProfesi?.map(item => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            )) }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Upload Foto</Form.Label>
                            <Form.Control type="file" />
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Tanggal lahir</Form.Label>
                            <Form.Control type="datetime-local" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Usia</Form.Label>
                            <Form.Control type="Number" />
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
                            <Form.Control type="text" />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Spesialis</Form.Label>
                            <Form.Select aria-label="Default select example">
                            { dataSpesialis?.map(item => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            )) }
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className='me-auto' onClick={props.onHide}>Tambah</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default TambahDoctorPage