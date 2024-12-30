import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MetricsChart from '../components/MetricsChart';

const PerformanceMetricsScreen = () => {
    const [strength, setStrength] = useState('');
    const [speed, setSpeed] = useState('');
    const [metrics, setMetrics] = useState({ strength: 0, speed: 0 });

    useEffect(() => {
        const loadMetrics = async () => {
            try {
                const storedMetrics = await AsyncStorage.getItem('metrics');
                if (storedMetrics) {
                    setMetrics(JSON.parse(storedMetrics));
                }
            } catch (error) {
                console.error('Failed to load metrics:', error);
            }
        };
        loadMetrics();
    }, []);

    const saveMetrics = async () => {
        if (!strength || !speed || isNaN(strength) || isNaN(speed)) {
            Alert.alert('Error', 'Please enter valid numeric values.');
            return;
        }

        const data = { strength: parseFloat(strength), speed: parseFloat(speed) };
        try {
            await AsyncStorage.setItem('metrics', JSON.stringify(data));
            setMetrics(data);
            Alert.alert('Success', 'Metrics saved!');
        } catch (error) {
            console.error('Failed to save metrics:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Performance Metrics</Text>

            <Text style={styles.label}>Maximum Strength</Text>
            <TextInput
                style={styles.input}
                placeholder="Max Strength (e.g., 100)"
                keyboardType="numeric"
                value={strength}
                onChangeText={setStrength}
            />

            <Text style={styles.label}>Maximum Speed</Text>
            <TextInput
                style={styles.input}
                placeholder="Max Speed (e.g., 20)"
                keyboardType="numeric"
                value={speed}
                onChangeText={setSpeed}
            />

            <TouchableOpacity style={styles.btn} onPress={saveMetrics}>
                <Text style={styles.btnText}>Save Metrics</Text>
            </TouchableOpacity>
            <MetricsChart data={metrics} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'gray',
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        padding: 14,
        marginBottom: 15,
    },
    btn:{
        backgroundColor: '#3DC9A9',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20
    },
    btnText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    }
});

export default PerformanceMetricsScreen;
