import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export const Home = () => {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    const handleAddNewParticipant = () => {
        if (participants.includes(participantName)) {
            Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
            setParticipantName('')

            return
        }

        setParticipants((state) => [...state, participantName])
        setParticipantName('')
    }

    const handleRemoveParticipant = (name: string) => {
        Alert.alert('Remover', `Deseja realmente remover o participante ${name}?`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants((state) => {
                        return state.filter((participant) => {
                            return participant !== name
                        })
                    })
                },
            },
        ])
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.eventName}> Nome do evento </Text>
                <Text style={styles.eventData}> Sexta, 23 de Junho de 2023 </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    value={participantName}
                    onChangeText={(text) => setParticipantName(text)}
                />

                <TouchableOpacity disabled={!participantName} style={styles.button} onPress={handleAddNewParticipant}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>

            {/*
             * Formas de se trabalhar com listas (FlatList ou ScrollView)
             * As duas formas, fazem barra de rolagem quando os elementos listados são maiores do que a tela suporta.
             * ScrollView - Renderiza todos os elementos de uma vez.
             * ScrollView - Menos performatica e recomendada para listas pequenas, por exemplo, itens de um menu.
             * FlatList - Mais performatica e recomendada para listas grandes.
             *
             */}

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.length > 0 && participants.map((part) => {
                    return (
                        <Participant
                            key={part}
                            name={part}
                            onRemove={() => handleRemoveParticipant(part)}
                        />
                    )
                })}
            </ScrollView> */}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Participant key={item} name={item} onRemove={() => handleRemoveParticipant(item)} />}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}> Ninguém chegou ainda? Adicione participantes ao seu evento </Text>
                )}
            />
        </View>
    )
}
