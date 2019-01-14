import axios from 'axios';

// EXAMPLE API REQUEST

export type IBookingsList = Array<{destination:string, outboundDate: string, inboundDate:string, thumb:string}>
export async function apiRequestMyBookings(): Promise<IBookingsList> {
	const bookings:any = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights');
	return bookings.data;

}