function Sections(id: string, header: string, content: string, color: string)
{
    const classes = `vh-100 ${color}`

    return (
        <div id={id}>
            <section className={classes}>
                <h1 className="sectionHeader">{header}</h1>
                <div className="sectionContents">
                    <span className="display-2">{content}</span>
                </div>
            </section>
        </div>
    )
}

function Homepage()
{
    const sections = [
        Sections("About","ABOUT","THIS SECTION IS \"ABOUT\"","bg-danger"),
        Sections("Projects","PROJECTS","THIS SECTION IS \"PROJECTS\"","bg-secondary"),
        Sections("Contact","CONTACT","THIS SECTION IS \"CONTACT\"","bg-info"),
    ]

    return (
        <>
            <div id="Home">
                <section className="vh-100">
                    <div className="vh-100 justify-content-center align-items-center d-flex">
                        <h1 className="display-3">THIS WEBSITE IS UNDER CONSTRUCTION.</h1>
                    </div>
                </section>
            </div>

            {sections}

            <div id="Home">
                <section className="vh-50">
                    <div className="vh-50 justify-content-center align-items-center d-flex">
                        <h1 className="display-5">
                            THIS IS A FOOTER
                        </h1>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Homepage