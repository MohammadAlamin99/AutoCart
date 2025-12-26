import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f3f4f5ff',
  },
  topBar: {
    height: 60,
    backgroundColor: '#f3f4f5ff',
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
    width: 261,
    height: 210,
    marginTop: 64,
    marginInline: 'auto',
    marginBottom: 48,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 600,
    paddingInline: 16,
    maxWidth: 320,
    marginInline: 'auto',
    paddingBottom: 64,
  },
  button: {
    backgroundColor: '#07B007',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginInline: 'auto',
    marginLeft: 16,
    marginRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
  },
  buttonContainer:{
   display:'flex',
   gap:16,
  },
  secondayButton:{
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginInline: 'auto',
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#07B007',
  },
  secondayButtonText: {
    color: '#07B007',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
  }
  
});
