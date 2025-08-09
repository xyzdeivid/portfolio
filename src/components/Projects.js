import Section from "./Section"
import SectionName from "./SectionName"
import { FaGithub, FaGooglePlay } from "react-icons/fa"
import presentation from "../assets/presentation.mp4"

export default function Projects() {

    return (
        <Section>
            <SectionName name="Projetos" />
            <div>
                <h3 style={styles.projectTitle}>App Autônomo</h3>
                <p>Aplicativo desenvolvido usando ReactNative, com o intuito de ajudar empreendores
                    a organizar e profissionalizar seu negócio.
                </p>
                <div style={styles.videoContainer}>
                    <video
                        src={presentation}
                        style={{ width: "250px", height: "auto", borderRadius: "12px" }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    />
                </div>
                <div style={styles.linksContainer}>
                    <a href="https://play.google.com/store/apps/details?id=com.imdeividsilva.autonomo"
                        target="_blank" rel="noopener noreferrer"
                        style={styles.linkContainer}
                    >
                        <p>Baixe na GooglePlay</p>
                        <FaGooglePlay />
                    </a>
                    <a
                        href="https://github.com/xyzdeivid/autonomo"
                        target="_blank" rel="noopener noreferrer"
                        style={styles.linkContainer}>
                        <p>Código</p>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </Section>
    )

}

const styles = {

    projectTitle: {
        fontSize: "1rem",
        fontWeight: "600",
        marginBottom: "8px"
    },

    videoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        marginBottom: '1rem'
    },

    linksContainer: {
        display: "flex",
        justifyContent: "space-between",
    },

    linkContainer: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        gap: "8px",
        color: "black"
    }

}