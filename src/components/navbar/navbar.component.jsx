import './navbar.styles.css';
import Logo from  '../../assets/images/augflix.png'


const Navbar = () => {

  return (
    <div className='navbar fixed-top mediumnavigation'>
      <div className='nav-left'> 
        <img src={Logo} alt="logo" className="logo" />
        {/* <span className='navbar-item selected'>Movies</span>
        <span className='navbar-item'>Series</span> */}
      </div>
      <div className='nav-right'> 
        <span className='right-item'>Jaraxa Tech App</span>
      </div>
    </div>
  )
  
};

export default Navbar;