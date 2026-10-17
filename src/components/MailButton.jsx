import { useState, useEffect, useRef } from "react"
import { IoMail } from "react-icons/io5"
import { FaClipboard } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"
import { email } from "../data/portfolioData"

const MailButton = ({ size = 30 }) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const popupRef = useRef(null)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)

    setTimeout(() => setCopied(false), 1500)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={popupRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Email"
        className="iconlink cursor-pointer"
      >
        <IoMail size={size} />
      </button>

      {open && (
        <div className=" absolute left-1/2 top-full -translate-x-1/2 mt-2 bg-surface shadow-lg rounded-xl p-3">
          <div className="flex items-center ">
            <span className="">{email}</span>
            <button
              onClick={handleCopy}
              aria-label="Copy Email"
              className=" text-fg p-1 ml-3 rounded-md hover:text-fg-muted cursor-pointer"
            >
              {copied ? (
                <FaClipboardCheck size={20} />
              ) : (
                <FaClipboard size={20} />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MailButton
