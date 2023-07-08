import React, { Component } from "react";
import { Container, Row, Col,Button,Image  } from "react-bootstrap";
import { BsDownload } from 'react-icons/bs'
import {FiGithub,FiTwitter,FiInstagram}  from "react-icons/fi"
import "./Home.css";
import logo from "./jiraiya.jpg";
// import logo from "./nime.webp";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl:
        "https://res.cloudinary.com/dchhoja40/image/upload/v1683644427/ady/ady-logo_ttrcnp.png",
    };
  }

  render() {
    return (
      <div className="home-component">
        <Container >
        <Row style={{ paddingTop: "8%", paddingBottom: "20%" }}>
          <Col sm={12} md={4} className="order-2 order-md-9" style={{ paddingTop: "5%" }}>
          <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="name">Adolph Odhiambo</p>
              </div>
              
              <div className="icon-container">
      <div className="circle">
        <FiGithub className="icon" />
      </div>
      <div className="circle">
        <FiTwitter className="icon" />
      </div>
      <div className="circle">
        <FiInstagram className="icon" />
      </div>
    </div>
                 
                <div style={{ display: "flex", justifyContent: "center",paddingTop:"1em" }}>
            <Button variant="outline-light" size="lg"> <BsDownload/> <span style={{paddingLeft:"0.5em"}}>Resume</span></Button>
          </div>
              </div>
          </Col>
          <Col sm={12} md={8} className="order-1 order-md-3" style={{ paddingLeft: "5%" }} >
          <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <img className="image" src={logo} alt="Avatar of Adolph" /> */}
              <Image className="image" src={logo} fluid="Avatar of Adolph"/>

            </div>
          </Col>
        </Row>
      </Container>

      </div>
    
    );
  }
}

export default Home;

