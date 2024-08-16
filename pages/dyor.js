// pages/cysec.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import IP from '@/components/ip';
import Footer from '@/components/footer';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'cysec.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const tools = JSON.parse(jsonData);

  return {
    props: {
      tools
    }
  };
}

const Dyor = ({ tools }) => {
  return (
    <div>
      <nav>
        <header> 
          <Link href="/">HAX</Link>
        </header>
      </nav>
      <div className='mt-20 lg:w-1/2 p-2 mx-auto mb-20'>
        <h1 className='font-bold text-3xl'>DYOR: Do Your Own Research</h1>
        <p className='italic'>Here you'll find a list of Blockchain Projects I endorse and encourage people to invest based on my own research since late 2018.</p>
        <p>I hope you'll find it useful and make your searchs about it because there is no insurance that you really gonna get so much gains or not gonna lose. For me it's highly probable that you'll earn a lot just by studyng what is all that about. Don't be a fokin moron and depend of those but just keep eyes close on what's currently a technological revolution that'll shift your mind about whats really the current financial system and how thousands of individuals and hundreds organizations are giving their lifes to develop. Take note that it's just a game and there are winners and losers. If you wanna win: keep building and preaching of what we as humankind can do to go to the next level.</p>
        <p>The System is Bro/ken and Must Be Replaced.</p>
        <li>
            Bitcoin: First Top Secure Longest Chain
        </li>
        <li>
          Bitcoin Cash: Bitcoin Fork Exploration for faster cheaper transactions
        </li>
        <li>
          Cardano: Pioneer Peer Reviewed Chain for Automated Contracts
        </li>
        <li>
          Chainlink: Highly Developed Chain to base Oracles and Interoperability
        </li>
        <li>
          
            Ethereum: Pioneer Chain Evolving to 2.0. Highly Popular among Developers
          
        </li>
        <li>
          Filecoin: IPFS-based Chain supporting the next generation of DApps
        </li>
        <li>
          Kaspa: DAG-based POW Chain easy to Mine
        </li>
        <li>Monero: Privacy-focused Coin. Popular for Mining</li>
        <li>
          Near: User-Developer Friendly using Sharding. Low Fees
        </li>
        <li>
          Optimism: Layer-2 Chain based on Ethereum. Optimistic Rollups - Zk Tech
        </li>
        <li>
          Solana: Proof of History Chain highly scalable
        </li>
        <li>
          The Open Network: Telegram-based Coin fastly adopted
        </li>
        <li>
          Worldcoin: Biometric Authentication System
        </li>
      </div>
      <IP/>
      <Footer/>
    </div>
  );
};

export default Dyor;
