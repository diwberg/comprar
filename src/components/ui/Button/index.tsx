import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...props }: ButtonProps) {
    return (
        <TouchableOpacity {...props} style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}