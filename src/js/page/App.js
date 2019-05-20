import React from 'react';
import { Header, TextArea } from 'semantic-ui-react';


class App extends Comment{
    render(){
        return (
            <div>
                <div className="headerSandbox">
                    <Header size='hugo'>
                        SANDBOX (Возвращаюсь в проекты)))
                    </Header>
                </div>
                <div className="editor">
                    <TextArea rows={35} placeholder='Tell us more' />
                </div>
            </div>
        );
    }
}

export default App;
