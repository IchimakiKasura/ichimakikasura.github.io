import 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import './components/Styles/customAttributes.css'
import './components/Styles/index.css'

import './components/Styles/PageSections/HomeSection.css'
import './components/Styles/PageSections/AboutSection.css'
import './components/Styles/PageSections/ProjectSection.css'
import './components/Styles/PageSections/ContactSection.css'
import './components/Styles/PageSections/FooterSection.css'

import App from './App'

export const isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function SetBG_POS()
{
    const BackgroundImages = document.querySelectorAll("[data-ismobile]");

    BackgroundImages.forEach(e => {
        const isMobile: boolean = JSON.parse(e.attributes.getNamedItem("data-ismobile")?.value as string);
        if(isMobile)
        {
            (e as HTMLElement).style.bottom = "40vh";
        }
    });
}

document.addEventListener("readystatechange", SetBG_POS)

ReactDOM.createRoot(document.getElementById('main')!).render(<App/>)