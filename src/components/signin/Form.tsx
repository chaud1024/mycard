import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { css } from '@emotion/react'
import Button from '@shared/Button'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Text from '@shared/Text'
import TextField from '@shared/TextField'

import { colors } from '@styles/colorPalette'

import { FormValues } from '@/models/signin'
import validator from 'validator'

const Form = ({ onSubmit }: { onSubmit: (formvalues: FormValues) => void }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const 제출가능한가 = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="hong@naver.com"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        onChange={handleFormValues}
        value={formValues.password}
      />
      <Spacing size={32} />

      <Button
        size="medium"
        disabled={!제출가능한가}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>

      <Spacing size={16} />
      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`
const linkStyles = css`
  text-align: center;
  & > span:hover {
    color: ${colors.blue};
  }
`

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8글자 이상 입력해주세요.'
  }

  return errors
}

export default Form
