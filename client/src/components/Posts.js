// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Container, Row, Col, Card } from "react-bootstrap";
// // import { Link } from "react-router-dom";

// // const Posts = ({ recipientId }) => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     const fetchPosts = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://127.0.0.1:5555/getpostsbyrecipient/${recipientId}`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //             },
// //           }
// //         );

// //         const postsCopy = [...response.data.posts];
// //         const sortedPosts = postsCopy.sort((a, b) => {
// //           return new Date(b.timestamp) - new Date(a.timestamp);
// //         });

// //         setPosts(sortedPosts);
// //       } catch (error) {
// //         console.error("Error fetching posts", error);
// //       }
// //     };

// //     fetchPosts();
// //   }, [recipientId]);

// //   return (
// //     <Container>
// //       <h2>Posts</h2>
// //       <Row>
// //         {posts.map((post) => (
// //           <Col key={post.id} xs={12} md={4} className="mb-3">
// //             <Card>
// //               <Card.Img
// //                 variant="top"
// //                 src={post.content_image}
// //                 alt="Post Image"
// //                 style={{ objectFit: "cover", height: "200px" }}
// //               />
// //               <Card.Body>
// //                 <Card.Text style={{ margin: "0", padding: "0" }}>
// //                   {post.content_text}
// //                 </Card.Text>
// //                 <Card.Text style={{ margin: "0", padding: "0" }}>
// //                   Posted by{" "}
// //                   <Link to={`/profile/${post.author.id}`}>
// //                     {post.author.username}
// //                   </Link>
// //                 </Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Posts;
// //with logo
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PostedBy from "./PostedBy.png";
// // Placeholder image URL
// const placeholderImageUrl = PostedBy;

// const Posts = ({ recipientId }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:5555/getpostsbyrecipient/${recipientId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//             },
//           }
//         );

//         const postsCopy = [...response.data.posts];
//         const sortedPosts = postsCopy.sort((a, b) => {
//           return new Date(b.timestamp) - new Date(a.timestamp);
//         });

//         setPosts(sortedPosts);
//       } catch (error) {
//         console.error("Error fetching posts", error);
//       }
//     };

//     fetchPosts();
//   }, [recipientId]);

//   return (
//     <Container>
//       <h2>Posts</h2>
//       <Row>
//         {posts.map((post) => (
//           <Col key={post.id} xs={12} md={4} className="mb-3">
//             <Card>
//               {post.content_image ? (
//                 <Card.Img
//                   variant="top"
//                   src={post.content_image}
//                   alt="Post Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               ) : (
//                 <Card.Img
//                   variant="top"
//                   src={placeholderImageUrl}
//                   alt="Placeholder Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               )}
//               <Card.Body>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   {post.content_text}
//                 </Card.Text>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   Posted by{" "}
//                   <Link to={`/profile/${post.author.id}`}>
//                     {post.author.username}
//                   </Link>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Posts;

//with comments posting

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PostComment from "./PostComment";
// import PostedBy from "./PostedBy.png";

// // Placeholder image URL
// const placeholderImageUrl = PostedBy;

// const Posts = ({ recipientId, isAuthenticated }) => {
//   const [posts, setPosts] = useState([]);
//   const [showCommentForm, setShowCommentForm] = useState(false);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:5555/getpostsbyrecipient/${recipientId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//             },
//           }
//         );

//         const postsCopy = [...response.data.posts];
//         const sortedPosts = postsCopy.sort((a, b) => {
//           return new Date(b.timestamp) - new Date(a.timestamp);
//         });

//         setPosts(sortedPosts);
//       } catch (error) {
//         console.error("Error fetching posts", error);
//       }
//     };

//     fetchPosts();
//   }, [recipientId]);

//   const handleCommentButtonClick = (postId) => {
//     setShowCommentForm(!showCommentForm);
//     setSelectedPostId(postId);
//   };

//   return (
//     <Container>
//       <h2>Posts</h2>
//       <Row>
//         {posts.map((post) => (
//           <Col key={post.id} xs={12} md={4} className="mb-3">
//             <Card>
//               {post.content_image ? (
//                 <Card.Img
//                   variant="top"
//                   src={post.content_image}
//                   alt="Post Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               ) : (
//                 <Card.Img
//                   variant="top"
//                   src={placeholderImageUrl}
//                   alt="Placeholder Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               )}
//               <Card.Body>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   {post.content_text}
//                 </Card.Text>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   Posted by{" "}
//                   <Link to={`/profile/${post.author.id}`}>
//                     {post.author.username}
//                   </Link>
//                 </Card.Text>

//                 {isAuthenticated && (
//                   <Button
//                     variant="primary"
//                     onClick={() => handleCommentButtonClick(post.id)}
//                   >
//                     Comment
//                   </Button>
//                 )}

//                 {showCommentForm && selectedPostId === post.id && (
//                   <PostComment
//                     post_id={post.id}
//                     isAuthenticated={isAuthenticated}
//                   />
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Posts;

//with comments get

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PostComment from "./PostComment";
// import PostedBy from "./PostedBy.png";

// // Placeholder image URL
// const placeholderImageUrl = PostedBy;

// const Posts = ({ recipientId, isAuthenticated }) => {
//   const [posts, setPosts] = useState([]);
//   const [comments, setComments] = useState({}); // State to store comments for each post
//   const [showCommentForm, setShowCommentForm] = useState(false);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:5555/getpostsbyrecipient/${recipientId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//             },
//           }
//         );

