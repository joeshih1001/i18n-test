import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  const {t} = useTranslation()
  return (
    <div className="flex justify-center items-center py-2">
      <div className="flex gap-12">
        <Link to="/">{t('back')}</Link>
      </div>
    </div>
  );
};
