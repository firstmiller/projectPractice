import React from "react";
import { useState } from 'react';

import Header from '../Components/Header/Header';


function MainPage() {
    const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header/>
        </div>
  );
};

export default MainPage;