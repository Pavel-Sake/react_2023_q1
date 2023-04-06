import React, { FC } from "react";
import { ICharacterCard } from "../../../interfaces/ICharacterCard";
import styles from "./styles.module.css";

type MyProps = {
  data: ICharacterCard;
  changeCardState: () => void;
};

const ItemProductExtended: FC<MyProps> = ({ data, changeCardState }) => {
  const { image, name, status, gender, species, origin, episode } = data;

  function getAllEpisodes(arr: string[]) {
    return arr.map((episode) => {
      const reg = new RegExp(/[0-9]+/);

      const episodeNumber = reg.exec(episode);

      if (episodeNumber) {
        return episodeNumber[0];
      }
    });
  }

  const episodesNumber = getAllEpisodes(episode);

  function handleClickCardState(e: React.SyntheticEvent<EventTarget>) {
    const target = e.target;
    const currentTarget = e.currentTarget;

    if (target === currentTarget) {
      changeCardState();
    }
  }

  return (
    <div className={styles.cardOverlay} onClick={handleClickCardState}>
      <div className={styles.card}>
        <div className={styles.card__block_left}>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.name}>{name}</div>
          <div className={styles.text}>{`Gender: (${gender})`}</div>
          <div className={styles.text}>{`Status: (${status})`}</div>
          <div className={styles.text}>{`Species: (${species})`}</div>
          <div className={styles.text}>{`Location: ${origin.name}`}</div>
        </div>
        <div className={styles.card__block_right}>
          {episodesNumber.map((number, index) => {
            return (
              <div
                className={styles.item_episode}
                key={index}
              >{`Episode: №${number}`}</div>
            );
          })}
        </div>
        <button className={styles.button} onClick={handleClickCardState}>
          close
        </button>
      </div>
    </div>
  );
};

export { ItemProductExtended };
