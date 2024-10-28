"use client"

import React, { useRef, useState } from 'react'
import useMenuAnimation from './MenuAnimation'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'react-lottie-player'
import feedbackAnimation from '../public/feedback_ani.json'
import { createFeedbacks } from "@/libs/action";

interface Job {
  job: string;
}

const jobs: Job[] = [
  {job:"PM"},
  {job: "Web Design"},
  {job:"Web Publishing"},
  {job: "FE Development"},
  {job: "BE Development"},
  {job: "Cloud Infra"},
  {job: "직접입력"},
]

const FeedbackSection: React.FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [customJob, setCustomJob] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const handleJobSelect = (job: string) => {
    setSelectedJob(job);
    if (job !== '직접입력') {
      setCustomJob('');
    }
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('job', selectedJob === '직접입력' ? customJob : selectedJob);
    formData.append('feedback', feedbackText);
    setShowThankYou(true);
    try {
      const result = await createFeedbacks(formData);
      
      if (result.success) {
        setShowThankYou(true);
        // 3초 후 모달 닫고 폼 초기화
        setTimeout(() => {
          setShowThankYou(false);
          window.location.reload();
        }, 3000);
      } else {
        console.error('Failed to submit feedback:', result.error);
        // 에러 처리를 위한 상태 추가 필요
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // 에러 처리를 위한 상태 추가 필요
    }
  };

  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center p-4 relative'>
      <form 
        onSubmit={handleSubmit}
        ref={ref}
        action={async (FormData) => {
          ref.current?.reset();

          await createFeedbacks(FormData);
        }}
        className='w-full max-w-lg 2xl:max-w-3xl bg-white rounded-xl p-8 2xl:p-12 shadow-lg space-y-6 2xl:space-y-8'
      >
        <h1 className='text-3xl 2xl:text-5xl font-extralight text-center'>Feedback or Advice</h1>
        <p className='text-lg 2xl:text-2xl font-light text-center'>
          취업을 준비하는 제게 피드백,<br />
          혹은 조언의 말씀을 해주실 수 있나요? <br /> 
          짧은 내용이더라도 제겐 <br />
          크나큰 성장의 발판이 될 수 있습니다
        </p>
        
        <div className="space-y-4 2xl:space-y-6">
          <div className="space-y-2 2xl:space-y-4">
            <nav className="relative" ref={scope}>
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsOpen(!isOpen)}
                className='bg-gray-50 font-medium border rounded-lg px-4 py-2.5 2xl:px-6 2xl:py-4 text-sm 2xl:text-lg w-full flex items-center justify-between'
              >
                {selectedJob === '직접입력' ? (customJob || '직접 입력') : (selectedJob || '직종')}
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                  <svg width="15" height="15" viewBox="0 0 20 20" className="2xl:scale-125">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </div>
              </motion.button>
              <ul
                style={{
                  pointerEvents: isOpen ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                }}
                className='absolute z-10 w-full mt-2 flex flex-col bg-white rounded-lg py-2 2xl:py-4 shadow-lg'
              >
                {jobs.map((item) => (
                  <motion.button
                    type="button"
                    key={item.job}
                    onClick={() => handleJobSelect(item.job)}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    className={`px-4 py-2 2xl:px-6 2xl:py-3 text-sm 2xl:text-lg font-light text-left w-full ${
                      selectedJob === item.job ? 'bg-gray-100' : ''
                    }`}
                  >
                    {item.job}
                  </motion.button>
                ))}
              </ul>
            </nav>

            {selectedJob === '직접입력' && (
              <input
                type="text"
                value={customJob}
                onChange={(e) => setCustomJob(e.target.value)}
                placeholder="직종을 입력해주세요"
                className="w-full mt-2 p-2.5 2xl:p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm 2xl:text-lg"
              />
            )}
          </div>

          <div className="space-y-2 2xl:space-y-4">
            <label htmlFor="feedback" className="block text-sm 2xl:text-lg font-medium text-gray-700">
              피드백 내용
            </label>
            <textarea
              id="feedback"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full h-32 2xl:h-48 p-3 2xl:p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm 2xl:text-lg"
              placeholder="피드백을 입력해주세요"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className='w-full bg-blue-500 text-white font-medium rounded-lg px-4 py-2.5 2xl:px-6 2xl:py-4 text-sm 2xl:text-lg'
          disabled={!feedbackText || (!selectedJob || (selectedJob === '직접입력' && !customJob))}
        >
          Submit Feedback
        </motion.button>
      </form>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-white rounded-xl p-8 2xl:p-12 max-w-sm 2xl:max-w-lg w-full mx-4 flex flex-col items-center"
            >
              <Lottie 
                loop
                play
                animationData={feedbackAnimation}
                style={{ width: '100%', height: '100%', maxWidth: '320px', maxHeight: '320px' }}
                speed={1}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice'
                }}
              />
              <h2 className="text-2xl 2xl:text-4xl font-light text-center mt-4 2xl:mt-6">
                피드백 감사합니다🤩
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeedbackSection