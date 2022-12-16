import Head from "next/head";
import Link from "next/link";

const firstPost = () => {
  return (
    <div>
      <Head>
        <title>最初の投稿だよ</title>
      </Head>

      <Link href="/">ホームへ戻る</Link>
    </div>
  );
};

export default firstPost;
