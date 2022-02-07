import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
const Home = () => {
	return (
		<>
			<CarouselContainer>
				<Carousel src={require("../../src/assets/Carousel.jpeg")}></Carousel>
			</CarouselContainer>
			<Announcement></Announcement>
		</>
	);
};
const CarouselContainer = styled.div`
	width: 100vw;
	height: 60vh;
	border: 1px solid #000;
	background-size: cover;
`;
const Carousel = styled.img`
	width: 100%;
	height: 100%;
`;

export default Home;
