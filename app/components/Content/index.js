import 'date-fns';
import React, {useState} from 'react';
import './_content.css';
import CusSelect from '../CusSelect'
import CusDatePicker from '../cusDatePicker'
import Switch from '@material-ui/core/Switch';

// const Desktop = ({ children }) => {
//     const isDesktop = useMediaQuery({ minWidth: 992 })
//     return isDesktop ? children : null
// }
// const Tablet = ({ children }) => {
// const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
// return isTablet ? children : null
// }
// const Mobile = ({ children }) => {
// const isMobile = useMediaQuery({ maxWidth: 767 })
// return isMobile ? children : null
// }

function Content({ classes, ...rest }) {
  const [pageOnLoad, sePpageOnLoad] = useState(true);
  const [tabOnLoad, seTabOnLoad] = useState(true);

  const handlePageChange = (event) => {
    sePpageOnLoad(false)
  }

  const handleTabChange = (event) => {
    seTabOnLoad(false)
  }
  return (
    <div className='table-container'>
        <div className='tab-container'>
            <input type="radio" name="tGroup" value={1} id={"t"+1} onClick={handleTabChange} />
            <label className={"tab" + (tabOnLoad? " tab-active" : "")} for={"t"+1}>{"تبويب1"}</label>

            <input type="radio" name="tGroup" value={2} id={"t"+2} onClick={handleTabChange} />
            <label className={"tab"} for={"t"+2}>{"تبويب2"}</label>

            <input type="radio" name="tGroup" value={3} id={"t"+3} onClick={handleTabChange} />
            <label className={"tab"} for={"t"+3}>{"تبويب3"}</label>

            <input type="radio" name="tGroup" value={4} id={"t"+4} onClick={handleTabChange} />
            <label className={"tab"} for={"t"+4}>{"تبويب4"}</label>

            <input type="radio" name="tGroup" value={5} id={"t"+5} onClick={handleTabChange} />
            <label className={"tab"} for={"t"+5}>{"تبويب5"}</label>
        </div>
        <div className='table-content-container'>
            <div className='pagenation-container'>
                <div>
                    <input type="radio" name="rGroup" value={1} id={"r"+1} onClick={handlePageChange} />
                    <label className={"page" + (pageOnLoad? " page-selected" : "")} for={"r"+1}>{1}</label>
                </div>
                {[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((index) => {
                    return(
                        <div>
                            <input type="radio" name="rGroup" value={index} id={"r"+index} onClick={handlePageChange} />
                            <label className={"page"} for={"r"+index}>{index}</label>
                        </div>
                    )
                })}
                
                

                
            </div>
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
            {detailRow()}
        </div>
    </div>
  );
}


function detailRow () {
    return (
        <div className='details-container'>
            <div className='details-row'>
                <div className='details-row-left'>
                    <div className='search-bar-field-container-v2'>
                        <p className='detail-text'>عنوان ما اكثر من ٨ كلمات في وصف الحالة</p>
                    </div>
                </div>
                <div className='details-row-right'>
                    <div className='search-bar-field-container-v2'>
                        <div className='search-bar-field-container'>
                            <CusDatePicker/>
                        </div>
                    </div>
                    <div className='search-bar-field-container-v2'>
                        <div className='search-bar-field-container'>
                            <CusSelect items={[{value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}, {value: "قائمة منسدلة"}]}/>
                        </div>
                    </div>
                    <div className='detail-text-underline-container'>
                        <p className='detail-text-underline'>تفاصيل</p>
                    </div>
                    <div className='switch-container'>
                        <Switch
                            defaultChecked
                            value="checkedF"
                            color="default"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </div>
                </div>
            </div>
         </div>
    )
}

export default (Content);