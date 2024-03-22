import { ReactNode, useCallback, useEffect, useState } from 'react'
import removeMd from 'remove-markdown'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IUser {
  name: string
  url: string
  avatar: string
  bio: string
  username: string
  company: string
  followers: number
}

export interface IPostItem {
  id: number
  title: string
  content: string
  publishedAt: Date
  comments?: number
  author?: string
  author_url?: string
  url?: string
}

interface IBlogContext {
  user: IUser
  posts: IPostItem[]
  post: IPostItem
  postCount: number
  fetchPost: (postId: number) => Promise<void>
  fetchPosts: (query: string) => Promise<void>
}

interface IBlogContextProvider {
  children: ReactNode
}

interface IPost {
  number: number
  title: string
  body: string
  created_at: Date
}

export const BlogContext = createContext({} as IBlogContext)

export const BlogContextProvider = ({ children }: IBlogContextProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [posts, setPosts] = useState<IPostItem[]>([])
  const [post, setPost] = useState<IPostItem>({} as IPostItem)
  const [postCount, setPostCount] = useState(0)

  const fetchUser = useCallback(async () => {
    const response = await api.get(`/users/${import.meta.env.VITE_GITHUB_USER}`)
    const userData = response.data
    setUser({
      name: userData.name,
      avatar: userData.avatar_url,
      bio: userData.bio,
      username: userData.login,
      url: userData.html_url,
      company: userData.company,
      followers: userData.followers,
    })
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      const call = query
        ? `${query} repo:${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}`
        : `repo:${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}`
      const response = await api.get('/search/issues', {
        params: {
          q: call,
        },
      })
      const postData = response.data.items.map((item: IPost) => {
        return {
          id: item.number,
          title: item.title,
          content: removeMd(item.body),
          publishedAt: item.created_at,
        }
      })

      setPostCount(response.data.total_count)
      setPosts(postData)
    } catch (e) {
      console.log(e)
    }
  }, [])

  const fetchPost = useCallback(async (postId: number) => {
    try {
      const response = await api.get(
        `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}/issues/${postId}`,
      )
      const item = response.data
      const postData = {
        id: item.number,
        title: item.title,
        content: item.body,
        publishedAt: item.created_at,
        author: item.user.login,
        author_url: item.user.url,
        url: item.html_url,
        comments: item.comments,
      }
      setPost(postData)
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <BlogContext.Provider
      value={{ user, posts, post, postCount, fetchPost, fetchPosts }}
    >
      {children}
    </BlogContext.Provider>
  )
}
