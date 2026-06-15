import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <div className="container">
            <div className={styles.frame}><h1>404</h1></div>
            <p>It looks like this page has wondered past the frontier.</p>
        </div>
    );
}

export default ErrorPage;