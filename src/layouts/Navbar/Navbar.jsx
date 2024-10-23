import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar({ tab, setTab, products, carts, setToken }) {
    return (
        <div className='navbar-container'>
            <Link to='/home'>
                <button className={
                    'btn ' + (tab === 'home' ? 'btn-primary' :
                        'btn-outline-primary')
                }
                    onClick={() => setTab('home')}
                >
                    Home
                </button>
            </Link>

            <Link to='/calculator'>
                <button className={'btn ' + (tab === 'calculator' ? 'btn-primary'
                    : 'btn-outline-primary')
                }
                    onClick={() => setTab('calculator')}
                >
                    Calculator
                </button>
            </Link>

            <Link to='/Animation'>
                <button className={'btn ' + (tab === 'Animation' ? 'btn-primary'
                    : 'btn-outline-primary')
                }
                    onClick={() => setTab('Animation')}
                >
                    Animation
                </button>
            </Link>

            <Link to='/components'>
                <button className={'btn ' + (tab === 'components' ? 'btn-primary'
                    : 'btn-outline-primary')
                }
                    onClick={() => setTab('components')}
                >
                    Components
                </button>
            </Link>

            <Link to='/todo'>
                <button className={'btn ' + (tab === 'todo' ? 'btn-primary'
                    : 'btn-outline-primary')
                }
                    onClick={() => setTab('todo')}
                >
                    Todo
                </button>
            </Link>

            <Link to='/products'>
                <button className={'btn ' + (tab === 'products' ? 'btn-primary'
                    : 'btn-outline-primary')
                }
                    onClick={() => setTab('products')}
                >
                    Products ({products.length})
                </button>
            </Link>

            <Link to='/carts'>
                <button style={{ position: 'relative' }}
                    className={'btn ' + (tab === 'carts' ? 'btn-primary': 'btn-outline-primary')}
                    onClick={() => setTab('carts')}
                >
                    Carts
                    {carts.length > 0 && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    )}
                </button>
            </Link>

            <button className='btn btn-danger' style={{ marginLeft: '1rem' }} onClick={() => setToken('')}>
                Logout
            </button>
        </div>
    );
}

export default Navbar;