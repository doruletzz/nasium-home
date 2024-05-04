import Link from "next/link";
import { formatDate, getArticlePosts } from "./utils";
import { Card } from "@/components";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  let allArticles = getArticlePosts();

  return (
    <section className="min-h-screen w-full px-4 lg:px-12 md:px-12 sm:px-8 flex flex-col mx-auto pb-24 pt-20 md:pt-32 bg-gray-950">
      <div className="mx-auto">
        <h1 className="font-display text-2xl mb-8 tracking-tighter">
          All Articles
        </h1>
        {allArticles
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Card
              component={Link}
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 p-6 rounded-xl"
              href={`/article/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
