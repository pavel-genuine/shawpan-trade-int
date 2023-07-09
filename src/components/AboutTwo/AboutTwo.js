import React from "react";

import { Col, Container, Row } from "react-bootstrap";

export const AboutTwoData = {
    sectionContent: {
      title: "We are the Best Website agency in The World",
      subTitle: "welcom to smart meipaly web agency",
      text:
        "We are committed to providing our customers with exceptional service while offering our employees the best training. Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500s."
    },
    button: {
      label: "Learn More",
      url: "#"
    },
    gallery: ["https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ,   "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]
  };

const AboutTwo = () => {
  const { sectionContent, button, gallery } = AboutTwoData;
  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title MB_45">{sectionContent.title}</h2>
            <p className="sec_desc">{sectionContent.text}</p>
            <a className="common_btn red_bg" href={button.url}>
              <span>{button.label}</span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
