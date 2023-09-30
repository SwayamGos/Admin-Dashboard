import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  console.log(bookingId);

  const {
    isLoading,
    data: booking = {},
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(Number(bookingId)),
  });

  console.log(booking);

  return { isLoading, error, booking };
}
