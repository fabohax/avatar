'use server'
// components/LogPost.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

export default async function LogPost({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markdownContent = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf8'
  );

  const { content } = matter(markdownContent);
  const processedContent = await remark().use(remarkHtml).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      content: htmlContent,
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
