// // useCurrentLocation.js
// import {useState, useEffect} from 'react';
// import Geolocation from '@react-native-community/geolocation';

// const useCurrentLocation = () => {
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getCurrentLocation = () => {
//       Geolocation.getCurrentPosition(
//         position => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         error => {
//           setError(error.message);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 20000,
//           maximumAge: 1000,
//         },
//       );
//     };

//     getCurrentLocation();

//     const watchId = Geolocation.watchPosition(
//       position => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       error => {
//         setError(error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         distanceFilter: 10,
//         interval: 10000,
//         fastestInterval: 5000,
//       },
//     );

//     return () => {
//       Geolocation.clearWatch(watchId);
//     };
//   }, []);

//   return {location, error};
// };

// export default useCurrentLocation;
