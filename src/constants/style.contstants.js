export const COLORS = {
  main: '#6886C5',
  highlight: '#FFE0AC',
  text: '#151515',
  textLight: '#FFFFFF',
  detail: '#8c8c8c',
};

export const FONT = {
  h1: {
    fontSize: 32,
    fontWeight: 900,
    color: COLORS.text,
  },
  h2: {
    fontSize: 38,
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
    color: COLORS.detail,
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
      borderRadius: 36,
      color: COLORS.textLight,
      paddingHorizontal: 12,
      width: '80%',
    },
    highlight: {
      backgroundColor: COLORS.highlight,
      borderRadius: 36,
      color: COLORS.text,
      paddingHorizontal: 12,
      width: '80%',
    },
  },
};
