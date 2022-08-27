import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
   }
   :root{
      --ff-title: 'Fira Sans Condensed', sans-serif;
      --ff-ordinary: 'Work Sans', sans-serif;

      --fs-h1: 50px;
      --fs-h2: 35px;
      --fs-h3: 25px;
      --fs-h4:20px;
      --fs-ordinary: 19px;
      
      --bg-main-color: white;
      --bg-sec-color: #f8f7ed;
      --bg-home-color: #f5f3e0;
      --bg-light-green: #dae3e3;
      --bg-dark-green: #c5d3d3;
      --accent-color: #D19C1D;
      --accent-color-sec: #5b7b7a;
      
      --pad-header: .5% 10%;
      --pad-sec: 2% 10%;
      
      @media (min-width: 1440px){
         --max-width-sec: 1110px;
         --pad-sec: 1% calc((100vw - var(--max-width-sec)) / 2);
         --pad-header: .5% calc((100vw - var(--max-width-sec)) / 2);
      }
      @media (max-width: 950px){
         --fs-h1: 40px;
      }
      @media (max-width: 850px){
         --fs-h1: 35px;
         --fs-h2: 25px;
         --fs-h3: 24px;
         --fs-h4: 18px;
         
         --pad-header: .5% 4%;
         --pad-sec: 2% 4%;
      }
      @media (max-width: 600px){
         --fs-h1: 30px;
         --fs-h2: 25px;
         --fs-h3: 20px;
         --fs-ordinary: 16px;
         
      }
      @media (max-width: 425px){
         --fs-h1: 25px;
         --fs-h2: 20px;
         
      }
   }
   
   body{
      width: 100%;
      background-color: var(--bg-main-color);
      font-family: var(--ff-ordinary);
   }
   
   h1, h2{
      font-family: var(--ff-title);
   }

   h2{
      font-size: var(--fs-h2);
      margin: 15px 0;
   }
   h3{
      font-size: var(--fs-h3);
      font-weight: bold;
   }
   h4{
      font-size: var(--fs-h4);
      font-weight: bolder;
   }
   p{
      font-size: var(--fs-ordinary);
   }
   button{
      font-size: calc(var(--fs-ordinary) - 3px)
   } 
   a{ 
      color: black;
      &:hover{
         font-weight: bold;
		   color: var(--accent-color);
      }
   }  
   `;

export const Section = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	padding: var(--pad-sec);
	background: var(
		${(props) => (props.color ? "--bg-sec-color" : "--bg-main-color")}
	);
`;

export const DivCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2% 0;
	padding: 0 3%;
	background: white;
	border-radius: 15px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border: none;
	border-radius: 5px;
	box-shadow: 2px 2px 0 1px grey;
	color: white;
	cursor: pointer;
	font-family: var(--ff-ordinary);
	background: var(
		${(props) => (props.color ? "--accent-color-sec" : "--accent-color")}
	);

	&:hover {
		transform: scale(1.05);
	}
`;
