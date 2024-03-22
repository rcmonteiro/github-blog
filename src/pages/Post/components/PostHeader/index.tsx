import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import {
  dateDistanceToNow,
  dateFormat,
  dateISO,
} from '../../../../utilz/formatters'
import {
  PostHeaderContainer,
  PostHeaderLinks,
  PostHeaderNav,
  PostHeaderTitle,
} from './styles'
export const PostHeader = () => {
  const post = useContextSelector(BlogContext, (context) => {
    return context.post
  })

  console.log(post)

  return post && post.url ? (
    <PostHeaderContainer>
      <PostHeaderNav>
        <NavLink to="/">
          <CaretLeft size={12} weight="bold" />
          Voltar
        </NavLink>
        <a href={post.url}>
          Ver no Github <ArrowSquareOut size={12} weight="bold" />
        </a>
      </PostHeaderNav>
      <PostHeaderTitle>{post.title}</PostHeaderTitle>

      <PostHeaderLinks>
        <a href={post.author_url}>
          <GithubLogo size={18} weight="fill" /> {post.author}
        </a>
        <time
          title={dateFormat(post.publishedAt)}
          dateTime={dateISO(post.publishedAt)}
        >
          <Calendar size={18} weight="fill" />{' '}
          {dateDistanceToNow(post.publishedAt)}
        </time>
        <a href={post.url}>
          <ChatsCircle size={18} weight="fill" /> ({post.comments}) comentários
        </a>
      </PostHeaderLinks>
    </PostHeaderContainer>
  ) : null
}
