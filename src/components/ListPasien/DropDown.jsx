import ModalButton from "./ModalButton";

function DropDown() {
  return (
<div className="btn-group">
  <button type="button" className="btn btn-transparent" data-bs-toggle="dropdown" aria-expanded="false" >
  •••
  </button>
  <ul className="dropdown-menu text-center poppins-font" >
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">Edit Data</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">Hapus Data</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">Data Riwayat</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" style={{color:"#00395E"}} href="#">+ Rawat Jalan</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><ModalButton /></li>
  </ul>
</div>
  );
}

export default DropDown;
