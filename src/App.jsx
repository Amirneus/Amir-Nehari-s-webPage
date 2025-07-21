import React from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import Pages from '@/pages/index.jsx'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
      <Helmet>
        <title>Dr. Amir Nehari – Leadership Training & Organizational Psychology</title>
        <meta name="description" content="Dr. Amir Nehari – Psychologist, Leadership Trainer, Group Facilitator based in Israel." />
        <link rel="alternate" hreflang="he" href="https://www.amirnehari.com/Home-he" />
      </Helmet>

      <Pages />
      <Toaster />
    </>
  )
}

export default App
