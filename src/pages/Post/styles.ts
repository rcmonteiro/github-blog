import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: -4.3rem auto 0;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const PostContent = styled.article`
  padding: 2rem;
  ${mixins.fonts.textM};
  color: ${(props) => props.theme['base-text']};
`
