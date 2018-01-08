import React, {Component} from 'react';

class ChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            messages: [
                {id: 0, text: 'text1'},
                {id: 2, text: 'text2'},
                {id: 3, text: 'text3'}
            ]
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Se ha enviado exitosamente!');
    }

    updateMessage(e) {
        console.log(e.target.value);
    }

    render() {
        
        const { messages } = this.state;
        const messagesList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        });

        return (
            <div>
                <ol>
                    { messagesList }
                </ol>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    onChange={this.updateMessage}
                    />
                </form>
            </div>
        )
    }
}

export default ChatRoom;