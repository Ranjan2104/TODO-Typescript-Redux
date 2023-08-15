import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { checkData, removeData } from '../Store/Reducers/TodoSlice';

const Card = ({ data, index }) => {
    const[value, setValue] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeData({data, index}));
    }
    const handleClick = (e) => {
        setValue(e?.target?.checked ? true : false);
        dispatch(checkData({check: true, index}));
    }
    return (
        <div className='belowCard'>
            <input type='checkbox' onClick={handleClick} />
            <label>{data}</label>
            {value && <button onClick={handleDelete}>Delete</button>}
        </div>
    )
}

export default Card