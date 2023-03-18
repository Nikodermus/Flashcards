export const COLORS = {
  main: '#6886C5',
  highlight: '#FFE0AC',
  text: '#151515',
  textLight: '#FFFFFF',
};

export const FONT = {
  h1: {
    fontSize: 32,
    fontWeight: 900,
    color: COLORS.text,
  },
  h2: {
    fontSize: 32,
    fontWeight: 600,
    color: COLORS.main,
  },
  h3: {
    fontSize: 24,
    fontWeight: 500,
  },
  sub: {
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.text,
  },
  button: {
    fontWeight: 700,
    fontSize: 20,
  },
};

export const COMPONENT = {
  button: {
    main: {
      backgroundColor: COLORS.main,
      borderRadius: 24,
      color: COLORS.textLight,
      padding: 12,
      width: '80%',
    },
    highlight: {
      backgroundColor: COLORS.highlight,
      borderRadius: 24,
      color: COLORS.text,
      padding: 12,
      width: '80%',
    },
  },
};
