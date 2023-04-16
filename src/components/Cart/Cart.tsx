import React from 'react';
import styles from './Cart.module.scss';
import data from './cartData.json';

export const Cart: React.FC = () => {
  
  return (
    <div className={styles.cart_container}>
      <div className={styles.wrapper}>
        <ul>
          {data.map((elm, idx) => (
            <li key={idx}>
              <a href='#'>
                <div className={styles.carts_wrapper}>
                  <div className={styles.cart}>
                    <div className={styles.image_section}>
                      <div className={styles.image_div}>
                        <img src={elm.imageUrl} alt={elm.title} />
                        <div className={styles.hover_div}>
                          <div className={styles.up_hov}>
                            <div className={styles.icons}>
                              <img src='/save.svg' alt='save' />
                              <div className={styles.icons_abs_1}>Смотреть позже</div>
                            </div>
                            <div className={styles.icons_2}>
                              <img src='/magic.svg' alt='magic' />
                              <div className={styles.icons_abs_1}>Похожее</div>
                            </div>
                            <div className={styles.icons_3}>
                              <img src='/star.svg' alt='star' />
                              <div className={styles.icons_abs_1}>Уже смотрел оценить</div>
                            </div>
                            <div className={styles.icons_4}>
                              <img src='circle-off.svg' alt='cancel' />
                              <div className={styles.icons_abs_1}>Не нравится такое</div>
                            </div>
                          </div>
                          <div className={styles.down_hov}>
                            <div className={styles.section_0}>
                              <div className={styles.section_0_left}>
                                <span className={styles.big_s}>{elm.rating.toString()[0]}</span>
                                <span className={styles.small_s}>
                                  <span>{elm.rating.toString()[1].replace('.', ',')}</span>
                                  {elm.rating.toString()[2]}
                                </span>
                              </div>
                              <div className={styles.section_0_right}>
                                <div className={styles.child}>
                                  <div className={styles.child_rating_1}></div>
                                </div>
                                <div className={styles.child}>
                                  <div className={styles.child_rating_2}></div>
                                </div>
                                <div className={styles.child}>
                                  <div className={styles.child_rating_2}></div>
                                </div>
                                <div className={styles.child}>
                                  <div className={styles.child_rating_3}></div>
                                </div>
                              </div>
                            </div>

                            <div className={styles.section_1}>
                              <span>{elm.typesS}</span>
                              <div className={styles.section_1_rating}>
                                <div></div>
                              </div>
                            </div>
                            <div className={styles.section_2}>
                              <p>
                                {elm.yearIssue},{elm.country}
                              </p>
                              <p>{elm.genre}</p>
                            </div>
                            <div className={styles.section_2_child}>
                              <p>{elm.duration} минуты</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.text_section}>
                      <div className={styles.title_div}>
                        {elm.title.length > 17 ? (
                          <span>{elm.title.slice(0, 16) + '...'}</span>
                        ) : (
                          <span>{elm.title}</span>
                        )}
                      </div>
                      {elm.types === 0 ? (
                        <div className={styles.types_div}>
                          <span>Подписка</span>
                        </div>
                      ) : (
                        <div className={styles.types_div_2}>
                          <span>Бесплатно</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

