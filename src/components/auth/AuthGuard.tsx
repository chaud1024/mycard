import React, { useState } from 'react'

import { auth } from '@remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'

// 인증처리를 위한 컴포넌트
// AuthGuard 컴포넌트를 거침 ? 인증 처리 완료
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)

  // 파이어베이스의 인증상태가 바뀌면 동작하는 함수
  onAuthStateChanged(auth, (user) => {
    console.log('user', user)
    // 인증처리완료 ? App 컴포넌트 그려주기
    setInitialize(true)
  })

  if (initialize === false) {
    return <div>로딩중...</div>
  }

  return <>{children}</>
}

export default AuthGuard
