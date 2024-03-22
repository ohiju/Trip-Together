// import React, {useState} from 'react';
// import {Text, StyleSheet, TouchableOpacity} from 'react-native';
// import DraggableFlatList, {
//   ScaleDecorator,
//   RenderItemParams,
// } from 'react-native-draggable-flatlist';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// export default function Basic() {
//   const initialData = [
//     {
//       text: '1',
//       key: '1',
//     },
//     {
//       text: '2',
//       key: '2',
//     },
//     {
//       text: '3',
//       key: '3',
//     },
//   ];
//   const [data, setData] = useState(initialData);

//   const renderItem = ({item, drag, isActive}: RenderItemParams<any>) => {
//     return (
//       <ScaleDecorator>
//         <TouchableOpacity
//           activeOpacity={1}
//           onLongPress={drag}
//           disabled={isActive}
//           style={[
//             styles.rowItem,
//             {backgroundColor: isActive ? 'red' : item.backgroundColor},
//           ]}>
//           <Text>123</Text>
//         </TouchableOpacity>
//       </ScaleDecorator>
//     );
//   };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <DraggableFlatList
//         data={data}
//         onDragEnd={({data}) => setData(data)}
//         keyExtractor={item => item.key}
//         renderItem={renderItem}
//       />
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   rowItem: {
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   text: {
//     color: 'black',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
