// Nav component
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// 匯入圖片

//匯入Links
import { links } from "../assets/file";
const Nav = () => {
	const LinkStyle = {
		color: "#555555",
		margin: "0px 12px 0px 12px",
		textDecoration: "none",
		fontSize: "1.1rem",
	};
	return (
		<NavStyled>
			<Link to="/">
				<DicLogo src={require("../../src/assets/DicLogo.png")} alt=""></DicLogo>
			</Link>
			<Links>
				{links.map((item) => {
					return (
						<Link to={item.path} style={LinkStyle}>
							{item.name}
						</Link>
					);
				})}
			</Links>
		</NavStyled>
	);
};
const NavStyled = styled.nav`
	width: 100vw;
	height: 15vh;
	background: #ffffff;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 10px rgba(160, 160, 160, 0.25);
	padding: 0px 100px 0px 128px;
`;
const DicLogo = styled.img`
	width: 288px;
	height: 81px;
	margin-right: 100px;
`;
const Links = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	padding: 0px 0px 0px 30px;
`;

export default Nav;
