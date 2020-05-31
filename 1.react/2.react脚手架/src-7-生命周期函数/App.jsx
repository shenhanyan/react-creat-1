import React, { component, Component } from "react";

import ReactDOM from "react-dom";

import Child from "./Child";

/*
    React 函数中的this,
        1,生命周期函数的this指向组件实例对象
        2，其他函数默认是undefined，所以要改成箭头函数

    三个流程：
        1.初始化
            constructor     // 构造函数
            componentWillMount  // 模块渲染前
            render    // 渲染
            componentDidMount // 渲染模块后

        2，更新
            更新有三种触发方式：
                    1. 父组件this.setState导致子组件重新渲染，子组件会触发：
                        componentWillReceiveProps   // 模块将接受新的数据
                        shouldComponentUpdate       // 判断模块是否需要重新渲染
                        componentWillUpdate         // 组件即将更新
                        render                      // 渲染
                        componentDidUpdate          // 模块渲染结束
                
                    2. 父组件this.setState，父组件触发
                        shouldComponentUpdate   // 判断模块是否需要重新渲染
                        componentWillUpdate     // 组件即将更新
                        render                  // 渲染
                        componentDidUpdate      // 模块渲染结束

                    3. 父组件this.forceUpdate，父组件触发，
                        componentWillUpdate     // 组件即将更新
                        render                  // 渲染
                        componentDidUpdate      // 模块渲染结束

        3. 卸载
            componentWillUnmount      // 组件将卸载  

        重要生命周期函数：
            componentDidMount
                发送请求、设置定时器、绑定事件等一次性任务
            shouldComponentUpdate
                性能优化
                    返回值 true 要更新
                    返回值 false 不更新
            componentWillUnmount
                取消请求、清除定时器、绑定事件等收尾工作

        不安全，在未来新版本即将废弃 (可能会调用多次)
            componentWillMount
            componentWillReceiveProps
            componentWillUpdate
                不建议使用以上三个

        新的生命周期函数扩展了两个：
            static getDerivedStateFromProps   // 在静态中，从生命周期中导出派生状态
            getSnapshotBeforeUpdate          // 快速从之前的更新中获得按钮
*/

export default class App extends Component {
    constructor() {
        super (); // 调用父类的构造函数
        // Console.log("App constructor()");
    }

    componentDidMount() {
        console.log("APP componentDidMount()");
    }

    // componentWillMount() {
    //     console.log("App componentWillMount()");
    // }

    // componentWillReceiveProps() {
    //     console.log("App componentWillReceiveProps()");
    // }

    shouldComponentUpdate() {
        console.log("App shouldComponentUpdate()");
        // 专门做性能优化
        return true; // 代表要重新渲染   false  代表不要渲染
    }

    // componentWillUpdate() {
    //     console.log("App componentWillUpdate()");
    // }

    componentDidUpate() {
        console.log("App componentDidUpate()");
    }

    componentWillUnmount() {
        console.log("App componentWillUnmount()");
    }

    render() {
        console.log("App render()");
        return (
            <div 
                onClick={() => {

                }}
            >
                <h1>我想看到未来的样子！</h1>
                <Child />
            </div>
        );
    }


}