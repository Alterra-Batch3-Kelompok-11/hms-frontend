import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import EditDataPasienPage from './EditDataPasien';
import swal from 'sweetalert';
import { deleteData } from '../../API/InstanceWithToken';
import Cookies from "js-cookie"
import instance from '../../API/AxiosInstance';
import RawatJalanComponent from './RawatJalan';

function DropDown(props) {
  const [modalShow, setModalShow] = useState(false);
  const [rawatShow, setRawatShow] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault()

    instance.defaults.headers.post['Authorization'] = 'Bearer ' + Cookies.get('token');

    await swal({
      title: "Are you sure?",
      text: "Apakah anda yakin menghapus data pasien berikut",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        deleteData(`v1/patients/${props.id}`)
    
        swal("Data Pasien Terhapus", {
          icon: "success",
        });
      } else {
        swal("Data Pasien Masih tersimpan");
      }
    });

  }

  return (
<div className="btn-group">
  <button type="button" className="btn btn-transparent" data-bs-toggle="dropdown" aria-expanded="false" >
  •••
  </button>
  <ul className="dropdown-menu text-center poppins-font"  >
    <li>
      <Button variant="btn-link text-decoration-none" style={{color:"#00395E", height: "30px"}} onClick={() => setModalShow(true)}>
        Edit Data
      </Button>

      <EditDataPasienPage id={props} show={modalShow} onHide={() => setModalShow(false)} />
    </li>
    <li><hr className="dropdown-divider"></hr></li>
    <li>
      <Button variant="btn-link text-decoration-none" style={{color:"#00395E", height: "30px"}} onClick={(e) => handleDelete(e)}>
        Hapus Data
      </Button>
    </li>
    <li><hr className="dropdown-divider"></hr></li>
    <li>
      <Link className="text-decoration-none" to={'/Admin/Outpatient'}>
        <span className="dropdown-item" style={{color:"#00395E"}}>Riwayat Pasien</span>
      </Link>
    </li>
    <li><hr className="dropdown-divider"></hr></li>
    <li>
      <Button variant="btn-link text-decoration-none" style={{color:"#00395E", height: "30px", fontSize: '10px'}} onClick={() => setRawatShow(true)}>
        Tambah Rawat Jalan
      </Button>

      <RawatJalanComponent id={props} show={rawatShow} onHide={() => setRawatShow(false)} />
    </li>
  </ul>
</div>
  );
}

export default DropDown;
