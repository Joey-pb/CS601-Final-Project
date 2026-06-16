import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <div className="container">
            <div className={styles.frame} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}svg/frames/heading-frame.svg)` }}><h1>404</h1></div>
            <p>It looks like this page has wondered past the frontier.</p>
        </div>
    );
}

export default ErrorPage;