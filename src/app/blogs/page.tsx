import React from 'react'
import OurLatestBlogs from '../components/Blogs/OurLatestBlogs'
import GridCard from '../components/Blogs/GridCard'
import BlogTrending from '../components/Blogs/BlogTrending'

const page = () => {
  return (
    <div>
        <OurLatestBlogs/>
        <GridCard/>
        <BlogTrending/>
    </div>
  )
}

export default page