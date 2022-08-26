import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "../Image/Image.js";
import "./styles.scss";

export default class ViewHeader extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          {!this.props.disableImage && (
            <Col sm={10}>
              <div className="ViewImageContainer">
                <Image src={this.props.image} />
              </div>
            </Col>
          )}
          <Col sm={1}></Col>
          <div className="ViewHeaderTitle">{this.props.title}</div>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col s={5}>
            <div className="ViewHeaderHeadingOne">{this.props.h1}</div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col s={10}>
            <div className="ViewHeaderBlurb">{this.props.blurb}</div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <div className="HeaderSeparator"/>
      </div>
    );
  }
}
