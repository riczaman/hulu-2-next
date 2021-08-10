import Image from "next/image";
import HeaderItem from '../components/HeaderItem'; 
import { BadgeCheckIcon,
        CollectionIcon,
        HomeIcon,
        LightningBoltIcon,
        SearchIcon,
        UserIcon
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header>
            <div>
                <HeaderItem title="Home" Icon={HomeIcon}/>

                {/* Icons */}
            </div>
            <div>
                <Image src="https://links.papareact.com/ua6"
                    className="object-contain"
                    width={200} height={100}
                />
            </div>

        </header>
    )
}

export default Header
