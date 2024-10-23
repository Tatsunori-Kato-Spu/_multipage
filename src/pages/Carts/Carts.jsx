import './Carts.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carts({ carts, setCarts }) {
    return (
        <div className='carts-container'>
            <div className='carts-itemps-container'>
                {carts.map((cart) => {
                    return (
                        <Card style={{ width: '18rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text>
                                    <b>${cart.price.toFixed(2)}</b>
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() =>
                                    setCarts(carts.filter((c) => c.id !== cart.id))
                                }>
                                    Remove from Carts
                                    </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <h4>
                Items : <span className='badge bg-primary'>{carts.length}</span> items - Total Price: <span className='badge bg-primary'> ${carts.reduce((prev, cart) => {return prev + cart.price}, 0)}</span>
            </h4>
            <button className='btn btn-outline-success , mb-2'>Checkout</button>
        </div>
    );
}

export default Carts;