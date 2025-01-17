import { Container, Row, Col } from "reactstrap";
import React from "react";

const AboutSection = (props) => {
  return (
    <div className="about_us">
      <Container>
        <Row className="align-items-center">
          <Col lg="4">
            <img
              src={require("../../../assets/img/abt.png")}
              alt="about"
              className="img-fluid"
            />
          </Col>
          <Col lg="8">
            <div className="abt_content">
              <h3>
                About <span>Us</span>
              </h3>
              <p>
                पंडितजी डॉट कॉम हम पंडित जी डॉट कॉम एक ऐसा मंच है जो पूरे
                भारतवर्ष के धार्मिक लोगो को ज्योतिष कुंडली भाग्य व वैदिक विधि से
                पूजा सम्पन्न करवाने के लिए ऑनलाइन मंच प्रदान करता है। यहां हम
                आपके लिए अनुभवी विद्वान आचार्य शास्त्री पंडित वर्ग को आपकी
                विधिवत पूजा के लिए व साथ मे सभी पूजन सामग्री उपलब्ध करवाते है।
                हमारे यहां प्रत्येक पंडित जी हमारी वर्षो से चली आ रही ऋषि
                परम्परा से गुरुकुल पाठशाला में पढ़े हुए ज्ञान अर्जित किये हुए है।
                पंडित जी डॉट कॉम हमारा लक्ष्य है के विद्वान पंडित जी के साथ ही
                सम्पूर्ण पूजन सामग्री आपको उपलब्ध करवाए जिसे आप बाकी सभी चिंताओं
                से मुक्त होकर आंनद के साथ पूजा कर पूण्य प्राप्त कर भाग्यशाली
                बने। पंडित जी डॉट कॉम आपके कामनाओ की पूर्ति के लिए संकल्पित है
                आज ही बुक करें pujyapanditG.com
              </p>
              {/* <a href="#!" className="btn btn-outline-amber btn-rounded">
                Know More
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutSection;
