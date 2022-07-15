import React, {useState} from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import {LayoutWrapper} from './layout.styled'


const Layout = ({children}) => {
    const [menu, setMenu] = useState(false);
    return (
        <LayoutWrapper>
            <Header menu={menu} setMenu={setMenu}/>
            <Navbar menu={menu}/>
            {children}
            
        </LayoutWrapper>
    )
}

const WithLayout = (Component) => {
    return (props) => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }
  }

export default WithLayout