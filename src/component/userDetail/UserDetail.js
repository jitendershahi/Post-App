import React from 'react';
import './UserDetail.css'

const UserDetail = (props) => {
    const {name,email,phone,username,website,company} = props
    // var obj = {
    //     name:props.name,
    //     email:props.email,
    //     username:props.username,
    //     phone:props.phone,
    //     website:props.website,
    // }
    // const items = Object.keys(obj).map((item) => {
    //     return (<li key={item}>
    //      <span>{item}</span>:{obj[item]}
    //      </li> );
    //   });

    // const orderIngredients = Object.keys(this.props.ingredients)
    // .map((el) => {
    //     return (
    //     <li key={el}>
    //         <span style={style}>{el}</span>: {this.props.ingredients[el]}
    //    </li>
    //    )
    // })

    if(company){
        var comAdress = Object.keys(company)
        .map((el) => {
        return (
        <li key={el}>
         <span>{el}</span>: {company[el]}
        </li>
        )
    })
    }
    
    return (
        <div className="post">
            <ul>
                {/* {items} */}
                <li>Name : {name}</li>
                <li>Email : {email}</li>
                <li>Phone : {phone}</li>
                <li>Username : {username}</li>
                <li>Website : {website}</li>
            </ul>
            <ul>
                {comAdress}
            </ul>
            {/* <ul>
                {userAdress}
            </ul> */}
        </div>
    );
};

export default UserDetail;