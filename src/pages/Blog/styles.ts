import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: -4.3rem auto 0;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const BlogSearch = styled.section`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const BlogContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
