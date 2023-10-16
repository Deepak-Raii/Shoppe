import React from 'react'

export default function Categories() {
    const item = [
        {
            img: "https://images.pexels.com/photos/8933066/pexels-photo-8933066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2000",
            category: "Shoes"
        },
        {
            img: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "T-shirts"
        },
        {
            img: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Jeans"
        },
        {
            img: "https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Beauty"
        },
        {
            img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Watch"
        },
        {
            img: "https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Mobile"
        },
        {
            img: "https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Laptop"
        },
    ]
    return (
        <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'auto', marginTop: '5px'}}>
            <div className='card-container'>
                {item.map((item, index)=>(
                    <div id={index} className='card'>
                        <img className='item-img' src={item.img}/>
                    <h4 style={{background:'transparent', color:"gray", fontWeight:"bold", marginBottom:'-5px'}}>{item.category}</h4>
                </div>
                ))}
            </div>
        </div>
    )
}
