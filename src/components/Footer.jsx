import React from 'react'

function Footer() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };
  return (
    <>

    <div>
    <div
          className="w-100 p-2 bg-dark text-white text-center"
          style={{ cursor: 'pointer' }}
          onClick={scrollToTop} // Trigger scroll to top
        >
          Back to top
        </div>
    </div>
        <div className="row container-fluid">
          <div className="col-md-2"></div>
          <div className="col-md-7 d-flex justify-content-between p-5">
              <div>
                <h5>Get to Know Us</h5>
                <p>About Amazon</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
              </div>
              <div>
                <h5>Connect with Us</h5>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
              <div>
                <h5>Make Money with Us</h5>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Supply to Amazon</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
              </div>
              <div>
                <h5>Let Us Help You</h5>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>Recalls and Product Safety Alerts</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
              </div>
          </div>
          <div className="col-md-1"></div>
        </div>
    </>
  )
}

export default Footer