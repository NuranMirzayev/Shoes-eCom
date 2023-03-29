import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Item } from '../../utils/types'

interface Props {
  item: Item
}

const Navitem = ({ item }: Props) => {
  return (
    <Button>
      <Link className='navList' to={`${item.route}`}>{item.title}</Link>
      {/* <a className='navList' href={`${item.route}`}>{item.title}</a> */}
    </Button>
  )
}

export default Navitem