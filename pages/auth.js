import { Auth, Card, Space, Typography } from '@supabase/ui'

import { AuthRedirect } from '../hooks/authUser'
import Head from '../components/Head'
import Header from '../components/Header'
import React from 'react'
import { supabase } from '../utils/initSupabase'

const AuthPage = () => {
  AuthRedirect()

  return (
    <>
      <Head />
      <Header />
      <div className="authcontainer">
        <Card>
          <Space direction="vertical" size={8}>
            <div>
              <Typography.Title level={3}>Welcome</Typography.Title>
            </div>
            <Auth
              supabaseClient={supabase}
              providers={['github']}
              view={'sign_in'}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </Space>
        </Card>
      </div>
    </>
  )
}

export default AuthPage
