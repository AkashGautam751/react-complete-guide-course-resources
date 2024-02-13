export default function TabButton({children, OnSelect, isSelected}) {
    return (
        <li>
        <button className={isSelected ? "active" : undefined} onClick={OnSelect}>{children}</button>
    </li>
    );
}