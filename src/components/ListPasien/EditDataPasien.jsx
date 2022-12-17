import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import instance from '../../API/AxiosInstance';
import { useState } from 'react';
import ReligionComponent from '../../API/Religion';

function EditDataPasienPage (props) {
    const baseData = {}
    const [data, setData] = useState(baseData)
    let [name, setName] = useState("")

    const id = props.id.id
    
    if (props.show === true) {
        try {
            instance.get('v1/patients/' + id)
             .then(res => setName(res.data.data.name))
             .catch(err => console.log(err))

        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name)
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
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control type="text" value={data.nik} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Hp</Form.Label>
                            <Form.Control type="text" value={data?.phone} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Agama</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <ReligionComponent />
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
                <Button className='me-auto' onClick={(e) => handleSubmit(e)}>Simpan</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default EditDataPasienPage;
