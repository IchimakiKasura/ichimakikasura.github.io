import { isMobile } from '../main'

function Profile()
{
    return (
    <div className={`${!isMobile ? "col" : ""}`}>
        <a href="https://github.com/IchimakiKasura">
            <img className="pfp" src="https://avatars.githubusercontent.com/u/80595346?v=4%253F" alt="profile picture"/>
        </a>
    </div>
    )
}


function NavButton(ButtonContent: string)
{
    return (
        <button className="navbtn btn-lg btn-block"
            onClick={
                ()=>document.getElementById(ButtonContent)?.scrollIntoView()
            }>
            {ButtonContent}
        </button>
    )
}

function NavBar()
{
    const NavButtons = [
        NavButton("About"),
        NavButton("Projects"),
        NavButton("Contact"),
    ]

    return (    
    <nav id="navbar" className="navbar justify-content-center fixed-top">
        <Profile/>
        <div className={`navbar-brand position-absolute mx-0 ${isMobile ? "d-none" : ""}`}>
          {NavButtons}
        </div>
    </nav>
    );
}

export default NavBar