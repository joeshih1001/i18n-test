import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const Home: FC = () => {
  const params = useParams()
  const {t, i18n} = useTranslation()

  useEffect(() => {
    const lang = params.lang === 'zh-tw' ? 'tw' : 'cn'
    if(lang !== params.lang) i18n.changeLanguage(lang)
  },[params.lang, i18n])

  return (
    <>
      <div className="bg-homePageBanner bg-cover min-h-96 flex justify-center items-center">
        <div className="text-center text-font40w700">
          <p className="text-font65w700">{t('welcome')}</p>
          <p>{t('desc1')}</p>
        </div>
      </div>
    </>
  );
};
