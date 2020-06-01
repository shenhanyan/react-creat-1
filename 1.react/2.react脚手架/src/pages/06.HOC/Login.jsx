import React, { Component } from "react";
// 引入高阶组件
import withForm from "./withForm";

class Login extends Component {
    render() {
        const { handleChange, handleSubmit } = this.props;

        return (
            <>
                <h1>登录页面</h1>
                    <form onSubmit={handleSubmit}>
                        用户名：
                        <input type="text" onChange={handleChange("username")} /> <br />
                        密码：
                        <input type="password" onChange={handleChange("password")} />
                        <br />
                        <button type="submit">登录</button>
                    </form>
            </>
        );
    }
}

// 调用高阶组件，返回新组件
const Newlogin = withForm(Login);

// 暴露新组件，新组件内部渲染Login组件
export default Newlogin;