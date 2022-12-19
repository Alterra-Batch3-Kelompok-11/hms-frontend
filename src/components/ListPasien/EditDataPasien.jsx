import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import instance from '../../API/AxiosInstance';
import { useState, useEffect } from 'react';
import ReligionComponent from '../../API/Religion';
import { editData } from '../../API/InstanceWithToken';
import swal from 'sweetalert';
import moment from 'moment/moment';

function EditDataPasienPage (props) {
    const [data, setData] = useState({
        name: '',
        nik: '',
        gender: null,
        address: '',
        phone: '',
        marital_status: null,
        birth_date: '',
        religion_id: null
    })

    const id = props.id.id
    const isModalShow = props.show === true ? true : false

    useEffect(() => {
        if (isModalShow) {
            try {
                instance.get('v1/patients/' + id)
                 .then(res => setData({
                    name: res.data.data.name,
                    nik: res.data.data.nik,
                    gender: res.data.data.gender,
                    address: res.data.data.address,
                    phone: res.data.data.phone,
                    marital_status: res.data.data.marital_status,
                    birth_date: moment(res.data.data.birth_date).format("YYYY-MM-DD"),
                    religion_id: res.data.data.religion_id
                 }))
                 .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
    }, [isModalShow, id])

    const handleEdit = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await editData(`v1/patients/${id}`, {
            name: data.name,
            nik: data.nik,
            gender: data.gender,
            address: data.address,
            phone: data.phone,
            marital_status: data.marital_status,
            birth_date: moment(data.birth_date).format("DD-MM-YYYY"),
            religion_id: data.religion_id
        })

        swal("Yeay", "Data Pasien Berhasil di edit", "success");
        props.onHide()
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
                            <Form.Control type="text" name='name' value={data?.name} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control type="text" name='nik' value={data?.nik} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Hp</Form.Label>
                            <Form.Control type="text" name='phone' value={data?.phone} onChange={(e) => handleEdit(e)} />
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
                            <Form.Control type="date" name='birth_date' value={data?.birth_date} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" name='address' value={data?.address} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select aria-label="Default select example" name='gender'>
                                {
                                    data?.gender === 1
                                    ?  (
                                        <>
                                            <option value="Laki-Laki">Laki-Laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="Perempuan">Perempuan</option>
                                            <option value="Laki-Laki">Laki-Laki</option>
                                        </>
                                    )
                                }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Status Perkawinan</Form.Label>
                            <Form.Control type="text" name='marital_status' value={data?.marital_status === true ? 'Menikah' : 'Belum Menikah'} onChange={(e) => handleEdit(e)}/>
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
