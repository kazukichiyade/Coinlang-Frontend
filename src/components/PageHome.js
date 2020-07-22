import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CoinType from '../components/CoinType';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const CARD = styled(Card)`
  height: 300px;
`;

const Coin = styled.div`
  margin-top: 60px;
  margin-left: 30px;
  max-width: 220px;
  height: 500px;
`;

const Name = styled.div`
  text-align: center;
  font-size: 25px;
`;

const BID = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ASK = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LTP = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  font-size: 10px;
`;

const Row = styled.div`
  display: flex;
  flex: row;
`;

const Home = () => {
  const [bitCoin, setBitCoin] = useState([]);

  useEffect(() => {
    console.log('Effect');
    axios.get('http://localhost:9000').then((response) => {
      console.log(response.data);
      setBitCoin(response.data);
    });
  }, []);

  return (
    <div>
      {/* <StyledButton>
        <Link to="/">Coinlang</Link>
      </StyledButton>
      <StyledButton>
        <Link to="/login">LOGIN</Link>
      </StyledButton> */}
      {/* Coin名表示 */}
      <Coin>
        <CARD>
          <CardActionArea>
            {/* <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            /> */}
            <CardContent>
              <Name>
                <CoinType coin={bitCoin} />
              </Name>
              <Row>
                <BID>
                  <span>BID(売)</span>
                  <span>{bitCoin.best_bid}</span>
                </BID>
                <LTP>
                  <span>LTP</span>
                  <span>{bitCoin.ltp}</span>
                </LTP>
                <ASK>
                  <span>ASK(買)</span>
                  <span>{bitCoin.best_ask}</span>
                </ASK>
              </Row>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CARD>
        {/* <span> 時間 {bitCoin.timestamp}</span> */}
      </Coin>
    </div>
  );
};

export default Home;
