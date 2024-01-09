import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        paddingLeft: 16,
        borderRadius: 5,
        backgroundColor: '#1F1E25',

        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    name: {
        flex: 1,

        fontSize: 16,
        color: '#FFFFFF',
    },

    buttonText: {
        fontSize: 32,
        color: '#FFFFFF',
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',

        alignItems: 'center',
        justifyContent: 'center',
    },
})
