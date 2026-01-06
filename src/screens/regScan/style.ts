import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#021222ff',
    flex: 1,
  },

  topBar: {
    height: 60,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  title: {
    color: '#1F2937',
    fontSize: 20,
    fontWeight: '600',
  },

  image: {
    width: '100%',
    marginTop: 64,
    marginBottom: 48,
    alignSelf: 'center',
  },

  paragraph: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    maxWidth: 320,
    alignSelf: 'center',
    marginBottom: 64,
  },

  buttonContainer: {
    marginHorizontal: 16,
  },

  button: {
    backgroundColor: '#07B007',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  secondayButton: {
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#07B007',
  },

  secondayButtonText: {
    color: '#07B007',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
