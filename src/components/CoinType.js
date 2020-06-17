import React from 'react';

// APIから取得したcoin名を分岐処理にて表記を変更する処理
const CoinType = ({ coin }) => {
  switch (coin.product_code) {
    case 'BTC_JPY':
      return (coin.product_code = 'BTC');
      break;
  }

  return <span>{coin.product_code}</span>;
};

export default CoinType;
