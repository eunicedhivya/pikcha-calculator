import Operator from "../operators/Operator";
import { useSelector, useDispatch } from 'react-redux';


function Calculator() {
    
    const expression = useSelector((state) => state.calculator.expression);
    const output = useSelector((state) => state.calculator.output);


  return (
    <div className='calculator'>

        <div className="result">
          {expression && <div className='operations'>{expression || 0}</div>}
          <div className='output'>{output}</div>
        </div>
        <Operator />
    </div>
  )
}

export default Calculator