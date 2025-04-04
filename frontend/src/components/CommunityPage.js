// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function CommunityPage() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState("");
//   const isAuthenticated = localStorage.getItem("token") !== null;

//   // Simulate fetching posts from a backend (replace with actual API call)
//   useEffect(() => {
//     const fetchPosts = async () => {
//       // Example static data; replace with API fetch
//       const dummyPosts = [
//         { id: 1, title: "How to use React hooks?", content: "I need help with useEffect...", user: "User1", replies: [] },
//         { id: 2, title: "CSS Grid question", content: "How to align items?", user: "User2", replies: ["Use align-items: center;"] },
//       ];
//       setPosts(dummyPosts);
//     };
//     fetchPosts();
//   }, []);

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     if (!isAuthenticated) {
//       alert("Please log in to post.");
//       return;
//     }
//     if (newPost.trim()) {
//       const newPostObj = {
//         id: posts.length + 1,
//         title: newPost.substring(0, 20) + "...", // Simple title extraction
//         content: newPost,
//         user: "CurrentUser", // Replace with actual user data
//         replies: [],
//       };
//       setPosts([...posts, newPostObj]);
//       setNewPost("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <div className="max-w-4xl mx-auto py-6 px-4">
//         <h1 className="text-3xl font-bold mb-6">Community</h1>

//         {/* Post Form */}
//         {isAuthenticated ? (
//           <form onSubmit={handlePostSubmit} className="mb-8">
//             <textarea
//               value={newPost}
//               onChange={(e) => setNewPost(e.target.value)}
//               placeholder="Ask a question or share something..."
//               className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//               rows="4"
//             />
//             <button
//               type="submit"
//               className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
//             >
//               Post
//             </button>
//           </form>
//         ) : (
//           <p className="mb-8">
//             Please <Link to="/login" className="text-purple-600 hover:underline">log in</Link> to post or reply.
//           </p>
//         )}

//         {/* Posts List */}
//         <div className="space-y-6">
//           {posts.map((post) => (
//             <div key={post.id} className="p-4 bg-white dark:bg-gray-800 rounded-md shadow">
//               <h2 className="text-xl font-semibold">{post.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300">{post.content}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">Posted by: {post.user}</p>
//               {post.replies.length > 0 && (
//                 <div className="mt-2">
//                   <h3 className="text-sm font-medium">Replies:</h3>
//                   {post.replies.map((reply, index) => (
//                     <p key={index} className="text-sm text-gray-600 dark:text-gray-300 ml-2">
//                       - {reply}
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiUser, FiSend, FiLogIn } from "react-icons/fi";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isAuthenticated = localStorage.getItem("token") !== null;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API loading delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const dummyPosts = [
          { 
            id: 1, 
            title: "How to use React hooks effectively?", 
            content: "I'm struggling with useEffect dependencies. Any best practices?", 
            user: "ReactDev42", 
            timestamp: "2 hours ago",
            replies: [
              { id: 1, content: "Always include all dependencies that are used inside the effect.", user: "HooksMaster", timestamp: "1 hour ago" }
            ] 
          },
          { 
            id: 2, 
            title: "CSS Grid vs Flexbox", 
            content: "When should I use Grid over Flexbox for layouts?", 
            user: "FrontendNewbie", 
            timestamp: "5 hours ago",
            replies: [
              { id: 1, content: "Grid is for 2D layouts, Flexbox is for 1D. Use Grid when you need rows AND columns.", user: "CSSWizard", timestamp: "3 hours ago" },
              { id: 2, content: "I recommend this great guide: css-tricks.com/snippets/css/complete-guide-grid", user: "DesignGuru", timestamp: "2 hours ago" }
            ] 
          },
        ];
        setPosts(dummyPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please log in to post.");
      return;
    }
    if (newPost.trim()) {
      setIsSubmitting(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newPostObj = {
        id: posts.length + 1,
        title: newPost.substring(0, 30) + (newPost.length > 30 ? "..." : ""),
        content: newPost,
        user: "You",
        timestamp: "Just now",
        replies: [],
      };
      
      setPosts([newPostObj, ...posts]);
      setNewPost("");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Community Forum
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <FiMessageSquare className="text-purple-600" />
            <span>{posts.length} {posts.length === 1 ? 'discussion' : 'discussions'}</span>
          </div>
        </motion.div>

        {/* Post Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          {isAuthenticated ? (
            <form onSubmit={handlePostSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Ask a question or share something with the community..."
                  className="w-full p-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !newPost.trim()}
                  className={`absolute right-3 bottom-3 p-2 rounded-full ${isSubmitting || !newPost.trim() ? 'bg-gray-300 dark:bg-gray-600 text-gray-500' : 'bg-purple-600 text-white hover:bg-purple-700'} transition-colors duration-200`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FiSend className="text-lg" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Tip: Be specific with your questions for better responses.
              </p>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiLogIn className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <p>
                  <span className="font-medium">Join the conversation!</span> Please{" "}
                  <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                    log in
                  </Link>{" "}
                  to post or reply.
                </p>
              </div>
              <Link 
                to="/login" 
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <span>Sign In</span>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Posts List */}
        <div className="space-y-6">
          <AnimatePresence>
            {posts.length > 0 ? (
              posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <FiUser className="text-lg" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                          {post.title}
                        </h2>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.timestamp}</span>
                      </div>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">{post.content}</p>
                      <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>Posted by {post.user}</span>
                        <span className="mx-2">•</span>
                        <span>{post.replies.length} {post.replies.length === 1 ? 'reply' : 'replies'}</span>
                      </div>

                      {/* Replies */}
                      {post.replies.length > 0 && (
                        <div className="mt-4 space-y-3 pl-4 border-l-2 border-purple-200 dark:border-purple-900/50">
                          {post.replies.map((reply) => (
                            <div key={reply.id} className="pt-3 first:pt-0 group">
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                                    <FiUser className="text-sm" />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                      {reply.user}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{reply.timestamp}</span>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{reply.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                  <FiMessageSquare className="text-purple-600 dark:text-purple-400 text-3xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  No discussions yet
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Be the first to start a conversation! Share your questions or insights with the community.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
