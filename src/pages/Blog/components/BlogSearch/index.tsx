import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { BlogContext } from '../../../../contexts/BlogContext'
import { BlogSearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type IsearchFormSchema = z.infer<typeof searchFormSchema>

export const BlogSearch = () => {
  const postCount = useContextSelector(BlogContext, (context) => {
    return context.postCount
  })

  const fetchPosts = useContextSelector(BlogContext, (context) => {
    return context.fetchPosts
  })

  const { register, handleSubmit } = useForm<IsearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearch = async (data: IsearchFormSchema) => {
    await fetchPosts(data.query)
  }

  return (
    <BlogSearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>
          {postCount} {postCount === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <input type="text" placeholder="Buscar posts" {...register('query')} />
      </form>
    </BlogSearchContainer>
  )
}
