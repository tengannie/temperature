import React from 'react';
import classes from './Errorform.module.css';
import Button from '../UI/Button/Button';

const ErrorForm = (props) => {

    const onCloseHandler = () => {
        props.openHandler(true);
    }

    return (
        <>
        <div className={classes['backdrop']} onClick={onCloseHandler}></div>
        <div className={classes['modal']}>
            <div className={classes['hearder']}>
                <h2>{props.err.title}</h2>
                <content>{props.err.content}</content>
            </div>
            <Button onClick={onCloseHandler}>Back</Button>
        </div>

        </>
    )
}

export default ErrorForm;