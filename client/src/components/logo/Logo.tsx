import './logo.scss'

interface logoProp {
    color: string
}

const logo = ({ color }: logoProp) => {
    return (
        <div className="logo">
            <span
                style={{
                    color: color,
                }}
            >{`{Finsweet`}</span>
        </div>
    )
}

export default logo
