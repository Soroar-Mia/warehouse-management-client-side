import React from 'react';

const Blogs = () => {
    return (
        <div className='container pt-10'>
            <div>
                <h3>What are the difference between javascript and Nodejs? </h3>
                <p>JavaScrip is a simple programming language where Node Js is a Javascript run time environment. JavaScript can runs in any browser JavaScript Engine. Nodejs does not have capability to add HTML tags where javascript have the capability to add, remove and create HTML tags. The main difference is Javascript is used in frontend development and Nodejs is used in server-side development. </p>
            </div>
            <br />
            <div>
                <h3>Differences between sql and nosql databases. </h3>
                <p>SQL database are vertically scalable and NOSQL data base are horizontally scalable. Nosql database are document wheres Sql database are table based. Sql databases have fixed or static. Nosql database are pure dynamic. Sql databases are best suited for complex queries and Nosql databases are not so good for complex queries </p>
            </div>
            <br />
            <div>
                <h3>What is the purpose of jwt and how does it work? </h3>
                <p>JWT stands for JSON WEB TOKEN, jwt is an open standard used to share security information between two parties client and server. JWT can be used for an authentication system and can also be used for information exchange. The token is mainly composed of header, payload, signature speared by three dots. JWT defines the structure of information we are sending from one party to the another. The approach is mainly used to transfer the data through the network with each request and response. </p>
            </div>
        </div>
    );
};

export default Blogs;