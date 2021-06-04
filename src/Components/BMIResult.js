import React from 'react';
import DialogBox from './DialogBox';

const BMIResult = (props) => {
    return (
        <div className="bmi-container2" style={{
            backgroundColor: props.backgroundColor, 
            opacity: `${(props.resultBoxShow) ? '1' : '0'}`,
            visibility: (props.resultBoxShow) ? 'visible' : 'hidden'
        }}>
            <p>{props.condition}</p>
            <h1>{props.bmi}</h1>
            {props.condition !== 'Normal (Healthy weight)' &&
                <DialogBox btnBGColor={props.backgroundColor}/>
            }
        </div>
    );
}

export default BMIResult;