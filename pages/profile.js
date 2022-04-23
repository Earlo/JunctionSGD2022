import { Card, Space, Typography } from '@supabase/ui'
import { RequireAuth, useUser } from '../hooks/authUser'

import Header from '../components/Header'
import React from 'react'

export default function Profile() {
  RequireAuth()

  const { user } = useUser()

  return (
    <>
      <Header />
      {user && (
        <div style={{ maxWidth: '620px', margin: '96px auto' }}>
          <Card>
            <Space direction="vertical" size={6}>
              <Typography.Text>you're signed in</Typography.Text>
              <Typography.Text strong>Email: {user.email}</Typography.Text>
              <Typography.Text type="success">User data:</Typography.Text>

              <Typography.Text>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </Typography.Text>
            </Space>
          </Card>
        </div>
      )}
    </>
  )
}
