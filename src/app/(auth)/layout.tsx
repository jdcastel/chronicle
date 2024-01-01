
export default function AuthLayout({children}:{children: React.ReactNode}){
    return(
        <>
            <div className="h-screen flex items-center justify-center bg-blue-gray-600">
            {children}
            </div>
        </>    
    )
}