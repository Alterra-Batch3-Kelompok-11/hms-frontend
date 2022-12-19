import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import instance from '../../API/AxiosInstance';
import { useState, useEffect, useRef } from "react";
import { storage } from '../../firebase/Firebase';
import { getDownloadURL, uploadBytes, ref } from "firebase/storage"
import { uuidv4 } from "@firebase/util"
import swal from 'sweetalert';
import { postData } from '../../API/InstanceWithToken';
import moment from 'moment';

function TambahDoctorPage(props) {
    const [dataSpesialis, setDataSpesialis] = useState([])
    const nama = useRef('')
    const noLisensi = useRef('')
    const email = useRef('')
    const password = useRef('')
    const noHP = useRef('')
    const image = useRef(null)
    const tanggalLahir = useRef('')
    const statusPerkawinan = useRef(false)
    const spesialis = useRef(0)

    useEffect(() => {
        instance.get('v1/specialities')
        .then(res => setDataSpesialis(res.data.data.filter(item => item.name != "")))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (image === null) alert("anda belum memasukan gambar")

        const metadata  = {
            contentType : image.current?.files[0].type,
            firebaseStorageDownloadTokens: uuidv4() //In this line you are adding the access token
        };

        const spesial = parseInt(spesialis?.current?.value)
        const inputImage = image.current?.files[0]
        const fileName = `images/${image.current?.files[0].name + uuidv4()}`
        const imageRef = ref(storage, fileName)

        
       await uploadBytes(imageRef, inputImage, metadata).then(() => {
            getDownloadURL(imageRef).then((url) => {
                postData('v1/doctors', {
                    name: nama?.current?.value,
                    license_number: noLisensi?.current?.value,
                    password: password?.current?.value,
                    speciality_id: spesial,
                    profile_pic: url,
                    birth_date: moment(tanggalLahir?.current?.value).format("DD-MM-YYYY"),
                    phone: noHP?.current?.value,
                    marital_status: Boolean(statusPerkawinan?.current?.value),
                    email: email?.current?.value
                })
                swal("Success", "Data Dokter berhasil ditambahkan", "success")
                props.onHide()
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }

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
                            <Form.Control type="text" ref={nama}/>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Nomor Lisensi</Form.Label>
                            <Form.Control type="text" ref={noLisensi} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={email} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" ref={password} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Upload Foto</Form.Label>
                            <Form.Control type="file" ref={image} />
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="mb-2">
                            <Form.Label>Tanggal lahir</Form.Label>
                            <Form.Control type="date" ref={tanggalLahir} />
                        </div>
                        <div className="mb-2">
                            <Form.Label>Status Perkawinan</Form.Label>
                            <Form.Select aria-label="Default select example" ref={statusPerkawinan}>
                                <option value={false}>Belum Menikah</option>
                                <option value={true}>Menikah</option>
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>Spesialis</Form.Label>
                            <Form.Select aria-label="Default select example" ref={spesialis}>
                            { dataSpesialis?.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )) }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <Form.Label>No Telepon</Form.Label>
                            <Form.Control type="text" ref={noHP} />
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

export default TambahDoctorPage