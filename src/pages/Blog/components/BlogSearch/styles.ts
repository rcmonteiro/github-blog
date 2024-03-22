import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const BlogSearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  & > div {
    display: flex;
    justify-content: space-between;

    h2 {
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme['base-subtitle']}
    }

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-span']}
    }
  }

  & > form {
    display: flex;
    input {
      ${mixins.fonts.textM}
      margin-top: 0.75rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme['base-border']};
      width: 100%;
      padding: 0.75rem 1rem;
      caret-color: ${(props) => props.theme.blue};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
