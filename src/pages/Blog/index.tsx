import { useContextSelector } from 'use-context-selector'
import { PostItem } from '../../components/PostItem'
import { BlogContext } from '../../contexts/BlogContext'
import { BlogHeader } from './components/BlogHeader'
import { BlogSearch } from './components/BlogSearch'
import { BlogContainer, BlogContent } from './styles'

export const Blog = () => {
  const posts = useContextSelector(BlogContext, (context) => {
    return context.posts
  })

  return (
    <BlogContainer>
      <BlogHeader />
      <BlogSearch />
      <BlogContent>
        {posts &&
          posts.map((post) => {
            return <PostItem key={post.id} {...post} />
          })}
      </BlogContent>
    </BlogContainer>
  )
}
