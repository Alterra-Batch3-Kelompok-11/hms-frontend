import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useState, useEffect } from 'react';
import instance from '../../API/AxiosInstance';
import { editData } from '../../API/InstanceWithToken';
import swal from 'sweetalert';
import moment from 'moment/moment';

function EditDoctorPage(props) {
  const [data, setData] = useState({
    name: '',
    noLisensi: '',
    email: '',
    password: '',
    phone: '',
    birth_date: '',
    marital_status: null,
    spesialis: 0,
    hari: '',
    start: '',
    end: ''
  })

  const id = props.id.id
  const isModalShow = props.show === true ? true : false

  useEffect(() => {
    if (isModalShow) {
        try {
            instance.get('v1/doctors/' + id)
             .then(res => setData({
                name: res.data.data.name,
                noLisensi: res.data.data.license_number,
                email: res.data.data.email,
                phone: res.data.data.phone,
                marital_status: res.data.data.marital_status,
                birth_date: moment(res.data.data.birth_date_string).format("YYYY-DD-MM"),
                start: res.data.data.doctor_schedules[0].start_time,
                end: res.data.data.doctor_schedules[0].end_time,
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
                    Edit Data Dokter
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
                            <Form.Label>Nomor Lisensi</Form.Label>
                            <Form.Control type="text" name='noLisensi' value={data?.noLisensi} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name='email' value={data?.email} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jadwal</Form.Label>
                            <Form.Select aria-label="Default select example" required>
                                <option key={0} value='0'>minggu</option>
                                <option key={1} value='1'>senin</option>
                                <option key={2} value='2'>selasa</option>
                                <option key={3} value='3'>rabu</option>
                                <option key={4} value='4'>kamis</option>
                                <option key={5} value='5'>jumat</option>
                                <option key={6} value='6'>sabtu</option>
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jam Mulai</Form.Label>
                            <Form.Control type="time" name='start' value={data?.start} onChange={(e) => handleEdit(e)} />
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Tanggal lahir</Form.Label>
                            <Form.Control type="date" name='birth_date' value={data?.birth_date} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Status Perkawinan</Form.Label>
                            <Form.Select aria-label="Default select example" name='marital_status'>
                                {
                                    data?.marital_status === true
                                    ?  (
                                        <>
                                            <option value={true}>Menikah</option>
                                            <option value={false}>Belum Menikah</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value={false}>Belum Menikah</option>
                                            <option value={true}>Menikah</option>
                                        </>
                                    )
                                }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Spesialis</Form.Label>
                            <Form.Control type="text" name='address' value={data?.address} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>No Telepon</Form.Label>
                            <Form.Control type="text" name='phone' value={data?.phone} onChange={(e) => handleEdit(e)} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jam Selesai</Form.Label>
                            <Form.Control type="time" name='end' value={data?.end} onChange={(e) => handleEdit(e)} />
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
  )
}

export default EditDoctorPage