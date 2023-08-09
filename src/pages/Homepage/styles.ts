import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



export const IssuesContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

h1 {
  font-size: 3rem;
  margin-top: 3rem;
  margin-inline: auto;
}
`
export const NavLinkWrapper = styled(NavLink) `
text-decoration: none;
color: ${props=> props.theme['base-text']}
`

export const IssueCard = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

&:hover {
  box-shadow: 0 0 0 1px ${props => props.theme['blue']};
}
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h3 {
    color: ${props => props.theme['base-title']};
    font-size: 1.25rem;
    line-height: 160%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 4rem;
  }
  time {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
    white-space: nowrap;
    align-self: flex-start;
  }
`

