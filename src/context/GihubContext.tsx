import axios from 'axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface User {
  profileImg: string
  name: string
  bio: string
  url: string
  username: string
  company: string
  followers: number

}

interface Issue {
  id: number
  title: string
  created_at: string
  body: string
  total_count: number
  number: number
  html_url: string
  user: {
    login: string
  } 
  comments: string
}



interface GithubContextType {
  user: User | undefined
  getUser: () => Promise<void>
  issues: Issue[]
  fetchIssue: (query? : string) => Promise<void>
  totalCount: number
  issuePost: Issue | undefined
  fetchIssuePost: (query? : number | undefined) => Promise<void>
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {

  const [user, setUser] = useState<User | undefined>()
  async function getUser() {
  
    const response = await axios.get('https://api.github.com/users/isaaccna')
    const data = response.data

    setUser({
      profileImg: data.avatar_url,
      name: data.name,
      bio: data.bio,
      url: data.html_url,
      username: data.login,
      company: data.company,
      followers: data.followers
    })
  }

 
  const [issues, setIssues] = useState<Issue[]>([])

  const [issuePost, setIssuePost] = useState<Issue |undefined>()

  const [totalCount, setTotalCount] = useState<number>(0);

  async function fetchIssue(query?: string) {
    try {
    const response = await axios.get('https://api.github.com/search/issues', {
      params: {
        q: query ? `${query}repo:Isaaccna/Github-Blog `: 'repo:Isaaccna/Github-Blog'
      }
    
    })

const issues = response.data.items;
const totalCount = response.data.total_count;
     setTotalCount(totalCount)
    setIssues(issues)
  }
 catch(error) {
  console.error('Error fetching issues:', error);
}
  }

  useEffect(() => {
    fetchIssue()
    
  }, [])


  async function fetchIssuePost(query: number | undefined) {
    try {
      const response = await axios.get(`https://api.github.com/repos/Isaaccna/Github-Blog/issues/ ${query}`)
    setUser(response.data.user.login)
    setIssuePost(response.data)
    } catch (error) {
      console.log(error);
      
    }
      }
     

  return (
    <GithubContext.Provider
      value={{
        user,
        getUser, 
        issues,
        fetchIssue,
        totalCount,
        issuePost,
        fetchIssuePost
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
