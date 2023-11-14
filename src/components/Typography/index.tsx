import { styled } from '../../../stitches.config';

export const Typography = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    color: {
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
      neutral30: {
        color: '$neutral30',
      },
      neutral50: {
        color: '$neutral50',
      },
      neutral100: {
        color: '$neutral100',
      },
      neutral150: {
        color: '$neutral150',
      },
      neutral200: {
        color: '$neutral200',
      },
      neutral300: {
        color: '$neutral300',
      },
      neutral400: {
        color: '$neutral400',
      },
      neutral500: {
        color: '$neutral500',
      },
      neutral600: {
        color: '$neutral600',
      },
      neutral700: {
        color: '$neutral700',
      },
      neutral800: {
        color: '$neutral800',
      },
      neutral900: {
        color: '$neutral900',
      },
    },
    variant: {
      h1: {
        fontSize: '2.6rem',
        lineHeight: '3.0rem',
        fontWeight: 700,
        letterSpacing: '0%',
      },
      h2: {
        fontSize: '2rem',
        lineHeight: '2.4rem',
        fontWeight: 700,
        letterSpacing: '0%',
      },
      h3: {
        fontSize: '1.6rem',
        lineHeight: '2.0rem',
        fontWeight: 700,
        letterSpacing: '0%',
      },
      h4: {
        fontSize: '1.4rem',
        lineHeight: '1.7rem',
        fontWeight: 700,
        letterSpacing: '0%',
      },

      b1: {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
        fontWeight: 700,
        letterSpacing: '-0.12px',
      },
      b2: {
        fontSize: '1.4rem',
        lineHeight: '1.7rem',
        fontWeight: 700,
        letterSpacing: '-0.14px',
      },
      b3: {
        fontSize: '1.0rem',
        lineHeight: '1.4rem',
        fontWeight: 700,
        letterSpacing: '-0.1px',
      },
      b4: {
        fontSize: '1.0rem',
        lineHeight: '1.4rem',
        fontWeight: 700,
        letterSpacing: '-0.1px',
      },
      i1: {
        fontSize: '1.4rem',
        lineHeight: '1.7rem',
        fontWeight: 400,
        letterSpacing: '0%',
      },
      i2: {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
        fontWeight: 500,
        letterSpacing: '0%',
      },
      i3: {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
        fontWeight: 400,
        letterSpacing: '0%',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    color: 'black',
    variant: 'h1',
  },
});
