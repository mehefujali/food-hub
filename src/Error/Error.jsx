import { useRouteError } from "react-router-dom";
import './error.css'


const Error = () => {
      const error = useRouteError();
      return (
            <div className="error flex flex-col gap-8 text-center justify-center">
                  <h1 className=" text-9xl font-extrabold ">Opps!</h1>
                  <p>Sorry, an unexpected error has occurred.</p>
                  <i className="text-2xl">{error.statusText || error.message}</i>
            </div>
      );
};

export default Error;