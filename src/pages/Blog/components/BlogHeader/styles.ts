import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const BlogHeaderContainer = styled.section`
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  display: flex;
  gap: 2rem;

  img {
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BlogHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme['base-text']};
  }
`

export const BlogHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  & > h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['base-title']};
  }

  & > a {
    ${mixins.fonts.link};
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const BlogHeaderLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  & > a {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    & > svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
