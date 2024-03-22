import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
