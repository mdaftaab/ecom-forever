import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  // console.log(productId)
  const { products, currency,addToCart } = useContext(ShopContext);
  // console.log(products)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        // console.log(item)
        setImage(item.image[0])
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} key={index} src={item} alt={productData.name} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Details  */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='text-2xl mt-5 font-semibold'>{currency}{productData.price}</p>
            <p className='text-md mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} key={index} className={`border-2 px-4 py-2 text-sm font-medium ${item === size ?'border-orange-500 text-orange-500' : 'text-gray-700 border-gray-100'}`}>{item}</button>                    
                  ))
                }
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='py-2 px-8 text-white bg-black font-medium hover:bg-blue-700 active:bg-blue-950 uppercase'>Add to Cart</button>
            <hr className='mt-5 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      {/* Description & Review Section */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas quia obcaecati rerum ipsa neque incidunt qui! Qui labore quidem nobis est veritatis blanditiis dolorum dolorem doloremque earum, veniam sapiente sint necessitatibus eius nam saepe culpa consequuntur tenetur. Saepe expedita, nulla cupiditate amet dicta dolor obcaecati neque sint, velit autem perferendis numquam eius incidunt est necessitatibus tempore? Qui sed sequi ex quidem eveniet laborum error, ut veniam nihil optio vero cum molestias aspernatur quibusdam soluta. Quis perferendis enim recusandae eaque voluptatum repudiandae in numquam! Molestiae soluta amet maxime repellendus consequatur sapiente quae facilis eos obcaecati nemo quia ipsam, culpa sed?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas quia obcaecati rerum ipsa neque incidunt qui! Qui labore quidem nobis est veritatis blanditiis dolorum dolorem doloremque earum, veniam sapiente sint necessitatibus eius nam saepe culpa consequuntur tenetur. Saepe expedita, nulla cupiditate amet dicta dolor obcaecati neque sint, velit autem perferendis numquam eius incidunt est necessitatibus tempore? Qui sed sequi ex quidem eveniet laborum error, ut veniam nihil optio vero cum molestias aspernatur quibusdam soluta. Quis perferendis enim recusandae eaque voluptatum repudiandae in numquam! Molestiae soluta amet maxime repellendus consequatur sapiente quae facilis eos obcaecati nemo quia ipsam, culpa sed?</p>
        </div>       
      </div>

      {/* Display related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='h-[60vh] flex w-full items-center justify-center text-3xl font-medium'>No Product Found!</div>
}

export default Product