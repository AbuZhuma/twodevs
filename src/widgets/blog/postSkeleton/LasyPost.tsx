// components/LazyPost.tsx
import { useEffect, useState, useRef } from 'react';
import { PostSkeleton } from './PostSkeleton';
import OnePost from '../OnePos/OnePost';
import { INews } from '../../../pages/blog/api';

interface LazyPostProps {
  postData:INews;
}

export const LazyPost = ({ postData }: LazyPostProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px', 
        threshold: 0.01,
      }
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);

  return (
    <div ref={postRef}>
      {isVisible ? (
        <OnePost
          title={postData.title}
          date={postData.date}
          author={postData.author}
          description={postData.description}
          changelog={postData.changelog}
        />
      ) : (
        <PostSkeleton />
      )}
    </div>
  );
};