import {Header} from './header';
import {Footer} from './footer';
import { NavMenuModule } from './nav';

export const HeaderPag = ()=><Header/>;
export const FooterPag = ()=><Footer/>;
export const NavMenu = ({types})=><NavMenuModule types={types} />;

