import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  const { cover_image, date, category, title, excerpt, author_image, author } =
    post.frontmatter;
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={cover_image}
        alt={title}
        height={420}
        width={600}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{date}</span>
        <div>{category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
        <div className="flex items center">
          <img
            src={author_image}
            alt={author}
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
          <h3 className="text-gray-700 font-bold">{author}</h3>
        </div>
      </div>
    </div>
  );
}