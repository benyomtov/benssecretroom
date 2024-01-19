// import React, { useState } from 'react';
// import CheckBox from 'expo-checkbox';
// import { View, StyleSheet } from 'react-native';

// const LandingPage = () => {

//     const [isSelected, setSelection] = useState(false);

//   const renderCheckBoxes = () => {
//     const rows = 7;
//     const columns = 4;
//     const checkboxes = [];

//     for (let i = 0; i < rows; i++) {
//       const rowCheckboxes = [];
//       for (let j = 0; j < columns; j++) {
//         rowCheckboxes.push(
//           <CheckBox
//             key={`${i}-${j}`}
//             style={[styles.checkbox]}
//             value={isSelected}
//             onValueChange={setSelection}
//           />
//         );
//       }
//       checkboxes.push(
//         <View key={i} style={styles.checkboxRow}>
//           {rowCheckboxes}
//         </View>
//       );
//     }

//     return checkboxes;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.checkboxcontainer}>{renderCheckBoxes()}</View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   checkboxRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     margin: 10,
//   },
//   checkbox: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     shadowColor: 'black',
//     shadowOpacity: 0.7,
//     shadowRadius: 5,
//     shadowOffset: {
//       height: 1,
//       width: 1,
//     },
//     borderWidth: 2,
//     borderColor: '#FF00FF',
//   },
//   checkboxcontainer: {
//     flex: 2,
//     width: '100%',
//     justifyContent: 'flex-end',
//     marginBottom: 30,
//   },
// });

// export default LandingPage;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

const LandingPage = () => {
  const [isChecked, setIsChecked] = useState([]);

//   useEffect(() => {
//     const initializeCheckedState = () => {
//       const rows = 7;
//       const columns = 4;
//       const initialCheckedState = Array.from({ length: rows }, () =>
//         Array(columns).fill(false)
//       );
//       setIsChecked(initialCheckedState);
//     };

//     initializeCheckedState();
//   }, []);

useEffect(() => {
    const initializeCheckedState = () => {
      const rows = 7;
      const columns = 4;
      const initialCheckedState = Array.from({ length: rows }, () =>
        Array(columns).fill(false)
      );
      setIsChecked(initialCheckedState);
    };
  
    initializeCheckedState();
  }, [setIsChecked]);

  const handleCheckboxPress = (row, col) => {
    const updatedState = [...isChecked];
    updatedState[row][col] = !updatedState[row][col];
    setIsChecked(updatedState);
  };

  const renderCheckBoxes = () => {

    if (isChecked.length === 0) {
        return null;
    }

    const rows = 7;
    const columns = 4;
    const checkboxes = [];

    for (let i = 0; i < rows; i++) {
      const rowCheckboxes = [];
      for (let j = 0; j < columns; j++) {
        rowCheckboxes.push(
          <CheckBox
            key={`${i}-${j}`}
            style={[
              styles.checkbox,
              { backgroundColor: isChecked[i][j] ? 'lightblue' : 'white' },
            ]}
            value={isChecked[i][j]}
            onValueChange={() => handleCheckboxPress(i, j)}
          />
        );
      }
      checkboxes.push(
        <View key={i} style={styles.checkboxRow}>
          {rowCheckboxes}
        </View>
      );
    }

    return checkboxes;
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['green', 'orange']} style={styles.container}>
        <View style={styles.checkboxcontainer}>{renderCheckBoxes()}</View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  checkbox: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderWidth: 2,
    borderColor: '#FF00FF',
  },
  checkboxcontainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

export default LandingPage;
