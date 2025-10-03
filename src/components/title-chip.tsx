import { cn } from "@/lib/utils";

export default function TitleChip({ title, className }: { title: string; className?: string }) {
    return (
        <div className={cn(`inline-flex items-center gap-2 text-dark border-dark/20 border px-4 py-2 rounded-full mb-6`, className)}>
            <img src={'/bariki-bw.png'} className="w-6 h-6" alt="" />
            <span className="font-medium">{title}</span>
        </div>
    )
}