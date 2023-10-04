import FooterContent from "@/components/FooterContent";
import OurMethodView from "@/components/views/OurMethodView";

export default function OurMethodTab({ params: {id} }: { params: { id: '1' | '2' | '3' | '4' | '5' } }) {
  
  return (
    <>
      <OurMethodView tab={id} />
      <FooterContent />
    </>
  );
};

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}

export const dynamic = 'force-static';