import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Navbar from './Navbar';
import InputForm from './InputForm';
import DisplayData from './DisplayData';

const MainFile = () => {
    return (
        <main>
            <div className='mainTitle'>
                <h1>React + Typescript Todo List</h1><PlaylistAddCheckIcon fontSize='large' />
            </div>
            <Navbar />
            <hr style={{ width: '30em' }}/>
            <div className='inputFormArea'>
                <InputForm />
            </div>
            <div className='dataDisplay'>
                <DisplayData />
            </div>
        </main>
    )
}

export default MainFile