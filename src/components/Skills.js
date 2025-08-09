import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaReact } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

import Section from "./Section"
import SectionName from "./SectionName"

export default function Skills() {

    const frontEnd = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "React / ReactNative", icon: <FaReact /> }
    ]
    const languages = [
        {name: "JavaScript", icon: <FaJs />},
        {name: "TypeScript", icon: <SiTypescript />}
    ]

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = "#262627ff"
        e.currentTarget.style.color = "#fff"
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = "#fff"
        e.currentTarget.style.color = "#4a4a4a"
    }

    return (
        <Section>
            <SectionName name='Habilidades' />
            <div style={styles.categoryStyle}>
                <h3 style={styles.categoryTitleStyle}>Front-end</h3>
                <ul style={styles.listStyle}>
                    {frontEnd.map((skill) => (
                        <li
                            key={skill.name}
                            style={styles.itemStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p style={{ margin: 0 }}>{skill.name}</p>
                            {skill.icon}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.categoryStyle}>
                <h3 style={styles.categoryTitleStyle}>Linguagens</h3>
                <ul style={styles.listStyle}>
                    {languages.map((language) => (
                        <li
                            key={language.name}
                            style={styles.itemStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p style={{margin: 0}}>{language.name}</p>
                            {language.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

const styles = {

    categoryStyle: {
        marginBottom: "40px"
    },

    categoryTitleStyle: {
        fontSize: "1.25rem",
        marginBottom: "12px",
        fontWeight: "600"
    },

    listStyle: {
        listStyle: "none",
        padding: 0,
        display: "flex",
        gap: "12px",
        flexWrap: "wrap"
    },

    itemStyle: {
        backgroundColor: "#fff",
        padding: "8px 16px",
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(108, 99, 255, 0.2)",
        color: "#4a4a4a",
        fontWeight: "500",
        transition: "background-color 0.3s ease, color 0.3s ease",
        cursor: "default",
        display: "flex",
        alignItems: "center",
        gap: "4px"
    }

}