import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IBookingsList } from 'src/services/api';
import { IRootState } from 'src/store';
import { selectBookings, selectIsRequestingBookings } from 'src/store/app/booking';
import styled from 'styled-components';
import { HighlightDestiny } from '../../components';
import { requestMyBooking } from '../../store/app/booking';


interface IBookings {
	destination: string,
	outboundDate: string,
	inboundDate: string,
	thumb: string
}

// STYLED
const Background = styled.div`
		padding: 30px;
`

const H1 = styled.h1`
	font-family: sans-serif;
	font-weight: 100;
	color: #FFF;
	text-align:center;
	margin: 20px;
	font-size: 30px;

	@media (max-width: 400px) {
		font-size: 20px;
	}
`

const P = styled.p`
  font-family: sans-serif;
  font-weight: 600;
	color: #5B5B65;
	margin-top: 30px;
	margin-bottom: 10px;

	@media (max-width: 400px) {
		font-size: 15px;
	}
`


class ExamplePage extends React.PureComponent<IMapStateToProps & IMapDispatchToProps> {

	public componentDidMount() {
		this.props.requestMyBooking();
	}

	public render() {
		const { bookings, isRequestingBooking } = this.props

		if (isRequestingBooking) { return null; }

		return (
			<Background>
				<H1>My booking</H1>
				<P>UPCOMING</P>
				{
					bookings.filter((booking: IBookings) => !this.handleBookings(booking.outboundDate)).map((booking: IBookings) => {
						return <HighlightDestiny
							key={booking.thumb}
							destination={booking.destination}
							outboundDate={booking.outboundDate}
							inboundDate={booking.inboundDate}
							thumb={booking.thumb}
						/>
					})
				}
				<P>PAST</P>
				{
					bookings.filter((booking: IBookings) => this.handleBookings(booking.outboundDate)).map((booking: IBookings) => {
						return <HighlightDestiny
							key={booking.thumb}
							destination={booking.destination}
							outboundDate={booking.outboundDate}
							inboundDate={booking.inboundDate}
							thumb={booking.thumb}
						/>
					})
				}
			</Background>
		);
	}

	private handleBookings = (date: string) => {
		const dateBooking = new Date(date);
		const dateNow = new Date();
		if (dateBooking < dateNow) {
			return true
		}
		else {
			return false
		}
	}
}

interface IMapStateToProps {
	bookings: IBookingsList,
	isRequestingBooking: boolean;

};

const mapStateToProps = (state: IRootState): IMapStateToProps => ({
	bookings: selectBookings(state),
	isRequestingBooking: selectIsRequestingBookings(state)
});

interface IMapDispatchToProps {
	requestMyBooking: () => void;
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
	requestMyBooking: () => dispatch(requestMyBooking.started()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);