import { HomeStyle, DivStyle } from './style'
import { Link } from 'react-router-dom';
import { NameEnablerInfo } from './../../providers/NameEnabler'
import CircularStatic from './../../components/CircularProgress'

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  const { isLoaded } = NameEnablerInfo();
  return (
    !isLoaded ?  (
      <DivStyle>
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <CircularProgress style={{'color': 'var(--color-third)', marginBottom: "20px"}}/>
          <Typography style={{color: 'var(--color-second)'}}>
            Loading...
          </Typography>
        </Box>
      </DivStyle>
    )
    : (
      <HomeStyle>
        <Link to="/dashboard">
          <button>welcome to codewarsKenzie!</button>
        </Link>
      </HomeStyle>
    )
  )
}

export default Home;