import Style from './StyleAppCard.module.css'

export default function AppCard({ language }) {
    if (!language) {
        return (
            <div className={Style.card}>
                Nessun linguaggio selezionato
            </div>
        );
    }

    return (
        <div className={Style.card}>
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    )
}


