import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
} from 'reactstrap';

class ModalInfo extends Component {
  state = { modal: false };

  render() {
    const { cat, voted, chosen, pic } = this.props;
    const { population, status, description, latin } = cat;
    const { modal } = this.state;

    const toggle = () => this.setState({ modal: !modal });
    return (
      <>
        <Button
          color="dark"
          onClick={toggle}
          className={voted && !chosen ? 'fullBtn' : 'float-right halfBtn'}
        >
          More Info
        </Button>
        <Modal isOpen={modal} toggle={toggle} className="mx-auto">
          <ModalHeader toggle={toggle}>{cat.name}</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col sm="6" className="m-0">
                  <img className="infoPic" src={pic} alt="Card" />
                </Col>
                <Col className="factFile" sm="6">
                  <span>Binomial name: </span> <br></br>
                  {latin} <br></br>
                  <span>Conservation Status:</span>
                  <br></br>
                  <a href="https://www.clearias.com/iucn-classification-critically-endangered-endangered-and-vulnerable/">
                    <div className={`status ${status}`}>{status}</div>
                  </a>
                  <span>Wild Population: </span>
                  <br></br>
                  {population}
                </Col>
              </Row>
              <Row>
                <Col className="description">
                  {description.map((para) => (
                    <p key={description.indexOf(para)}>{para}</p>
                  ))}
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalInfo;
