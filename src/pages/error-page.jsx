import { useRouteError } from "react-router-dom"

export default function ErrorPage() {

    const error = useRouteError();

    console.log(error);

    return<>
        <h1>La page que vous solicitez n'existe pas !</h1>
    </>
}