import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 px-12'>
            <h2 className='text-center text-4xl font-semibold mb-12'>Questions with Answers</h2>
            <article className='pb-12'>
                <h3 className='border-orange-500 border-b-4 mb-3 pb-2 w-1/2 text-2xl font-medium'>What are the difference between SQL and NOSQL?</h3>
                <p>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    <br />
                    There are five practical differences between SQL and NoSQL:
                    <br />
                    <li>Language</li>
                    <li>Scalability</li>
                    <li>Structure</li>
                    <li>Properties</li>
                    <li>Support and communities</li>
                    <br />
                    1. Language
                    SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                    <br />
                    2. Scalability
                    Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

                    SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                    NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                    Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
                    <br />
                    3. Structure
                    SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
                    <br />
                    4. Properties
                    At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:

                    Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
                    Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
                    Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
                    Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
                    <br />
                    5. Support and communities
                    SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                    NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.
                </p>
            </article>
            <article className='pb-12'>
                <h3 className='border-orange-500 border-b-4 mb-3 pb-2 w-1/2 text-2xl font-medium'>What is JWT? How does it work?</h3>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    <br />
                    Once decoded, you will get two JSON strings:
                    <br />
                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    <br />
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    <br />
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    <br />
                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </article>
            <article className='pb-12'>
                <h3 className='border-orange-500 border-b-4 mb-3 pb-2 w-1/2 text-2xl font-medium'>What is the difference between javascript and Node.js?</h3>
                <p>
                    1. NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                    2. JavaScript :
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    <br />
                    1.
                    Javascript is a programming language that is used for writing scripts on the website.




                    NodeJS is a Javascript runtime environment.
                    2.	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.
                    3.	It is basically used on the client-side.	It is mostly used on the server-side.
                    4.	Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags.
                    5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    6.	Javascript is used in frontend development.	Nodejs is used in server-side development.
                    7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.

                    8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    Nodejs is written in C, C++ and Javascript.
                </p>
            </article>
            <article className='pb-12'>
                <h3 className='border-orange-500 border-b-4 mb-3 pb-2 w-1/2 text-2xl font-medium'>How does node.js handle multiple requests at the same time?</h3>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    <br />
                    <br />
                    If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.

                    They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                </p>
            </article>

        </div>
    );
};

export default Blog;