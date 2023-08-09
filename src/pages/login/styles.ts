import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '1.25rem',
  display: 'grid',
  gridTemplateColumns: '37.375rem 1fr',
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& h2': {
    color: '$gray100',
    lineHeight: '140%',
    fontWeight: 'bold',
  },

  '& p': {
    color: '$gray200',
    lineHeight: '160%',
  },
})

export const LoginOptionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2.5rem',
  gap: '1rem',
  width: '23.25rem',
})

export const LoginOption = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '1.25rem',
  backgroundColor: '$gray600',
  borderRadius: '8px',
  cursor: 'pointer',

  color: '$white200',
  fontSize: '1.125rem',
  lineHeight: '160%',
  fontWeight: 'bold',
  transition: '0.1s',

  '& svg': {
    color: '$purple100',
  },

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
