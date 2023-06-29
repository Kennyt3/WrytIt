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
    ev.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('file', files[0])
    const response = await fetch('/api/post', {
      method: 'POST',
      body: { data, content: content },
      credentials: 'include',
    })
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
