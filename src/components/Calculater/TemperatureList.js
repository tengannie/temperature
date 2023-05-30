import './TemperatureList.css'
import TemperatureItem from './TemperatureItem';

const TemperatureList = (props) => {
    if(props.items.length ===0) {
        return <div className="temperature-list__fallback">No history found.</div>
    }

        return (
            <>
        <div className='temperature-list'>
       {props.items.map(temperature => 
        <TemperatureItem  key={temperature.id} unitType={temperature.unitType} enteredTemp={temperature.enteredTemp} resultTemp={temperature.resultTemp}/>
       )}
        </div>
        </>
        )
    

}

export default TemperatureList;