import React, {useEffect, useState, Fragment} from 'react'
import Layout from '../components/layout'
import storage, {KEYS} from '../services/storage'
import {printJSON} from '../utils/common'

const Admin = () => {
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    const _questions = storage.local.get(KEYS.QUESTIONS) ?? '[]'
    setQuestions(JSON.parse(_questions))
  }, [])

  const handleSend = (receiver, subject = 'questions') => {
    if (!receiver) return null
    const body = JSON.stringify(questions, null, 2)
    window.open(`mailto:${receiver}?subject=${subject}&body=${body}`)
  }

  const handleClear = () => {
    storage.local.clear()
    setQuestions([])
  }

  return (
    <div>
      <div>
        <button className="big" type="button" onClick={handleSend}>Send</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
      {questions && questions.map(question => {
        const {email, description} = question

        return (
          <Fragment>
            <i>email</i>
            <div>{email}</div>
            <i>description</i>
            <div>{description}</div>
            <hr/>
            <br/>
          </Fragment>
        )
      })}
    </div>
  )
}

export default Admin
