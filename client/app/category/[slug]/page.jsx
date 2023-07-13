import Padding from '@/app/components/page-padding';

export default function page({ params }) {
  return <Padding>{params.slug} products</Padding>;
}
