import './style/index.css'
import Logo from './images/airbnb.svg';
import Group77 from './images/Group77.png';
import Photo12 from './images/image12.png'
import Photo13 from './images/wedding-photography1.png';
import Photo14 from './images/mountain-bike1.png';
import Star from './images/Star.svg'

function App() {

  return <>
    <div className="nav">
      <img className='logo' src={Logo} alt="logo" />
    </div>
    <div>
      <img className='group77' src={Group77} alt="group77" />
      <div className='data'><h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p></div>
    </div>


    {/*lower data  */}
    <div>
      <div><img className='p1' src={Photo12} alt="" />
        <p className='s1'>SOLD OUT</p>
        <div>
          <div className="lower1">
          <p className='detail1'><span><img src={Star} alt="" /></span> 5.0
            (6)USA Life lessons with Katie Zaferes <span style={{ fontWeight: 'bold' }}>From $136</span> / person</p>
            </div>
        </div>
      </div>
      <div><img className='p2' src={Photo13} alt="" />
        <p className='s1'>SOLD OUT</p>
        <div>
          <div className="lower2">
          <p className='detail2'><span><img src={Star} alt="" /></span> 5.0
            (5)USA Learn wedding photography <span style={{ fontWeight: 'bold' }}>From $125</span> / person</p>
            </div>
        </div>
      </div>
      <div><img className='p3' src={Photo14} alt="" />

      <p className='s2'>ONLINE</p>
        <div>
        <div className="lower3">
          <p className='detail3'><span><img src={Star} alt="" /></span> 5.0
            (4.8)USA Group Mountain Biking <span style={{ fontWeight: 'bold' }}>From $50</span> / person</p>
        </div>
        </div>
      </div>
       



      </div>
      </>

}

export default App;
