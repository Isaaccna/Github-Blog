import styled from "styled-components";

export const PostInfoContainer = styled.div`
background: ${props => props.theme['base-profile']};
width: 54rem;
max-width: 100%;
height: 10.5rem;
padding: 0.75rem 1.75rem;
margin-inline: auto;

/* cal 0px to start it to be negative - half of the size of the div */
margin-top: calc(0px - 5.25rem);
border-radius: 10px;

display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;

h2 {
  font-size: 1.5rem;
  color: ${props => props.theme['base-title']};
}
h1 {
  margin-inline: auto;
  font-size: 3.5rem;
}
`

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

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
`

export const PostBodyContainer = styled.div`

  padding: 2.5rem 2rem;

h1, h2, h3, h4, h5, h6 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.blue};
  font-weight: regular;
}

ul {
  padding-inline: 1rem;
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
  color: ${props => props.theme['blue']};
 
}
img {
  width: 100%;
margin-top: 5rem;

}

 code {
background: ${props => props.theme['base-post']};
font-family: 'Courier New', monospace;

 }

`