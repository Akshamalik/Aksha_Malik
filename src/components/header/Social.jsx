import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
    </div>
  )
}

export default Social