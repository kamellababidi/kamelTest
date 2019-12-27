import 'date-fns';
import React from 'react';
import './_content.css';
import CusSelect from '../CusSelect'
import CusDatePicker from '../cusDatePicker'
import Switch from '@material-ui/core/Switch';

function Content({ classes, ...rest }) {
  return (
    <div className='table-container'>
        <div className='tab-container'>
            <div id='tab-active' className='tab'>
                تبويب1
            </div>
            <div className='tab'>
                تبويب2
            </div>
            <div className='tab'>
                تبويب3
            </div>
            <div className='tab'>
                تبويب4
            </div>
            <div className='tab'>
                تبويب5
            </div>
        </div>
        <div className='table-content-container'>
            <div className='pagenation-container'>
                <div id='page-active' className='page'>
                    1
                </div>
                <div className='page'>
                    2
                </div>
                <div className='page'>
                    3
                </div>
                <div className='page'>
                    4
                </div>
                <div className='page'>
                    5
                </div>
                <div className='page'>
                    6
                </div>
                <div className='page'>
                    7
                </div>
                <div className='page'>
                    8
                </div>
                <div className='page'>
                    9
                </div>
                <div className='page'>
                    10
                </div>
                <div className='page'>
                    11
                </div>
                <div className='page'>
                    12
                </div>
                <div className='page'>
                    13
                </div>
                <div className='page'>
                    14
                </div>
                <div className='page'>
                    15
                </div>
                <div className='page'>
                    16
                </div>
                <div className='page'>
                    17
                </div>
                <div className='page'>
                    18
                </div>
                <div className='page'>
                    19
                </div>
                <div className='page'>
                    20
                </div>
                <div className='page'>
                    21
                </div>
                <div className='page'>
                    22
                </div>
                <div className='page'>
                    23
                </div>
                <div className='page'>
                    24
                </div>
                <div className='page'>
                    25
                </div>
                <div className='page'>
                    26
                </div>
                <div className='page'>
                    27
                </div>
                <div className='page'>
                    28
                </div>
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