import "./style.css";
import React,{Component} from "react"
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject("headStore")
@observer
class Head extends Component{
	showAboutItem(){
		if(this.props.headStore.onAboutTouch){
			return (
				<div className="about-content" onMouseLeave={() => this.props.headStore.mouseOnAboutItem(false)} >
					<div className="project">项目作品</div>
					<div className="dynamic">团队动态</div>
					<div className="introduction">团队介绍</div>
					<div className="honor">获奖荣誉</div>
				</div>
			)
		}
	};
	showDownItem(){
		if (this.props.headStore.onDownTouch) {
			return (
				<div className="about-content" onMouseLeave={() => this.props.headStore.mouseOnDownItem(false)}>
					<div className="doucument-option"><Link to="/documentManage/1" >文档操作</Link></div>
				</div>
			)
		}
	};
	showPostItem(){
		if(this.props.headStore.onPostTouch){
			return (
				<div className="about-content" onMouseLeave={() => this.props.headStore.mouseOnPostItem(false)}>
					<div className="post">发帖</div>
					<div className="post-detail">帖子详细内容</div>
				</div>
			)
		}
	};
	render() {
		const {headStore}=this.props;
		return(
			<div className="header-wrapper">
				<div className="work-icon">
					<div  className="work-home-icon" ></div>
					<h3>湖南科技大学大数据与人工智能研究室</h3>
				</div>
				<div className="addition">
					<div className="head-nav">
						<ul>
							<Link to="/home"><li>首页</li></Link>
							<li onMouseEnter={() => headStore.mouseOnAboutItem(true)} onMouseLeave={() => headStore.mouseOnAboutItem(false)} >
								关于我们
								{this.showAboutItem()}
							</li>

							<li onMouseEnter={() => headStore.mouseOnDownItem(true)} onMouseLeave={() => this.props.headStore.mouseOnDownItem(false)} >
								<Link to="/document">共享文档下载</Link>
								{this.showDownItem()}
							</li>

							<li onMouseEnter={() => headStore.mouseOnPostItem(true)} onMouseLeave={() => this.props.headStore.mouseOnPostItem(false)} >
								论坛
								{this.showPostItem()}
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Head;