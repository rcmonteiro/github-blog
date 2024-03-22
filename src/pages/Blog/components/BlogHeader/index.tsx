import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import {
  BlogHeaderContainer,
  BlogHeaderContent,
  BlogHeaderLinks,
  BlogHeaderTitle,
} from './styles'

export const BlogHeader = () => {
  const user = useContextSelector(BlogContext, (context) => {
    return context.user
  })

  return (
    <BlogHeaderContainer>
      <img src={user.avatar} alt="" width={148} height={148} />
      <BlogHeaderContent>
        <BlogHeaderTitle>
          <h1>{user.name}</h1>
          <a href={user.url}>
            Github <ArrowSquareOut size={12} weight="bold" />
          </a>
        </BlogHeaderTitle>
        <p>{user.bio}</p>
        <BlogHeaderLinks>
          <a>
            <GithubLogo size={18} weight="fill" /> {user.username}
          </a>
          {user.company && (
            <a>
              <Buildings size={18} weight="fill" /> {user.company}
            </a>
          )}
          <a>
            <Users size={18} weight="fill" /> {user.followers} seguidores
          </a>
        </BlogHeaderLinks>
      </BlogHeaderContent>
    </BlogHeaderContainer>
  )
}
