import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col">
      <Container>
        {posts.length === 0 ? (
          <div className="flex flex-wrap justify-between mb-12">
          {/* Description Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left p-4">
            <h1 className="text-6xl font-bold mb-4">Human</h1>
            <h2 className="text-5xl font-semibold mb-4">Stories & ideas</h2>
            <p className="text-3xl">A place to read, write, and deepen your understanding</p>
            <button className="bg-black text-white py-2 px-6 mt-4 rounded-md hover:bg-gray-900 focus:bg-gray-900 focus:outline-none">
              Start Reading
            </button>
            
          </div>
          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-end items-end p-4">
            <img src="/images/home-image.webp" alt="Descriptive Alt Text" className="max-w-full h-auto rounded-lg" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
        ) : (
          <div className="flex flex-wrap -mx-2">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )} 
      </Container>
    </div>
  );
}
