const ContentWrapper = ({children}) => {
    return (
        <>
            <div>
                <p>O conteúdo abaixo está sendo recebido através de "Children"</p>
                {children}
            </div>
        </>
    )
}

export default ContentWrapper;