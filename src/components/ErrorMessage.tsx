
export default function ErrorMessage({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-red-50 text-red-700  p-3 uppercase text-sm font-bold text-center">{children}</div>
    )
}
