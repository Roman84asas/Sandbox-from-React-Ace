import React from 'react';
import { Header, Input, Button } from 'semantic-ui-react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import socket from '../socket';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            connected: false,
        }
    }

    handleChange(value) {
        socket.emit('CHANGE_CLIENT', value);
        this.setState({
            value
        })
    }

    componentDidMount(){
        socket.on('CHANGE_SERVER', value => {
            this.setState({
                value
            });
        });
    }

    connectRoom() {
        socket.emit('CHANGE_CONNECT', this.input.value);
        this.setState({
            connected: true,
        })
    }

    render(){
        return (
            <div>

                <div className="headerSandbox">

                    <Header size='huge'>SANDBOX</Header>

                    <Input ref={ref => (this.input = ref)}/>

                    <Button
                        disabled={this.state.connected}
                        onClick={this.connectRoom.bind(this)}>
                        Connect
                    </Button>

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
                        value={this.state.value}
                        editorProps={{
                            $blockScrolling: true
                        }}
                        onChange={this.handleChange.bind(this)}
                    />

                </div>

            </div>
        );
    }
}

export default App;
