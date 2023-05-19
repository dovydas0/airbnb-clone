'use client';
import { Range } from 'react-date-range';

interface ListingReservationsProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[]
}


const ListingReservation: React.FC<ListingReservationsProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates
}) => {
  return (
    <div>ListingReservation</div>
  )
}

export default ListingReservation