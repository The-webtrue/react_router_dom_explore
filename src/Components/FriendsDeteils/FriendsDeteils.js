import React from 'react';
import { useLoaderData } from 'react-router-dom';


const FriendsDeteils = () => {
    const friendsData = useLoaderData();
    
    // console.log(friendsData.name);
    const boldStyle = {
        fontWeight: "800",
        color: 'red'
    }
   
    return (
        <div>
            <h3>Now Showing <span style={boldStyle}>{friendsData.name}</span> Deteils</h3>
            <div>
                <h2>Company : {friendsData.company.name} </h2>
                <h3>User name : {friendsData.username}</h3>
                <p>Email: {friendsData.email} </p>
                <p>Address : {friendsData.address.street}</p>
                <p>Phone :{friendsData.phone} </p>
            </div>
        </div>
    );
};

export default FriendsDeteils;