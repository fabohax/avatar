// lib/fetchPrices.js
import axios from 'axios';

export const fetchPrices = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash,monero,ethereum,solana,cardano,chainlink,worldcoin-wld,near,the-open-network,optimism,kaspa&vs_currencies=usd'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency prices:', error);
    return null;
  }
};
