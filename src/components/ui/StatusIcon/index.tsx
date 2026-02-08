import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
    return (
        status === FilterStatus.PENDING ? (
            <CircleDashed size={20} color="#757575" />
        ) : (
            <CircleCheck size={20} color="#2c46b1" />
        )
    )
}