function Dot({ isActive, onClick }) {
    return (
        <div
            className={`dot ${isActive ? "active" : "inactive"}`}
            onClick={onClick}
        ></div>
    );
}

export default Dot