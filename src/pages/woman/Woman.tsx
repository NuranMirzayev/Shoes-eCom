import { useState } from 'react'
import AllProduct from '../../components/Product/AllProduct'
import { AllProducts } from '../../utils/constants'
import './woman.css'

const Woman = () => {

  const [text,setText] = useState('')

  return (
    <div className='woman'>
        <h2 className='h2_man'>Woman</h2>
      <div data-aos="zoom-in-up" className='womanProducts'>
        {AllProducts.filter((item) => {
          return item ? item.gender === "Women's" : text 
        }).map(item => <AllProduct key={item.name} allPr={item} />)}
      </div>
    </div>
  )
}

export default Woman