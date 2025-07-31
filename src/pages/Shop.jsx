import React from 'react'
import Hero from '../component/Hero'
import Popular from '../component/Popular'
import Offers from '../component/Offers'
import NewCollection from '../component/NewCollection'
import Newslatter from '../component/Newslatter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newslatter/>
    </div>
  )
}

export default Shop