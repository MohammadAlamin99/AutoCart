import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#F9FAFB',
    backgroundColor: '#F9FAFB',
  },

  headerTitle: {
    fontSize: 20,
    color: '#1F2937',
    fontWeight: '600',
  },

  clearText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '400',
  },

  content: {
    padding: 16,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
    fontWeight: '400',
    color: '#1F2937',
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    justifyContent: 'center',
  },

  placeholder: {
    color: '#9CA3AF',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  halfInput: {
    width: '48%',
    height: 48,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  footer: {
    padding: 16,
  },

  applyButton: {
    backgroundColor: '#07B007',
    height: 52,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
