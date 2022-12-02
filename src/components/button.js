export function Button({ color, setColor }) {
    return (
        <div>
            <div
                style={{
                    backgroundColor: color,
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                }}
            >
                +
            </div>
        </div>
    );
}
