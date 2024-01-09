import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 24,
        backgroundColor: '#131016',
    },

    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FDFCFE',

        marginTop: 48,
        marginBottom: 12,
    },

    eventData: {
        fontSize: 16,
        color: '#6B6B6B',

        marginBottom: 16,
    },

    form: {
        width: '100%',
        marginTop: 36,
        marginBottom: 42,

        flexDirection: 'row',
        gap: 12,
    },

    input: {
        flex: 1,

        height: 56,
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#1F1E25',

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
        backgroundColor: '#31CF67',

        alignItems: 'center',
        justifyContent: 'center',
    },

    listEmptyText: {
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#1F1E25',

        fontSize: 14,
        textAlign: 'center',
        color: '#6B6B6B',
    },
})
