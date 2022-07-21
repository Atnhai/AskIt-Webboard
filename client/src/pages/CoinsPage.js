import { Typography, Chip, TextField, InputAdornment } from '@material-ui/core';
import { useCoinsPageStyles } from '../styles/muiStyles';

const CoinsPage = () => {
  const classes = useCoinsPageStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.titleText} color="secondary">
        Coins
      </Typography>
      <Typography variant="body1">
        Coins is the main currency of our platform. When you have a good performance on AskIt, you will earn coins and be able to convert them to real money.
        Good performances means asking and answering useful questions. The coins are determined by how many people upvote on your post. This is a chart of how coins
        are calculated and how much you can convert into money.
      </Typography>
    </div>
  );
};

export default CoinsPage;
