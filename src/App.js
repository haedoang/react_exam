import React from 'react'

import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';

class App extends React.Component{


    render(){
        return(
            <>
                <LoginPage/>
                <MainPage/>
            </>
        )
    }
}

export default App;