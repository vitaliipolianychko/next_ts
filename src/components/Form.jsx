import React, { useContext } from 'react'

// components
import { Button } from 'antd'

// services
import { AuthContext } from '../../pages/_app'

const Form = () => {

  const { user, onLogout } = useContext(AuthContext)

  return (
    <>
      <h1>{user.email}</h1>
      <Button onClick={onLogout}>
        Logout
      </Button>
    </>
  )
}

export default Form

