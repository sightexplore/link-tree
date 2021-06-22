//Icon
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

//Image
import topImage from "../Assests/Images/intro.png";


//Icon Color
const color1 = "#9394B3";


//Set Icon Size Function
function getIconSize(){
    let x = window.screen.width;
    let size = "40%";
    if(x < 992) { size = "100%"}
    return size;
}


//Social Media
const mediaHandler = {
    "Website": "https://sightexplore.github.io/sightexplore",
    "Instagram": "https://www.instagram.com/sight_explore/",
    "Youtube": "https://www.youtube.com/channel/UCwhfKyR3dNnlbISWhK0eg5w",
    "Github": "https://github.com/sightexplore",
    "Facebook": "https://www.facebook.com/Sight-Explore-100295645554439",
}


//Category for Reference
const projectCategory = [
    { "id": 1, "name" : "Java", "path": "java" , "icon": <SiJava size={getIconSize()} color={color1} />},
    { "id": 2, "name" : "C++", "path": "cpp" , "icon": <SiCplusplus size={getIconSize()} color={color1} />},
    { "id": 3, "name" : "Python", "path": "python" , "icon": <SiPython size={getIconSize()} color={color1} />},
    { "id": 4, "name" : "Web ", "path": "web", "icon": <CgWebsite size={getIconSize()} color={color1} />},  
    { "id": null, "name" : "C", "path": "c" , "icon": <SiC size={getIconSize()} color={color1} />},
    { "id": null, "name" : "SQL", "path": "sql" , "icon": <RiDatabase2Fill size={getIconSize()} color={color1} />},
]


//Page Intro
const intro = {
    "Home": {
        "title": "Explore you Limits",
        "sub-title": "Never stop learning, because life never stops teaching.",
        "img": topImage,
        "displayButton": true,
    },
    "About": {
        "title": "About Us",
        "sub-title": "Never stop learning, because life never stops teaching.",
        "img": topImage,
        "displayButton": false,
    },
    "Project": {
        "title": "Projects",
        "sub-title": "Never stop learning, because life never stops teaching.",
        "img": topImage,
        "displayButton": false,
    },
    "Support": {
        "title": "Support Us",
        "sub-title": "Never stop learning, because life never stops teaching.",
        "img": topImage,
        "displayButton": false,
    },
    "Contact":{
        "title": "Get in Touch",
        "sub-title": "Never stop learning, because life never stops teaching.",
        "img": topImage,
        "displayButton": false,
    }
}


//Page Links
const links = {
    "Home": "/",
    "About": "/about",
    "Project": "/project",
    "Contact": "/contact",
    "Support": "/support",
}


export {links, intro, mediaHandler, projectCategory}