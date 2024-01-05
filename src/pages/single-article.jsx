import { useParams } from "react-router-dom"

export default function SingleArticle() {

    const {id} = useParams()

    return<>
        <h1>Article {id}</h1>
    </>
}