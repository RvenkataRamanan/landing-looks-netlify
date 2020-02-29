import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import HeaderBlock from './HeaderBlock'
import MobileView from "../components/MobileView"
import SectionB from "../components/SectionB"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="lg:block md:block sm: hidden">
     <SectionB />
     </div>
     <div class="lg:hidden sm:hidden xs: block ">
     <MobileView />
     </div>
    
  </Layout>
)

export default IndexPage
