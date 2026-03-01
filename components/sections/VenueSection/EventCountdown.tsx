"use client";

import { useCountdown } from "@/hooks/useCountdown";

interface EventCountdownProps {
    targetDate: Date;
}

export function EventCountdown({ targetDate }: EventCountdownProps) {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <div className="flex items-center justify-between w-full max-w-[240px] mx-auto text-center">
            <div className="flex-1">
                <div className="text-base font-semibold text-primary">{days}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/60">
                    Ngày
                </div>
            </div>

            <div className="flex-1">
                <div className="text-base font-semibold text-primary">{hours}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/60">
                    Giờ
                </div>
            </div>

            <div className="flex-1">
                <div className="text-base font-semibold text-primary">{minutes}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/60">
                    Phút
                </div>
            </div>

            <div className="flex-1">
                <div className="text-base font-semibold text-primary">{seconds}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/60">
                    Giây
                </div>
            </div>
        </div>
    );
}
