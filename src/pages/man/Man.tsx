import { useState } from 'react';

import AllProduct from '../../components/Product/AllProduct';
import { AllProducts } from '../../utils/constants';
import './man.css';



const Man = () => {

  // const [man,setMan] = useState(allPr.gender === "Men's")
  const [text,setText] = useState('')


  return ( 
    <div className='man'>
      <h2 className='h2_man'>Man</h2>
      {/* <h4>{`/Men`}</h4> */}
      <div data-aos="zoom-in-up" className='manProducts'>
        {AllProducts.filter((item) => {
          return item ? item.gender === "Men's" : text 
        }).map(item => <AllProduct key={item.name} allPr={item} />)}
      </div>
    </div>
  )
}


export default Man;

