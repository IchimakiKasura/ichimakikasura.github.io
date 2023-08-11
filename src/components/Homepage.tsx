import { isMobile } from '../main'
import BG_Astolfo from '../../Old2/Old/images/astolfo.png'
import BG_Hutao from '../../Old2/Old/images/hutao.png'
import BG_Akira from '../../Old2/Old/images/akira.png'
import BG_Venti from '../../Old2/Old/images/venti.png'

function Sections(id: string, header: string, content: string, background: string)
{
    return (
        <>
        <div id={id}>
            <section className="mainSection">
                <h1 data-unselect="" className="sectionTitle">{header}</h1>
                <div className="sectionContents">
                    <span className="display-2">{content}</span>
                </div>
                <img data-ismobile={isMobile} src={background} alt="sectionBackground"/>
            </section>
        </div>
        </>
    )
}

function Homepage()
{
    const sections: JSX.Element[] = [
        Sections("About","ABOUT","THIS SECTION IS \"ABOUT\"", BG_Hutao),
        Sections("Projects","PROJECTS","THIS SECTION IS \"PROJECTS\"", BG_Akira),
        Sections("Contact","CONTACT","THIS SECTION IS \"CONTACT\"", BG_Venti),
    ]

    return (
        <>
            <div className='position-fixed' style={
                    {
                        bottom: "2vh",
                        right: "1vw",
                        zIndex: "1"
                    }
                }>
                <button
                    onClick={()=>document.getElementById("Home")?.scrollIntoView()}
                    style={
                        {
                            height: "70px",
                            width:  "70px",
                            borderRadius: "50%"
                        }
                    }>
                    TEST<br/>BUTTON
                </button>
            </div>

            <div id="Home">
                <section className="mainSection">
                    <div className="sectionContents">
                        <h1 className="display-3">THIS WEBSITE IS UNDER CONSTRUCTION.</h1>
                        <p><a href='Old2/index.html'>Visit the old website</a></p>
                        <div className='position-absolute' style={{top: "85vh"}}>
                            <button
                                onClick={()=>document.getElementById("About")?.scrollIntoView()}
                                style={
                                    {
                                        height: "70px",
                                        width:  "70px",
                                        borderRadius: "50%"
                                    }
                                }>
                                TEST<br/>BUTTON
                            </button>
                        </div>
                    </div>
                    <img data-ismobile={isMobile} src={BG_Astolfo} alt="astolfo"/>
                </section>
            </div>

            {sections}

            <div id="Footer">
                <section className="footerSection justify-content-center align-items-center d-flex">
                    <p>Designed by <a href="https://github.com/IchimakiKasura" className="text-decoration-none">Ichimaki Kasura</a></p>
                </section>
            </div>
        </>
    )
}

export default Homepage