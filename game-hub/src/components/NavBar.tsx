import { HStack, Image} from '@chakra-ui/react';
import game from '../assets/game.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={game} boxSize='60px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}
export default NavBar;

