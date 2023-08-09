import styled from "styled-components";

export const UserInfoContainer = styled.div`
background: ${props => props.theme['base-profile']};
width: 54rem;
max-width: 100%;
height: 13.25rem;
padding: 0.75rem 1.75rem;
margin-inline: auto;
/* cal 0px to start it to be negative - half of the size of the div */
margin-top: calc(0px - 6.635rem);
border-radius: 10px;

display: flex;
align-items: center;
gap: 1.5rem;

img {
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
}
`

export const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
height: 9.25rem;

p {
  line-height: 160%;
  margin-bottom: 1.25rem;
}
`

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h2 {
  margin-top: 0.25rem;
  font-size: 1.5rem;
  color: ${props => props.theme['base-title']};
}

a {
text-decoration-line: none;
color: ${props => props.theme['blue']};
display: flex;
gap: 0.5rem;
font-size: 0.75rem;
font-weight: bold;
display: flex;
align-items: center;
}
a:hover {
  border-bottom: 1px solid ${props => props.theme['blue']};
  padding: 0;
 
}

margin-bottom:0.5rem;
`

export const IconsWrapper = styled.div`
display: flex;
gap: 1.5rem;

span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
 
`