import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import routes from '../routes/routes';
import navTemplate from "../templates/navTemplate";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import config from "../config";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTemplate: "",
        };
    }

    async componentDidMount() {
        let path = window.location.pathname;

        let template = "";
        for (let key in navTemplate) {
            if (path.indexOf(key) > -1) {
                template = key;
                break;
            }
        }
        let i = 0;
        if (!navTemplate[template])
            return;
        for (let key in navTemplate[template].links) {
            if (navTemplate[template].links[key].url === path)
                break;
            i++;
        }
        this.setState({
            selectedTemplate: template,
            selected_module_index: i,
        });
    }

    onBlur = () => {
        if (this.state.ignoreBlur)
            return;
        this.setState({
            showUserDropdown: false
        })
    };


    updateTemplate = async (template) => {
        await this.setState({
            selectedTemplate: template,
            selected_module_index: 0,
            selected: template,
            showUserDropdown: false
        });
    };


    displayNav = () => {
        let data = [];
        for (let key in navTemplate) {
            if (navTemplate[key].label) {
                console.log(this.state.selectedTemplate.substring(0, 3))
                console.log(this.state.selectedTemplate)
                console.log(navTemplate[key].url.substring(1, 4))
                console.log(navTemplate[key].url)
                data.push(
                    <Link key={key} className={navTemplate[key].url.substring(1, 4) === this.state.selectedTemplate.substring(0, 3)? 'selection' : 'non'} to={navTemplate[key].url}
                          onClick={(e) => this.updateTemplate(key)}>{navTemplate[key].label}</Link>
                );
            }
        }
        return (
            <Nav className="mr-auto">
                {data}
            </Nav>
        )
    };


    setSelectedModuleIndex = (i) => {
        this.setState({selected_module_index: i})
    };

    renderLinks = () => {
        let template = navTemplate[this.state.selectedTemplate];
        if (!template)
            return;

        let links = template.links.map((item, i) => {
            if (item.loc === 'ext') {
                return (
                    <a key={i} href={item.url}><item.icon />{item.name}</a>
                )
            }
            else if (item.type === 'sep') {
                return (
                    <p key={i} className='sep'>{item.name}</p>
                )
            }
            else {
                return (
                    <Link key={i} to={item.url} onClick={() => this.setSelectedModuleIndex(i)}><FontAwesomeIcon icon={item.icon}/>{item.name}</Link>
                )
            }
        });
        return (links);
    };

    renderNav = () => {
        return (
            <Navbar className="nav color" variant="dark">
                {this.displayNav()}
            </Navbar>
        )
    };

    render() {
        return (
            <div className="h-100 navpos">
                <Box>
                    <Router>
                        {this.renderNav()}
                        <div className="bodyRender d-flex h-100 w-100">
                            <div className={"h-100 w-100 "}>
                                {routes.renderRoutes()}
                            </div>
                        </div>
                    </Router>
                </Box>
            </div>
        );
    }
}


const Box = styled.div`

    .logo_api {
        color: blue;
        vertical-align: -9px;
    }

    .Tooltip {
        background-color: #11111180;
        padding : 10px;
        border-radius: 5px;
    }

    .moi {
        border-radius: 50%;
        background-color: white;
        width: 50px;
        height: 50px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        color: black;
    }
    
    .selected-item {
      color: blue;
    }
    
    .navbar {
        z-index: 9999;
        position: fixed;
        box-shadow: 0 5px 8px hsla(0,0%,0%, 0.1);
        top: 0;
        width: 100%;
        height: ${config.navHeight};
        padding-top: 20px;
        text-decoration: none;
    }
    
    .navbar a {
        padding-left: .5rem;
        padding-right: .5rem;
        color: rgba(255,255,255, 0.6);
        padding: .5rem 1rem;
    }
    
    .navbar-nav a:hover, .moi-dropdown a:hover {
        color: rgba(255,255,255, 1);
        font-weight: 600;
        text-decoration: none;
    }
    
    .bodyRender {
        height: 100% !important;
    
    }
    
    .content {
        padding: 50px;
        padding-left: calc(${config.sideNavWidth} + 50px);
        height: calc(100vh - ${config.navHeight}) !important;
    }
    
    .selection {
        color: rgba(255,255,255, 1) !important;
        font-weight: 600;
        text-decoration: none;
    }
`;