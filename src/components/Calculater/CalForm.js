import React, {useState,useEffect} from 'react';
import classes from './CalForm.module.css';
import TemperatureType  from './TemperatureType';
import Button from '../UI/Button/Button'
import ErrorForm from '../ErrorMessage/ErrorForm';

const CalForm = (props) => {
    const [unitType, setUnitType] = useState('FtoC');
    const [enteredTemp, setEnteredTemp] = useState(0);
    const [resultTemp, setResultTemp] = useState(0);
    const [isValid,setIsValid] = useState(true);
    const [errorMessage,setErrorMessage] = useState('');

    const onUnitHandler = (tpt) => {
        setUnitType(tpt);
    }

    const enteredTempHandler = (event) => {
        setEnteredTemp(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredTemp.length===0) {
            setIsValid(false);
            setErrorMessage({title:"Empty Input", content:"Please enter the temperature"});
            return;
        }
        if(unitType === 'FtoC') {
            setResultTemp( 
                Math.round(((enteredTemp-32) * 5 / 9 )*100)/100);
        }
        if(unitType === 'CtoF') {
            setResultTemp( (enteredTemp * 9 / 5) +32 );
        }
    }


    useEffect( ()=>{
        setEnteredTemp(0);
        setResultTemp(0);
    },[unitType])

    useEffect( ()=> {
        if((resultTemp ===0 && enteredTemp ===0)) {
            return;
        }
        else {
        props.onAddTemperatureData({id: Math.random(), unitType: unitType, enteredTemp: enteredTemp, resultTemp: resultTemp});
        setIsValid(true);
        } 
    },[resultTemp])

    const onOpen = (result) => {
        setIsValid(result);
    }

    return(
        <>
        {!isValid && <ErrorForm openHandler={onOpen} err={errorMessage}/> }

    <div className={classes['new-temperature']}>
        <TemperatureType setTemperatureType={onUnitHandler} value={unitType}/>
        <div className="padding-10px">
        <input type='number' value={enteredTemp} onChange={enteredTempHandler}/>
        {unitType === 'CtoF' ? <label>°C</label> : <label>°F</label>}
        </div>
        <Button onClick={submitHandler}>Calculate</Button>
        <div>
        {unitType === 'CtoF' ? <label className={classes['new-temperature__result']}>{resultTemp} °F</label>
                             : <label className={classes['new-temperature__result']}>{resultTemp} °C</label>}
        </div>
    </div>
    </>
    )
}

export default CalForm;