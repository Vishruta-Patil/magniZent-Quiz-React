export const InstructionUnit = ({children} : {children : string}) => {
    return (
        <div className="unit-rule flex">
                    <span className="material-icons star-icon"> star </span>
                    <p className="font-sm">{children}</p>
                </div>
    )
}