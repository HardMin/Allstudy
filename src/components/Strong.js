const StrongSubTitle = ({ content }) => {
    return <strong className="strong-subtitle-Allstudy">{content}</strong>;
};
const StrongTextTitle = ({ content }) => {
    return <strong className="strong-text-title-Allstudy">{content}</strong>;
};
const StrongTextImportant = ({ content }) => {
    if (typeof content == typeof {}) {
        return (
            <strong className="strong-text-important-Allstudy">
                {content.map((contents) => (
                    <strong className="strong-text-important-Allstudy">
                        {contents},{" "}
                    </strong>
                ))}
            </strong>
        );
    }
    return (
        <strong className="strong-text-important-Allstudy">{content}</strong>
    );
};

export { StrongSubTitle, StrongTextTitle, StrongTextImportant };
