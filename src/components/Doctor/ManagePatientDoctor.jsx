import React, { useEffect } from 'react';
import { ModalWrapper } from './style';
import Ellipse2 from '../../assets/icons/ManageDoctor/Ellipse2.svg';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";

const ManagePatientDoctor = () => {
  let myRef;

  useEffect(() => {
    document.addEventListener('click', closeManageModal);
  }, []);

  const closeManageModal = (e) => {
    if (myRef && !myRef.contains(e.target)){
      closeModal();
    }
  }

  return (
<<<<<<< HEAD
    <ModalWrapper>
      <form ref={(node) => (myRef = node) }>
      <div>
      <button onClick={closeManageModal} style={{float:'right', background:'#DDDDDD'}}><AiOutlineClose/></button>
      </div>
        <div className='row'>
          <div className='col-sm-4' style={{fontFamily: 'Poppins'}}>
            <div className='image'>
              <img src={Ellipse2} style={{padding:"20px", width: "227px", height: "228px"}} />
            </div>
            <div className='text-center' style={{marginLeft:'20px', fontSize: "14px", color: "#00395E", lineHeight: "21px"}}>
              <p><b>Tempat, Tanggal Lahir</b><br></br>
              Ambon, 29 Februari 1984</p>
            </div>
            <div className='text-center' style={{marginLeft:'20px', fontSize: "14px", color: "#00395E", lineHeight: "21px"}}>
              <p><b>No. Telpon/ WA</b><br></br>
              +62 831 4566 2312</p>
            </div>
          </div>
          <div className='col-sm-8' style={{fontFamily:"Poppins", padding:"30px", color: "#00395E", paddingLeft:"50px"}}>
            <h3 style={{fontWeight:"600", fontSize: "30px", lineHeight: "50px"}}>Dr. Bones</h3>
              <table>
                <tr>
                  <th scope='col'>Nama Lengkap</th>
                  <td>Bones Marianes, S.Kg., M.Kg.</td>
                </tr>
                <tr>
                  <td>No. Lisensi</td>
                  <td>9824820130492</td>
                </tr>
                <tr>
                  <td>Specialist</td>
                  <td>Dokter Gigi</td>
                </tr>
                <tr>
                  <td>Jadwal</td>
                  <td>Senin - Kamis<br></br>
                  09.00 - 13.00 WIB</td>
                  </tr>
                <tr>
                  <td>Email</td>
                  <td>bonesmarianes15@nakes.ac.id</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>bonesmarianes15</td>
                </tr>
              </table>
          </div>
        </div>
        <div class="button-group" style={{fontFamily: 'Poppins',marginTop:"30px", marginBottom:'30px'}}>
          <p style={{fontSize:"10px", fontStyle:"italic", marginLeft:'25px'}}>Data akan dikirim melalui email</p>
          <div class="button" style={{display:"flex", padding:'0px 25px', marginTop:"-15px"}}>
            <button  type="button" className="btn btn-primary" style={{background: "#0071BC", display: "flex", flexDirection: "row", justifyContent: "center", 
            padding: "10px", gap: "10px", borderRadius:"10px"}}>
            Kirim Data
            </button>
            <button  type="button" className="btn btn-light" style={{display: "flex", flexDirection: "row", justifyContent: "center", 
            padding: "10px", gap: "10px", borderRadius:"10px", marginLeft:"20px", color:"#00395E", border:"1px solid #00395E"}}>
            <span><BiPencil/></span>Edit
            </button>
          </div>
        </div>       
      </form>
    </ModalWrapper>
=======
    
>>>>>>> main
  )
}

export default ManagePatientDoctor