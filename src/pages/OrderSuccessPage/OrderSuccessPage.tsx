import { Link, useSearchParams } from "react-router-dom";

const OrderSuccessPage = () => {
  const [queryParams, setQueryParams] = useSearchParams()
  if(queryParams.get('firstName'))
  {
    return (
      <>
      <title>Order Confirmed</title>
      <h1>Order Number</h1>
      <b>{queryParams.get('OrderNumber')}</b>
      </>
    );
  }
  return (
    <div>
      <title>Order Placed Succesfully</title>
      <h1>Order Confirmed</h1>
      <button><Link to="/">Go back to home page</Link></button>
    </div>
  );
};

export default OrderSuccessPage;
