import React, { Component } from 'react'
import MSTButton from './UIComponents/Buttons/Button';
class Login extends Component {
    render() {
        return (
            <div>
                Login

                <MSTButton title="Log In md reg" fontStyle='reguler' type={'Filled'} className="margin-auto" size={'md'} />
                <MSTButton title={"Log In md bold"} fontStyle={'bold'} type={'Filled'} className="margin-auto" size={'md'} />
                <MSTButton title={"Log In sm reg"} fontStyle={'reguler'} type={'Filled'} className="margin-auto" size={'sm'} />
                <MSTButton title={"Log In sm bold"} fontStyle={'bold'} type={'Filled'} className="margin-auto" size={'sm'} disabled />
                <MSTButton title={"Log In lg reg"} fontStyle={'reguler'} type={'Filled'} className="margin-auto" size={'lg'} />
                <MSTButton title={"Log In lg bold"} fontStyle={'bold'} type={'Filled'} className="margin-auto" size={'lg'} />
                <MSTButton title={"Log In md reg"} fontStyle={'reguler'} type={'Ghost'} className="margin-auto" size={'md'} />
                <MSTButton title={"Log In md reg"} fontStyle={'reguler'} type={'outline'} className="margin-auto" size={'md'} />
                <MSTButton title={"Log In md reg"} fontStyle={'bold'} type={'outline'} className="margin-auto" size={'md'} />
            
            </div> 
        )
    }
}

export default Login;