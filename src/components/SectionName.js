export default function SectionName({ name }) {

    const titleStyle = {
        fontSize: "1.5rem",
        marginBottom: "24px",
        borderBottom: "3px solid black",
        paddingBottom: "8px",
        fontWeight: "700"
    }

    return (
        <h2 style={titleStyle}>{name}</h2>
    )
}