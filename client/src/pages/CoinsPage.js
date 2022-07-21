import { Typography, Chip, TextField, InputAdornment } from '@material-ui/core';
<<<<<<< HEAD
import { useCoinsPageStyles } from '../styles/muiStyles';
=======
import { useTagsPageStyles } from '../styles/muiStyles';
import SearchIcon from '@material-ui/icons/Search';
import './coin.css';
>>>>>>> 9ff32a6d5ef275b7d3dccaca7c2f41f14c08e3c6

const CoinsPage = () => {
  const classes = useCoinsPageStyles();

  const data2 = [
    { name: "1 upvote", coin: 10},
    { name: "1 downvote", coin: -2},
  ]

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
      <table>
        <tr>
          <th>Action</th>
          <th>Coin</th>
        </tr>
        {data2.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.coin}</td>
            </tr>
          )
        })}
      </table>
    </div>
    
  );
};

export default CoinsPage;
