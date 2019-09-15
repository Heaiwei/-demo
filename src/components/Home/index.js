import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable} from "mobx";
import Head from "../Common/Head/head";
import Foot from '../Common/Foot/index';
import SimpleNavigation from './SimpleNavigation/index'
import LoginNavigation from './LoginNavigation/index'
import ForumNavigation from './ForumNavigation/index'
import WorkIntroduce from './WorkIntroduce/index'
import Pagination from './Pagination/index'
import "./style.css";

@inject("loginStore", "forumStore")
@observer
class Home extends Component {
	/*@observable Mylength = 2;      //当前页码数目
	@observable MyCurrentPage;   //当前页

	setMyPages = () => {
		if (this.props.forumStore.forum.length === 0) {
			console.log("长度0")
		} else {
			console.log("长度3")
			this.Mylength = (this.props.forumStore.forum.length + 3 - 1) / 3;
		}

	};
	getCurrentPage = (currentPage) => {
		if (currentPage != null) {
			this.MyCurrentPage = currentPage;
		}
		return currentPage;
	};*/
	/*MyWays = () => {
		return (<div className="ForumNavi">
			{
				this.props.forumStore.forum.slice((this.MyCurrentPage - 1) * 3, (this.MyCurrentPage - 1) * 3 + 3).map(item => (
					<ForumNavigation Itemforum={item} key={item.id}/>
				))
			}
		</div>)
	};*/

	render() {
		return (
			<div>
				<div className="content-wrapper-home">
					{/*<SimpleNavigation/>*/}
					<LoginNavigation/>
					{/*{
						this.MyWays()
					}
					<div className="Pagination" onClick={() => this.setMyPages()}>
						<Pagination pageConfig={this.Mylength}
									pageCallbackFn={this.getCurrentPage}/>
					</div>*/}
				</div>
			</div>
		)
	}
}

export default Home;
