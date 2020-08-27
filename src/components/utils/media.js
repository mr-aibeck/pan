const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1600px'
}

export const media = {
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
