
import { useContext, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Summary } from './components/Summary'
import { UserInfo } from './components/UserInfo'
import { IssueCard, IssuesContainer, NavLinkWrapper, TitleContainer } from './styles'

import { dateFormatterTitle, dateFormatCreatedAt } from '../../util/formatter'

import { GithubContext } from '../../context/GihubContext'


export function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

 
const { issues} = useContext(GithubContext)

  return (
  <>
      <UserInfo />
      <Summary />
      <SearchBar />

      <IssuesContainer>
  {issues.length > 0 ? (
    issues.map((issue) => (
      <NavLinkWrapper key={issue.id} to={`/issue/${issue.number}`}>
        <IssueCard>
          <TitleContainer>
            <h3>{issue.title}</h3>
            <time title={dateFormatterTitle(issue.created_at)}>
              {dateFormatCreatedAt(issue.created_at)}
            </time>
          </TitleContainer>

          <p>{issue.body}</p>
        </IssueCard>
      </NavLinkWrapper>
    ))
  ) : (
    <h1>Issue not found!!</h1>
  )}
</IssuesContainer>
      </>
  )
}
