import {getAllPosts} from "@/utlis/api";
import { PostType } from "@/utlis/types";

export default async function Home() {
  const posts: PostType[] = await getAllPosts();
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nest.js Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: PostType) => (
          <li className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow" key={post.id}>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.author}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}
