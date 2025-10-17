export function Header() {
    return (
        <header
            className="bg-[#4d4d4d] text-center text-white py-4 md:flex md:justify-between"
        >
            <h3>📘ESCOLA DE INFORMÁTICA💻</h3>
            <nav>
                <a href="#">Home</a>
                <a href="/pages/curso_html.html">Curso HTML</a>
                <a href="#">Curso CSS</a>
                <a href="#">Curso JS</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}