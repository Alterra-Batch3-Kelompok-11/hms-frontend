import { useRef, useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { postData } from '../../API/InstanceWithToken';
import instance from '../../API/AxiosInstance';
import swal from 'sweetalert';
import moment from 'moment';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

function RawatJalanComponent(props) {
    const [data, setData] = useState({})
    const [doctor, setDoctor] = useState([]) 
    const d = new Date();
    let year = d.getFullYear();
    const navigate = useNavigate()
    const keluhan = useRef('')
    const jam = useRef('')
    const periksa = useRef('')
    const dokter = useRef('')
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
                    phone: res.data.data.phone,
                    birth_date: moment(res.data.data.birth_date).format("YYYY-MM-DD")
                 }))
                 .catch(err => console.log(err))

                 instance.get('v1/doctors/today')
                 .then(res => setDoctor(res.data.data))
                 .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
    }, [isModalShow, id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        instance.defaults.headers.post['Authorization'] = 'Bearer ' + Cookies.get('token');

        const dataSend = await postData('v1/outpatient_sessions', {
            patient_id: id,
            doctor_id: parseInt(dokter?.current?.value),
            complaint: keluhan?.current?.value,
            schedule_date: moment(periksa?.current?.value).format("DD-MM-YYYY"),
            schedule_time: jam?.current?.value + ':00'
        })

        swal("Yeay", "Data Pasien Berhasil di input ", "success");
        props.onHide()
        navigate('/Admin/Outpatient')
    }

  return (
    <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Rawat Jalan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" value={data?.name} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control type="text" value={data?.nik} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Hp</Form.Label>
                            <Form.Control type="text" value={data?.phone} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Dokter PJ</Form.Label>
                            <Form.Select aria-label="Default select example" ref={dokter}>
                                { doctor?.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )) }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Keluhan</Form.Label>
                            <Form.Control type="text" ref={keluhan}/>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Tanggal lahir</Form.Label>
                            <Form.Control type="date" value={data?.birth_date} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Usia</Form.Label>
                            <Form.Control type="text" value={data?.birth_date} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Control type="text" value={data?.gender === 1 ? 'laki - laki' : 'perempuan'} disabled/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Tanggal Periksa</Form.Label>
                            <Form.Control type="date" ref={periksa} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Waktu</Form.Label>
                            <Form.Control type="time" ref={jam}/>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className='me-auto' onClick={(e) => handleSubmit(e)}>Tambah</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default RawatJalanComponent