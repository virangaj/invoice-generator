import dynamic from 'next/dynamic'

export default async function Home() {
  const DynamicHeader = dynamic(() => import('@/components/invoice/Invoice'), {
    loading: () => <p>Loading...</p>,
  })
  return (
    <main>
      <DynamicHeader />
    </main>
  );
}
