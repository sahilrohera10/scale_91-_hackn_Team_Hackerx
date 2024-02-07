import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { LinearGradient } from 'expo-linear-gradient';

const AnalyticsScreen = () => {
  // Dummy data for pie charts
  const totalSpendingData = [
    { label: 'Spent', value: 500, color: '#FF5733' },
    { label: 'Remaining', value: 1500, color: '#4CAF50' },
  ];

  const categoryData = [
    { label: 'Grocery', value: 300, color: '#3498db' },
    { label: 'Shopping', value: 200, color: '#e74c3c' },
    { label: 'Entertainment', value: 150, color: '#f39c12' },
    { label: 'Others', value: 350, color: '#8e44ad' },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#111', '#004d40']} style={styles.background}>
        <Text style={styles.heading}>Transaction Analytics</Text>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Total Spending</Text>
          <PieChart
            data={totalSpendingData}
            width={250}
            height={250}
            chartConfig={chartConfig}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          {totalSpendingData.map((dataPoint, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: dataPoint.color }]} />
              <Text style={styles.legendLabel}>{`${dataPoint.label}: ${dataPoint.value}`}</Text>
            </View>
          ))}
        </View>

        {/* Category Pie Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Spending by Category</Text>
          <PieChart
            data={categoryData}
            width={300}
            height={300}
            chartConfig={chartConfig}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          {categoryData.map((dataPoint, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: dataPoint.color }]} />
              <Text style={styles.legendLabel}>{`${dataPoint.label}: ${dataPoint.value}`}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  background: {
    padding: 20,
    width:'100%'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  legendLabel: {
    fontSize: 16,
    color: '#fff',
  },
});

export default AnalyticsScreen;
