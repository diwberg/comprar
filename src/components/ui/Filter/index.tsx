import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type FilterProps = TouchableOpacityProps & {
    status: FilterStatus;
    isActive: boolean;
}

export function Filter({ status, isActive, ...rest }: FilterProps) {
    return (
        <TouchableOpacity
            {...rest}
            style={[styles.container, { opacity: isActive ? 1 : 0.3 }]}
            activeOpacity={0.8}
        >
            <StatusIcon status={status} />
            <Text style={styles.title}>
                {status === FilterStatus.PENDING ? 'Pendentes' : 'Comprados'}
            </Text>
        </TouchableOpacity>
    )
}