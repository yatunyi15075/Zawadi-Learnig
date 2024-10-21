// src/components/Forum.jsx
import React, { useState } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John",
      content: "Does anyone know the homework for Physics?",
      comments: [{ id: 1, content: "It's on page 45!" }],
    },
    {
      id: 2,
      author: "Sarah",
      content: "I am struggling with Calculus, any tips?",
      comments: [{ id: 2, content: "You can try Khan Academy!" }],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");

  // Function to handle adding new post
  const handleNewPost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, author: "You", content: newPost, comments: [] },
      ]);
      setNewPost("");
    }
  };

  // Function to handle adding new comment
  const handleNewComment = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { id: post.comments.length + 1, content: newComment }] }
        : post
    );
    setPosts(updatedPosts);
    setNewComment("");
  };

  // Leaderboard data (Hardcoded for example)
  const leaderboard = [
    { name: "Alex", booksRead: 10 },
    { name: "Emily", booksRead: 8 },
    { name: "Mason", booksRead: 6 },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full p-6">
      {/* Forum Section */}
      <div className="flex-1 lg:w-2/3">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Forum</h2>

        {/* Posts */}
        <div className="space-y-4 mb-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md p-4 rounded-lg transition hover:shadow-lg">
              <p className="font-bold">{post.author}</p>
              <p className="mb-2">{post.content}</p>

              {/* Comments */}
              <div className="ml-4 border-l-2 pl-4 border-gray-300">
                {post.comments.map((comment) => (
                  <p key={comment.id} className="text-sm text-gray-700">
                    - {comment.content}
                  </p>
                ))}
              </div>

              {/* Add Comment */}
              <div className="mt-2 flex items-center">
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border rounded p-2 mr-2 w-3/4 focus:outline-none focus:ring focus:ring-purple-300"
                />
                <button
                  onClick={() => handleNewComment(post.id)}
                  className="bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700 transition"
                >
                  Post
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Post */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Create New Post</h3>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write your post here..."
            className="w-full border rounded p-4 mb-2 focus:outline-none focus:ring focus:ring-purple-300"
            rows="3"
          />
          <button
            onClick={handleNewPost}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="flex-1 lg:w-1/3 lg:ml-12 mt-6 lg:mt-0">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Leaderboard</h2>
        <div className="bg-white shadow-md p-4 rounded-lg">
          {leaderboard.map((student, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p className="font-semibold">
                {index + 1}. {student.name}
              </p>
              <p>{student.booksRead} books read</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
