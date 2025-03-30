import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const isAuthenticated = localStorage.getItem("token") !== null;

  // Simulate fetching posts from a backend (replace with actual API call)
  useEffect(() => {
    const fetchPosts = async () => {
      // Example static data; replace with API fetch
      const dummyPosts = [
        { id: 1, title: "How to use React hooks?", content: "I need help with useEffect...", user: "User1", replies: [] },
        { id: 2, title: "CSS Grid question", content: "How to align items?", user: "User2", replies: ["Use align-items: center;"] },
      ];
      setPosts(dummyPosts);
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please log in to post.");
      return;
    }
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        title: newPost.substring(0, 20) + "...", // Simple title extraction
        content: newPost,
        user: "CurrentUser", // Replace with actual user data
        replies: [],
      };
      setPosts([...posts, newPostObj]);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">Community</h1>

        {/* Post Form */}
        {isAuthenticated ? (
          <form onSubmit={handlePostSubmit} className="mb-8">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Ask a question or share something..."
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              rows="4"
            />
            <button
              type="submit"
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Post
            </button>
          </form>
        ) : (
          <p className="mb-8">
            Please <Link to="/login" className="text-purple-600 hover:underline">log in</Link> to post or reply.
          </p>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-white dark:bg-gray-800 rounded-md shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{post.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Posted by: {post.user}</p>
              {post.replies.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-sm font-medium">Replies:</h3>
                  {post.replies.map((reply, index) => (
                    <p key={index} className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                      - {reply}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}