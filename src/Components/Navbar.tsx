import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navMain'>
            <div className='navclass'>
                <div className='navMenu'><Link to='/'>All</Link></div>
                <div className='navMenu'><Link to='/?todo=active'>Active</Link></div>
                <div className='navMenu'><Link to='/?todo=completed'>Completed</Link></div>
            </div>
        </div>
    )
}

export default Navbar