/*
应用主组件
 */
import React from "react";

import Child from "./pages/Child";

class App extends React.Component {
    state = {
        person: {
            name: "沈涵娮",
            age: 23,
            sex:"女",
        },
    };

    updatePerson = (person) => {
        this.setState({
            person,
        });
    };

    render () {


        const { person } = this.state;

        return (
            <div>
                <h1>App...</h1>
                {/* 以标签属性方式(props)给子组件传递数据 */}
                <Child
                    // name={person.name}
                    // age={person.age}
                    // sex={person.sex}
                    {...person}
                    updatePerson={this.updatePerson}
                />
            </div>
        )
    }
}

export default App;