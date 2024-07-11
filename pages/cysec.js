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

const Cysec = ({ tools }) => {
  return (
    <div>
      <nav>
        <header> 
          <Link href="/">HAX</Link>
        </header>
      </nav>
      <div className='mt-20 lg:w-1/2 p-2 mx-auto'>
        <h1 className='font-bold text-3xl my-8'>Cybersecurity Tools</h1>
        <p>
          Welcome to my repository of cybersecurity tools. Here you will find about 69 programs designed to evaluate and improve the security of computer systems.</p>
          <br/>
          <h2 className='font-bold'>Why Share This?</h2> 
          <br/>
          <p>Because there is a growing attention about apps that may compromise our personal or financial data and, since property is a right and communities are periodically evolving to digitalized organizations such as servers or DAOs, more common sense about cybersecurity is important.</p>
          <p>This tools are intended to be used as a way of pasive or active defense at the time that every person may respond for their own acts and deserves to be true informed. This collection reveals the complex types of attacks that are usually done by cybersecurity experts for recovering data or take back control of a system.</p>
          <p>I open up this repo in order to fund further research on this matter as a humble coder based in Lima, Perú. If you like this content, feel free to check updates by my <Link href="#nostr" className='underline'>nostr</Link> or just direct <Link href="mailto:40230@pm.me" target='_blank' className='underline'>message me</Link>.</p>
          <p>Thanks for your time.</p>
        
        <p className='italic text-[#555] font-bold'>WARNING: Misuse of these tools may have serious legal consequences. Is strongly recommended to educate yourself on cysecs before using them. <Link href="https://security.ine.com/" target='_blank' className='underline'>Here</Link> are certified courses you can start on.
        </p>
      </div>
      <div className='grid visible -pt-10'>
        {tools.map((tool, index) => (
          <div key={index} className='border-[1px] border-[#333] rounded-md p-4 bg-[#111] hover:bg-[#f1f1f1] hover:text-black'>
            {tool.link ? (
              <Link href={tool.link} rel="noopener noreferrer" className='hover:underline'>
                <h2 className='py-2 px-2'>{tool.name}</h2>
              </Link>
            ) : (
              <h2 className='py-2 px-2'>{tool.name}</h2>
            )}
            <p className='text-[#555]'>{tool.description}</p>
            
            {tool.link ? (
              <Link href={tool.link} rel="noopener noreferrer" className='float-right'>
                <Image src="/arrow.svg" height={18} width={18} alt="View" className='hover:invert'></Image>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
      <IP/>
      <Footer/>
    </div>
  );
};

export default Cysec;
