import { useState } from 'react'
import './App.css'
import AppButton from './AppButtons/AppButton'
import AppCard from './AppCard/AppCard'
import Languages from './db/languages'

function App() {
  const [language, setLanguage] = useState(null)



  function handleClick(languageEL) {
    if (language === languageEL) {

      setLanguage(null);
    } else {

      setLanguage(languageEL);
    }
  }

  return (
    <div>
      <h1>Learn Web Development</h1>
      <div className="button-container">
        {Languages.map((languageEL, index) => (
          <AppButton
            key={languageEL.id}
            language={languageEL}
            dataindex={index}
            onClick={() => handleClick(languageEL)}
            isSelected={language?.id === languageEL.id}
          />
        ))}
      </div>

      <AppCard language={language} />
    </div>
  );
}
export default App
