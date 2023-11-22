// pages/log/index.js
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../utils/markdownUtils';

export default function LogIndex({ posts }) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  );

  const cyDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
  
    // Add a leading zero to the month and day if they are less than 10.
    const month_ = month < 10 ? `0${month}` : month;
    const day_ = day < 10 ? `0${day}` : day;
  
    const year_ = String(year).substring(2);
  
    return `${year_}${month_}${day_}`;
  };
  
  return (
    <div>
      <nav>
        <header>
          <Link href="/">Fabo Hax</Link>
        </header>
        <Link href="/sites" id="next">
          <Image src="/arrow.svg" height="36" width="36" alt="this.out" />
        </Link>
      </nav>
      <main className="flex mx-auto mt-24 ml-4">
        <ul>
          {sortedPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/log/${post.slug}`} className="hover:bg-white">
                <span className='text-zinc-600'>{cyDate(new Date(post.frontMatter.date))}</span>&nbsp;
                {post.frontMatter.title}
              </Link>
            </li>
          ))}
          <br></br>
          <span className='text-zinc-600'>911119</span>&nbsp;
          <Link href="/ego" className="hover:bg-white">ego</Link>
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => ({
    ...post,
    frontMatter: {
      ...post.frontMatter,
      date: new Date(post.frontMatter.date).toISOString(),
    },
  }));

  return {
    props: {
      posts,
    },
  };
}
