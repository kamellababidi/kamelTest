import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import ColoredLine from 'components/ColoredLine';
import './_home.css';

export function HomePage() {
  return (
    <Container className='container' fluid={true}>
      <Header/>
      <div className='content-container'>
        <ColoredLine/>
        <SubHeader/>
      </div>
    </Container>
  );
}




const withConnect = connect(
);

export default compose(
  withConnect,
  memo,
)(HomePage);
