// base
import React, { useContext } from 'react'
import Link from 'next/link'

import { AuthContext } from '../../pages/_app'

// components
import Form from '../components/Form'
import DailyComponent from '../components/DailyComponent'

const Root = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user.id && (
        <div>
          <Link href="/daily-form">Daily Form</Link>
        </div>
      )}
      {!user.id && (<DailyComponent/>)}
      {user.id && (<Form/>)}
    </>
  )
}

export default Root
