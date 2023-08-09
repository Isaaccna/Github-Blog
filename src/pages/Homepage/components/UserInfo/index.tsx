import {
  IconsWrapper,
  InfoWrapper,
  TitleContainer,
  UserInfoContainer
} from './styles'

import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubContext } from '../../../../context/GihubContext'

export function UserInfo() {
  const { user, getUser } = useContext(GithubContext)
  getUser()
  if (user) {
    return (
      <UserInfoContainer>
        <img src={user.profileImg} alt="" />

        <InfoWrapper>
          <TitleContainer>
            <h2>{user.name}</h2>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </TitleContainer>
          <p>{user.bio}</p>
          <IconsWrapper>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.username}
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company ? user.company : 'unknown'}
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </span>
          </IconsWrapper>
        </InfoWrapper>
      </UserInfoContainer>
    )
  }

  return <p>Loading</p>
}
