// import React from 'react';
// // import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
// import { NavigationContainer } from '@react-navigation/native';
// // import BottomTabs from './src/navigation/BottomTabs';
// import RootNavigator from './src/navigation/RootNavigator';
// // import RegScanScreen from './src/screens/regScan/RegScanScreen';
// // import SelectAccountTypeScreen from './src/screens/Select';

// const App = () => {
//   return (
//     <>
//       {/* <SelectAccountTypeScreen /> */}
//       <NavigationContainer>
//         {/* <OnboardingScreen /> */}
//         {/* <RegScanScreen /> */}
//         {/* <BottomTabs /> */}
//         <RootNavigator />
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
