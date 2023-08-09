import styled from "styled-components";

export const SearchBarContainer = styled.form`
margin-top: 1rem;

input {
  width: 100%;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  padding: 0.75rem 1rem;
  border-radius: 6px;

  line-height: 160%;
  color: ${props => props.theme['base-label']};
}
`