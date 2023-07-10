import Padding from '@/app/components/padding';

export default function page({ params }) {
  return <Padding>{params.slug} products</Padding>;
}
