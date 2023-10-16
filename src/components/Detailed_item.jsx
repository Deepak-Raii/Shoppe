import React, { useEffect, useState } from 'react'

export default function Detailed_item() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=28").then(result => {
      result.json().then(data => {
        if(data)
        {
          setData(data.products);
           console.log(data.products);
        }
        
       
      })

    })
  }, [])

  return (
    <div className='container' style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', width: "100vw", marginTop:'30px', marginBottom:'20px'}}>
      <div className='filterDiv'>
        <div><input type='checkbox' /><span>mobile</span></div>
        <div><input type='checkbox' /><span>tablet</span></div>
        <div><input type='checkbox' /><span>clothes</span></div>
        <div><input type='checkbox' /><span>shoes</span></div>
      </div>
      <div className='collectionDiv'>
        {data ? (data.map((item, index) => (
        <div key={index} className='cards'>
          {item.images ? <img className='img img-fluid' src={item.thumbnail} alt='image'/> : <p>loading...</p>}      
          <div style={{ width: "100%", backgroundColor: "transparent" }}>
            <p style={{fontSize:'2vw'}}>{item.title ? item.title : 'loading'}</p>
            <p style={{fontSize:'1.5vw'}}>${item.price ? item.price : 'loading'}</p>
            <p style={{fontSize:'1.5vw'}}>{item.discountPercentage ? item.discountPercentage : 'loading'}% off</p>
          </div>
        </div>
        ))): 'loading'}
      </div>
    </div>
  )
}
