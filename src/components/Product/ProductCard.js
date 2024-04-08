import './ProductCard.css';


export default function ProductCard({ product }) {
    return (
        <div className='productCard'>
            <img src={product.image} alt={product.alt} />
            <h4>{product.name}</h4>
            <p>{product.type}</p>
            <hr />
            <p className='keySpecs'>Key Specs</p>
            <>
                {product.specs.map((spec) => (
                    <p>{spec}</p>
                ))}
            </>
            <hr />
            { // if there's a new product price, grey out the original price & show the discount percentage
                product.newPrice
                    ? <p className='price' style={{ marginBottom: '0.3rem' }}>
                        <span style={{ opacity: 0.3, textDecoration: 'line-through' }}>Ksh {product.price}</span><span className='savePrice'>
                            Save { // converting price to numbers & calculating the discount (rounded up)
                                (((product.price - product.newPrice) / product.price) * 100)
                            }%
                        </span>
                    </p>
                    : <p className='price'>Ksh {product.price}</p>
            }

            { // display the new price if available
                product.newPrice && <p className='newPrice'>Ksh {product.newPrice}</p>
            }
            <button>Contact to Buy</button>
        </div>
    );
}