const NotFound = () => {
    return (
        <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "150px", fontWeight: "bold" }}>
                    404
                </span>
                <p style={{ fontSize: "36px", fontWeight: "bold" }}>
                    Page Not Found!
                </p>
            </div>
        </div>
    );
};

export default NotFound;
