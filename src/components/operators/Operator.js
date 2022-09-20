import { Button } from "baseui/button";
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { setexpression, clearexpression, evaluate } from '../../features/calculatorSlice';

function Operator() {
  const [btnValues, setBtnValues ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*"])

    const dispatch = useDispatch();
  return (
    <div className='operators'>
         <Button onClick={() => dispatch(clearexpression(""))}><span>AC</span></Button>
        {btnValues && btnValues.map(function(btn, ind){
            return (
                <Button key={ind} onClick={() =>dispatch(setexpression(btn))}><span>{btn}</span></Button>
            )
        })}
        <Button onClick={() => dispatch(evaluate())}><span>=</span></Button>
    </div>
  )
}

export default Operator