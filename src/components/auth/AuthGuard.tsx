import React, { useState } from 'react'

import { userAtom } from '@atoms/user'
import { auth } from '@remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'

// 인증처리를 위한 컴포넌트
// AuthGuard 컴포넌트를 거침 ? 인증 처리 완료
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  // 파이어베이스의 인증상태가 바뀌면 동작하는 함수
  onAuthStateChanged(auth, (user) => {
    // 인증처리완료 ? App 컴포넌트 그려주기
    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
      })
    } else {
      setUser(null)
    }

    setInitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
