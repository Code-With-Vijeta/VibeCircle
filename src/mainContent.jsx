import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile,
  X,
  Edit,
  Trash2,
  CornerDownRight,
} from "lucide-react";
import moment from "moment";

const MainContent = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Diana",
      dp: "./images/diana_dp.jpg",
      content: "Enjoying the little things 🌸✨",
      media: "./images/aesthetic-post.webp",
      type: "image",
      likes: 12,
      comments: [
        { id: 1, user: "Tia", text: "So pretty!", liked: false, replies: [] },
        {
          id: 2,
          user: "Aria",
          text: "Love this 🌸",
          liked: false,
          replies: [],
        },
        {
          id: 3,
          user: "Mira",
          text: "Beautiful vibe!",
          liked: false,
          replies: [],
        },
      ],
      shares: 3,
      saved: false,
      timestamp: moment().subtract(2, "hours").toISOString(),
    },
    {
      id: 2,
      user: "Ayaan",
      dp: "./images/ayan_dp.jpg",
      content: "The waves, the breeze, the sunset... pure therapy 🌅",
      media: "./images/sunset.mp4",
      type: "video",
      likes: 57,
      comments: [
        { id: 1, user: "Diana", text: "Wow!", liked: false, replies: [] },
        {
          id: 2,
          user: "Mira",
          text: "So peaceful 💛",
          liked: false,
          replies: [],
        },
        {
          id: 3,
          user: "Sophia",
          text: "Nature at its best 🌊",
          liked: false,
          replies: [],
        },
      ],
      shares: 10,
      saved: false,
      timestamp: moment().subtract(5, "hours").toISOString(),
    },
    {
      id: 3,
      user: "Tannu",
      dp: "./images/tannu_dp.jpg",
      content: "There’s a kind of peace that doesn’t come from perfection 🌸",
      likes: 16,
      comments: [
        {
          id: 1,
          user: "Ayaan",
          text: "Perfect words 🌸",
          liked: false,
          replies: [],
        },
        {
          id: 2,
          user: "Sophia",
          text: "So calming 💖",
          liked: false,
          replies: [],
        },
      ],
      shares: 6,
      saved: false,
      timestamp: moment().subtract(1, "hours").toISOString(),
    },
    {
      id: 4,
      user: "Mira",
      dp: "./images/mira_dp.jpg",
      content: "Lost in nature, finding peace 🌿",
      media: "./images/nature-post.jpeg",
      type: "image",
      likes: 45,
      comments: [
        {
          id: 1,
          user: "Diana",
          text: "Love this 🌸",
          liked: false,
          replies: [],
        },
        {
          id: 2,
          user: "Ayaan",
          text: "Truly mesmerizing 🌿",
          liked: false,
          replies: [],
        },
      ],
      shares: 1,
      saved: false,
      timestamp: moment().subtract(2, "hours").toISOString(),
    },
    {
      id: 5,
      user: "Sophia",
      dp: "./images/sophia_dp.jpg",
      content: "Coffee and conversations ☕🖤",
      media: "./images/cafe-post.webp",
      type: "image",
      likes: 27,
      comments: [
        {
          id: 1,
          user: "Tannu",
          text: "Like this 🌸",
          liked: false,
          replies: [],
        },
        {
          id: 2,
          user: "Mira",
          text: "Coffee vibes! ☕",
          liked: false,
          replies: [],
        },
      ],
      shares: 8,
      saved: false,
      timestamp: moment().subtract(6, "hours").toISOString(),
    },
    {
      id: 6,
      user: "Aria",
      dp: "./images/aria_dp.jpg",
      content: "Wander often, wonder always 🧭✨",
      media: [
        "./images/travel1.jpeg",
        "./images/travel2.webp",
        "./images/travel3.webp",
        "./images/travel4.jpeg",
      ],
      type: "gallery",
      likes: 42,
      comments: [
        {
          id: 1,
          user: "Sophia",
          text: "Such a dreamy collection 💫",
          liked: false,
          replies: [],
        },
        {
          id: 2,
          user: "Diana",
          text: "Wanderlust vibes ✨",
          liked: false,
          replies: [],
        },
      ],
      shares: 7,
      saved: false,
      timestamp: moment().subtract(1, "day").toISOString(),
    },
  ]);

  const [newPost, setNewPost] = useState({ content: "", file: null });
  const [storyModal, setStoryModal] = useState(null);
  const [stories, setStories] = useState([
    { id: 1, user: "Diana", media: "./images/diana_dp.jpg" },
    { id: 2, user: "Ayaan", media: "./images/ayan_dp.jpg" },
    { id: 3, user: "Tannu", media: "./images/tannu_dp.jpg" },
    { id: 4, user: "Mira", media: "./images/mira_dp.jpg" },
    { id: 5, user: "Sophia", media: "./images/sophia_dp.jpg" },
    { id: 6, user: "Aria", media: "./images/aria_dp.jpg" },
  ]);

  const [typing, setTyping] = useState(false);
  const [editingComment, setEditingComment] = useState({
    postId: null,
    commentId: null,
    replyId: null,
  });
  const [commentDrafts, setCommentDrafts] = useState({});
  const [replyDrafts, setReplyDrafts] = useState({});
  const storyTimerRef = useRef(null);

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.likes + (post.liked ? -1 : 1),
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const handleSave = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const handleComment = (id, text) => {
    if (!text.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  user: "You",
                  text,
                  liked: false,
                  replies: [],
                },
              ],
            }
          : post
      )
    );
    setCommentDrafts((prev) => ({ ...prev, [id]: "" }));
  };

  const handleCommentLike = (postId, commentId, replyId = null) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const updatedComments = post.comments.map((comment) => {
          if (comment.id === commentId) {
            if (replyId === null) {
              return { ...comment, liked: !comment.liked };
            } else {
              const updatedReplies = comment.replies.map((reply) =>
                reply.id === replyId ? { ...reply, liked: !reply.liked } : reply
              );
              return { ...comment, replies: updatedReplies };
            }
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      })
    );
  };

  const handleCommentDelete = (postId, commentId, replyId = null) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const updatedComments = post.comments
          .map((comment) => {
            if (comment.id === commentId && replyId) {
              const updatedReplies = comment.replies.filter(
                (r) => r.id !== replyId
              );
              return { ...comment, replies: updatedReplies };
            }
            return comment;
          })
          .filter((comment) => replyId || comment.id !== commentId);
        return { ...post, comments: updatedComments };
      })
    );
  };

  const handleCommentReply = (postId, commentId, text) => {
    if (!text.trim()) return;
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const updatedComments = post.comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { id: Date.now(), user: "You", text, liked: false },
                ],
              }
            : comment
        );
        return { ...post, comments: updatedComments };
      })
    );
    setReplyDrafts((prev) => ({ ...prev, [commentId]: "" }));
  };

  const handleCommentEdit = (postId, commentId, replyId, newText) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const updatedComments = post.comments.map((comment) => {
          if (comment.id === commentId) {
            if (replyId) {
              const updatedReplies = comment.replies.map((reply) =>
                reply.id === replyId ? { ...reply, text: newText } : reply
              );
              return { ...comment, replies: updatedReplies };
            } else {
              return { ...comment, text: newText };
            }
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      })
    );
    setEditingComment({ postId: null, commentId: null, replyId: null });
  };

  const handleAddStory = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setStories([{ id: Date.now(), user: "You", media: url }, ...stories]);
    }
  };

  const openStory = (story) => {
    setStoryModal(story);
    if (storyTimerRef.current) clearTimeout(storyTimerRef.current);
    storyTimerRef.current = setTimeout(() => setStoryModal(null), 2000);
  };

  useEffect(() => () => clearTimeout(storyTimerRef.current), []);

  return (
    <div className="w-full mx-auto p-4 mt-5 space-y-6">
      <div className="flex items-center space-x-4 overflow-x-auto">
        <label className="cursor-pointer">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center text-2xl font-bold">
            +
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleAddStory}
          />
        </label>
        {stories.map((story) => (
          <img
            key={story.id}
            src={story.media}
            onClick={() => openStory(story)}
            className="w-16 h-16 rounded-full border-3 border-pink-400 dark:border-pink-600 object-cover cursor-pointer"
          />
        ))}
      </div>

      {storyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-sm w-full">
            <img src={storyModal.media} className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setStoryModal(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 dark:bg-gray-800"
            >
              <X />
            </button>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 relative">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-2 border rounded mb-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setNewPost({ ...newPost, file: e.target.files[0] })}
        />
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded dark:bg-blue-600 absolute bottom-[10px] right-[17px]"
          onClick={() => {
            if (newPost.content || newPost.file) {
              const fileType = newPost.file?.type.includes("video")
                ? "video"
                : "image";
              const newPostObj = {
                id: Date.now(),
                user: "Vijeta Nehra",
                dp: "./images/dp.webp",
                content: newPost.content,
                media: newPost.file ? URL.createObjectURL(newPost.file) : "",
                type: fileType,
                likes: 0,
                comments: [],
                shares: 0,
                saved: false,
                timestamp: new Date().toISOString(),
              };
              setPosts([newPostObj, ...posts]);
              setNewPost({ content: "", file: null });
            }
          }}
        >
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <img src={post.dp} className="w-8 h-8 rounded-full" />
            <div className="font-bold text-black dark:text-white">
              {post.user}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
              {moment(post.timestamp).fromNow()}
            </div>
          </div>
          <div className="text-black dark:text-white">{post.content}</div>
          {post.type === "image" && (
            <img
              src={post.media}
              className="w-full h-200 object-cover rounded"
            />
          )}
          {post.type === "video" && (
            <video
              src={post.media}
              controls
              autoPlay
              muted
              className="w-full rounded"
            />
          )}
          {post.type === "gallery" && (
            <div className="grid grid-cols-2 gap-2">
              {post.media.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-80 object-cover rounded"
                />
              ))}
            </div>
          )}

          <div className="flex justify-between mt-2">
            <div className="flex items-center space-x-2">
              <Heart
                className={`cursor-pointer ${post.liked ? "text-red-500" : ""}`}
                onClick={() => handleLike(post.id)}
              />
              <MessageCircle />
              <Send
                onClick={() => (shareModalRef.current = post.id)}
                className="cursor-pointer"
              />
            </div>
            <Bookmark
              onClick={() => handleSave(post.id)}
              className={`cursor-pointer transition-colors duration-200 ${
                post.saved ? "text-blue-500" : "text-gray-500"
              }`}
              title={post.saved ? "Unsave" : "Save"}
              aria-label={post.saved ? "Unsave post" : "Save post"}
            />
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            {post.likes} likes • {post.comments.length} comments • {post.shares}{" "}
            shares
          </div>

          <div className="space-y-2">
            {post.comments.map((comment) => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold text-black dark:text-white">
                  {comment.user}:
                </span>
                {editingComment.postId === post.id &&
                editingComment.commentId === comment.id &&
                !editingComment.replyId ? (
                  <input
                    className="border p-1 rounded dark:bg-gray-900 dark:text-white"
                    defaultValue={comment.text}
                    onBlur={(e) =>
                      handleCommentEdit(
                        post.id,
                        comment.id,
                        null,
                        e.target.value
                      )
                    }
                  />
                ) : (
                  <span className="text-black dark:text-white">
                    {" "}
                    {comment.text}
                  </span>
                )}
                <div className="text-xs flex space-x-2 ml-6">
                  <button
                    onClick={() => handleCommentLike(post.id, comment.id)}
                  >
                    ♥ {comment.liked ? "Unlike" : "Like"}
                  </button>
                  <button
                    onClick={() =>
                      setEditingComment({
                        postId: post.id,
                        commentId: comment.id,
                        replyId: null,
                      })
                    }
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => handleCommentDelete(post.id, comment.id)}
                  >
                    🗑
                  </button>
                  <button
                    onClick={() =>
                      setReplyDrafts((prev) => ({ ...prev, [comment.id]: "" }))
                    }
                  >
                    ↪
                  </button>
                </div>
                {comment.replies &&
                  comment.replies.map((reply) => (
                    <div key={reply.id} className="ml-4 text-xs">
                      <span className="font-semibold text-black dark:text-white">
                        {reply.user}:
                      </span>
                      {editingComment.postId === post.id &&
                      editingComment.commentId === comment.id &&
                      editingComment.replyId === reply.id ? (
                        <input
                          className="border p-1 rounded dark:bg-gray-900 dark:text-white"
                          defaultValue={reply.text}
                          onBlur={(e) =>
                            handleCommentEdit(
                              post.id,
                              comment.id,
                              reply.id,
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        <span className="text-black dark:text-white">
                          {" "}
                          {reply.text}
                        </span>
                      )}
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            handleCommentLike(post.id, comment.id, reply.id)
                          }
                        >
                          ♥ {reply.liked ? "Unlike" : "Like"}
                        </button>
                        <button
                          onClick={() =>
                            setEditingComment({
                              postId: post.id,
                              commentId: comment.id,
                              replyId: reply.id,
                            })
                          }
                        >
                          ✎
                        </button>
                        <button
                          onClick={() =>
                            handleCommentDelete(post.id, comment.id, reply.id)
                          }
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))}
                <div className="flex items-center">
                  <CornerDownRight size={12} />
                  <input
                    placeholder="Reply..."
                    className="ml-1 border rounded p-1 text-xs dark:bg-gray-900 dark:text-white"
                    value={replyDrafts[comment.id] || ""}
                    onChange={(e) =>
                      setReplyDrafts((prev) => ({
                        ...prev,
                        [comment.id]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleCommentReply(
                        post.id,
                        comment.id,
                        replyDrafts[comment.id]
                      )
                    }
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center mt-2">
              <Smile className="mr-1" />
              <input
                placeholder={typing ? "Typing..." : "Add a comment..."}
                onFocus={() => setTyping(true)}
                onBlur={() => setTyping(false)}
                value={commentDrafts[post.id] || ""}
                onChange={(e) =>
                  setCommentDrafts((prev) => ({
                    ...prev,
                    [post.id]: e.target.value,
                  }))
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleComment(post.id, commentDrafts[post.id])
                }
                className="flex-1 p-1 border rounded dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
