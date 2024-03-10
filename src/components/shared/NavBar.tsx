import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import MyImage from '@components/my/MyImage'
import { css } from '@emotion/react'
import useUser from '@hooks/auth/useUser'
import Button from '@shared/Button'
import Flex from '@shared/Flex'
import { colors } from '@styles/colorPalette'

const NavBar = () => {
  const location = useLocation()
  const showSignButton =
    ['/signup', 'signin'].includes(location.pathname) === false

  const user = useUser()

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <MyImage size={40} />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>회원가입/로그인</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex align="center" justify="space-between" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default NavBar
