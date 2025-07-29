import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  FileText,
  Users,
  Mail,
  ArrowLeft
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-white overflow-x-hidden font-[Newsreader,_Noto_Sans,_sans-serif]">
      {/* Header */}
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="flex items-center justify-start">
            <Link to={`/home`} className="flex h-12 cursor-pointer items-center justify-center rounded-xl bg-transparent text-[#111811] gap-2 text-base font-bold p-0">
              <ArrowLeft size={24} />
            </Link>
          </div>
          <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            AyurLife
          </h2>
          
        </div>

        {/* Banner */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCisunr2GSOcQk6Z7yvkIlz16msZR4fHN6AWM247meooRJ7OIVYHxHjTn9WsbgoiXETwk2XulyQx2KhfAVSiADXlkvd4bfWiWKgpM-jsFX4husa-yTc0d64sgb5Db-nGuDyq0uzTLFMri4rwuYfzTVtq8ObrklXB0zcCn5V2qUNBCbxClp1esgFRNofwiIdMtJnJ38iKjuLdMjJCpPfANf-smoWHKODtt5_4XANwpLyDSHfNPsKFuJ8TLRj9xocFByY6C-m0Xm-SIr')",
              }}
            />
          </div>
        </div>

        {/* Mission */}
        <h1 className="text-[#111811] text-[22px] font-bold px-4 pb-3 pt-5">Our Mission</h1>
        <p className="text-[#111811] text-base font-normal pb-3 pt-1 px-4">
          At AyurLife, we are dedicated to promoting holistic health and wellness through the ancient wisdom of Ayurveda. Our mission is to provide accessible, reliable, and practical information that empowers individuals to achieve balance and harmony in their lives. We believe in the power of natural healing and personalized care, and we strive to guide our readers on their journey to optimal well-being.
        </p>

        {/* Team - Dr. Anya */}
        <h1 className="text-[#111811] text-[22px] font-bold px-4 pb-3 pt-5">Meet the Team</h1>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full min-h-32 w-32 aspect-square"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuCj8E-Y7Nutc9AkLvnIf1laufaHscvEQKYWrKCBgPGgIjpOJnWk_FzntApKWHRJyTA1CQNKidtY_18iSm4GgXGBGSWrVpz_P0NE7Pz09mmmMavxj3OE_kUj8Phvxqgw-du2dE_lmjxNGCXLyDWGPMnnyYQhkPPAvOJsyGP1OiVo8AOTXxETXKR02-RTB2tEpnz_G-po7Gg5Vbufut7KWPTFSMPkp7wRKREMY4YRE8H57VzOOtoI5U0H5ykQNXx3D6U1zdMxsuOi_z')",
                }}
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#111811] text-[22px] font-bold">Dr. Anya Sharma</p>
                <p className="text-[#638863] text-base">Ayurvedic Practitioner</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#111811] text-base font-normal pb-3 pt-1 px-4">
          Dr. Sharma is a certified Ayurvedic practitioner with over 10 years of experience. Her expertise lies in creating personalized wellness plans that integrate diet, lifestyle, and herbal remedies.
        </p>

        {/* Team - Rajesh */}
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full min-h-32 w-32 aspect-square"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-tRb7TIOqejKM5ioKR0nQMW8Bp7GWa7Tvhp1PC6zjvL3rSWoldvNivVGLrlIlZRQwW_j2Ckm89Ckw29-Pb_SiD_LmuP4jO7svjFFxHLNY8NG87eQDCv0F8YPEr5yDtm5CqLSU8h_eNMQsqYNac2JnV6WktE5xVCFzrXfnXbF0BfSjy-3MlArJFbOxlRxwhsbmZqt0iOKE2kCbkE2-paHpkdxddCyI9uYPMrN1byQNpUjd0NWfRQGEFIlAuVBg93cyLbEaBlXwHCjO')",
                }}
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#111811] text-[22px] font-bold">Rajesh Kapoor</p>
                <p className="text-[#638863] text-base">Wellness Coach</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#111811] text-base font-normal pb-3 pt-1 px-4">
          Rajesh is a certified wellness coach specializing in Ayurvedic principles. He focuses on helping individuals incorporate Ayurvedic practices into their daily routines for sustainable health improvements.
        </p>
      </div>

      {/* Footer */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f4f0] bg-white px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center gap-1 text-[#638863]" href="#">
            <Home size={24} />
            <p className="text-xs font-medium">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center gap-1 text-[#638863]" href="#">
            <FileText size={24} />
            <p className="text-xs font-medium">Articles</p>
          </a>
          <a className="flex flex-1 flex-col items-center gap-1 text-[#111811]" href="#">
            <Users size={24} />
            <p className="text-xs font-medium">About</p>
          </a>
          <a className="flex flex-1 flex-col items-center gap-1 text-[#638863]" href="#">
            <Mail size={24} />
            <p className="text-xs font-medium">Contact</p>
          </a>
        </div>
        <div className="h-5 bg-white" />
      </div>
    </div>
  );
};

export default AboutUs;
