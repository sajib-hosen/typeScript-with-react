import React from 'react';
import './App.css';
import AppForAdvProps from './Components/advProps02/AppForAdvProps';
import AppEventProps from './Components/eventProps03/AppEventProps';
import AppForProps from './Components/props01/AppForProps';
import AppStyleProps from './Components/stypeProps4/AppStyleProps';


function App() {
  return (
    <div className="App">

      {/* This is for basic Props, video 1-4   */}
      <p>basic Props</p>
      <AppForProps />  

      {/*This is for Advance Props video 5*/}
      <p>Advance Props</p>
      <AppForAdvProps /> 

      {/*This is for Event Props video 6*/}
      <p>Event Props</p>
      <AppEventProps />

      {/* This is for Style Props  */}
      <p>Style Props</p>
      <AppStyleProps />

      
    </div>
  );
} 

export default App;

{/* https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5 */}