function Sections(id: string, header: string, content: string, background: string)
{
    const imageSource = `Old2/Old/images/${background}.png`

    return (
        <div id={id}>
            <section className="mainSection">
                <h1 data-unselect="" className="sectionTitle">{header}</h1>
                <div className="sectionContents">
                    <span className="display-2">{content}</span>
                </div>
                <img src={imageSource} alt={background}/>
            </section>
        </div>
    )
}

function Homepage()
{
    const sections: JSX.Element[] = [
        Sections("About","ABOUT","THIS SECTION IS \"ABOUT\"", "hutao"),
        Sections("Projects","PROJECTS","THIS SECTION IS \"PROJECTS\"", "akira"),
        Sections("Contact","CONTACT","THIS SECTION IS \"CONTACT\"", "venti"),
    ]

    return (
        <>
            <div id="Home">
                <section className="mainSection">
                    <div className="vh-100 justify-content-center align-items-center d-flex">
                        <h1 className="display-3">THIS WEBSITE IS UNDER CONSTRUCTION.</h1>
                    </div>
                    <img src="Old2\Old\images\astolfo.png" alt="astolfo"/>
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