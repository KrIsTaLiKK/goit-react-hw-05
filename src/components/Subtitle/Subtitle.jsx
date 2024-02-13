import css from './Subtitle.module.css';

export const Subtitle = ({ children }) => {
  return <h2 className={css.subtitle}>{children}</h2>;
};
