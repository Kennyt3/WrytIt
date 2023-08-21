import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { useContextValue } from '../context/userContext'
import { useEffect, useState } from 'react'

const Editor = ({}) => {
  const ReactQuill = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
  const { content, setContent } = useContextValue()
  const [value, setValue] = useState('bioo')

  useEffect(() => {
    setContent(value)
    console.log(content)
  }, [value])
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]
  return (
    <div className='content'>
      <ReactQuill
        value={value}
        key='reactquill'
        theme='snow'
        onChange={(e) => setValue((value) => (value += e))}
        modules={modules}
        formats={formats}
      />
      <p>{content}</p>
    </div>
  )
}

export default Editor
