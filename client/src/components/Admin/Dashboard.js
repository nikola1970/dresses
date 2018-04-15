import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 40px;
    
    tr, td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
`;

const LinkWrapper = ({ className, children, to }) => (
    <Link className={className} to={to}>
        { children }
    </Link>
);

const ButtonEdit = styled(LinkWrapper)`
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border-radius: 4px;
`;

const ButtonDelete = ButtonEdit.extend`
    background-color: #e74c3c;
`;


class Dashobard extends React.Component {
    render(){

        console.log("Dashboard rendered!!!");

        return (
            <div className="container">
                <div className="col-xs-12">
                    <CategoriesTable>
                        <thead>
                        <tr>
                            <th>Category:</th>
                            <th>Dresses in category:</th>
                            <th>Edit:</th>
                            <th>Delete:</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Category 1</td>
                            <td>5</td>
                            <td><ButtonEdit to="/">Edit</ButtonEdit></td>
                            <td><ButtonDelete to="/">Delete</ButtonDelete></td>
                        </tr>
                        </tbody>
                    </CategoriesTable>
                </div>
            </div>
        )
    }
}


export default Dashobard;