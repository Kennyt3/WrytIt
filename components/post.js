import React from 'react'
import Editor from './editor'
import { useState, useEffect } from 'react'
import { useContextValue } from '../context/userContext'

const Post = () => {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [date, setDate] = useState('')
  const [locale, setLocale] = useState('')
  const [files, setFiles] = useState('')
  const { content, setUserInfo, userInfo, setLoggedIn, setContent, token } =
    useContextValue()

  const createPost = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('title', title)
    data.append('link', link)
    data.append('locale', locale)
    data.append('token', token)
    data.append('date', new Date().toLocaleDateString('en-GB'))
    data.append('file', files[0])
    data.append('name', name)
    data.append('content', content)
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo)
          setContent('')
          setLoggedIn(false)
        })
      }
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  useEffect(() => {
    setName(userInfo.name)
  }, [])
  useEffect(() => {
    console.log(files[0])
  }, [files])
  return (
    <form onSubmit={createPost} className='post'>
      <div className=''>
        <div className='flex justify-between gap-5'>
          <input
            type='name'
            key='in'
            placeholder='Name'
            // readOnly
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='locale'
            key='in'
            placeholder='Locale'
            // readOnly
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
          />{' '}
        </div>
        <div className='flex justify-between gap-5'>
          <input
            type='link'
            key='in'
            placeholder='Bloglink'
            // readOnly
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type='file'
            name='file'
            onChange={(e) => setFiles(e.target.files)}
            key='go'
          />
        </div>
        <div className='flex justify-between gap-5'>
          <input
            type='title'
            key='in'
            autoComplete='on'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='text'
            key='in'
            autoComplete='on'
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Editor key='quill' />
      </div>
      <div className='flex items-center justify-center ppb'>
        <button className='btn cta__form--btn2 '>Create post</button>
      </div>
    </form>
  )
}

export default Post
