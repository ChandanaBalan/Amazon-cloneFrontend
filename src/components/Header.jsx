import { faCartShopping, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





function Header({ cartItems }) {
  return (
    <>
      <div className="row container-fluid d-flex justify-content-center align-items-center " style={{position:'fixed', zIndex:'1000',backgroundColor:'black'}}>
        <div className="col-2 d-flex p-2 justify-content-between align-items-center">
          <Link to={'/'}><img src="https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png" alt="" className='w-100 p-4' /></Link>
          <p style={{ fontSize: "10px" }}><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} className='me-2' />Delivering to name<h5>PlaceName</h5></p>
        </div>
        <div className="col-7 d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <InputGroup className="mb-3">
            <Form.Control className='p-2'
              placeholder="Search Amazon.in"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className='bg-warning'><FontAwesomeIcon icon={faMagnifyingGlass} className='text-dark' /></InputGroup.Text>
          </InputGroup>

        </div>
        <div className="col-3 p-2 d-flex justify-content-between align-items-center">

          <div>
            <Dropdown>
              <Dropdown.Toggle variant="black" id="dropdown-basic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FzNowL5xtyLe4hajNtegzUtYhvrtfhnzkg&s" alt="" style={{ width: '15px', height: '15px' }} className='me-2' />En
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Malayalam</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="black" id="dropdown-basic">
                <p className='m-0' style={{ fontSize: "12px" }}>Hello, Name <h5 className='m-0'>Accounts & Lists</h5></p>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Malayalam</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p style={{ fontSize: "12px" }}>Returns <h6>& Orders</h6></p>
          <Link to={'/Cart'} style={{textDecoration:"none"}}>
          <FontAwesomeIcon icon={faCartShopping} className='fa-2x text-white' />
          <span className='text-white'> Cart ({cartItems.length})</span>
          </Link>

        </div>

      </div>



    </>
  )
}

export default Header