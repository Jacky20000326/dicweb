import React from "react";
import styled from "styled-components";
const Announcement = () => {
	const flexStyle = {
		display: "flex",
	};
	const fakeArray = [
		{
			title: "系所公告",
			test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
			time: "May 6, 2022",
			lable: "競賽/實習",
		},
		{
			title: "系所公告",
			test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
			time: "May 6, 2022",
			lable: "競賽/實習",
		},
		{
			title: "系所公告",
			test: "部分內文部分內文部分內文部分內文分內文部分內文部分內文部分內文部分內文部分內文",
			time: "May 6, 2022",
			lable: "競賽/實習",
		},
	];
	return (
		<AnnouncementContainer>
			<AnnouncementTxt>系所公告</AnnouncementTxt>
			<hr />
			<AnnouncementBlock>
				<Content>
					{fakeArray.map((item) => {
						return (
							<div style={flexStyle}>
								<AnnouncementStyled>
									<Title>{item.title}</Title>
									<Test>{item.test}</Test>
									<Info>
										<Time>{item.time}</Time>
										<Separator></Separator>
										<Label>{item.lable}</Label>
									</Info>
								</AnnouncementStyled>
								<AnnouncementImage></AnnouncementImage>
							</div>
						);
					})}
				</Content>
				<Category>
					<div style={flexStyle}>
						<SearchPng src={require("../../src/assets/search.png")}></SearchPng>
						<Separator></Separator>
						<SearchInput placeholder="Search"></SearchInput>
					</div>
				</Category>
			</AnnouncementBlock>
		</AnnouncementContainer>
	);
};
const AnnouncementContainer = styled.div`
	width: 100%;
	padding: 0px 132px 0px 132px;
`;
const AnnouncementTxt = styled.div`
	&:after {
		content: "";
		display: block;
		width: 62px;
		height: 12px;
		background-color: #2b62a2;
		margin-top: 7px;
	}
	margin-top: 88px;
	font-size: 42px;
	position: relative;
	color: #2b62a2;
	font-weight: 400;
`;

const AnnouncementBlock = styled.div`
	display: flex;
`;
const Content = styled.div`
	flex: 7;
	margin-top: 63px;

	display: inline-block;
`;
const AnnouncementStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 552px;
	margin-bottom: 44px;
`;
const Title = styled.div`
	font-weight: 500;
	font-size: 32px;
	&:after {
		content: "";
		display: block;
		width: 42px;
		height: 10px;
		background-color: #f69393;
		margin-top: 12px;
	}
`;
const Test = styled.div`
	color: #9c9c9c;
	font-size: 18px;
	margin-top: 21px;
`;

const Info = styled.div`
	display: flex;
	margin-top: 20px;
`;
const Time = styled.div`
	color: #949494;
	font-size: 13px;
`;
const Label = styled.div`
	width: 82px;
	height: 20px;
	background-color: #f69393;
	border-radius: 15.5px;
	font-size: 0.5rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Separator = styled.div`
	width: 26px;
	height: 2px;
	transform: rotate(90deg);
	background-color: #9c9c9c;
	margin-left: 12px;
	margin-right: 15px;
	margin-top: 10px;
`;

const AnnouncementImage = styled.img`
	width: 30%;
	height: 161px;
	margin: 30px 0px 0px 20px;
`;
const Category = styled.div`
	flex: 3;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
`;

const SearchPng = styled.img`
	width: 32px;
	height: 32px;
`;
const SearchInput = styled.input`
	border: none;
	border-bottom: 1px solid #9c9c9c;
	padding-left: 5px;
	font-size: 16px;
	width: 100px;
	height: 28px;
`;
export default Announcement;
