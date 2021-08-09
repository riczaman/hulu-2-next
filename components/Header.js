import Image from "next/image";

const Header = () => {
    return (
        <header>
            <h1>Hulu 2.0</h1>   
            {/* Icons */}
            <Image src="https://links.papareact.com/ua6"
            width={200} height={100}
            />
            {/* hulu logo */}
        </header>
    )
}

export default Header
