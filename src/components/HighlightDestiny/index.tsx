import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';

// STYLED

const Highlight = styled.a`
	height: 130px;
	align-self: center;
	border-radius: 10px;
	padding: 10px 20px;
	display: flex;
	background-image:url(${(props:{ img:string }) => props.img});
	background-size: 100% 100%;
	justify-content: space-between;
	align-items: flex-end;
	font-family: sans-serif;
	font-weight: 100;
	margin-bottom: 20px;
	text-decoration:none;

	@media (max-width: 400px) {
		height: 90px;
	}
`

const H1 = styled.h1`
  text-shadow: 1px 1px black;
	font-family: sans-serif;
	font-weight: 100;
	font-size: 20px;
	color: #FFF;
	margin: 0;

	@media (max-width: 400px) {
	font-size: 16px;
}
`


interface IProps {
	destination:string,
	outboundDate: string, 
	inboundDate:string, 
	thumb:string
}

class HighlightDestiny extends React.PureComponent<IProps> {
	public render() {
		const {destination, outboundDate, inboundDate, thumb} = this.props
		return (
			<Highlight img={thumb} href="#">
				<H1>{destination}</H1>
				<H1>{this.formatDate(outboundDate)} - {this.formatDate(inboundDate)}</H1>
			</Highlight>
		);
	}

	private formatDate = (date:string) => moment(new Date(date)).format("DD MMM");
}


export default HighlightDestiny;