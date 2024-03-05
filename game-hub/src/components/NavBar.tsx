import { HStack, Image} from '@chakra-ui/react';
import game from '../assets/game.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch: (searchTerm: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={game} boxSize='60px'/>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch/>
    </HStack>
  )
}
export default NavBar;

