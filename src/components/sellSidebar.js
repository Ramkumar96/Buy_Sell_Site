import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const sellSidebar = (props) => {
  return (
    <div>
      {/* <p>List Based</p> */}
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Add product</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">My products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">My orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Edit profile</NavLink>
        </NavItem>
        
      </Nav>
      
    </div>
  );
}

export default sellSidebar;