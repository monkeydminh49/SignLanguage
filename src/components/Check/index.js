import './Check.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCamera} from '@fortawesome/free-solid-svg-icons'
// import {faHand} from '@fortawesome/free-solid-svg-icons'
// import {faBook} from '@fortawesome/free-solid-svg-icons'
// import {faGear} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function Check() {
  return (
    <div className='text-wrap'>
      <div className='barTop'>
        <div className='barTop-title'>
          LGP
        </div>
      </div>
      <div className='word-title'>
        Từ 2
      </div>
      <div className='word-contain'>

        <div className='UpContain2'>
          <div className='UpContain-icon2'>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>

        <div className='DownContain2'>
          <div className='DownContain-icon2'>
            <div className='icon2-wrap'>

              <FontAwesomeIcon icon={faCheck} />
            </div>

          </div>
        </div>

      </div>

      <div className='button-wrap'>
        <a href='/Subject'>
          <button className='profile-button'>
            Trở lại
          </button>
        </a>
      </div>
    </div>
  );
}

export default Check