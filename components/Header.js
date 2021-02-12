import { Dropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-9">
          <h3>
            <small className="text-mutted">Welcome back,</small>
          </h3>
          <h1 className="section-title">
            Cobra Kai  <br></br>
            <small><i>(Karate Studio)</i></small>
          </h1>

        </div>
        <div className="col-12 mt-3 mt-md-0 col-md-3">
          <p className="text-center text-md-right"><img src="/fi-rr-bell.svg" width="26" className="ml-3" /><img src="/fi-rr-settings.svg" width="26" className="ml-3" /><img src="/fi-rr-sign-out.svg" width="26" className="ml-3" /></p>

        </div>

      </div>
    </>
  )
}
export default Header