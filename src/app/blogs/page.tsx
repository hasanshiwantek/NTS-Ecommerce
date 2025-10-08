import React from 'react'
import OurLatestBlogs from '../components/Blogs/OurLatestBlogs'
import GridCard from '../components/Blogs/GridCard'
import BlogTrending from '../components/Blogs/BlogTrending'
import BlogCategories from '../components/Blogs/BlogCategories'

const page = () => {
  return (
    <div>
        <OurLatestBlogs/>
        <GridCard/>
        <BlogTrending/>
        <BlogCategories/>
    </div>
  )
}

export default page