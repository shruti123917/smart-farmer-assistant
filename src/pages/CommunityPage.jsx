import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { communityPosts } from "../data/mockData";

function CommunityPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <Card className="space-y-4">
          <h1 className="text-3xl font-semibold text-ink dark:text-white">Community Feed</h1>
          <Input as="textarea" rows={4} placeholder="Share an update, question, or field observation..." />
          <Button>Create Post</Button>
        </Card>

        {communityPosts.map((post) => (
          <Card key={post.id} className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-ink dark:text-white">{post.author}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">{post.role} • {post.time}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{post.topic}</span>
            </div>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{post.content}</p>
            <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-300">
              <span>{post.likes} Likes</span>
              <span>{post.comments} Comments</span>
              <span>Share</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <Card className="space-y-3">
          <h3 className="section-title">Trending Topics</h3>
          {["Soybean Rust", "Onion Price Watch", "Organic Sprays", "Monsoon Irrigation"].map((topic) => (
            <div key={topic} className="rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800">{topic}</div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default CommunityPage;
