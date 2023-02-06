import React , {useState} from 'react';

const  ProductsList = ({handleAddToCart : handleAddToCart}) =>  {

  const products = [
    {
      id: '01',
      name: 'Iphone 13',
      location: 'US Store',
      price: '700',
      imageUrl : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-13-202209?wid=182&hei=254&fmt=jpeg&qlt=95&.v=1660759995963'
    },
    {
      id: '02',
      name: 'Iphone 14',
      location: 'US Store',
      price: '800',
      imageUrl : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=182&hei=254&fmt=jpeg&qlt=95&.v=1660759995969'
    },
    {
        id: '04',
        name: 'Iphone 14',
        location: 'US Store',
        price: '800',
        imageUrl : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=182&hei=254&fmt=jpeg&qlt=95&.v=1660759995969'
      },
  ];

  
  return (
    <ul className={"columns-3 text-center text-black bg-white p-0.5"}>
      {products.map((data) => (
        <div  key={data.id} className={"w-fit"}>
        <li > 
            <img src={data.imageUrl} />
            <p>{data.name}</p>
            <p>{data.location}</p>
            <p>{data.price}</p>
            <div>
                <button onClick={()=> handleAddToCart (data)} className={'bg-red-400 py-2 px-2 mx-2 rounded-lg'}>add to cart</button>
                <button className={'bg-lime-500 py-2 px-2 mx-2 rounded-lg'}>wish list</button>
            </div>
        </li>
        </div>
        
      ))}
    </ul>
  );
}
export default ProductsList;