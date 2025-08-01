
import {
  Mail,
  Share2,
  Twitter,
  Instagram,
  Facebook,
  Home,
  Newspaper,
  Soup,
  Contact2,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <Link to={`/home`} className="text-[#111811] flex size-12 shrink-0 items-center">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-[#111811] text-lg font-bold flex-1 text-center pr-12">AyurLife</h2>
        </div>

        {/* Title & Description */}
        <h2 className="text-[#111811] text-[28px] font-bold text-center px-4 pb-3 pt-5">Contact Us</h2>
        <p className="text-[#111811] text-base text-center px-4 pb-3 pt-1">
          We'd love to hear from you! Whether you have questions, feedback, or just want to connect, please reach out using the form below or our contact information.
        </p>

        {/* Contact Form */}
        {["Your Name", "Your Email"].map((placeholder, index) => (
          <div key={index} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder={placeholder}
                className="form-input w-full resize-none rounded-xl text-[#111811] focus:outline-0 border border-[#dce5dc] bg-white h-14 placeholder:text-[#638863] p-[15px] text-base"
              />
            </label>
          </div>
        ))}

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Your Message"
              className="form-input w-full resize-none rounded-xl text-[#111811] focus:outline-0 border border-[#dce5dc] bg-white min-h-36 placeholder:text-[#638863] p-[15px] text-base"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex px-4 py-3 justify-center">
          <button className="min-w-[84px] max-w-[480px] rounded-xl h-10 px-4 bg-[#14b714] text-white text-sm font-bold">
            <span className="truncate">Send Message</span>
          </button>
        </div>

        {/* Contact Info */}
        <h3 className="text-[#111811] text-lg font-bold px-4 pb-2 pt-4">Contact Information</h3>
        <div className="flex items-center gap-4 bg-white px-4 min-h-14">
          <div className="flex items-center justify-center rounded-lg bg-[#f0f4f0] size-10">
            <Mail className="text-[#111811]" size={24} />
          </div>
          <p className="text-[#111811] text-base flex-1 truncate">Email: support@ayurlife.com</p>
        </div>

        <div className="flex items-center gap-4 bg-white px-4 min-h-14">
          <div className="flex items-center justify-center rounded-lg bg-[#f0f4f0] size-10">
            <Share2 className="text-[#111811]" size={24} />
          </div>
          <p className="text-[#111811] text-base flex-1 truncate">Follow us on social media</p>
        </div>

        {/* Social Icons */}
        <div className="@container">
          <div className="gap-2 px-4 grid-cols-[repeat(auto-fit, minmax(80px,_1fr))] grid">
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white py-2.5 text-center">
                <div className="rounded-full bg-[#f0f4f0] p-2.5">
                  <Icon className="text-[#111811]" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f4f0] bg-white px-4 pb-3 pt-2">
          {[
            { label: 'Home', icon: Home },
            { label: 'Articles', icon: Newspaper },
            { label: 'Recipes', icon: Soup },
            { label: 'Contact', icon: Contact2 },
          ].map(({ label, icon: Icon }, index) => (
            <a
              key={index}
              href="#"
              className={`flex flex-1 flex-col items-center justify-end gap-1 ${
                label === 'Contact' ? 'text-[#111811]' : 'text-[#638863]'
              }`}
            >
              <Icon size={24} />
              <p className="text-xs font-medium tracking-[0.015em]">{label}</p>
            </a>
          ))}
        </div>
        <div className="h-5 bg-white" />
      </div>
    </div>
  );
};

export default ContactUs;
