import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class ModalInfo extends Component {
  submit = (event) => {
    event.persist();
    axios
      .post(`/api/cats/${event.target.value}`)
      .then((response) => {
        console.log(event);
        console.log(response);
        //Set values in local storage when they have voted
        localStorage.setItem('voted', true);
        localStorage.setItem('choice', event.target.value);
      })
      .catch((err) => {
        alert(err);
      });
  };

  state = { modal: false };

  render() {
    const { cat, handler, voted, chosen } = this.props;
    const { name, _id } = cat;
    const { modal } = this.state;

    const toggle = () => this.setState({ modal: !modal });
    return (
      <>
        <Button
          className={`halfBtn ${voted && chosen ? 'disabledBtn' : ''}`}
          color="warning"
          onClick={toggle}
        >
          {voted && chosen ? 'You Voted!' : 'Vote'}
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
          <ModalBody>
            You are about to vote for the{' '}
            <span className="font-weight-bold">{name}</span> as your favourite
            big cat. You may only cast one vote and this cannot be revoked.
            Choose wisely.
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={(e) => {
                this.submit(e);
                toggle();
                handler();
              }}
              color="warning"
              size="md"
              value={_id}
            >
              Cast Vote
            </Button>
            <Button color="dark" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ModalInfo;
