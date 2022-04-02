import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <Image
                                src="/statics/images/logo/logo.svg"
                                alt="Logo"
                                width={40}
                                height={40}
                            />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/design">
                        <a>Design</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
