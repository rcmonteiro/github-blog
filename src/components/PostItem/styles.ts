import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostItemContainer = styled.article`
  padding: 2rem;
  background-color: ${(post) => post.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: ${(post) => post.theme['base-label']};
  }

  & div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 1.25rem;

    h2 {
      ${mixins.fonts.titleM}
      color: ${(post) => post.theme['base-title']};
    }

    time {
      ${mixins.fonts.textS}
      color: ${(post) => post.theme['base-span']};
    }
  }

  & p {
    ${mixins.fonts.textM}
    color: ${(post) => post.theme['base-text']};
  }
`
