import 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import './components/Styles/customAttributes.css'
import './components/Styles/index.css'

import './components/Styles/sections/HomeSection.css'
import './components/Styles/sections/AboutSection.css'
import './components/Styles/sections/ProjectSection.css'
import './components/Styles/sections/ContactSection.css'
import './components/Styles/sections/FooterSection.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('main')!).render(<App/>)