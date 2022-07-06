import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#F2A649' : '#0460D9',
      },
      secondary: {
        main: darkMode ? '#F23005' : '#F23005',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          '&$selected': {
            borderRight: '4px solid #0460D9',
            fontWeight: '700',
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: '0px',
        },
        outlined: {
          backgroundColor: darkMode ? '#c197db15' : '#CCDCF1',
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
