import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
   DiJava,
  DiHtml5,
  DiGit,
  DiCss3
} from "react-icons/di";
import {
  
  SiMysql,
  SiAmazonaws,
  SiPython
 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>MySql</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>AWS</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Node JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-names">
       
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-names">
       
      </Col>


      <Col xs={4} md={2} className="tech-names" >
        <span>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>Mongo DB</span>
      </Col>
      <Col xs={4} md={2} className="tech-names" >
        <span>GIT</span>
      </Col>
     
      
   
      
    </Row>
  );
}

export default Techstack;
