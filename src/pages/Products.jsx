import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products({ productDetails }) {
  return (
    <>
      <div id='productSection'>

        
        <Link style={{textDecoration:"none"}}
          to="/product"
          state={{ product: productDetails }} // Pass product details using state
        >
          <Card style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
            <Card.Body style={{ height: '400px' }}>
              <Card.Title>{productDetails.title}</Card.Title>
              <Card.Img
                variant="top"
                src={productDetails.image}
                style={{ height: '230px' }}
              />
              <Card.Text className="pt-3">
                <p>$ {productDetails.price}</p>
                <h6>Rating: {"⭐".repeat(Math.round(productDetails.rating))}</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Products;
