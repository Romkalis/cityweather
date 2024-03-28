import { Item } from "../ThisDayInfo"
import { GlobalSvgSelector } from "../../../../../assets/images/icons/global/GlobalSvgSelector"
import s from './ThisDayItem.module.scss';



interface Props {
    item: Item;
}

interface Props {}

export const ThisDayItem = (item: Props) => {
 const {icon_id, title, description} = item.item;

  return (
    <li className={s.info__item}>
      <GlobalSvgSelector id={icon_id} />
      <p className={s.item__title}>{title}</p>
      <p className={s.item__text}>{description}</p>
    </li>
  );
};
