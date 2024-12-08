import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Products from './Products';
import { getProductApi } from '../../services/allapi';




function Home({addToCart}) {

  const [product, setProduct] = useState([])

  const getAllproducts = async () => {
    const result = await getProductApi()
    // console.log(result);

    setProduct(result.data)

  }

  console.log(product);


  const scrollToProducts = () => {
    const productSection = document.getElementById('productSection');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  



  useEffect(() => {
    getAllproducts()
  }, [])
  return (
    <>
      <div className=' text-black container-fluid' style={{ backgroundColor: "#e9ecef" }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8" style={{ marginTop: '108px' }}>
            <Carousel>
              <Carousel.Item>
                <img src="https://www.minifeel.in/cdn/shop/files/MINIFEEL_BOX_Hero_Destop.jpg?v=1729504622" alt="" className='w-100' style={{ height: '300px' }} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://www.mcaffeine.com/cdn/shop/files/IMG-0041.jpg?v=1732451175" alt="" className='w-100' style={{ height: '300px' }} />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://beardo.in/cdn/shop/files/Beardo_Mariner_HGV_Lip_Lightner_Derma_Roller___GF_Beard_Oil_Media_Banners_1348_x_418.jpg?v=1716807185&width=3840" alt="" className='w-100' style={{ height: '300px' }} />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className='d-flex p-3'>
              <div >
                <div className="row bg-white p-3">
                  <h5>Explore moew from small business</h5>
                  <div className="col-6">
                    <img src="https://img.freepik.com/free-vector/laundry-cosmetics-sale-realistic-advertisement_52683-16432.jpg?semt=ais_hybrid" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://b2861582.smushcdn.com/2861582/wp-content/uploads/2023/02/splash-03-605-v1.png?lossy=2&strip=1&webp=1" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                </div>
                <div className="row bg-white px-3">
                  <div className="col-6">
                    <img src="https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <Link to={'#'} style={{ textDecoration: "none" }} onClick={scrollToProducts}><p style={{ fontSize: "12px" }} className='text-primary'>Explore more</p></Link>
                </div>
              </div>
              <div className='p-3' >
                <p style={{ color: "#e9ecef" }}>0</p>
              </div>
              <div >
              <div className="row bg-white p-3">
                  <h5>Explore moew from small business</h5>
                  <div className="col-6">
                    <img src="https://img.freepik.com/free-vector/laundry-cosmetics-sale-realistic-advertisement_52683-16432.jpg?semt=ais_hybrid" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://b2861582.smushcdn.com/2861582/wp-content/uploads/2023/02/splash-03-605-v1.png?lossy=2&strip=1&webp=1" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                </div>
                <div className="row bg-white px-3">
                  <div className="col-6">
                    <img src="https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <Link to={'#'} style={{ textDecoration: "none" }} onClick={scrollToProducts}><p style={{ fontSize: "12px" }} className='text-primary'>Explore more</p></Link>
                </div>
              </div>
              <div className='p-3' >
                <p style={{ color: "#e9ecef" }}>0</p>
              </div>
              <div >
              <div className="row bg-white p-3">
                  <h5>Explore moew from small business</h5>
                  <div className="col-6">
                    <img src="https://img.freepik.com/free-vector/laundry-cosmetics-sale-realistic-advertisement_52683-16432.jpg?semt=ais_hybrid" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://b2861582.smushcdn.com/2861582/wp-content/uploads/2023/02/splash-03-605-v1.png?lossy=2&strip=1&webp=1" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                </div>
                <div className="row bg-white px-3">
                  <div className="col-6">
                    <img src="https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <Link to={'#'} style={{ textDecoration: "none" }} onClick={scrollToProducts}><p style={{ fontSize: "12px" }} className='text-primary'>Explore more</p></Link>
                </div>
              </div>
              <div className='p-3' >
                <p style={{ color: "#e9ecef" }}>0</p>
              </div>
              <div >
              <div className="row bg-white p-3">
                  <h5>Explore moew from small business</h5>
                  <div className="col-6">
                    <img src="https://img.freepik.com/free-vector/laundry-cosmetics-sale-realistic-advertisement_52683-16432.jpg?semt=ais_hybrid" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://b2861582.smushcdn.com/2861582/wp-content/uploads/2023/02/splash-03-605-v1.png?lossy=2&strip=1&webp=1" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                </div>
                <div className="row bg-white px-3">
                  <div className="col-6">
                    <img src="https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <div className="col-6">
                    <img src="https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg" alt="" className='w-100' />
                    <p style={{ fontSize: "12px" }}>new arrivals</p>
                  </div>
                  <Link to={'#'} style={{ textDecoration: "none" }} onClick={scrollToProducts}><p style={{ fontSize: "12px" }} className='text-primary'>Explore more</p></Link>
                </div>
              </div>
            </div>

            <div className='p-3' style={{ backgroundColor: 'white' }}>
              <div className='d-flex p-2'>
                <h4 >More items to your list</h4>
                <Link to={'#'} style={{ textDecoration: 'none' }}><p className='px-3' style={{ color: 'blue' }} onClick={scrollToProducts}>More items</p></Link>

              </div>
              <Carousel>
                <Carousel.Item >


                  <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(0,6).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(0,6).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(0,6).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>



            <div className='p-3 my-3' style={{ backgroundColor: 'white' }}>
              <div className='d-flex p-2'>
                <h4 >More items to your list</h4>
                <Link to={'#'} style={{ textDecoration: 'none' }}><p className='px-3' style={{ color: 'blue' }} onClick={scrollToProducts}>More items</p></Link>

              </div>
              <Carousel>
                <Carousel.Item >


                  <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(6,12).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(6,12).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='d-flex '>
                    <div className='row'>
                     {product && product.slice(6,12).map((pro)=>(
                      <div className='col-2 ' key={pro.id}>
                      <img src={pro.image} alt="" className='w-100' style={{ height: '200px' }} />
                      <p>{pro.name}</p>
                    </div>
                     )) } 
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="row my-5">

            <h1>Products Available</h1>

              
                {product?.map((item) => (
                  <div className="col-md-3 my-2" key={item.id}>
                  <Products productDetails={item} addToCart={addToCart} />
                  </div>
                ))
                }

             

            </div>




          </div>




          <div className="col-md-2"></div>
        </div>


      </div>
    </>
  )
}

export default Home