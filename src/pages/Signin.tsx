import { FormValues } from '@/models/signin'
import Form from '@components/signin/Form'
import { useCallback } from 'react'

const SigninPage = () => {
  const handleSubmit = useCallback((formValues: FormValues) => {
    console.log('로그인 시도하는 정보', formValues)
  }, [])
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
