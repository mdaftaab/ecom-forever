import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    // Filter related products based on category and subcategory
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            // productsCopy = productsCopy.filter((item)=> subCategory === item.subcategory);
            setRelated(productsCopy.slice(0, 5));
        }

    }, [])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-3 uppercase'>
                <Title text1={'Related'} text2={'Products'} />
            </div>
            {/* Rendering Related Products */}
            <div className='grid grid-cols-2 md:grid-cols-5 lg-grid-cols-6 gap-4 gap-y-6'>
                {
                    related.map((item, index) => {
                        return (
                            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts