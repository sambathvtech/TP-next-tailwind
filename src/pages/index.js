import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div>{`Home, ${t('title')}`}</div>
    </div>
  );
}
