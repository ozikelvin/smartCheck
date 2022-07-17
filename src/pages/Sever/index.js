import { Select } from "antd";
import "antd/dist/antd.min.css";
import { HomeMainContainer , Search , SearchInput , HomeSearch } from "./server.styled";
import { BiSearch } from "react-icons/bi";



const Server = () =>{

    return (
       <div  style={{padding:'1.5rem 2rem'}} >

    <HomeMainContainer>
    <HomeSearch>
          <Search>
            <BiSearch className="search-icon" />
            <SearchInput placeholder="Enter a search keyword" />
          </Search>
          <Select defaultValue="Active status" />
         
        </HomeSearch>
    </HomeMainContainer>

       </div> 
    )
}

export default Server