import React from "react";
import { Item } from "../ThisDayInfo"
import { GlobalSvgSelector } from "../../../../../assets/images/icons/global/GlobalSvgSelector"
import s from './ThisDayItem.module.scss'



interface Props {
    item: Item;
}

interface Props {}

export const ThisDayItem = (item: Props) => {
console.log(item)

  return (
    <li className={s.info__item}>
      <GlobalSvgSelector id={item.item.icon_id} />
      <p className={s.item__title}>{item.item.title}</p>
      <p className={s.item__text}>{item.item.description}</p>
    </li>
  );
};
