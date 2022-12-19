import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useRef, useState } from "react";
import { postData } from "../../API/InstanceWithToken";
import swal from 'sweetalert';
import ReligionComponent from "../../API/Religion";

function ModalButton() {
  const nikID = useRef(null)
  const nama = useRef(null)
  const gender = useRef(0)
  const alamat = useRef(null)
  const hp = useRef(null)
  const status = useRef(true)
  const birthDay = useRef(null)
  const agama = useRef(0)

  const handleClick = async (e) => {
    e.preventDefault()

    const birth = birthDay?.current?.value
    const birthdayPatient = birth.replace("/", "-")

    await postData('patients', {
      nik: nikID?.current?.value,
      name: nama?.current?.value,
      gender: parseInt(gender?.current?.value),
      address: alamat?.current?.value,
      phone: hp?.current?.value,
      marital_status: Boolean(status?.current?.value),
      birth_date: birthdayPatient,
      religion_id: parseInt(agama?.current?.value)
    })


    swal("Yeay", "Data Pasien Berhasil ditambahkan", "success");
  }

  return (
    <>
      {/* // <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn text-white"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ borderRadius: "12px", width: "190px", height: "51px", backgroundColor:"#0071BC" }}
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
                    <Form.Control type="text" ref={nama} />
                  </div>
                  <div className="mb-2">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control type="text" ref={nikID}/>
                  </div>
                  <div className="mb-2">
                    <Form.Label>Nomor Hp</Form.Label>
                    <Form.Control type="text" ref={hp}/>
                  </div>
                  <div className="mb-2">
                    <Form.Label>Agama</Form.Label>
                    <Form.Select aria-label="Default select example" ref={agama}>
                      <ReligionComponent />
                    </Form.Select>
                  </div>
                </Col>
                <Col xs={12} md={5} className="ms-md-5 mt-5 mt-md-0">
                  <div className="mb-2">
                    <Form.Label>Tanggal lahir</Form.Label>
                    <Form.Control type="date" ref={birthDay}/>
                  </div>
                  <div className="mb-2">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" ref={alamat} />
                  </div>
                  <div className="mb-2">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select aria-label="Default select example" ref={gender}>
                      <option value={1}>Laki-Laki</option>
                      <option value={2}>Perempuan</option>
                    </Form.Select>
                  </div>
                  <div className="mb-2">
                    <Form.Label>Status Perkawinan</Form.Label>
                    <Form.Select aria-label="Default select example" ref={status}>
                      <option value={true}>Sudah Menikah</option>
                      <option value={false}>Belum Menikah</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="modal-footer" style={{float:"left"}}>
              <Button onClick={(e) => handleClick(e)} variant="primary" type="submit">
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
