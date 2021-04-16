import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import CatCard from './CatCard';
import Footer from './Footer';
import axios from 'axios';

class PollContainer extends Component {
  constructor(props) {
    super(props);
    this.updatevotes = this.updatevotes.bind(this);
  }

  state = {
    loading: true,
    cats: [],
  };

  getCatData = () => {
    axios
      .get('http://localhost:5000/api/cats')
      .then((response) => {
        const data = response.data;
        this.setState({ cats: data, loading: false });
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  updatevotes = () => this.getCatData();

  componentDidMount = () => this.getCatData();

  render() {
    //Find if Voted
    var voted = localStorage.getItem('voted');
    var choice_id = localStorage.getItem('choice');
    //Find Total Votes
    var totalVotes = this.state.cats.reduce((tot, c) => {
      return tot + c.votes;
    }, 0);
    //Sort Cats Data
    const sortedCats = []
      .concat(this.state.cats)
      .sort((a, b) => b.votes - a.votes)
      .map((Cat) => (
        <CatCard
          key={Cat._id}
          cat={Cat}
          tot={totalVotes}
          handler={this.updatevotes}
          voted={voted}
          chosen={Cat._id === choice_id ? true : false}
        />
      ));

    if (!this.state.cats.length) {
      return <div className="nb-spinner"></div>;
    } else {
      return (
        <Fragment>
          <Container className="d-flex flex-wrap justify-content-around mt-5">
            {sortedCats}
          </Container>
          <Footer />
        </Fragment>
      );
    }
  }
}

export default PollContainer;
