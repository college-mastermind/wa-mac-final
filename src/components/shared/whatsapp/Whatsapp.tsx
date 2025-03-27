"use client"
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'

const WhatsappButton = styled.a`
  position: fixed;
  left: 20px;
  bottom: 20px;
  background-color: #800000;
  color: white
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #660000;
  }
`

export default function Whatsapp() {
  const phoneNumber = '+1234567890' 
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <WhatsappButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </WhatsappButton>
  )
}
