import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { useEffect } from 'react'
import { useContextValue } from '../context/userContext'

const Editor = ({}) => {
  const { quill, quillRef } = useQuill()
  const { content, setContent } = useContextValue()
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!')
        console.log(quill.getText())
        setContent(quill.getText())
        // setContent(quillRef?.current?.firstChild?.innerHTML)
        // setContent(quill.root.innerHTML)
        // console.log(quill.getContents())
      })
    }
  }, [quill, setContent])

  return (
    <div className='content'>
      <div ref={quillRef}></div>
    </div>
  )
}

export default Editor
