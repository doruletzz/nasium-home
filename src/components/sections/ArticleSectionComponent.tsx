import Image from "next/image";
import { Card } from "..";
import Link from "next/link";

const ArticleSectionComponent = ({
  articles,
}: {
  articles: {
    slug: string;
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  return (
    <section
      id="articles"
      className=" xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12  flex gap-2 flex-col my-24"
    >
      <h2 className="text-3xl font-display">Our Templates, Explained</h2>
      <p className="text-gray-500 mb-12 text-sm max-w-lg leading-normal">
        Train smart by planning your workouts. Choose your split and get started
        with your workout right away. We&apos;ve provided some of the most
        popular and used splits and explained them for you.
      </p>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        {articles.map(({ title, slug, description, image }) => (
          <Card
            key={title}
            component={Link}
            href={slug}
            className="overflow-hidden group flex w-full flex-col gap-2 sm:p-8 p-6 pb-0 sm:pb-0"
          >
            <span className="font-display">{title}</span>
            <p className="text-xs leading-normal text-gray-500 mb-8">
              {description}
            </p>
            <Image
              src={image}
              alt={title}
              width={230}
              height={290}
              className="translate-y-3 shadow-xl group-hover:translate-y-0.5 transition-transform duration-700 ease-in-out-expo mt-auto rounded-t-2xl mx-auto object-cover max-h-[18rem] border border-gray-600"
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArticleSectionComponent;
