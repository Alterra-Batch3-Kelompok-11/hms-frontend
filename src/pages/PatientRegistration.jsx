import UserSettingsAndNotification from "../components/UserSettingsAndNotification"
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'

function PatientRegistration() {
    const id = 2 // get data example

  return (
    <div className='me-md-5 ms-md-4 ms-3 me-0' style={{ color: "rgba(0, 57, 94, 1)" }}>
        <Row className='my-5'>
            <Col className='d-block d-md-flex'>
                <div style={{ width: "12vw"}}>
                    <h3>Registrasi Pasien</h3>
                    <div style={{ height: "2px", backgroundColor: "rgba(0, 57, 94, 1)" }} />
                </div>
                <div className='ms-auto d-none d-md-flex'>
                    <UserSettingsAndNotification />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={5} className="me-md-5 pe-md-5">
                <div className='mb-2'>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Nik</Form.Label>
                    <Form.Control type="text" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Nomor Hp</Form.Label>
                    <Form.Control type="number" />
                </div>
                <div className='mb-5'>
                    <Form.Label>Agama</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="islam">Islam</option>
                        <option value="kristen">Kristen Protestan</option>
                        <option value="katolik">Katolik</option>
                        <option value="hindu">Hindu</option>
                        <option value="buddha">Buddha</option>
                        <option value="konghucu">Konghucu</option>
                    </Form.Select>
                </div>
                
                <Button variant="primary" type="submit">
                    { id ? "Simpan" : "Tambah" }
                </Button>
            </Col>
            <Col xs={12} md={5} className="ms-md-5 mt-5 mt-md-0 ps-md-5">
                 <div className='mb-2'>
                    <Form.Label>Tanggal lahir</Form.Label>
                    <Form.Control type="datetime-local" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Usia</Form.Label>
                    <Form.Control type="number" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="LakiLaki">Laki - Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </Form.Select>
                </div>
                <div className='mb-2'>
                    <Form.Label>Status Perkawinan</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="belumKawin">Belum Kawin</option>
                        <option value="kawin">Kawin</option>
                        <option value="ceraiHidup">Cerai Hidup</option>
                        <option value="ceraiMati">Cerai Mati</option>
                    </Form.Select>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default PatientRegistration