import { getPostById } from "@/utlis/api";
import { PostType } from "@/utlis/types";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post: PostType = await getPostById(id);

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <p>id:{post.id}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">By {post.author} · {post.createdAt}</p>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
    );
}
