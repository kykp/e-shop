
export function Footer () {
    let today = new Date();
    let year = today.getFullYear();
    return <div className="footer">
        <h2 className="footer__h2">Copyright - {year}</h2>
    </div>
}