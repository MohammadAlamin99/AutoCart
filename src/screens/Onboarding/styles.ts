import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width,
    height,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  content: {
    marginTop: height * 0.12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
    color: '#1F2937',
    marginBottom: 16,
    fontFamily: 'SourceSans3-Regular',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#1F2937',
    maxWidth: '90%',
    fontFamily: 'SourceSans3-Regular',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 6,
    opacity: 0.2,
  },
  activeDot: {
    backgroundColor: '#07B007',
    width: 30,
    opacity: 1,
  },
  nextText: {
    color: '#07B007',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SourceSans3-Regular',
  },
});

export default styles;
