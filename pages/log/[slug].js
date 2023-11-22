// pages/log/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified'; // Use unified instead of remark
import markdown from 'remark-parse'; // Use remark-parse instead of remark
import Image from 'next/image';
import Link from 'next/link';
import remarkHtml from 'remark-html';

import LogPost from '../../components/post';

export default function LogPostPage({ content, formattedDate }) {
  return (
    <div className='mx-auto m-12 p-4 lg:w-1/2 sm:w-full'>
      <Link href="/log" id="next">
          <Image src="/arrow.svg" height="36" width="36" alt="this.out" />
        </Link>
      <p className='mb-12 font-bold'>{formattedDate}</p>
      <LogPost content={content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markdownContent = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf8'
  );

  const { content, data } = matter(markdownContent);

  const processedContent = await unified()
    .use(markdown)
    .use(remarkHtml)
    .process(content);
  
  const htmlContent = processedContent.toString();

  const date = new Date(data.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    props: {
      content: htmlContent,
      formattedDate,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
