import Dice from "/src/assets/icon-dice.svg";
import PatternDividerDesktop from "/src/assets/pattern-divider-desktop.svg";
import PatternDividerMobile from "/src/assets/pattern-divider-mobile.svg";

const icons = {
    dice: Dice,
    patternDividerDesktop: PatternDividerDesktop,
    patternDividerMobile: PatternDividerMobile,
};

export default function Icon({ name, style }) {
    return <img src={icons[name]} alt={name} className={style} />;
}
