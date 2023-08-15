import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { addTodoData } from '../Store/Reducers/TodoSlice';

const InputForm = () => {
    const[data, setData] = useState<string>('');
    const[disable, setDisable] = useState<boolean>(true);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
        setData(e.target.value);
    }

    const handleData = () => {
        dispatch(addTodoData({data, checked: false}));
        setData('');
        setDisable(true);
    }
    return (
        <div className='InputForm'>
            <div className='InputData'>
                <TextField id="outlined-basic" label="Enter Todos" variant="outlined" 
                value={data} onChange={handleChange}
                sx={{ width: '20em'}} />
                <Button variant="contained" color="success" onClick={handleData} 
                disabled={disable}>Add Todo</Button>
            </div>
        </div>
    )
}

export default InputForm