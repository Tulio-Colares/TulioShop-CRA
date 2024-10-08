import { Card } from 'react-bootstrap';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={{'height': "13rem", 'width': '16rem'}} />
      </a>

      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name.substring(0, 25) + '...'}</strong>
          </Card.Title>
        </a>

        <Card.Text>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;