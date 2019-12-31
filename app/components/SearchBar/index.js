import React from 'react';
import './_search_bar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import CusDatePicker from '../cusDatePicker'
import close from '../../images/ic_cancel.svg'
import CusSelect from '../CusSelect'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}


function SearchBar() {
  return (
      <div>
      <Desktop>
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
                    <label for="name" className='search-bar-input-label'>ينتهي في</label>
                    <div className='search-bar-field-container'>
                        <CusDatePicker/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>يبدأ في</label>
                    <div className='search-bar-field-container'>
                        <CusDatePicker/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label'>كلمة</label>
                    <div className='search-bar-field-container'>
                        <CusSelect items={[{value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}]}/>
                    </div>
                </div>
                <div className='search-bar-input-container'>
                    <label for="name" className='search-bar-input-label longer'>العنوان</label>
                    <input className='search-bar-input' id="name" type="text" name="name"/>
                </div>
            </Col>
        </Row>
      </Desktop>
      <Mobile>
            <div className='se-mobile'>
                <div className='search-bar-input-container-mobile'>
                    <label for="name" className='search-bar-input-label longer'>العنوان</label>
                    <input className='search-bar-input' id="name" type="text" name="name"/>
                </div>
                <div className='search-bar-input-container-mobile'>
                    <label for="name" className='search-bar-input-label-mobile'>كلمة</label>
                    <div className='search-bar-field-container-mobile'>
                        <CusSelect items={[{value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}]}/>
                    </div>
                </div>
                <div className='search-bar-input-container-mobile'>
                    <label for="name" className='search-bar-input-label-mobile'>يبدأ في</label>
                    <div className='search-bar-field-container-mobile'>
                        <CusDatePicker/>
                    </div>
                </div>
                <div className='search-bar-input-container-mobile'>
                    <label for="name" className='search-bar-input-label-mobile'>ينتهي في</label>
                    <div className='search-bar-field-container-mobile'>
                        <CusDatePicker/>
                    </div>
                </div>
            </div>
      </Mobile>
      </div>

  );
}

export default SearchBar;
