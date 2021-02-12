import { useState } from 'react'
import Menu from '../components/Menu'
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false) 
  const showMenu = () =>{
    if(mobileMenu){
      setMobileMenu(false)
    }else{
      setMobileMenu(true)
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-12 d-md-none d-sm-block logo-mobile">
        <h1 className="text-center my-2 ">
              <img src="/gympass-for-partners-logo.svg" className="img-fluid logo"/>
            </h1>
        </div>
        <div className="col-9">
       
          <h3>
            <small className="text-mutted">Welcome back,</small>
          </h3>
          <h1 className="section-title">
            Cobra Kai  <br></br>
            <small><i>(Karate Studio)</i></small>
          </h1>

        </div>
        <div className="col-3 mt-3 mt-md-0">
          <p className="text-center text-md-right d-none d-md-block"><img src="/fi-rr-bell.svg" width="26" className="ml-3" /><img src="/fi-rr-settings.svg" width="26" className="ml-3" /><img src="/fi-rr-sign-out.svg" width="26" className="ml-3" /></p>
          <p className="text-center text-md-right d-md-none d-sm-block"><img src="/fi-rr-menu-burger.svg" width="26" className="ml-3" onClick={(e) => showMenu()} /></p>
        </div>

      </div>
      { mobileMenu ? (
      <div className="col-12 d-md-none d-sm-block ">
      <Menu/>
    </div>
      ):(
       ''
      )}
    </>
  )
}
export default Header