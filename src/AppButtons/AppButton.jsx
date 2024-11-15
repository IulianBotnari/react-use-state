import Style from './StyleButton.module.css'

export default function AppButton({ language, onClick, isSelected }) {
    return (
        <button onClick={onClick}
            className={isSelected ? Style.btn_var : Style.btn}>
            {language.title}
        </button>
    )
}
