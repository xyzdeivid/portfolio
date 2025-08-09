export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>imdeividsilva@gmail.com</p>
            <p>22 98864-2260</p>
        </footer>
    )
}

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
    }
}