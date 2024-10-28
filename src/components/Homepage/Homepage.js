import React from 'react'
import EbayNav from '../../modules/Homepage/Ebaynav'
import Banner from  '../../modules/Homepage/Banner'
import ExploreCategory from '../../modules/Homepage/ExploreCategory'
import Footer from '../../modules/Homepage/Footer'

function Homepage() {
  return (
    <div>
      <EbayNav/>
      <Banner/>
      <ExploreCategory/>
      <Footer/>
    </div>
  )
}

export default Homepage