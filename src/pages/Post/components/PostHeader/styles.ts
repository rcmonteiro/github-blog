import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const PostHeaderContainer = styled.section`
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const PostHeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  & > a {
    ${mixins.fonts.link};
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const PostHeaderTitle = styled.h1`
  margin-bottom: 0.5rem;
  ${mixins.fonts.titleL};
  color: ${(props) => props.theme['base-title']};
`

export const PostHeaderLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  & > a,
  time {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme['base-span']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;

    & > svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
