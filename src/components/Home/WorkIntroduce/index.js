import React,{Component} from 'react'
import {observer} from "mobx-react";
import './style.css'

@observer
class WorkIntroduce extends Component{
	render() {
		return(
			<div className="Introduction">
				<div className="workHome">工作室简介</div>
				<div className="workInfo">
					<p className="workInfoDetail">
						本工作室是依托湖南科技大学自动化工程学院，并与本校计算机学院、机电工程学院联合的跨学科研究中心，涉及计
						算机、自动化、机械电子、生物工程等学科。<br/>

						工作室旨在相关研究领域汇聚一支高水平的国际化创新团队，创建具有国际先进水平的机器智能创新研究基地，并
						在该领域赶超国际先进水平。<br/>

						工作室是自动化学科博士后流动站组成单位，按控制科学与工程一级学科招收博士生，模式识别与智能系统二级学
						科招收硕士生。<br/>

						工作室是专职研究机构，包括博士后在内14名专职研究人员，同时还包括了国际留学在内的优秀本、硕、博士生约86
						人。本实验室所有教师均具有博士学位及多年海外研究机构留学经历，具有广阔的国际视野。教师来源：<br/>

						美国卡内基-梅隆大学、韦恩州立大学<br/>
						国立香川大学、九州大学<br/>
						德国达姆士塔特大学<br/>
						法国埃夫里大学<br/>
						地址：湖南省湘潭市九华经济区中心创新中心<br/>
						联系邮件：XXXXXXXXXX<br/>
						联系电话：XXXXXXXXXX<br/>
						布法罗联系电话：XXXXX-XXXXXXS</p>
				</div>
			</div>
		)
	}
}
export default WorkIntroduce;