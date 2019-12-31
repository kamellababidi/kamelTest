import React from 'react';
import './_sub_header.css';
import { useMediaQuery } from 'react-responsive'
import alert from '../../images/ic_alert.svg'
import CusSelect from '../CusSelect'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
  
function SubHeader() {
  return (
    <div>
        <Desktop>
            <div className='sub_header-container'>
                <div className='sub-header-search-container'>
                    <img src={alert} className='alert' />
                    <div className='select-container'>
                        <CusSelect width={10} label={false} items={[{value: 'العربية'}, {value: 'English'}]}/>
                    </div>
                </div>
                <div className='sub-header-title-container'>
                    <p className='title'>عنوان ما</p>
                </div>
            </div>
        </Desktop>
    </div>
  );
}

export default SubHeader;
