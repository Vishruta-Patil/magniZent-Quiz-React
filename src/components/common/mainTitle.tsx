const MainTitle = ({ children }: { children : string }) => {
    return (
    <div>
        <h2 className="font-lg black-color category-header font-header">
            {children}
        </h2>
        <div className="underline-header"></div>
    </div>
)}

export default MainTitle