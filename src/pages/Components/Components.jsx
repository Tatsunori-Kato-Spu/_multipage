import './Components.css'
import Counter from '../../components/Counter/Counter'
import Timer from '../../components/Timer/Timer'
import Add from '../../components/Add/Add'
import Temperatures from '../../components/temperatures/Temperatures'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Component() {

    return (
        <div className='components-container'>
            <div className="main">

                <h1 className='head-tag' style={{color: 'white'}}>REACT COMPONENTS</h1>
                <div className='main-container'>
                    <span className='top-container'>
                        <span className='counter-container'>
                            <Counter />
                        </span>
                        <span className='timer-container'>
                            <Timer />
                        </span>
                    </span>
                    <Add />
                </div>
                <div>
                    <Temperatures />
                </div>

            </div>
        </div>
    )
}
export default Component