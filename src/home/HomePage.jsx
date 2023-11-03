import React from 'react'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/Upcoming/Upcomming'

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  return (
    <>
      <Homes/>
      <Upcomming items={items} title='Upcomming Movies'/>
      </>
  )
}


export default HomePage