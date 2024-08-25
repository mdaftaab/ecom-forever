import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Category Select
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // Sub Category Select
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  // Apply Filter on products
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    // console.log('Current Category Filter:', category);
    // console.log('Current Subcategory Filter:', subCategory);
  
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
  
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory));
    }
  
    // console.log('Filtered Products:', productsCopy);
    setFilterProducts(productsCopy);
  }
  
  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [products]);

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();
    
    switch(sortType){
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low' :
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  },[category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  },[sortType]);


  // useEffect(() => {
  //   console.log(category);
  //   console.log(subCategory);
  // }, [category,subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase'>Filters
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter} ? 'rotate-90' : ''`} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-mono uppercase'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-mono uppercase'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Top Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winter Wear
            </p>
          </div>
        </div>

      </div>

      {/* Product List */}
      <div className='flex-1 min-h-[70vh]'>

        <div className='flex justify-between text-base sm:text-xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg-grid-cols-5 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => {
              return (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Collection