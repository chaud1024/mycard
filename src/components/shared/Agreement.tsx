import { css } from '@emotion/react'
import { colors } from '@styles/colorPalette'
import React, { MouseEvent } from 'react'
import Flex from './Flex'
import Text from './Text'

const Agreement = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex as="ul" direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  )
}

const AgreementTitle = ({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) => {
  return (
    <Flex
      as="li"
      css={agreementTextContainerStyles}
      onClick={(e) => onChange(e, !checked)}
    >
      <IconCheck checked={checked} withCircle={true} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}
const AgreementDescription = ({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, cheched: boolean) => void
  link?: string
}) => {
  return (
    <Flex as="li" justify="space-between">
      <Flex
        onClick={(e) => onChange(e, !checked)}
        css={agreementTextContainerStyles}
      >
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link != null ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

const agreementContainerStyles = css`
  padding: 24px;
  & li {
    cursor: pointer;
  }
`
const agreementTextContainerStyles = css`
  gap: 8px;
`

const IconCheck = ({
  checked,
  withCircle = false,
}: {
  checked: boolean
  withCircle?: boolean
}) => {
  return (
    <svg
      height="24px"
      width="24px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      fill={checked ? colors.blue : colors.gray}
    >
      <g>
        <path d="M340.1,177.3L215.3,303l-47.2-47.2l-17.8,17.8l56,56c2.5,2.5,5.9,4.5,8.9,4.5s6.3-2,8.8-4.4l133.7-134.4L340.1,177.3z" />
        {withCircle && (
          <g>
            <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7    c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7    C446.7,361.1,361.1,446.7,256,446.7z" />
          </g>
        )}
      </g>
    </svg>
  )
}

export default Agreement
