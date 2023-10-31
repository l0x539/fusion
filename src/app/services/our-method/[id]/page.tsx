export default function OurMethodP({ params: {slug} }: { params: { slug: 'discovery' | 'development' | 'team' | 'design' | 'services' } }) {
  
  return (
    <></>
  );
};

export function generateStaticParams() {
  return [
    { slug: '1' },
    { slug: '2' },
    { slug: '3' },
    { slug: '4' },
    { slug: '5' },
  ]
}

export const dynamic = 'force-static';