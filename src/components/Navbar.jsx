import '../App.css'

export default function Header({currentPage, handlePageChange}) {
    return (
        <nav>
            <a
                href="#Home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'home-link active' : 'Home-link'}
            >
                <h1>CLAİRE ECKSTRÖM</h1>
                <h1>CONSULTING</h1>
            </a>
        </nav>
    )
}