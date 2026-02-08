import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: 62,
    },
    form: {
        width: '100%',
        gap: 10,
        marginTop: 34,
        paddingHorizontal: 16,
    },
    logo: {
        width: 134,
        height: 34,
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#202020',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        marginTop: 24,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e6ec',
        paddingBottom: 12,
    },
    clearButton: {
        marginLeft: 'auto',
    },
    clearText: {
        color: '#828282',
        fontSize: 12,
        fontWeight: 600
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#e4e6ec',
        opacity: 0.2,
        marginVertical: 14,
    },
    listContent: {
        paddingTop: 24,
        paddingBottom: 62,
    },
    emptyText: {
        color: '#828282',
        fontSize: 14,
        textAlign: 'center',
    },
});