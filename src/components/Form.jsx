import React, { useContext, useState } from 'react'

// components
import { Button } from 'antd'
import 'antd/dist/antd.css'

// services
import { getUsers } from '../services/user'
import { AuthContext } from '../../pages/_app'

const Form = () => {
  const [users, setUsers] = useState([])

  const { user, onLogout } = useContext(AuthContext)

  const getUsersList = () => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(er => console.log(er))
  }

  const usersListComponent = (
    <div>
      {users.map(item => (
        <p>{item.email}</p>
      ))}
      <Button onClick={getUsersList}>
        get users
      </Button>
    </div>
  )

  return (
    <>
      <h1>{user.email}</h1>
      <Button onClick={onLogout}>
        Logout
      </Button>
      {usersListComponent}
    </>
  )
}

export default Form

