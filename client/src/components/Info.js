import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer';

class Info extends Component {
  render() {
    return (
      <Fragment>
        <Container className="info ">
          <h1 className="infoHeader">WELCOME TO THE BIG CAT POLL</h1>
          <h2>Where am I, What is this exactly?</h2>
          <p>
            Let me introduce myself, my name is Tim Iland and I'm a big cat
            enthusiast and always have been. Matter of fact, I'm crazy about all
            animals. In particular, primates, birds of prey, and big cats. Web
            Development is another one of my interests, so I thought why not
            combine the two? Frequently I find myself asking people what their
            favourite animal is or favourite big cat, and I get a range of
            answers. This website will hopefully put the debate to bed. All the
            illustrations you see are mine too - enjoy.<br></br>
            <br></br>
            Oh, and don't forget to vote for your favourite big cat on the home
            page.
          </p>
          <h2>How can I help Big Cats?</h2>
          <p>
            Donating is probably the best way to help big cats in the wild, and
            I have put some great charities below. Other than that, spread the
            word! Read up about big cats, watch documentaries and share your
            knowledge with others. Let everyone know about these amazing
            creatures and the threats that they are currently facing.
          </p>

          <a href="https://www.panthera.org/">
            <h2>Panthera</h2>
          </a>
          <p>
            A charity dedicated to conserving big cats with an information
            packed website that is definitely worth a visit even if you do not
            plan on donating.
          </p>
          <a href="https://support.wwf.org.uk/donate-to-wwf">
            <h2>World Wildlife Fund</h2>
          </a>
          <p>
            Founded in 1961, the World Widlife Fund is perhaps the best known
            conservation charity. They have invested over $1 billion in more
            than 12,000 conservation initiatives since 1995 and are definitely
            worth a dontation.
          </p>
          <a href="https://www.panthera.org/">
            <h2>IUCN Redlist</h2>
          </a>
          <p>
            The IUCN Red List of Threatened Species is a critical indicator of
            the health of the world’s biodiversity telling us what we need to
            know to save wild species. So far, over 116,000 species have been
            assessed for The IUCN Red List. Our goal is to have assessed 160,000
            species by the end of 2020. The IUCN redlist works to provide the
            vital information which other conservation charities desperately
            need.
          </p>

          <h2>Contact Me</h2>
          <p>
            If you want to get in contact with me you can use the icons below,
            or email me at timothyiland@gmail.com
          </p>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Info;
