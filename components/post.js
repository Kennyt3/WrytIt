import React from 'react'
import Editor from './editor'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useContextValue } from './context/userContext'

const Post = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [files, setFiles] = useState('')
  const { content } = useContextValue()
  const router = useRouter()

  const createPost = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('title', title)
    data.append('summary', summary)
    data.append('file', files[0])
    data.append('content', content)
    const response = await fetch('/api/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    })

    if (response.ok) {
      router.push('/')
    }
  }
  return (
    <form onSubmit={createPost} className='post'>
      <input
        type='title'
        key='in'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='summary'
        placeholder='Summary'
        key='sur'
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type='file' onChange={(e) => setFiles(e.target.files)} key='go' />
      <Editor key='quill' />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
  )
}

export default Post
