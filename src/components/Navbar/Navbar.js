import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchFoodItems from '../ListBlockItems/SearchFoodItems';
import './navbar.css';

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-light navbgcolor">
                <Link className="navbar-brand" to="/">Home</Link> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/blocks">Blocks </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="null">Transactions</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="null" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="null">View Latest Block</a>
                                <a className="dropdown-item disabled" href="null">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item disabled" href="null">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <SearchFoodItems />
                </div>
            </nav>
            )
            }
        }
        
// const mapStateToProps = (state) => ({
//     breadCrumbList: state.breadCrumbList
// })
            
// Navbar.propTypes = {
//     breadCrumbList: PropTypes.array,
// }

// Navbar.defaultProps = {
//     breadCrumbList: [],
// }

export default Navbar;

