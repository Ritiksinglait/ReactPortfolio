import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  SiJira,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
 
  SiPowerbi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>


      <Col xs={4} md={2} className="tech-names" >
        <span>Jira</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Power BI</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Netliy</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
