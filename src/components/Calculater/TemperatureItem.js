import './TemperatureItem.css'
import Card from '../UI/Card/Card'

const  TemperatureItem=(props) => {
    const result = props.unitType === 'FtoC' 
    ? <div><b>{props.enteredTemp} °F </b> equals to <b> {props.resultTemp} °C </b></div> 
    : <div><b>{props.enteredTemp} °C </b> equals to <b> {props.resultTemp} °F </b></div>;

return (
<Card className="temperature-item">
    <div className="temperature-item__description">
      {result}
   </div>
</Card>
   ) 
}

export default TemperatureItem