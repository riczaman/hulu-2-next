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
        <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="Collections" Icon={CollectionIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="Users" Icon={UserIcon}/>
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
