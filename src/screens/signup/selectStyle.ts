import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },

  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },

  cardSelected: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  frame: {
    width: 42,
    height: 42,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },

  cardSub: {
    fontSize: 12 ,
    color: '#111827',
    marginTop: 4,
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22C55E',
  },

  /* NEW: expanded trade info box */
  expandedBox: {
    marginTop: 14,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#E8FFF1',
  },

  expandedItem: {
    fontSize: 13,
    color: '#166534',
    marginBottom: 8,
  },

  infoBox: {
    marginTop: 10,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  infoText: {
    fontSize: 14,
    color: '#374151',
  },

  button: {
    marginTop: 'auto',
    height: 52,
    borderRadius: 12,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#A7F3D0',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
