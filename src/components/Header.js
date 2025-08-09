import profileImage from "../assets/profile.jpg"

export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Deivid Silva</h1>
                    <h2 style={styles.subtitle}>Desenvolvedor Web/Mobile</h2>
                </div>
                <img
                    src={profileImage}
                    alt="Foto de perfil de Deivid Silva"
                    style={styles.profileImage}
                />
            </div>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#222",
        margin: 0
    },
    subtitle: {
        fontSize: "0.8rem",
        color: "#666",
        margin: 0
    },
    profileImage: {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        objectFit: "cover"
    }
}