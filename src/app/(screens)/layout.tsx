
export default function AuthLayout({children}:{children: React.ReactNode}){
    return(
        <>
            <div>Top Layout Screens</div>
            {children}
            <div>Bottom Layout Screens</div>
        </>    
    )
}