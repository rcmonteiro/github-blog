import { useEffect } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../contexts/BlogContext'
import { PostHeader } from './components/PostHeader'
import { PostContainer, PostContent } from './styles'

export const Post = () => {
  const post = useContextSelector(BlogContext, (context) => {
    return context.post
  })

  const fetchPost = useContextSelector(BlogContext, (context) => {
    return context.fetchPost
  })

  const params = useParams()
  const postId = params?.id

  useEffect(() => {
    postId && fetchPost(+postId)
  }, [postId, fetchPost])

  return (
    <PostContainer>
      {post && <PostHeader />}
      {post && (
        <PostContent>
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              code({ inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '')

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.content}
          </Markdown>
        </PostContent>
      )}
    </PostContainer>
  )
}
