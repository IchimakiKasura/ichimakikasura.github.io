function Sections(id: string, header: string, content: string, color: string)
{
    const classes = `navbarPadding ${color}`

    return (
        <div id={id}>
            <section className={classes}>
                <h1>{header}</h1>
                <div>{content}</div>
            </section>
        </div>
    )
}

function Homepage()
{
    const sections = [
        Sections("About","ABOUT","THIS SECTION IS ABOUT","bg-danger"),
        Sections("Projects","PROJECTS","THIS SECTION IS PROJECTS","bg-secondary"),
        Sections("Contact","CONTACT","THIS SECTION IS CONTACT","bg-info"),
    ]

    return (
        <>
            <div id="Home">
                <section className="navbarPadding">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        THIS WEBSITE IS UNDER CONSTRUCTION.
                    </div>
                </section>
            </div>

            {sections}
        </>
    )
}

export default Homepage