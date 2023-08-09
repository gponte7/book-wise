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
})

export const LoginOptionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2.5rem',
  gap: '1rem',
})

export const LoginOption = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '1.25rem',
  backgroundColor: '$gray600',
  borderRadius: '8px',
  cursor: 'pointer',

  color: '$white200',
  fontSize: '1.125rem',
  lineHeight: '160%',
  fontWeight: 'bold',
})
