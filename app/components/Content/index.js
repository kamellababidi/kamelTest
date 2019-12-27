import 'date-fns';
import React from 'react';
import './_content.css';


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
            <div className='details-container'>
                <div className='details-row'>

                </div>
            </div>
        </div>
    </div>
  );
}

export default (Content);