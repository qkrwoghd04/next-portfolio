"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+82) 010 3360 4104",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "qkrwoghd0@naver.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "서울시 마포구 큰우물로 76",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">피드백</h3>
              <p className="text-white/60">JAEHONG PARK . 에 대한 피드백 주시면 감사하겠습니다
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="성별" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>성별</SelectLabel>
                      <SelectItem value="man">남</SelectItem>
                      <SelectItem value="woman">여</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input type="분야" placeholder="분야 ex) UX/UI Designer" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="JAEHONG PAKR . 평가" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>평가</SelectLabel>
                    <SelectItem value="one">1</SelectItem>
                    <SelectItem value="two">2</SelectItem>
                    <SelectItem value="three">3</SelectItem>
                    <SelectItem value="four">4</SelectItem>
                    <SelectItem value="five">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;