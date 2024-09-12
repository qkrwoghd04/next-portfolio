"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import awsIcon from "./icon/aws.png";
import javaIcon from "./icon/java.png";
import pythonIcon from "./icon/python.png";
import dockerIcon from "./icon/docker.png";
import reactIcon from "./icon/react.png";
import nodejsIcon from "./icon/nodejs.png";
import tfIcon from "./icon/tensorflow.png";
import hsIcon from "./icon/html-css.png";
import myIcon from "./icon/mysql.png";
import springIcon from "./icon/spring.png";

// 기술 스택 데이터
const techStack = [
  { name: 'JAVA', icon: javaIcon },
  { name: 'PYTHON', icon: pythonIcon },
  { name: 'Spring', icon: springIcon },
  { name: 'HTML/CSS', icon: hsIcon },
  { name: 'MySQL', icon: myIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'TensorFlow', icon: tfIcon },
  { name: 'Docker', icon: dockerIcon },
];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, []);

  return (
    <section
      id="techStack"
      ref={techRef}
      className={`py-20 bg-white dark:bg-gray-800 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">WHAT HAVE I WORKED WITH</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-center font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}