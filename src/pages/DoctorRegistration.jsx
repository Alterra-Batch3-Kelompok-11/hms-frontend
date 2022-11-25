import Row from 'react-bootstrap/Row'
import UserSettingsAndNotification from '../components/UserSettingsAndNotification'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function DoctorRegistration() {
  return (
    <div className='me-md-5 ms-md-4 ms-3 me-0' style={{ color: "rgba(0, 57, 94, 1)" }}>
        <Row className='my-5'>
            <Col className='d-block d-md-flex'>
                <div style={{ width: "12vw"}}>
                    <h3>Registrasi Dokter</h3>
                    <div style={{ height: "2px", backgroundColor: "rgba(0, 57, 94, 1)" }} />
                </div>
                <div className='ms-auto d-none d-md-flex'>
                    <UserSettingsAndNotification />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={5}>
                <div className='mb-2'>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Nomor Lisensi</Form.Label>
                    <Form.Control type="text" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </div>
                <Row className="mb-5">
                    <Form.Group as={Col}>
                        <Form.Label>Profesi</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Dokter">Dokter</option>
                            <option value="Perawat">Perawat</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Spesialis</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Dokter">Dokter</option>
                            <option value="Perawat">Perawat</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Col>
            <Col xs={12} md={4} className="ms-md-5 mt-5 mt-md-0">
                 <div className='mb-2'>
                    <Form.Label>Tanggal lahir</Form.Label>
                    <Form.Control type="datetime-local" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" />
                </div>
                <div className='mb-2'>
                    <Form.Label>Jadwal Praktek</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="Senin">Senin</option>
                        <option value="Selasa">Selasa</option>
                        <option value="Rabu">Rabu</option>
                        <option value="Kamis">Kamis</option>
                        <option value="Jumat">Jumat</option>
                    </Form.Select>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default DoctorRegistration