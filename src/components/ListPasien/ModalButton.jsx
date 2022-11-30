import react from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ModalButton() {
  return (
    <>
      {/* // <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ borderRadius: "12px", width: "190px", height: "51px" }}
      >
        Tambah Pasien
      </button>

      {/* // <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header border-0"
              style={{ marginBottom: "-50px" }}
            >
              <Row className="my-5">
                <Col className="d-block d-md-flex">
                  <div style={{ width: "15vw" }}>
                    <h3 className="border-bottom text-center">
                      Registrasi Pasien
                    </h3>
                  </div>
                </Col>
              </Row>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Row>
                <Col xs={12} md={5}>
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
                </Col>
                <Col xs={12} md={5} className="ms-md-5 mt-5 mt-md-0">
                  <div className="mb-2">
                    <Form.Label>Tanggal lahir</Form.Label>
                    <Form.Control type="datetime-local" />
                  </div>
                  <div className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" />
                  </div>
                  <div className="mb-2">
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
            <div className="modal-footer float-start">
              <Button variant="primary" type="submit">
                Tambah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalButton;
