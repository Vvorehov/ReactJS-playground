import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Header} from "../../scenes/Header"
import {Logo} from '../../scenes/Logo';
import {Footer} from "../../scenes/Footer"
import {EmptyResult} from "./../Results/components/ResultsBody/components/EmptyResult"
import {Link} from 'react-router-dom';

class Page404 extends Component {

  render() {
    return (
      <React.Fragment>
        <Header>
          <Container>
            <Row>
              <Col>
                <Logo siteName="netflixroulete" />
                <Link className="header_btn" to="/">Search</Link>
              </Col>
            </Row>
          </Container>
        </Header>
        <main>
          <Container>
            <Row>
              <Col>
                <EmptyResult text="Page not found"/>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page404;
