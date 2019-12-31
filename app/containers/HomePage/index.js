import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import Menue from 'components/Menue';
import ColoredLine from 'components/ColoredLine';
import SearchBar from 'components/SearchBar';
import Content from 'components/Content';
import './_home.css';

export function HomePage() {
  const [menue, setmenue] = useState(false);
  const toggleMenue = () => {
    setmenue(!menue)
  }
  return (
    <Container className='container' fluid={true}>
      <Header toggleMenue={toggleMenue}/>
      {
        menue ?
        <div className='content-container'>
          <ColoredLine/>
          <Menue/>
        </div>
        :
        <div className='content-container'>
          <ColoredLine/>
          <SubHeader/>
          <SearchBar/>
          <Content/>
      </div>
      }
      
    </Container>
  );
}




const withConnect = connect(
);

export default compose(
  withConnect,
  memo,
)(HomePage);
