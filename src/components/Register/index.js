import './Register.scss';
// import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Register() {
    return (
        <div className='res-wrap'>
            <a href="/" className='res-back'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </a>

            <div className="res-heading">
                Sign in
            </div>

            <div className="res-text">
                Welcome back
            </div>

            <form  >
                <div className="res-box" >
                    <i className='res-icon' >
                        <FontAwesomeIcon icon={faEnvelope} />

                    </i>
                    <input placeholder='Email address' className='res-add' type='' name='' />
                </div>

                <div className="res-box res-box2">
                    <i className='res-icon' >

                        <FontAwesomeIcon icon={faLock} />
                    </i>
                    <input placeholder='Password' className='res-pass' type='' name='' />

                </div>
            </form>

            <div className='res-forget'>
                <a href="./"> Forgot Password?</a>
            </div>

            <div className='res-arrow'>
                <a href="/author">
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>

            <div className='res-nav'>
                <div className='res-nav_text'>
                    New member ?
                </div>
                <div className='res-nav_click'>
                    <a href="/author">Sign up </a>
                </div>

            </div>
            {/* <Routes>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/' element={<Layout/>}/>
      </Routes> */}
        </div>
    );



}

export default Register;