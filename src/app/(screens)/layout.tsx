import './Style.css'

export default function AuthLayout({children}:{children: React.ReactNode}){
    return(
        <>
            {children}
            <div className="menu flex justify-around">
                <div className="icon">a</div>
                <div className="icon">b</div>
                <div className="icon">
                <span className='addJournal'>+</span>
                </div>
                <div className="icon">c</div>
                <div className="icon">d</div>
            </div>
        </>    
    )
}