import styles from '@/public/assets/scss/pages/home.module.scss'
import LatestAnnouncements from '@/app/components/LatestAnnouncements';
const getLatestAnnouncements = async() => {
  const res = await fetch(`${process.env.API}/annonces`);
  const data = await res.json();
  return data.splice(0,3)
}

export default async function Home() {
  const latestAnnouncements = await getLatestAnnouncements();
  return (
    <main className={styles.home}>
      Home
      <LatestAnnouncements
        data={latestAnnouncements}
      />
    </main>
  );
}
