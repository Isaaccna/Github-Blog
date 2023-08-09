import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 160%;
  margin-top: 4rem;

  p {
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.125rem;
  }
  span {
    color: ${props => props.theme['base-span']};
    font-size: 0.875rem;
  }
`
