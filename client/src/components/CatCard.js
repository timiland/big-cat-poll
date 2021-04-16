import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Progress,
  Tooltip,
} from 'reactstrap';
import ModalInfo from './ModalInfo';
import ModalVote from './ModalVote';
import CLeopard from '../images/Clouded_Leopard.png';
import Tiger from '../images/Tiger.png';
import Jaguar from '../images/Jaguar.png';
import Cheetah from '../images/Cheetah.png';
import Cougar from '../images/Cougar.png';
import Leopard from '../images/Leopard.png';
import Lion from '../images/Lion.png';
import SLeopard from '../images/Snow_Leopard.png';

class CatCard extends Component {
  state = { tooltipOpen: false };

  imgSwitch = (name) => {
    switch (name) {
      case 'Tiger':
        return Tiger;
      case 'Jaguar':
        return Jaguar;
      case 'Cheetah':
        return Cheetah;
      case 'Leopard':
        return Leopard;
      case 'Snow Leopard':
        return SLeopard;
      case 'Lion':
        return Lion;
      case 'Cougar':
        return Cougar;
      default:
        return CLeopard;
    }
  };

  render() {
    const { tooltipOpen } = this.state;
    const { cat, tot, handler, chosen, voted } = this.props;
    const { latin, name, votes, _id } = cat;
    const toggle = () => this.setState({ tooltipOpen: !tooltipOpen });
    return (
      <Card className={`m-2 ${chosen ? 'cardVoted' : ''}`}>
        <CardBody>
          <CardTitle>
            <h2>{name}</h2>
          </CardTitle>
          <CardSubtitle>{latin}</CardSubtitle>
        </CardBody>
        <img width="100%" src={this.imgSwitch(name)} alt={name} />
        <CardBody>
          <div className="text-center mb-3">
            {/* I suspect this DIV may not be needed */}
            <span>
              <Progress value={votes} max={tot} id={`Tooltip-${_id}`} />
              <Tooltip
                placement="top"
                isOpen={tooltipOpen}
                target={`Tooltip-${_id}`}
                toggle={toggle}
              >
                {votes} votes out of {tot}
              </Tooltip>
            </span>
          </div>
          {voted && !chosen ? (
            ''
          ) : (
            <ModalVote
              size="md"
              cat={cat}
              handler={handler}
              chosen={chosen}
              voted={voted}
            ></ModalVote>
          )}

          <ModalInfo
            size="md"
            cat={cat}
            pic={this.imgSwitch(name)}
            chosen={chosen}
            voted={voted}
          ></ModalInfo>
        </CardBody>
      </Card>
    );
  }
}

export default CatCard;
