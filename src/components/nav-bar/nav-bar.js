import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as styles from "./styles";
import { colors } from "../../colors/colors";

export function NavBar() {
    const ghLink = "https://github.com/JoshuaKGoldberg/emojisplosion";

    return (
        <div style={styles.navBar}>
            <h1>
                <span style={{color: colors.pink}}>e</span>
                <span style={{color: colors.blue}}>m</span>
                <span style={{color: colors.yellow}}>o</span>
                <span style={{color: colors.lightPurple}}>j</span>
                <span style={{color: colors.green}}>i</span>
                <span style={{color: colors.orange}}>s</span>
                <span style={{color: colors.pink}}>p</span>
                <span style={{color: colors.blue}}>l</span>
                <span style={{color: colors.yellow}}>o</span>
                <span style={{color: colors.lightPurple}}>s</span>
                <span style={{color: colors.green}}>i</span>
                <span style={{color: colors.orange}}>o</span>
                <span style={{color: colors.pink}}>n</span>
                {" "}Demo Site</h1>
            <a href={ghLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} style={styles.icon}/>
            </a>
        </div>
    )
}