import { HStack, Image} from '@chakra-ui/react';
import react from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={react} boxSize='60px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}
export default NavBar;

