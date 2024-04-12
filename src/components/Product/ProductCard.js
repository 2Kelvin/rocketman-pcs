import { useState } from 'react';
import './ProductCard.css';
import ContactCard from '../ContactCard/ContactCard';
import MorePics from "../MorePics/MorePics";


export default function ProductCard({ product }) {
    const [showContact, setShowContact] = useState(false);
    const [showMorePics, setShowMorePics] = useState(false);

    return (
        <div className='productCard'>
            <img
                src={product.image}
                alt={product.alt}
                onClick={() => setShowMorePics(true)}
            />
            <h4>{product.name}</h4>
            <p>{product.type}</p>
            <hr />
            <p className='keySpecs'>Key Specs</p>
            <>
                {product.specs.map((spec) => (
                    <p className='specP'>{spec}</p>
                ))}
            </>
            <hr />
            { // if there's a new product price, grey out the original price & show the discount percentage
                product.newPrice
                    ? <p className='price' style={{ marginBottom: '0.3rem' }}>
                        <span style={{ opacity: 0.3, textDecoration: 'line-through' }}>Ksh {product.price}</span><span className='savePrice'>
                            { // converting price to numbers & calculating the discount (rounded up)
                                Math.round(
                                    ((parseInt(product.price, 10) - parseInt(product.newPrice, 10)) / parseInt(product.price, 10)) * 100
                                )
                            }% off
                        </span>
                    </p>
                    : <p className='price'>Ksh {product.price}</p>
            }

            { // display the new price if available
                product.newPrice && <p className='newPrice'>Ksh {product.newPrice}</p>
            }

            {/* show contact card when the 'contact to buy' button is clicked */}
            <button onClick={() => setShowContact(true)}>
                Contact to Buy
            </button>

            {showContact && <ContactCard showContact={showContact} setShowContact={setShowContact} />}

            {showMorePics &&
                <MorePics
                    setShowMorePics={setShowMorePics}
                    allImages={product.allImages}
                    imageAlt={product.alt}
                />
            }
        </div>
    );
}
