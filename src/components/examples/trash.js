// import React, { Component } from "react";
// import { Container, Row, Col,Button,Image  } from "react-bootstrap";
// import { BsDownload } from 'react-icons/bs'
// import {FiGithub,FiTwitter,FiInstagram}  from "react-icons/fi"
// import "./Home.css";
// import logo from "./nime.webp";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       avatarUrl:
//         "https://res.cloudinary.com/dchhoja40/image/upload/v1683644427/ady/ady-logo_ttrcnp.png",
//     };
//   }
//   render() {
//     return (
//       <div className="home-component">
//         <Container>
//           <Row
//             style={{
//             //   paddingLeft: "20%",
//               paddingTop: "8%",
//               paddingBottom: "20%",
//             }}
//           >
//             <Col
//               sm={12}
//               lg={6}
//               className="order-lg-1  order-sm-2 "
//               style={{ paddingTop: "5%" }}
//             >
//               <div>
//               <div style={{ display: "flex", justifyContent: "center" }}>
//               <h1 className="name">Yuwang Cai</h1>
//               </div>
              
//               <div className="icon-container">
//       <div className="circle">
//         <FiGithub className="icon" />
//       </div>
//       <div className="circle">
//         <FiTwitter className="icon" />
//       </div>
//       <div className="circle">
//         <FiInstagram className="icon" />
//       </div>
//     </div>
                 
//                 <div style={{ display: "flex", justifyContent: "center",paddingTop:"1em" }}>
//             <Button variant="outline-light" size="lg"> <BsDownload/> <span style={{paddingLeft:"0.5em"}}>Resume</span></Button>
//           </div>
//               </div>
//             </Col>

//             <Col
//               sm={12}
//               lg={6}
//               className="order-lg-2 order-sm-1"
//               style={{ paddingLeft: "5%" }}
//             >
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               {/* <img className="image" src={logo} alt="Avatar of Adolph" /> */}
//               <Image className="image" src={logo} fluid="Avatar of Adolph"/>

//             </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Home;