//         const postsCopy = [...response.data.posts];
//         const sortedPosts = postsCopy.sort(
//           (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
//         );

//         const commentsData = {};

//         for (const post of sortedPosts) {
//           try {
//             const commentsResponse = await axios.get(
//               `http://127.0.0.1:5555/getcomments/${post.id}`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${localStorage.getItem(
//                     "access_token"
//                   )}`,
//                 },
//               }
//             );

//             // Reverse the comments once and store in the state
//             commentsData[post.id] = commentsResponse.data.comments.reverse();
//           } catch (error) {
//             console.error(
//               `Error fetching comments for post ${post.id}:`,
//               error
//             );
//           }
//         }

//         setPosts(sortedPosts);
//         setComments(commentsData);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, [recipientId]);

//   const handleCommentButtonClick = (postId) => {
//     setShowCommentForm(!showCommentForm);
//     setSelectedPostId(postId);
//   };

//   return (
//     <Container>
//       <h2>Posts</h2>
//       <Row>
//         {posts.map((post) => (
//           <Col key={post.id} xs={12} md={4} className="mb-3">
//             <Card>
//               {post.content_image ? (
//                 <Card.Img
//                   variant="top"
//                   src={post.content_image}
//                   alt="Post Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               ) : (
//                 <Card.Img
//                   variant="top"
//                   src={placeholderImageUrl}
//                   alt="Placeholder Image"
//                   style={{ objectFit: "cover", height: "200px" }}
//                 />
//               )}
//               <Card.Body>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   {post.content_text}
//                 </Card.Text>
//                 <Card.Text style={{ margin: "0", padding: "0" }}>
//                   {post.author && (
//                     <>
//                       Posted by{" "}
//                       <Link to={`/profile/${post.author.id}`}>
//                         {post.author.username}
//                       </Link>
//                     </>
//                   )}
//                 </Card.Text>

//                 {isAuthenticated && (
//                   <Button
//                     variant="primary"
//                     onClick={() => handleCommentButtonClick(post.id)}
//                   >
//                     Comment
//                   </Button>
//                 )}

//                 {showCommentForm && selectedPostId === post.id && (
//                   <PostComment
//                     post_id={post.id}
//                     isAuthenticated={isAuthenticated}
//                   />
//                 )}

//                 {/* Display comments for the current post */}
//                 {comments[post.id] &&
//                   comments[post.id].map((comment) => (
//                     <div key={comment.id}>
//                       <p>{comment.content}</p>
//                       <p>
//                         Comment by{" "}
//                         {comment.user ? comment.user.username : "Unknown User"}
//                       </p>
//                     </div>
//                   ))}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Posts;

//with refresh comment
// Posts.js

// Posts.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import PostComment from "./PostComment";
import Comment from "./Comment";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostedBy from "./PostedBy.png";
import "./styling.css";

const placeholderImageUrl = PostedBy;

const Posts = ({ recipientId, isAuthenticated }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchPostsAndComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5555/getpostsbyrecipient/${recipientId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const postsCopy = [...response.data.posts];
        const sortedPosts = postsCopy.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        const commentsData = {};
        for (const post of sortedPosts) {
          const commentsResponse = await axios.get(
            `http://127.0.0.1:5555/getcomments/${post.id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );
          commentsData[post.id] = commentsResponse.data.comments.reverse();
        }

        setPosts(sortedPosts);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPostsAndComments();
  }, [recipientId]);

  const handleCommentSubmit = async (postId) => {
    try {
      const commentsResponse = await axios.get(
        `http://127.0.0.1:5555/getcomments/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setComments((prevComments) => ({
        ...prevComments,
        [postId]: commentsResponse.data.comments.reverse(),
      }));
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error);
    }
  };

  const handleCommentButtonClick = (postId) => {
    setShowCommentForm(!showCommentForm);
    setSelectedPostId(postId);
  };

  return (
    <Container>
      <h2>Posts</h2>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={4} className="mb-3">
            <Card>
              {post.content_image ? (
                <Card.Img
                  variant="top"
                  src={post.content_image}
                  alt="Post Image"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={placeholderImageUrl}
                  alt="Placeholder Image"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              )}
              {/* adjusts size of post text area */}
              <Card.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
                <Card.Text style={{ margin: "0", padding: "0" }}>
                  {post.content_text}
                </Card.Text>
                <Card.Text style={{ margin: "0", padding: "0" }}>
                  {post.author && (
                    <>
                      Posted by{" "}
                      <Link to={`/profile/${post.author.id}`}>
                        {post.author.username}
                      </Link>
                    </>
                  )}
                </Card.Text>
                <br />
                <p>Comments:</p>

                {/* Display comments using the Comment component */}
                <div
                  className="scrollComment"
                  style={{ maxHeight: "100px", overflowY: "auto" }}
                >
                  {comments[post.id] &&
                    comments[post.id].map((comment) => (
                      <Comment
                        key={comment.id}
                        content={comment.content}
                        user={comment.user}
                      />
                    ))}
                </div>
                <br />
                {isAuthenticated && (
                  <Button
                    variant="primary"
                    onClick={() => handleCommentButtonClick(post.id)}
                  >
                    Comment
                  </Button>
                )}

                {showCommentForm && selectedPostId === post.id && (
                  <PostComment
                    post_id={post.id}
                    isAuthenticated={isAuthenticated}
                    onCommentSubmit={handleCommentSubmit}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
