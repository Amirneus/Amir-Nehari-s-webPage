import React from 'react'
import { Helmet } from 'react-helmet-async'
import Pages from './pages/index.jsx'
import { Toaster } from './components/ui/toaster'
import './App.css'

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
