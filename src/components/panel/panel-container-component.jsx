import React from 'react';
import AddUser from '../add-user/add-user-component';
import Search from '../search/search-component';

export default function PanelContainer(){
    return(
        <div>
            <strong>panel control</strong>
            <AddUser/>
            <Search/>
        </div>
    )
        
    
};