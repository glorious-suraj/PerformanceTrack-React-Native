import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const MetricsChart = ({ data }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Text style={styles.chartTitle}>Performance Metrics Chart</Text>
            <BarChart
                data={{
                    labels: ['Strength', 'Speed'],
                    datasets: [{ data: [data.strength, data.speed] }],
                }}
                width={screenWidth * 0.9}
                height={250}
                yAxisSuffix=" kg"
                showBarTops={false}
                withInnerLines={true}
                fromZero={true}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#e6e6fa',
                    decimalPlaces: 1,
                    barPercentage: 0.6,
                    fillShadowGradient: '#1c77ff',
                    fillShadowGradientOpacity: 0.8,
                    color: (opacity = 1) => `rgba(28, 119, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={styles.chart}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        color: 'gray',
    },
    chart: {
        borderRadius: 15,
    },
});

export default MetricsChart;
