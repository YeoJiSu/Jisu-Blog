import Header from './Header';
import Header2 from './Header2';
const Layout = ({children}) => (
    <div>
        <Header/>
        <Header2/>
        {children}
    </div>
);

export default Layout;