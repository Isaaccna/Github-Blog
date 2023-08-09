/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IconsWrapper,
} from '../Homepage/components/UserInfo/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft, faCalendarDay, faComment
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ButtonsContainer, PostBodyContainer, PostInfoContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useContext, useEffect } from 'react'

import { dateFormatCreatedAt } from '../../util/formatter'
import { GithubContext } from '../../context/GihubContext'

import { NavLink, useParams } from 'react-router-dom';


export function IssuePost() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);


  const params = useParams()
  const paramsNumber = Number(params.number)
  const { issuePost, fetchIssuePost} = useContext(GithubContext)

  console.log(paramsNumber);
  
 useEffect(() => {
  fetchIssuePost(paramsNumber)
 })
 
    return issuePost? (
   
      <>
        <PostInfoContainer>
          <ButtonsContainer>
            <NavLink to={'/'}>
              {' '}
              <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
            </NavLink>
            <a target='_blank' href={issuePost.html_url}>
              {' '}
              VER NO GITHUB <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              />{' '}
            </a>
          </ButtonsContainer>
          <h2>{issuePost?.title}</h2>
          <IconsWrapper>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {issuePost.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
             {dateFormatCreatedAt(issuePost.created_at)}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {issuePost.comments} comentários
            </span>
          </IconsWrapper>
        </PostInfoContainer>


        <PostBodyContainer>
        
          <ReactMarkdown 
          children={issuePost.body}
          components={{
            
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}/>
            
  
         
        </PostBodyContainer>
    </>
    ) : 
    <PostInfoContainer id='no-issue'>
<ButtonsContainer>
<NavLink to={'/'}>
              {' '}
              <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
            </NavLink>
</ButtonsContainer>

     <h1>Issue not found!</h1> 

      </PostInfoContainer>
    
      
  }
  

