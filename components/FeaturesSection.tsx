import {PenLine, ScanLine, ListFilter, LineChart, CircleCheck, BookCopy, Shuffle, AlignJustify, WifiOff} from 'lucide-react';
import {FeaturesCard} from "@/components/FeaturesCard";

const features = [
    {icon: <PenLine size={16}/>, label: 'Add books manually'},
    {icon: <ScanLine size={16}/>, label: 'Scan book ISBNs / barcodes'},
    {icon: <ListFilter size={16}/>, label: 'Organize by reading status'},
    {icon: <LineChart size={16}/>, label: 'Track currently reading'},
    {icon: <CircleCheck size={16}/>, label: 'Mark books as completed'},
    {icon: <BookCopy size={16}/>, label: 'Manage a personal TBR'},
    {icon: <Shuffle size={16}/>, label: 'Randomly choose what to read next'},
    {icon: <AlignJustify size={16}/>, label: 'Store reading data locally'},
    {icon: <WifiOff size={16}/>, label: 'Offline-first experience'},
];
export const FeaturesSection = () => {
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-space-md'}>
            {features.map((feature, index) => (
                <FeaturesCard key={index} icon={feature.icon} label={feature.label}/>
            ))}
        </div>
    )
}