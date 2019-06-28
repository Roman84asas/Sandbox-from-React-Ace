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
                    <Header size='hugo'>
                        SANDBOX
                    </Header>
                </div>
                <div className="editor">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        name="sandbox"
                        showGutter={true}
                        highlightActiveLine={true}
                        height='500px'
                        fontSize={16}
                        editorProps={{
                            $blockScrolling: true

                        }}
                    />,
                </div>
            </div>
        );
    }
}

export default App;
