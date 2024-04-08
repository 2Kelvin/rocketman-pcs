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
            <p className='price'>{product.price}</p>
            <button>Show Contact</button>
        </div>
    );
}
