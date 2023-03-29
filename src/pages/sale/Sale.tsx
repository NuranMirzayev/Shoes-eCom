import React, { useState } from 'react'
import './sale.css'
import { AllProducts } from '../../utils/constants'
import AllProduct from '../../components/Product/AllProduct'

const Sale = () => {

  const [text,setText] = useState('')

  return (
  <div className='sale'>
        <h2 className='h2_man'>Sale</h2>
      <div data-aos="zoom-in-up" className='saleProducts'>
        {AllProducts.filter((item) => {
          return  item.sale
        }).map(item => <AllProduct key={item.id} allPr={item} />)}
      </div>
    </div>
  )
}

export default Sale