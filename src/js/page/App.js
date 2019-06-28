import React from 'react';
import { Header } from 'semantic-ui-react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';


class App extends React.Component{
    render(){
        return (
            <div>
                <div className="headerSandbox">
                    <Header size='huge'>
                        SANDBOX
                    </Header>
                </div>
                <div className="editor">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        name="sandbox"
                        height='500px'
                        width='1000px'
                        showGutter={true}
                        highlightActiveLine={true}
                        fontSize={16}
                        value={`let val = "Hello world";`}
                        editorProps={{
                            $blockScrolling: true

                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
