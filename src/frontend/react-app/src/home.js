import React from 'react';

class Home extends React.Component{
    render () {
        return (
            <div>
                <h1>This is the home page!</h1>
                <p>Api port on localhost:81</p>
                <p>Website on default prot 80</p>
                <p>Everything is ran through nginx proxy</p>
            </div>
        );
    }
}

export { Home };