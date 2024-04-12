import { myStock } from '../../data';
import ProductCard from '../Product/ProductCard';
import './AllProducts.css';


export default function AllProducts() {
    return (
        <div className='allProducts'>
            {myStock.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    );
}
