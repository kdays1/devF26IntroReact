import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import { Location } from "react-router-dom";

export default function DetailsView() {
    const location = useLocation();
    let item = location.state
    return (
    <>
    <h1>DetailsView</h1>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
    </>)
}