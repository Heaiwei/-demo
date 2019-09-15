import React,{Component} from 'react'
import {observer} from "mobx-react";
import './style.css'

@observer
class SimpleNavigation extends Component{
	render() {
		return(
			<div className="Navigation">
				<div className="Navi">导航</div>
				<div className="about">团队动态</div>
				<div className="about">导师介绍</div>
				<div className="about">荣誉奖励</div>
			</div>
		)
	}
}
export default SimpleNavigation;