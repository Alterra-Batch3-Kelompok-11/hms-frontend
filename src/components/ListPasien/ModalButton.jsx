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
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
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
                style={{marginRight:"30px"}}
              ></button>
            </div>
            <div className="modal-body" style={{marginLeft:"40px"}}>
              <Row>
                <Col xs={12} md={5}>
                  <div className="mb-2">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-2">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-2">
                    <Form.Label>Nomor Hp</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-2">
                    <Form.Label>Agama</Form.Label>
                    <Form.Control type="text" />
                  </div>
                </Col>
                <Col xs={12} md={5} className="ms-md-5 mt-5 mt-md-0">
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
                </Col>
              </Row>
            </div>
            <div className="modal-footer" style={{float:"left"}}>
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
