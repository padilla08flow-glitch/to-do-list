import type{ Props } from "../interfaces/custom-header"
import '../styles/Header.css'

export const CustomHeader = ({titulo}: Props) => {
    return (
        <div className="header-container">
            <div className="header-icon">
                <i className="bi bi-check-lg"></i>
            </div>
            <h1>{titulo}</h1>
        </div>
    )
}