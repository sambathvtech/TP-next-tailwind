import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='p-4 pt-2'>{`Home, ${t('title')}`}</div>
    </div>
  );
}
