import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const loans = [
  { bank: 'BPI', name: 'BPI Joint Loan', amount: '₱1,867.01', due: '15th', tone: 'lavender' },
  { bank: 'R', name: 'RCBC Joint Loan', amount: '₱2,254.74', due: '28th', tone: 'peach' },
];
const people = [
  { name: 'Ante', amount: '₱3,000.00', percent: '72.8%', color: '#dfa88b' },
  { name: 'Love', amount: '₱997.01', percent: '24.2%', color: '#b3a5d6' },
  { name: 'Me', amount: '₱124.74', percent: '3.0%', color: '#94bd9b' },
];

function SectionTitle({ title, note }: { title: string; note: string }) {
  return <View style={styles.sectionTitle}><Text style={styles.sectionHeading}>{title}</Text><Text style={styles.sectionNote}>{note}</Text></View>;
}

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9f6" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}><View><Text style={styles.brand}>✿  POCKET PLAN</Text><Text style={styles.kicker}>YOUR MONEY, IN BLOOM</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>M</Text></View></View>
        <View style={styles.greeting}><Text style={styles.date}>SATURDAY, NOVEMBER 14, 2026</Text><Text style={styles.title}>Your money,</Text><Text style={styles.titleAccent}>in balance. ✦</Text><Text style={styles.subtitle}>A little clarity for all the things you’re working toward.</Text></View>
        <View style={styles.metrics}>
          <View style={[styles.metricCard, styles.cardMint]}><Text style={styles.metricLabel}>JOINT OBLIGATION</Text><Text style={styles.metricValue}>₱4,121.75</Text><Text style={styles.metricNote}>2 active loans</Text></View>
          <View style={[styles.metricCard, styles.cardLavender]}><Text style={styles.metricLabel}>MY MONTHLY SHARE</Text><Text style={styles.metricValue}>₱124.74</Text><Text style={styles.metricNote}>Self-funded · target 20th</Text></View>
          <View style={[styles.metricCard, styles.cardPeach]}><Text style={styles.metricLabel}>MONTHLY SALARY</Text><Text style={styles.setup}>Add your salary</Text><Text style={styles.metricNote}>Ready to set up</Text></View>
          <View style={[styles.metricCard, styles.cardCream]}><Text style={styles.metricLabel}>MONTHLY BUDGET</Text><Text style={styles.setup}>Add your budget</Text><Text style={styles.metricNote}>Ready to set up</Text></View>
        </View>
        <SectionTitle title="Loan overview" note="Your shared commitments, at a glance." />
        <View style={styles.panel}>{loans.map((loan, index) => <View key={loan.name} style={[styles.loanRow, index > 0 && styles.rowBorder]}><View style={[styles.bank, loan.tone === 'lavender' ? styles.bankLavender : styles.bankPeach]}><Text style={styles.bankText}>{loan.bank}</Text></View><View style={styles.loanText}><Text style={styles.loanName}>{loan.name}</Text><Text style={styles.smallText}>{loan.bank} · 12 months · due {loan.due}</Text></View><Text style={styles.loanAmount}>{loan.amount}</Text></View>)}<View style={styles.totalRow}><Text style={styles.smallText}>Total monthly obligation</Text><Text style={styles.totalAmount}>₱4,121.75</Text></View></View>
        <SectionTitle title="Coming up" note="Next payment dates." />
        <View style={styles.panel}>{[{ day: '15', bank: 'BPI Joint Loan', amount: '₱1,867.01', color: '#eff2fa' }, { day: '28', bank: 'RCBC Joint Loan', amount: '₱2,254.74', color: '#fbf0e9' }].map((item, i) => <View key={item.day} style={[styles.dueRow, i > 0 && styles.rowBorder]}><View style={[styles.dateTile, { backgroundColor: item.color }]}><Text style={styles.month}>NOV</Text><Text style={styles.day}>{item.day}</Text></View><View style={styles.loanText}><Text style={styles.loanName}>{item.bank}</Text><Text style={styles.smallText}>{i === 0 ? 'In 1 day' : 'In 14 days'}</Text></View><Text style={styles.loanAmount}>{item.amount}</Text></View>)}<Text style={styles.target}>✦  Your personal share target is the 20th.</Text></View>
        <SectionTitle title="Shared contributions" note="Who’s covering what each month." />
        <View style={styles.panel}>{people.map((person, i) => <View key={person.name} style={[styles.personRow, i > 0 && styles.rowBorder]}><View style={[styles.dot, { backgroundColor: person.color }]} /><View style={styles.personText}><Text style={styles.loanName}>{person.name}{person.name === 'Me' ? ' · You' : ''}</Text><Text style={styles.smallText}>{person.percent} of total</Text></View><Text style={styles.personAmount}>{person.amount}</Text></View>)}<View style={styles.totalRow}><Text style={styles.smallText}>Total contributions</Text><Text style={styles.totalAmount}>₱4,121.75</Text></View></View>
        <Text style={styles.footer}>Made for peace of mind  ✿</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f8f9f6' },
  container: { padding: 20, paddingBottom: 36 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 31 },
  brand: { color: '#4e7161', fontSize: 16, fontWeight: '800', letterSpacing: 0.7 },
  kicker: { color: '#a2aaa5', fontSize: 8, letterSpacing: 1.5, marginTop: 4, marginLeft: 26 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#e8dcd7', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#8b6c61', fontSize: 12, fontWeight: '700' },
  greeting: { marginBottom: 22 },
  date: { color: '#9da8a2', fontSize: 9, letterSpacing: 1.1, fontWeight: '700', marginBottom: 10 },
  title: { color: '#283333', fontSize: 29, lineHeight: 34, fontWeight: '700', letterSpacing: -0.8 },
  titleAccent: { color: '#71917f', fontSize: 29, lineHeight: 34, fontWeight: '700', letterSpacing: -0.8 },
  subtitle: { color: '#9ba49f', fontSize: 11, lineHeight: 17, marginTop: 8 },
  metrics: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  metricCard: { width: '48%', minHeight: 114, borderRadius: 14, padding: 14, justifyContent: 'center' },
  cardMint: { backgroundColor: '#e7f2eb' }, cardLavender: { backgroundColor: '#f0edfa' }, cardPeach: { backgroundColor: '#fbede5' }, cardCream: { backgroundColor: '#f3f3eb' },
  metricLabel: { color: '#84928a', fontSize: 8, fontWeight: '700', letterSpacing: 0.7 },
  metricValue: { color: '#30423a', fontSize: 19, fontWeight: '700', marginTop: 12 },
  metricNote: { color: '#84928a', fontSize: 9, marginTop: 7 },
  setup: { color: '#61796b', fontSize: 15, fontWeight: '700', marginTop: 12 },
  sectionTitle: { marginTop: 27, marginBottom: 12 },
  sectionHeading: { color: '#2c3a34', fontSize: 17, fontWeight: '700' },
  sectionNote: { color: '#9ba49f', fontSize: 10, marginTop: 5 },
  panel: { backgroundColor: '#fff', borderColor: '#eef0ec', borderWidth: 1, borderRadius: 14, paddingHorizontal: 13, paddingVertical: 5 },
  loanRow: { minHeight: 64, flexDirection: 'row', alignItems: 'center', gap: 9 },
  rowBorder: { borderTopWidth: 1, borderTopColor: '#f0f2ef' },
  bank: { width: 35, height: 35, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  bankLavender: { backgroundColor: '#f0edfa' }, bankPeach: { backgroundColor: '#fbede5' },
  bankText: { color: '#7f759b', fontSize: 11, fontWeight: '700' },
  loanText: { flex: 1 },
  loanName: { color: '#3d4b44', fontSize: 10, fontWeight: '700' },
  smallText: { color: '#9ba49f', fontSize: 9, marginTop: 5 },
  loanAmount: { color: '#34433b', fontSize: 10, fontWeight: '700' },
  totalRow: { minHeight: 40, borderTopWidth: 1, borderTopColor: '#eef0ec', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  totalAmount: { color: '#34433b', fontSize: 11, fontWeight: '700' },
  dueRow: { minHeight: 61, flexDirection: 'row', alignItems: 'center', gap: 10 },
  dateTile: { width: 38, height: 43, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  month: { color: '#8390a9', fontSize: 7, letterSpacing: 0.5 }, day: { color: '#65728e', fontSize: 15, fontWeight: '700' },
  target: { borderTopWidth: 1, borderTopColor: '#eef0ec', color: '#88958d', fontSize: 9, paddingVertical: 12 },
  personRow: { minHeight: 48, flexDirection: 'row', alignItems: 'center', gap: 9 },
  dot: { width: 9, height: 9, borderRadius: 5 }, personText: { flex: 1 }, personAmount: { color: '#3b4942', fontSize: 10, fontWeight: '700' },
  footer: { color: '#aab1ad', fontSize: 9, textAlign: 'center', marginTop: 24 },
});
