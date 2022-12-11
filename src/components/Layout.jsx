import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Sidebar";

function LayoutPage() {
    return (
        <Row>
            <Sidebar />
            <Col xs={10} md={10}>
                <Outlet />
            </Col>
        </Row> 
    )
  }
  
  export default LayoutPage