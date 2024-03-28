import s from "./Popup.module.scss";
import { GlobalSvgSelector } from "../../../assets/images/icons/global/GlobalSvgSelector";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../Home/components/ThisDayInfo/ThisDayItem/ThisDayItem";

interface Props {
  items: Item[];
}

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temperature",
      title: "Температура",
      description: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",

      title: "Давление",
      description: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "humidity",
      title: "Осадки",
      description: "Без осадков",
    },
    {
      icon_id: "wind",
      title: "Ветер",
      description: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={s.popup__background}>
      <section className={s.popup}>
        <div className={s.this__day_info}>
          <ul className={s.this__day_info_items}>
            {items.map((item: Item) => {
              return <ThisDayItem item={item} />;
            })}
          </ul>
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id={'rain'} />
        </div>
      </section>
    </div>
  );
};
