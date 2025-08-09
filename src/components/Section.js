export default function Section({ children }) {

    const sectionStyle = {
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fafafa",
        borderRadius: "10px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
        color: "#222"
    }

    return (
        <section style={sectionStyle}>
            {children}
        </section>
    )

}