import reactLogo from '../assets/react-logo.png'

export default function NavBar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}