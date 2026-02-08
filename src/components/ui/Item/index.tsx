import { Text, TouchableOpacity, View } from "react-native";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
import { Trash2 } from "lucide-react-native";

type ItemProps = {
    id: string;
    status: FilterStatus;
    description: string;
}

type Props = {
    data: ItemProps;
    onChangeStatus: () => void;
    onRemove: () => void;
}

export function Item({ data, onChangeStatus, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onChangeStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8} onPress={onChangeStatus}>
                <Text style={styles.description}>{data.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
                <Trash2 color="#828282" size={18} />
            </TouchableOpacity>
        </View>
    );
}