/*
应用组猪组件
*/
import React from "react";


// 受控组件：通过state和onChange事件来自动收集表单数据
class App extends React.Component {
    state = {
        username: "",
        password: "",
    };

    login = (e) => {
        // 禁止表单默认行为
        e.preventDefault();
        // 禁止表单数据
        const { username, password } = this.state;
        console.log(username, password);
        // 清空数据
        this.setState ({
            username: "",
            password: "",
        });
    };

    handleChange = (key) => {
        // 返回一个新函数 (事件事件回调函数)
        return (e) => {
            this.setState({
                [key]: e.target.value.trim(),
            });
        };
    };
    render() {
        const { username, password } = this.state;
    
        return (
            <form onSubmit={this.login}> 
                贵宾尊称：
                <input type="text"
                // 在React中，事件都是合成事件，不是原生DOM事件
                // 合成事件：做了兼容性处理~
                onChange={this.handleChange('username')}
                value={username}
                />
                基因编码：
                <input type="text"
                // 在React中，事件都是合成事件，不是原生DOM事件
                // 合成事件：做了兼容性处理~
                onChange={this.handleChange('password')}
                value={password}
                />
                <button type={"submit"}>觉醒</button>
            </form>
        )
    }
};

export default App;



