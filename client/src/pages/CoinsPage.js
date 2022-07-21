import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TAGS } from '../graphql/queries';
import { Link as RouterLink } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useStateContext } from '../context/state';
import { getErrorMsg } from '../utils/helperFuncs';
import { Typography, Chip, TextField, InputAdornment } from '@material-ui/core';
import { useTagsPageStyles } from '../styles/muiStyles';
import SearchIcon from '@material-ui/icons/Search';
import './coin.css';

const CoinsPage = () => {
  const { notify } = useStateContext();
  const { data, loading } = useQuery(GET_ALL_TAGS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });

  const [filterInput, setFilterInput] = useState('');
  const classes = useTagsPageStyles();

  const data2 = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
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
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data2.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
    
  );
};

export default CoinsPage;
