import React from 'react'
import print from '../../assets/Print.svg'
import pdf from '../../assets/PDF.svg'

function RiwayatPasien() {
    return (
        <div className='container-fluid'>
            <div className="content container" style={{ width: "1150px" }}>
                <div className="container text-center">
                    <div
                        className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 d-flex position-relative"
                        style={{ marginTop: "41px", marginBottom: "41px" }}
                    >
                        <div className="col">
                            <h3
                                className="poppins-font border-bottom"
                                style={{ fontSize: "30px", color: "#00395E", width: "250px" }}
                            >
                                Riwayat Pasien
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='card ms-3 me-3'style={{boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)', borderRadius: '4px'}}>
                        <div className='d-flex flex-row m-3'>
                            <div style={{ width: "1000px" }}>
                                <h5>Data Pasien</h5>
                                <div className='mt-3'>
                                    <div className='d-flex flex-row'>
                                        <p>Nama: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Jono</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>NIK: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>33927100498492</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>Tempat, Tanggal Lahir: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Jakarta, 28 Juni 1993</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>Jenis Kelamin: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Laki-laki</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>Agama: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Islam</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>Status Perkawinan: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Sudah Menikah</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <p>Alamat: </p>
                                        &nbsp;
                                        <p style={{ fontWeight: 'bold' }}>Condet, Jakarta Timur</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "1000px" }}>
                                <h5>Data Pasien</h5>
                                <div className='mt-3'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td >Waktu Kunjungan</td>
                                                <td style={{ fontWeight: 'bold' }}>17 November 2022</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td style={{ fontWeight: 'bold' }}>09:30</td>
                                            </tr>
                                            <tr>
                                                <td>Dokter Penanggungjawab</td>
                                                <td style={{ fontWeight: 'bold' }}>Dr. Bones</td>
                                            </tr>
                                            <tr>
                                                <td>Keluhan</td>
                                                <td style={{ fontWeight: 'bold' }}>Batuk, pilek, pusing</td>
                                            </tr>
                                            <tr>
                                                <td>Alergi</td>
                                                <td style={{ fontWeight: 'bold' }}>Tidak Ada</td>
                                            </tr>
                                            <tr>
                                                <td>Kondisi</td>
                                                <td style={{ fontWeight: 'bold' }}>Batuknya sering. Lalu disertai pilek juga. Sudah sekitar 3 hari. Akhir-akhir ini kalau sedang batuk langsung merasakan pusing</td>
                                            </tr>
                                            <tr>
                                                <td>Obat</td>
                                                <td style={{ fontWeight: 'bold' }}>Fix Formula</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button style={{
                            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
                            borderRadius: '6px',
                            background: 'white',
                            padding: '10px 20px',
                            borderStyle: 'none',
                            marginRight: '20px'}}>
                            <img src={print} style={{width: "20px"}} />
                            &nbsp;
                            Print
                        </button>
                        <button style={{
                            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
                            borderRadius: '6px',
                            background: 'white',
                            padding: '10px 20px',
                            borderStyle: 'none'}}>
                            <img src={pdf} style={{height: "20px"}} />
                            &nbsp;
                            PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiwayatPasien
