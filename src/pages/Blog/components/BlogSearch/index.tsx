import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import { BlogSearchContainer } from './styles'

export const BlogSearch = () => {
  const postCount = useContextSelector(BlogContext, (context) => {
    return context.postCount
  })
  return (
    <BlogSearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>
          {postCount} {postCount === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <form>
        <input type="text" placeholder="Buscar posts" />
      </form>
    </BlogSearchContainer>
  )
}
