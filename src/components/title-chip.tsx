export default function TitleChip({ title }: { title: string }) {
    return (
        <div className="inline-flex items-center gap-2 text-dark border-dark/20 border px-4 py-2 rounded-full mb-6">
            <img src={'/bariki-bw.png'} className="w-6 h-6" alt="" />
            <span className="font-medium">{title}</span>
        </div>
    )
}