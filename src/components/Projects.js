import Section from "./Section"
import SectionName from "./SectionName"
import { FaGithub, FaGooglePlay } from "react-icons/fa"
import presentation from "../assets/presentation.mp4"
import autonomoIcon from "../assets/autonomo-icon.png"

export default function Projects() {

    return (
        <Section>
            <SectionName name="Projetos" />
            <div>
                <div style={styles.titleContainer}>
                    <img
                        src={autonomoIcon}
                        alt="Ícone do projeto Autônomo"
                        style={{ width: "32px", height: "32px", borderRadius: "12px" }}
                    />
                    <h3 style={styles.projectTitle}>Autônomo</h3>
                </div>
                <p>Aplicativo desenvolvido usando ReactNative, com o intuito de ajudar empreendores
                    a organizar e profissionalizar seu negócio.
                </p>
                <div style={styles.videoContainer}>
                    <video
                        src={presentation}
                        style={{ maxWidth: "300px", height: "auto", borderRadius: "12px" }}
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

    titleContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
    },

    projectTitle: {
        fontSize: "1rem",
        fontWeight: "600",
        margin: 0
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