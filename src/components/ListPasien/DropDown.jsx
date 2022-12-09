import { Link } from "react-router-dom";

function DropDown() {
  const id = 1
  return (
<div className="btn-group">
  <button type="button" className="btn btn-transparent" data-bs-toggle="dropdown" aria-expanded="false" >
  •••
  </button>
  <ul className="dropdown-menu text-center poppins-font" >
    <li>
      <Link 
        className="text-decoration-none"
        to={`/Admin/PatientEdit/${id}`}
        state={{
          name: "hafizh"
        }}
        >
          <span className="dropdown-item text-decoration-none" style={{color:"#00395E"}}>Edit Data</span>
      </Link>
    </li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">Hapus Data</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li>
      <Link className="text-decoration-none" to={'/Admin/Outpatient'}>
        <span className="dropdown-item" style={{color:"#00395E"}}>Riwayat Pasien</span>
      </Link>
    </li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">+ Rawat Jalan</a></li>
  </ul>
</div>
  );
}

export default DropDown;
