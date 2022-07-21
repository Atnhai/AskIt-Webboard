import { useLocation, Link as RouterLink } from 'react-router-dom';

import { MenuItem, useMediaQuery, Divider, Grid } from '@material-ui/core';
import { useMenuStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const DesktopNavMenu = () => {
  const { pathname } = useLocation();
  const classes = useMenuStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  if (isMobile) return null;

  return (
    <Grid item>
      <div className={classes.rootPanel}>
        <div className={classes.list}>
          <MenuItem
            selected={
              pathname === '/' ||
              (!pathname.startsWith('/tag') && !pathname.startsWith('/user') && !pathname.startsWith('/coin'))
            }
            component={RouterLink}
            to="/"
          >
            <PublicIcon className={classes.menuIcon} />
            Ask It
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/tag')}
            component={RouterLink}
            to="/tags"
          >
            <LocalOfferIcon className={classes.menuIcon} />
            Tags
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/user')}
            component={RouterLink}
            to="/users"
          >
            <PeopleIcon className={classes.menuIcon} />
            Users
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/coin')}
            component={RouterLink}
            to="/coins"
          >
            <MonetizationOnIcon className={classes.menuIcon} />
            Coins
          </MenuItem>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
    </Grid>
  );
};

export default DesktopNavMenu;
