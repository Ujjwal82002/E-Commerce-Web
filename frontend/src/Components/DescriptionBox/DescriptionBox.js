import React from 'react'
 import './DescriptionBox.css'



const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
          <div className='descriptionbox-nav-box'>Description</div>
          <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
          <p>The E-Commerce Website ultimate online shopping destination with our cutting-edge e-commerce website. 
          Browse through an extensive selection of products across various categories, all at competitive prices.
           Our user-friendly interface ensures a hassle-free shopping journey from start to finish.
           Enjoy secure transactions and swift delivery, backed by our commitment to customer satisfaction. 
           Elevate your shopping experience today and discover convenience like never before.
            Welcome to the future of online retail, where quality and convenience converge seamlessly."</p>
            <p>
             An elegant ecommerce website featuring a minimalist design with intuitive navigation. 
             The homepage showcases a captivating hero image and product highlights.
             Available in various sizes and colors, ensuring a seamless shopping experience for every user.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox