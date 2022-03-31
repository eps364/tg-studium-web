export default function Home() {
    return (
        <div>
            <div>
                <h1>H1 - Titulo 1</h1>
                <h2>H2 - Titulo 2</h2>
                <h3>H3 - Subtitulo 1 </h3>
                <h4>H4 - Subtitulo 2 </h4>
                <h5>H5 - Corpo</h5>
                <h6>H6 - Span</h6>
            </div>
            <div>
                <button className="sucess">button</button>
                <br />
                <button className="warning">button</button>
                <br />
                <button className="error">button</button>
                <br />
                <button className="info">button</button>
                <br />
                <a>a</a>
                <p>p</p>
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                />
            </div>
        </div>
    )
}
