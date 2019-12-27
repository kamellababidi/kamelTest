import React from 'react';
import './_search_bar.css';
import { Container, Row, Col } from 'react-bootstrap';
import CusDatePicker from '../cusDatePicker'
import close from '../../images/ic_cancel.svg'
import CusSelect from '../CusSelect'


function SearchBar() {
  return (
        <Row className='search-bar-container'>
            <Col className='search-bar-left'>
                <button className='search-bar-close-btn' >
                    <img src={close} className='search-bar-close'/>
                </button>
                <button className='search-bar-save-btn' >
                  حفظ 
                </button>
            </Col>
            <Col className='search-bar-right'>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>يبدأ في</label>
                    <div className='search-bar-field-container'>
                        <CusDatePicker/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>يبدأ في</label>
                    <div className='search-bar-field-container'>
                        <CusSelect items={[{value: "asdsa"}]}/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>كلمة</label>
                    <div className='search-bar-field-container'>
                        <CusSelect items={[{value: "asdsa"}]}/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>العنوان</label>
                    <input className='search-bar-input' id="name" type="text" name="name"/>
                </div>
            </Col>
        </Row>
  );
}

export default SearchBar;
