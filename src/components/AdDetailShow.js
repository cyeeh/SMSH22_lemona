import ReactHtmlParser from "html-react-parser";
import '../DetailStyle/ProjectDetailShow.css';

const AdDetailShow = ({itemDetail}) => {
	return (
		<>
			<div>
				<img src={`${itemDetail.thumbnailUrl}`}/>
			</div>
					
			<div className="list">
				<span>제목</span>
				<div>{`${itemDetail.title}`}</div>
			</div>
			
			<div className="list">
				<span>한줄소개</span>
				<div>{`${itemDetail.introduce}`}</div>
			</div>
			
			<div className="list">
				<span>해시태그</span>
				{itemDetail.tagList.map((hashtag) => (
					<div className="hashtag">#{hashtag}</div>
				))}
			</div>
			
			<div className="list">
				<span>본문</span>
				<div>{ReactHtmlParser(itemDetail.content)}</div>
			</div>
			
		</>
	);
};

export default AdDetailShow;