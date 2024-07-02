import '../../styles/generic.scss'

interface TitleLineProps {
    text: string
}

const TitleLine = ({ text }: TitleLineProps) => {
    return (
        <div className="title_line flex container mx-auto mb-8 items-end gap-4 px-4">
            <h1 className="heading_three">{text}</h1>
            <div className="line_flex"></div>
        </div>
    )
}

export default TitleLine
