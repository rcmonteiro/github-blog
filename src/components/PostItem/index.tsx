import { NavLink } from 'react-router-dom'
import { IPostItem } from '../../contexts/BlogContext'
import { dateDistanceToNow, dateFormat, dateISO } from '../../utilz/formatters'
import { PostItemContainer } from './styles'

export const PostItem = (post: IPostItem) => {
  return (
    <PostItemContainer>
      <NavLink to={`/${post.id}`}>
        <div>
          <h2>{post.title}</h2>
          <time
            title={dateFormat(post.publishedAt)}
            dateTime={dateISO(post.publishedAt)}
          >
            {dateDistanceToNow(post.publishedAt)}
          </time>
        </div>
        <p>{post.content.split(' ').slice(0, 40).join(' ')}...</p>
      </NavLink>
    </PostItemContainer>
  )
}
