import React,{Component} from 'react'
import {observer,inject} from "mobx-react";
import {Link} from "react-router-dom";
import './style.css'

@inject("loginStore","storageStore")
@observer
class LoginNavigation extends Component{
	componentDidMount() {
		if(localStorage.length===0){
			this.props.loginStore.status=false;
		}else {
			this.props.loginStore.status=true;
		}
	}

	setLogout=()=>{
		localStorage.clear();
		this.props.loginStore.status=false;
	};

	my_current_username=()=>{
		//localStorage.clear();
		//console.log(localStorage);
		return localStorage.key(0);
	};

	my_info=()=>{
		this.props.loginStore.get_my_info(localStorage.key(0));
	};
	render() {
		if(this.props.loginStore.status===false) {
			return (
				<div className="Login">
					<div className="Navi-Login">登录</div>
					<Link to={"/"}><div className="About">点击登录</div></Link>
					<Link to={"/regist"}><div className="About">点击注册</div></Link>
					<div className="About">联系我们</div>
				</div>
			)
		}else if(this.props.loginStore.status===true){
			return (
				<div className="Login">
					<div className="Login-Icon"></div>
					<div className="About-Login">
						<div className="Welcome-user">欢迎登录：</div>
						<div className="Current-Username">{this.my_current_username()}</div>
					</div>
					<div className="About-Login">
						<div className="Privilege-Level">权限级别：</div>
						<div className="Level">普通</div>
					</div>
					<div className="About-Login">
						<Link to={"/personInfo"}><button className="Change-Button" onClick={this.my_info}>我的信息</button></Link>
						</div>
					<div className="About-Login"><button className="Logout-Button" onClick={this.setLogout}>登出</button></div>
				</div>
			)
		}
	}
}
export default LoginNavigation;