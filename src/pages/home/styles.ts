import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '14.5rem 1fr 20.25rem',
  padding: '1.25rem 6rem 0 1.25rem',
  gap: '5rem',
})

export const AsideContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2.5rem 3.25rem',
  marginBottom: '1rem',
  borderRadius: '12px',
  backgroundColor: '$gray700',
  height: '61.75rem',
  gap: '4rem',
})

export const AsideNavContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const AsideNavItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  '& h2': {
    fontSize: '1rem',
    lineHeight: '160%',
  },
})

export const BooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  backgroundColor: '$gray700',
  marginTop: '3.25rem',
})

export const BooksTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  '& h1': {
    fontSize: '1.5rem',
    lineHeight: '140%',
  },

  '& svg': {
    color: '$green100',
  },
})

export const TrendingBooksContainer = styled('div', {
  backgroundColor: '$gray700',
  marginTop: '3.25rem',
})

export const AvaliationsContainer = styled('div', {
  '& span': {
    fontSize: '0.875rem',
    lineHeight: '160%',
  },
})
